import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import state from "../hooks/store";
import axios, { AxiosResponse } from "axios";
const Fav = () => {
  const snap = useSnapshot(state);

  const getData = async () => {
    try {
      const url = `http://localhost:4000/api/books/get/favorite`;
      const res = await axios.post(url, {
        userID: snap.userid,
      });
      console.log(res);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  });

  return <div>Fav: {snap.userid}</div>;
};

export default Fav;

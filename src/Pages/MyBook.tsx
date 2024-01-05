import React from "react";
import Login from "../Components/auth/Login";
import Signup from "../Components/auth/Signup";
import Button from "@mui/material/Button";
import Fav from "../Components/Fav";
import { snapshot, useSnapshot } from "valtio";
import state from "../hooks/store";

const MyBook = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <div className="text-[5rem] m-10 textGradient font-extrabold">
        MyBook's
      </div>
      <p className="flex flex-row items-center justify-center">
        <Login />
        <Signup />
        <Button
          onClick={async () => {
            await localStorage.removeItem("user id");
            state.isAuth = false;
          }}
          variant="contained"
          style={{
            height: "2.3rem",
            backgroundColor: "#7b09d2",
          }}
        >
          Logout
        </Button>
      </p>
      {snap.isAuth && <Fav />}
    </>
  );
};

export default MyBook;

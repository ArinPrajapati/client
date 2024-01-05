import { proxy } from "valtio";

const state = proxy({
  userid: localStorage.getItem("user id") || null,
  isAuth: false,
});

export default state;

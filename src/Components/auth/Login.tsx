import React from "react";
import Box from "@mui/material/Box";
import { Button, Modal, Typography } from "@mui/material";
import axios from "axios";
import state from "../../hooks/store";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      });

      const res = await axios.post("http://localhost:4000/api/user/login", {
        email: data.get("email"),
        password: data.get("password"),
      });

      console.log(res);
      localStorage.setItem("user id", res.data.user._id);
      state.isAuth = true;
      handleClose();
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{ margin: "1rem", backgroundColor: "#7b09d2" }}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className="text-[#7b09d2] text-[3rem]">Loign</span>
          </Typography>
          <form className="flex flex-col " onSubmit={handleSubmit}>
            <label htmlFor="email" className="mt-2 ">
              Email
            </label>
            <input
              className="my-2 p-3 outline-none border-2"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <label htmlFor="password" className="mt-2">
              Password
            </label>
            <input
              className="my-2 p-3 border-2 outline-none"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                marginTop: "1rem",
                padding: "0.5rem",
                backgroundColor: "#7b09d2",
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;

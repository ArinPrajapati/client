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
const Signup = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const res = await axios.post("http://localhost:4000/api/user/signup", {
        email: data.get("email"),
        password: data.get("password"),
        name: data.get("Name"),
      });
      console.log(res);
      localStorage.setItem("user id", res.data.user._id);
      state.isAuth = true;
    } catch (error: any) {
      console.log(error.response.data.message);
    }
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      Name: data.get("Name"),
    });
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{ margin: "1rem", backgroundColor: "#7b09d2" }}
      >
        Sign UP
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className="text-[#7b09d2] text-[3rem]">Sign UP</span>
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
            <label htmlFor="Name" className="mt-2 ">
              Name
            </label>
            <input
              className="my-2 p-3 outline-none border-2"
              type="text"
              name="Name"
              id="Name"
              placeholder="Enter your Name"
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

export default Signup;

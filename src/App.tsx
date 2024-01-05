import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainSearch from "./Pages/MainSearch";
import Books from "./Pages/Books";
import "./App.css";
import Footer from "./Components/Footer";
import MyBook from "./Pages/MyBook";
import Error from "./Pages/Error";

const App = () => {
  return (
    <div className="w-screen overflow-clip">
      <Router>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/books/:query" element={<Books />} />
          <Route path="/mybooks" element={<MyBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;

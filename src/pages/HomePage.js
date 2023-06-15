import React from "react";
import Navbar from "../features/navbar/Navbar";
import LoginPage from "./LoginPage";

const HomePage = () => {
  return (
    <>
    <div>
        {/* we pass the LoginPage to show the Navbar on the loginpage */}
      <Navbar>
      <div>HomePage</div>
        {/* <Login/> */}
        <LoginPage/>
      </Navbar>
    </div>
    </>
  );
};

export default HomePage;

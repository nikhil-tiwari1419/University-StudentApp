import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout";
import Header from "./started";
import Signin from "./Signin";
import Signup from "./Signup";
import ForgotPass from "./ForgotPass";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Myinfo from "./pages/Components/Myinfo";
import PrivacyPolicy from "./pages/Components/privacyPolicy";
import Wallet from "./pages/Components/Wallet";
import Help from "./pages/Components/Help";
import ChangePass from "./pages/Components/ChangePass";
import AboutUs from "./pages/Components/AboutUs";
import View from "./pages/Components/View";



function App() {

  return (
    <BrowserRouter basename="/University-StudentApp">
      <Routes>
        {/* get started page hai ye  */}
        <Route path="/" element={<Header />} />
        {/* Sign up page */}
        <Route path="/Signup" element={<Signup />} />
        {/* login page */}
        <Route path="/Signin" element={<Signin />} />
        {/* forgot password  */}
        <Route path="/ForgotPass" element={<ForgotPass />} />


        {/* Main app Routes */}
        <Route path="/App" element={<MainLayout />}>
          <Route path="Home" element={<Home />} />
          <Route path="Search" element={<Search />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Myinfo" element={<Myinfo />} />
         <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="Wallet" element={<Wallet />} />
          <Route path="Help" element={<Help />} />
          <Route path="ChangePass" element={<ChangePass />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="View" element={<View/>}/>
        </Route>
      </Routes>
    </ BrowserRouter>
  );
}

export default App;

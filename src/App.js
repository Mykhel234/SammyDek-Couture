import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import Register from "./Components/Register";
import LogIn from "./Components/LogIn";
import AboutUs from "./Components/AboutUs";
import Male from "./Components/Male";
import Female from "./Components/Female";
import Couples from "./Components/Couples";
import Hero from "./Components/Hero";
import Intergrity from "./Components/Intergrity";
import Catalogue from "./Components/Catalogue";
import Collections from "./Components/Collections";
import Training from "./Components/Training";
import Footer from "./Components/Footer";
import Trending from "./Components/Trending";
import SignUp from "./SignUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Male" element={<Male />} />
          <Route path="/Female" element={<Female />} />
          <Route path="/Couples" element={<Couples />} />
          <Route path="/intergrity" element={<Intergrity />} />
          <Route path="/training" element={<Training />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/trending" element={<Trending />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route
            path="/hsgfissusvndshdsfbfjwirt6343918887ty3jgndjforyhwkjs/login/admin"
            element={<LogIn />}
          />
          <Route
            path="/hsgfissusvndshdsfbfjwirt6343918887ty3jgndjforyhwkjs/register/admin"
            element={<Register />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

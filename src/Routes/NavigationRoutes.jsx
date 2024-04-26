import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Level2 } from "../game/pages/level_2/Level2";

import Login from "../game/pages/Login/Login";
import { Level3 } from "../game/pages/level_3/Level3";
// import OtherProtectedRoutes from "./OtherRoutes/OtherRoutes";
// import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";


export const NavigationRoutes = () => {

  const text = "Estacion Planetaria 2";
  const text1 = "Estacion Planetaria 3";

  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Level2" element={<Level2 text={text} />} />
            <Route exact path="/Level3" element={<Level3 text={text1}  />} />
          </Route>
          {/* <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Dashboard />} />
            
          </Route> */}
        </Routes>
      </Router>
    </>
  );
};

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../game/pages/Login/Login";

import { Level1 } from "../game/pages/level_1/Level1";
import { Level2 } from "../game/pages/level_2/Level2";
import { Level3 } from "../game/pages/level_3/Level3";
import { Level4 } from "../game/pages/level_4/Level4";

// import OtherProtectedRoutes from "./OtherRoutes/OtherRoutes";
// import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const NavigationRoutes = () => {

  const main_text_l1 = "Orbitronix SOM-2";
  const main_text_l2 = "GalacticMaze JR-3";

  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Level1" element={<Level1 text={main_text_l1} position={[1.3, 1.2, -5.4]} size={0.3} />} />
            <Route exact path="/Level2" element={<Level2 text={main_text_l1} position={[1.3, 1.2, -5.4]} size={0.3} />} />
            <Route exact path="/Level3" element={<Level3 text={main_text_l2} position={[18, 4, 48]} size={2} rotation={[0, 97.35, 0]} />}  />
            <Route exact path="/Level4" element={<Level4 text={main_text_l2}  />} />
          </Route>
          {/* <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Dashboard />} />
            
          </Route> */}
        </Routes>
      </Router>
    </>
  );
};

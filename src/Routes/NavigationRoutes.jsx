import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../game/pages/Login/Login";

import { Level1 } from "../game/pages/level_1/Level1";
import { Level2 } from "../game/pages/level_2/Level2";
import { Level3 } from "../game/pages/level_3/Level3";
import { Level4 } from "../game/pages/level_4/Level4";
import { MainLayaout } from "../game/layouts/MainLayaout";
import Menu from "../game/layouts/Menu";

// import OtherProtectedRoutes from "./OtherRoutes/OtherRoutes";
// import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const NavigationRoutes = () => {

  const main_text_l1 = "Eterna Celestia FAO-1";
  const main_text_l2 = "Orbitronix SOM-2";
  const main_text_l3 = "GalacticMaze JR-3";
  const main_text_l4 = "Obsidian Abyss MFCF-4";

  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/test" element = {<Menu/>} />
            <Route exact path="/Level1" element={<Level1 text={main_text_l1} position={[0, 2, 3.5]} positionAvatar={[0, 2, 0]} size={0.3} rotation={[0, 97.40, 0]} />}  />
            <Route exact path="/Level2" element={<Level2 text={main_text_l2} position={[30, 2, -23.5]} size={0.3} rotation={[0, 345, 0]} />} />
            <Route exact path="/Level3" element={<Level3 text={main_text_l3} position={[18, 4, 48]} size={2} rotation={[0, 97.35, 0]} />}  />
            <Route exact path="/Level4" element={<Level4 text={main_text_l4}  position={[0, 4, 10]} size={0.6} rotation={[0, 97.35, 0]} />} />
          </Route>
          {/* <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Dashboard />} />
            
          </Route> */}
        </Routes>
      </Router>
    </>
  );
};

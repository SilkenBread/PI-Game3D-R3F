import "./styles.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Loader } from "@react-three/drei";
import { Menu } from "./game/globals/menu/Menu";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <App />
    </>
);
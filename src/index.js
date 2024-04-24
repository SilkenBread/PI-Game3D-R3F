import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <Canvas>
        <Experience />
    </Canvas>
);
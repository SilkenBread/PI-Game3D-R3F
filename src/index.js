import "./styles.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

const root = createRoot(document.getElementById("root"));

root.render(<>
    <Canvas
        shadows={true}
    >
        <App />
    </Canvas>
    <Loader />
</>
);
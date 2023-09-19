import "./css/style.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"; // built in styled components
import Cube from "./Cube";

export default function Who() {
    return (
        <div id="section" className="who">
            <div className="who-container">
                <div id="left-who">
                    <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]}/>
                        <Cube />
                    </Canvas>
                </div>
                <div id="right-who">
                    <h1 id="title">Think ouside the square space</h1>
                    <div id="whatwedo">
                        <img id="line" src="./assets/line.png" alt="line" />
                        <h2 id="subtitle">Who we are?</h2>
                    </div>
                    <p id="description">
                        we enjoy creating delightful, human-centered digital experiences
                    </p>
                    <button id="see-our-works">See our works</button>
                </div>
            </div>
        </div>
    );
}
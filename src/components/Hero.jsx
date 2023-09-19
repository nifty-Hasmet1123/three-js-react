import "./css/style.css";
import NavBar from "./NavBar";

export default function Hero() {
    return (
        <div id="section" className="hero">
            <NavBar />
            <div className="hero-container">
                <div id="left-hero">
                    <h1 id="title">Think, Make, Solve</h1>
                    <div id="whatwedo">
                        <img id="line" src="./assets/line.png" alt="line" />
                        <h2 id="subtitle">What we do</h2>
                    </div>
                    <p id="description">
                        we enjoy creating delightful, human-centered digital experiences
                    </p>
                    <button id="learn-more">Learn More</button>
                </div>
                <div id="right-hero">
                    {/* 3d model */}
                    <img id="moon" src="./assets/moon.png" alt="moon" />
                </div>
            </div>
        </div>
    );
}
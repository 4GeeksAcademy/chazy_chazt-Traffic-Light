// component/home.js
import React, { useState } from "react";
import '../../styles/index.css';

const Home = () => {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1 className="text-center">{color === "red" ? "Stop" : ""}</h1>
            <h1 className="text-center">{color === "yellow" ? "Caution" : ""}</h1>
            <h1 className="text-center">{color === "green" ? "Go" : ""}</h1>
            <div className="container">
                <div className="slim"></div>
                <div className="background">
                    <div
                        onClick={() => setColor("red")}
                        className={`light red ${color === "red" ? "active" : ""}`}
                    ></div>
                    <div
                        onClick={() => setColor("yellow")}
                        className={`light yellow ${color === "yellow" ? "active" : ""}`}
                    ></div>
                    <div
                        onClick={() => setColor("green")}
                        className={`light green ${color === "green" ? "active" : ""}`}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Home;

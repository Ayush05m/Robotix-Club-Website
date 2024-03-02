import { memo } from "react";
// import { useTypewriter } from "react-simple-typewriter";
import "./Projects.css";

import logo from "../Projects/ROBO.gif";
import "./Projects.css";

function Projects() {
  const [typeEffect] = useTypewriter({
    words: ["Recent Projects"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (<>
    <div className="bg">
      <div>
        <h1
          style={{
            position: "fixed",
            top: "100px",
            left: "150px",
            color: "yellow",
            fontWeight: "bold",
            fontFamily: "serif",
            fontSize: "70px",
          }}
        >
          <u>
            <span>{typeEffect}</span>
          </u>
        </h1>
        <img
          src={logo}
          style={{
            position: "absolute",
            height: "50%",
            bottom: "0px", // Adjust the distance from the bottom
            right: "0px", // Adjust the distance from the right
            zIndex: 0, // Ensure it's above other elements
          }}
          alt="Logo"
        />
      </div>
    </div>
    </>
  );
}

export default memo(Projects);

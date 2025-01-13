import React from "react";
import "../styles/Intro.css"; // Ensure the CSS file exists
import { Typewriter } from "react-simple-typewriter"; // Typing animation
import EmailRoundedIcon from "@mui/icons-material/EmailRounded"; // Material-UI Icon
import FadeInSection from "./FadeInSection"; // Your custom component
import FractalTree from "./FractalTree"; // Your custom component

const Intro = () => {
  return (
    <div id="intro">
      {/* Fractal Tree Animation */}
      <FractalTree />

      {/* Typing Animation */}
      <h1 className="intro-title">
      <Typewriter
        words={["hey,", "najiha here!"]}
        loop={false}
        cursor
        cursorStyle={<span style={{ color: "var(--green-bright)" }}>|</span>}
        typeSpeed={120}
        deleteSpeed={50}
        delaySpeed={1000}
      />

      </h1>

      {/* Fading Section for Subtitle and Description */}
      <FadeInSection>
        <div className="intro-subtitle">I code sometimes.</div>
        <div className="intro-desc">
          I'm a technical consultant from Kuala Lumpur, Malaysia. I'm big on the fields of technology, finance, global business and everything in between. When I get the chance, I also love to jump into design.
        </div>

        {/* Contact Link */}
        <a href="mailto:najihazaharu@gmail.com" className="intro-contact">
          <span className="intro-icon"><EmailRoundedIcon /></span>
          {" Say hi!"}
        </a>
      </FadeInSection>
    </div>
  );
};

export default Intro;

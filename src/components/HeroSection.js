import { useEffect, useState } from "react";
import Particles from "react-particles-js";
import me from "../assets/images/me_hi.svg";
import { useLocation } from "react-router-dom";
import Aos from "aos";

const HeroSection = () => {
  const location = useLocation();
  const [particlNumber, setParticlNumber] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    if (window.outerWidth < 768) {
      setParticlNumber(30);
    } else if (window.outerWidth > 1080) {
      setParticlNumber(80);
    } else {
      setParticlNumber(50);
    }
  }, []);

  return (
    <div
      data-aos={
        typeof location.state === "undefined" ? "zoom-in" : location.state.anim
      }
      data-aos-easing="ease-out-back"
    >
      <Particles
        className="particle-class"
        params={{
          particles: {
            color: {
              value: "#6b778d",
            },
            number: {
              value: particlNumber,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="hero-section">
        <img src={me} alt="" />
        <h3>I am</h3>
        <h1>Rakibul Hasan</h1>
      </div>
    </div>
  );
};

export default HeroSection;

import Particles from "react-particles-js";
import { useEffect } from "react";

let img = "/404m.svg";
let noParticl = 150;
if (window.outerWidth < 1200) {
  img = "/404m.svg";
  noParticl = 100;
} else {
  console.log(window.outerWidth);
  img = "/404.svg";
  noParticl = 400;
}
const Error = () => {
  useEffect(() => {}, []);
  return (
    <div
      className="error"
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Particles
        params={{
          fps_limit: 28,
          particles: {
            collisions: {
              enable: false,
            },
            number: {
              value: noParticl,
              density: {
                enable: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 30,
              opacity: 0.4,
            },
            move: {
              speed: 1,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 1,
                sync: false,
              },
              value: 0.4,
            },
          },
          polygon: {
            enable: true,
            scale: 0.5,
            type: "inline",
            move: {
              radius: 10,
            },
            url: img,
            inline: {
              arrangement: "equidistant",
            },
            draw: {
              enable: true,
              stroke: {
                color: "rgba(255, 255, 255, .2)",
              },
            },
          },
          retina_detect: false,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Error;

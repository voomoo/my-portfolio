import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import { FaReact, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { RiFlutterFill } from "react-icons/ri";
import {
  SiMaterialUi,
  SiVisualstudio,
  SiAndroidstudio,
  SiDart,
  SiJava,
  SiMaterialdesign,
  SiFigma,
  SiAdobexd,
} from "react-icons/si";

const Skills = () => {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  console.log(typeof location.state === "undefined");
  return (
    <div
      className="skills"
      data-aos={
        typeof location.state === "undefined" ? "zoom-in" : location.state.anim
      }
      data-aos-easing="ease-out-back"
    >
      <div className="frontend">
        <div className="description">
          <h3>Front-End Development</h3>
          <p>
            I love working as a frontend developer. Specially in React JS. I
            have been learning and creating projects with React JS for more than
            6 months. But not just React, I can also create web applications
            with HTML, CSS and Javascript.
          </p>
        </div>
        <div className="techs">
          <h3>Technologies</h3>

          <div className="logos">
            <AiFillHtml5 style={{ animationDuration: "3s" }} />
            <FaCss3Alt style={{ animationDuration: "3.6s" }} />
            <IoLogoJavascript style={{ animationDuration: "3.2s" }} />
            <FaBootstrap style={{ animationDuration: "3.8s" }} />
            <FaReact style={{ animationDuration: "3.4s" }} />
            <SiVisualstudio style={{ animationDuration: "4.2s" }} />
            <SiMaterialUi style={{ animationDuration: "4s" }} />
          </div>
        </div>
      </div>
      <div className="frontend">
        <div className="description">
          <h3>Mobile App Development</h3>
          <p>
            Mobile app development is not my strong suite, but I did a few
            projects with Flutter and Java native android app and I really
            enjoyed it.
          </p>
        </div>
        <div className="techs">
          <h3>Technologies</h3>

          <div className="logos">
            <SiAndroidstudio style={{ animationDuration: "3s" }} />
            <RiFlutterFill style={{ animationDuration: "3.6s" }} />
            <SiJava style={{ animationDuration: "3.2s" }} />
            <SiDart style={{ animationDuration: "3.8s" }} />
            <SiMaterialdesign style={{ animationDuration: "3.4s" }} />
          </div>
        </div>
      </div>
      <div className="frontend">
        <div className="description">
          <h3>UI Designing</h3>
          <p>
            I do UI designing just for fun. It is kind of my hobby. I enjoy it
            very much. Although I may not be a great UI designer you can check
            out my works at Dribbble, you can find the link in the contact page.
          </p>
        </div>
        <div className="techs">
          <h3>Technologies</h3>

          <div className="logos">
            <SiFigma style={{ animationDuration: "3s", width: "40%" }} />
            <SiAdobexd style={{ animationDuration: "3.6s", width: "40%" }} />
            <SiMaterialdesign style={{ animationDuration: "3.2s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

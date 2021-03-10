import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
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
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  console.log(typeof location.state === "undefined");
  return (
    <div
      className="skills"
      onWheel={(e) => {
        if (e.deltaY > 0) {
          history.push({
            pathname: "/projects",
            state: { anim: "slide-left", page: "projects" },
          });
        } else {
          history.push({
            pathname: "/about",
            state: { anim: "slide-right", page: "about" },
          });
        }
      }}
      data-aos={
        typeof location.state === "undefined" ? "zoom-in" : location.state.anim
      }
      data-aos-easing="ease-out-back"
    >
      <div className="frontend">
        <div className="description">
          <h3>Front-End Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            hic voluptas repellendus cupiditate adipisci molestiae excepturi
            voluptate sit recusandae provident. Illum perspiciatis distinctio
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            hic voluptas repellendus cupiditate adipisci molestiae excepturi
            voluptate sit recusandae provident. Illum perspiciatis distinctio
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            hic voluptas repellendus cupiditate adipisci molestiae excepturi
            voluptate sit recusandae provident. Illum perspiciatis distinctio
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

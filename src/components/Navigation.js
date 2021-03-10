import { useState, useEffect } from "react";
import { GiCowled } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (window.outerWidth > 768) {
        setHidden(true);
      }
    }, 5000);
  }, []);
  return (
    <div
      className={`navigation ${hidden ? "nav-hide" : ""}`}
      style={{ transform: !hidden ? "scaleY(1)" : "" }}
    >
      <Link
        to={{ pathname: "/about", state: { anim: "zoom-in" } }}
        style={{
          width: "100%",
          borderRight: "1px solid #93A4C3",
          textAlign: "center",
        }}
      >
        <h3>About</h3>
      </Link>
      <Link
        to={{ pathname: "/skills", state: { anim: "zoom-in" } }}
        style={{
          width: "100%",
          borderRight: "1px solid #93A4C3",
          textAlign: "center",
        }}
      >
        <h3>Skills</h3>
      </Link>
      <Link
        to={{ pathname: "/", state: { anim: "zoom-in" } }}
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <Tooltip title="Home">
          <h3>
            <GiCowled size={36} />
          </h3>
        </Tooltip>
      </Link>
      <Link
        to={{
          pathname: "/projects",
          state: { anim: "zoom-in" },
        }}
        style={{
          width: "100%",
          borderRight: "1px solid #93A4C3",
          borderLeft: "1px solid #93A4C3",
          textAlign: "center",
        }}
      >
        <h3>Projects</h3>
      </Link>
      <Link
        to={{
          pathname: "/contact",
          state: { anim: "zoom-in" },
        }}
        style={{
          width: "100%",

          textAlign: "center",
        }}
      >
        <h3>Contact</h3>
      </Link>
    </div>
  );
};

export default Navigation;

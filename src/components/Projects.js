import { useLocation } from "react-router";
import Aos from "aos";
import { useEffect } from "react";
import { Row, Col, Tooltip } from "antd";
import { AiOutlineLink, AiFillDribbbleCircle } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";

const Projects = () => {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="projects"
      style={{ padding: "40px 60px" }}
      data-aos={
        typeof location.state === "undefined" ? "zoom-in" : location.state.anim
      }
      data-aos-easing="ease-out-back"
    >
      <Row gutter={[20, 20]} justify="center">
        <Col
          className="pro-col"
          md={{ span: 8 }}
          xs={{ span: 24 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={project1} alt="" />
          <div className="after">
            <h3 style={{ color: "white" }}>KoppCake</h3>
            <p>
              A simple website built with React JS. For animation AOS was used.
            </p>
            <div>
              <a href="https://koppcake.netlify.app" target="blank">
                <Tooltip title="visit live site">
                  <AiOutlineLink
                    size={36}
                    color="#ff6768"
                    style={{
                      background: "#17223b",
                      padding: "5px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </a>
              <a href="https://github.com/voomoo/react-koppcake" target="blank">
                <Tooltip title="see github repo">
                  <VscGithub
                    size={36}
                    color="#ff6768"
                    style={{
                      background: "#17223b",
                      padding: "5px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </a>
            </div>
          </div>
        </Col>
        <Col
          className="pro-col"
          md={{ span: 8 }}
          xs={{ span: 24 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={project2} alt="" />
          <div className="after">
            <h3 style={{ color: "white" }}>Vortex Landing Page</h3>
            <p>
              A simple website built with the help of React JS and AOS for the
              CSS based animation
            </p>
            <div>
              <a href="https://react-vortex.netlify.app" target="blank">
                <Tooltip title="visit live site">
                  <AiOutlineLink
                    size={36}
                    color="#ff6768"
                    style={{
                      background: "#17223b",
                      padding: "5px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </a>
              <a
                href="https://github.com/voomoo/vortex-landing-page"
                target="blank"
              >
                <Tooltip title="see github repo">
                  <VscGithub
                    size={36}
                    color="#ff6768"
                    style={{
                      background: "#17223b",
                      padding: "5px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </a>
            </div>
          </div>
        </Col>
        <Col
          className="pro-col"
          md={{ span: 8 }}
          xs={{ span: 24 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={project3} alt="" />
          <div className="after">
            <h3 style={{ color: "white" }}>My Portfolio</h3>
            <p>
              Of course this portfolio was also built with ReactJS. For contact
              purpose MailJS was used. Planning to use Framer Motion in future
            </p>
            <div>
              <a href="https://rhasan.netlify.app" target="blank">
                <Tooltip title="visit live site">
                  <AiOutlineLink
                    size={36}
                    color="#ff6768"
                    style={{
                      background: "#17223b",
                      padding: "5px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </a>
              <a href="https://github.com/voomoo/myportfolio" target="blank">
                <Tooltip title="see github repo">
                  <VscGithub
                    size={36}
                    color="#ff6768"
                    style={{
                      background: "#17223b",
                      padding: "5px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </a>
            </div>
          </div>
        </Col>
        <Col
          className="pro-col"
          md={{ span: 8 }}
          xs={{ span: 24 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={project4} alt="" />
          <div className="after">
            <h3 style={{ color: "white" }}>Dribbble Design Concept</h3>
            <p>
              Dribbble design concept for kopp cake. Visit my dribbble page for
              more designs
            </p>
            <div>
              <a
                href="https://dribbble.com/shots/15235345-Order-Menu?utm_source=Clipboard_Shot&utm_campaign=voomoo&utm_content=Order%20Menu&utm_medium=Social_Share"
                target="blank"
              >
                <Tooltip title="visit dribbble page">
                  <AiFillDribbbleCircle
                    size={36}
                    color="#ff6768"
                    style={{
                      background: "#17223b",
                      padding: "5px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </a>
            </div>
          </div>
        </Col>
        <Col
          className="pro-col"
          md={{ span: 8 }}
          xs={{ span: 24 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={project5} alt="" />
          <div className="after">
            <h3 style={{ color: "white" }}>Dribbble Design Concept</h3>
            <p>
              Dribbble design concept for kopp cake. Visit my dribbble page for
              more designs
            </p>
            <div>
              <a
                href="https://dribbble.com/shots/14897279-netJOBS-Search-Platform?utm_source=Clipboard_Shot&utm_campaign=voomoo&utm_content=netJOBS%20-%20Search%20Platform&utm_medium=Social_Share"
                target="blank"
              >
                <Tooltip title="visit dribbble page">
                  <AiFillDribbbleCircle
                    size={36}
                    color="#ff6768"
                    style={{
                      background: "#17223b",
                      padding: "5px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </a>
            </div>
          </div>
        </Col>
        <Col
          className="pro-col"
          md={{ span: 8 }}
          xs={{ span: 24 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={project6} alt="" />
          <div className="after">
            <h3 style={{ color: "white" }}>Dribbble Design Concept</h3>
            <p>
              Dribbble design concept for kopp cake. Visit my dribbble page for
              more designs
            </p>
            <div>
              <a
                href="https://dribbble.com/shots/14894795-netJOBS?utm_source=Clipboard_Shot&utm_campaign=voomoo&utm_content=netJOBS&utm_medium=Social_Share"
                target="blank"
              >
                <Tooltip title="visit dribbble page">
                  <AiFillDribbbleCircle
                    size={36}
                    color="#ff6768"
                    style={{
                      background: "#17223b",
                      padding: "5px",
                      borderRadius: "50%",
                      marginRight: "5px",
                    }}
                  />
                </Tooltip>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;

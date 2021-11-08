import { Timeline, Row, Col, Divider } from "antd";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";

const About = () => {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  console.log(location.anim);
  return (
    <div
      className="about"
      data-aos={
        typeof location.state === "undefined" ? "zoom-in" : location.state.anim
      }
      data-aos-easing="ease-out-back"
    >
      <h3>
        About <span>Me</span>
      </h3>
      <div className="about-intro">
        <div className="about-textual">
          <p>
            I am an enthusiastic and driven graduate with an Honors degree.
            Passionate about implementing and launching new projects. Currently,
            I am Looking to boost my career with better opportunities as a
            software developer with a reputed firm driven by technology.
          </p>
        </div>
        <div
          style={{
            background: "rgba(196, 196, 196, 0.3)",
            color: "#c4c4c4",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          <p>
            <span>Age:</span> 23
          </p>
          <p>
            <span>Residence:</span> Dhaka
          </p>
          <p>
            <span>Email:</span> rhasan.diu.cse@gmail.com
          </p>
          <p>
            <span>Phone:</span> +880 1920-992221
          </p>
        </div>
      </div>
      <div className="detail-info">
        <Row gutter={[20, 0]}>
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <div className="education">
              <Divider orientation="mid" style={{ borderColor: "#ff6768" }}>
                <h3>Education</h3>
              </Divider>

              <Timeline mode="left" style={{ color: "#c4c4c4", width: "80%" }}>
                <Timeline.Item
                  label={<h3 style={{ color: "#ff6768" }}>School</h3>}
                >
                  <h4 style={{ color: "#c4c4c4" }}>Dolairpar High School</h4>
                  <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                    SSC in 2014
                  </p>
                  <p style={{ marginBottom: "5px", fontSize: "12px" }}>GPA 5</p>
                </Timeline.Item>

                <Timeline.Item
                  label={<h3 style={{ color: "#ff6768" }}>College</h3>}
                >
                  <h4 style={{ color: "#c4c4c4" }}>Savar Model College</h4>
                  <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                    HSC in 2016
                  </p>
                  <p style={{ marginBottom: "5px", fontSize: "12px" }}>GPA 5</p>
                </Timeline.Item>
                <Timeline.Item
                  label={<h3 style={{ color: "#ff6768" }}>University</h3>}
                >
                  <h4 style={{ color: "#c4c4c4" }}>
                    Daffodil International University
                  </h4>
                  <p style={{ marginBottom: "0px", fontSize: "12px" }}>
                    BSc in CSE
                  </p>
                  <p style={{ fontSize: "12px" }}>CGPA 3.8 out of 4.0</p>
                </Timeline.Item>
              </Timeline>
            </div>
          </Col>

          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <div className="certificates">
              <Divider orientation="mid" style={{ borderColor: "#ff6768" }}>
                <h3>Job History</h3>
              </Divider>
              <Timeline mode="left" style={{ color: "#c4c4c4", width: "80%" }}>
                <Timeline.Item
                  label={<h3 style={{ color: "#ff6768" }}>iBOS Limited</h3>}
                >
                  <h4 style={{ color: "#c4c4c4" }}>
                    Frontend Developer (Intern)
                  </h4>
                  <p style={{ marginBottom: "5px", fontSize: "12px" }}>
                    06/2021 - 09/2021
                  </p>
                </Timeline.Item>

                <Timeline.Item
                  label={
                    <h3 style={{ color: "#ff6768" }}>Octaglory Limited</h3>
                  }
                >
                  <h4 style={{ color: "#c4c4c4" }}>Frontend Developer</h4>
                  <p style={{ marginBottom: "5px", fontSize: "12px" }}>
                    11/2021 - Present
                  </p>
                </Timeline.Item>
              </Timeline>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;

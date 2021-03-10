import { useHistory, useLocation } from "react-router";
import Aos from "aos";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { IoMailOpen, IoCall } from "react-icons/io5";
import { FaGithub, FaDribbble } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Tooltip, Modal } from "antd";

const Contact = () => {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lvrg6f8",
        "template_6vbkd19",
        e.target,
        "user_RX8Dz3gp7WMuAkFszYB3P"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            e.target.elements.user_name.value = "";
            e.target.elements.user_email.value = "";
            e.target.elements.user_msg.value = "";
            showModal();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      className="contact"
      onWheel={(e) => {
        if (e.deltaY > 0) {
          history.push({
            pathname: "/contact",
            state: { anim: "slide-left", page: "contact" },
          });
        } else {
          history.push({
            pathname: "/projects",
            state: { anim: "slide-right", page: "projects" },
          });
        }
      }}
      data-aos={
        typeof location.state === "undefined" ? "zoom-in" : location.state.anim
      }
      data-aos-easing="ease-out-back"
    >
      <Modal
        title="Thank You"
        visible={isModalVisible}
        closable={false}
        footer={null}
      >
        <h3>Thank you for reaching out.</h3>
        <h3>I will get back to you very soon</h3>
        <button
          style={{ borderRadius: "5px", height: "36px", width: "80px" }}
          onClick={handleOk}
        >
          Close
        </button>
      </Modal>
      <h1>Get in Touch</h1>
      <div className="contact-page">
        <div className="contact-info">
          <h2>Don't Hesitate to Leave a Message</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoMailOpen size={38} color="#ff6768" />
            <h3
              style={{
                color: "#c4c4c4",
                marginLeft: "15px",
                textAlign: "left",
              }}
            >
              Mail Me{" "}
              <span>
                <a
                  href="mailto:rakib.7896@gmail.com"
                  style={{ color: "#c4c4c4" }}
                >
                  <br /> rakib.7896@gmail.com
                </a>
              </span>
            </h3>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoCall size={38} color="#ff6768" />
            <h3
              style={{
                color: "#c4c4c4",
                marginLeft: "15px",
                textAlign: "left",
              }}
            >
              Call Me{" "}
              <span>
                <a href="tel:+8801920992221" style={{ color: "#c4c4c4" }}>
                  <br /> +880 1920-992221
                </a>
              </span>
            </h3>
          </div>
          <div style={{ marginTop: "10px" }}>
            {" "}
            <a
              href="https://www.linkedin.com/in/rakibul-hasan-922708155/"
              target="blank"
            >
              <Tooltip title="Linkedin">
                <TiSocialLinkedinCircular
                  size={36}
                  style={{
                    border: "1px solid #ff6768",
                    padding: "1px",
                    borderRadius: "50%",
                    color: "#ff6768",
                  }}
                />
              </Tooltip>
            </a>
            <a href="https://github.com/voomoo" target="blank">
              <Tooltip title="Github">
                <FaGithub
                  size={36}
                  style={{
                    border: "1px solid #ff6768",
                    padding: "5px",
                    borderRadius: "50%",
                    marginLeft: "10px",
                    color: "#ff6768",
                  }}
                />
              </Tooltip>
            </a>
            <a href="https://dribbble.com/voomoo" target="blank">
              <Tooltip title="Dribbble">
                <FaDribbble
                  size={36}
                  style={{
                    border: "1px solid #ff6768",
                    padding: "5px",
                    borderRadius: "50%",
                    marginLeft: "10px",
                    color: "#ff6768",
                  }}
                />
              </Tooltip>
            </a>
            <a href="https://twitter.com/Rakibul55845577" target="blank">
              <Tooltip title="Twitter">
                <AiFillTwitterCircle
                  size={36}
                  style={{
                    border: "1px solid #ff6768",
                    padding: "5px",
                    borderRadius: "50%",
                    marginLeft: "10px",
                    color: "#ff6768",
                  }}
                />
              </Tooltip>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <input placeholder="Name" name="user_name" required />
          <input placeholder="Email" type="email" name="user_email" />
          <textarea rows="5" required placeholder="Message" name="user_msg" />
          <button className="submit-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

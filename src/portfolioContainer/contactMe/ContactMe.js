import { useState } from "react";
import Typical from "react-typical";
import imgBack from "../../images/mailz.jpeg";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./ContactMe.css";

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's keep in Touch"} title={"Contact Me"} />
      <div className="center-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In touch 📧 ", 1000]} />
          </h2>
          <a href="https://github.com/Randrianjarisoa">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/dieudonn%C3%A9-randrianjarisoa-985317184/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://x.com/randrianjarisoa">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://web.facebook.com/derass.ryhniacaias/?locale=fr_FR">
            <i className="fa fa-facebook-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form>
            <p>Banner</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="text" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

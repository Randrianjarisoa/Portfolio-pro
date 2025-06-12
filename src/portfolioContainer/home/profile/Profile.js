import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
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
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Randrianjarisoa</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                    "Backend Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                {" "}
                Passionate about coding and problem solving
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="certificate_Data-science.pdf"
              download="certificate_Data-science.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

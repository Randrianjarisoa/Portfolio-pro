import { useState } from "react";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import "./Resume.css";
const Resume = (props) => {
  const [selectedBulletin, setSelectedBulletin] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  const programmingSkillsDetails = [
    { skill: "Javascript", ratingPercentage: 60 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "TypeScript", ratingPercentage: 60 },
    { skill: "Express JS", ratingPercentage: 60 },
    { skill: "Python", ratingPercentage: 60 },
    { skill: "MySQL", ratingPercentage: 60 },
    { skill: "PostgreSQL", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 75 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, HTML, CSS",
    },
    {
      title: "E-commerce Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "An E-commerce website for buying and selling products.",
      subHeading: "Technologies Used: React JS, Node JS, Express JS, MongoDB",
    },
    {
      title: "Chat Application",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "A Real-time chat application with user authentication.",
      subHeading:
        "Technologies Used: React JS, Node JS, Express JS, Socket IO, MongoDB",
    },
    {
      title: "Chat Application",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "A Real-time chat application with user authentication.",
      subHeading:
        "Technologies Used: React JS, Node JS, Express JS, Socket IO, MongoDB",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Bachelor of Science"}
        subHeading={"Computer Science"}
        fromDate={"2019"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Diploma in Information Technology"}
        subHeading={"Computer Science"}
        fromDate={"2017"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Diploma in Computer Science"}
        subHeading={"Computer Science"}
        fromDate={"2015"}
        toDate={"2017"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Work Experience"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Working as a Software Engineer Intern at{" "}
          <a href="https://www.cognizant.com/">Cognizant</a>
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Developed an ecommerce website for buying and selling products with
          the dashboard for admin users
        </span>
        <br />
        <span className="resume-description-text">
          - Developing and maintaining web applications using React JS and other
          related technologies
        </span>
        <br />
        <span className="resume-description-text">
          - Participating in code reviews and providing constructive feedback to
          other developers
        </span>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, i) => (
        <div className="skill-parent" key={i}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              className="active-percentage-bar"
              style={{ width: skill.ratingPercentage + "%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, i) => (
        <ResumeHeading
          key={i}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interest">
      <ResumeHeading
        heading={"Teaching"}
        description={
          "Apart  from being enthusiast in technology, I also love to teach people what I know."
        }
      />
      <ResumeHeading
        heading={"Music"}
        description={
          "Listening to soothing music is something I like to do sometimes with my friends."
        }
      />
      <ResumeHeading
        heading={"competitive Gaming"}
        description={
          "I like to challenge reflexes a lot while competing in football games, push the ranks and have fun."
        }
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletin(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletin ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/resume/${bullet.logoSrc}`)}
          alt="Oops ,,,no internet connection"
        ></img>
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

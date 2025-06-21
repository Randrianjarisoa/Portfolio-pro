import AboutMe from "../portfolioContainer/aboutMe/AboutMe";
import ContactMe from "../portfolioContainer/contactMe/ContactMe";
import Home from "../portfolioContainer/home/Home";
import Resume from "../portfolioContainer/resume/Resume";
import Testimonial from "../portfolioContainer/testimonial/Testimonial";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    Component: Home,
  },
  {
    screen_name: "AboutMe",
    Component: AboutMe,
  },
  {
    screen_name: "Resume",
    Component: Resume,
  },
  {
    screen_name: "Testimonial",
    Component: Testimonial,
  },
  {
    screen_name: "ContactMe",
    Component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};

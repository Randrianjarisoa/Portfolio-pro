import "./Home.css";
import Footer from "./footer/Footer";
import Profile from "./profile/Profile";
const Home = () => {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;

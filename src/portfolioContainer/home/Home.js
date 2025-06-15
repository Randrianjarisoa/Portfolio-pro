import "./Home.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Profile from "./profile/Profile";
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;

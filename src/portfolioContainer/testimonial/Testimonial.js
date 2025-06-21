import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./Testimonial.css";

const Testimonial = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // Configuration du carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Durée de l'animation entre les slides
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 secondes entre chaque slide
    arrows: true,
    adaptiveHeight: true,
    pauseOnHover: true, // Pause au survol
    cssEase: "ease-in-out", // Animation fluide
  };

  // Données des témoignages
  const testimonials = [
    {
      id: 1,
      quote:
        "I was looking for a developer to make a website for my business. I patronized Dieudonné and when He delivered, I honestly fell in love with the project. He is a very honest guy and he delivers on time.",
      name: "Sarah Johnson",
      position: "CEO, TechSolutions Inc.",
      stars: 4.5,
      image: "img/testimonial/mike.png",
    },
    {
      id: 2,
      quote:
        "Working with Dieudonné was a fantastic experience. His attention to detail and problem-solving skills are exceptional. The website he created exceeded our expectations.",
      name: "Michael Brown",
      position: "Marketing Director, Global Corp",
      stars: 5,
      image: "img/testimonial/daisy.jpg",
    },
    {
      id: 3,
      quote:
        "As a small business owner, I needed an affordable but professional website. Dieudonné delivered exactly what I wanted and provided excellent ongoing support.",
      name: "Emily Wilson",
      position: "Owner, Boutique Store",
      stars: 4,
      image: "img/testimonial/lady.png",
    },
    {
      id: 4,
      quote:
        "The mobile app developed by Dieudonné has significantly improved our customer engagement. His technical expertise is impressive and he's very reliable.",
      name: "David Miller",
      position: "CTO, Startup Ventures",
      stars: 5,
      image: "img/testimonial/man.png",
    },
  ];

  // Fonction pour générer les étoiles
  const renderStars = (count) => {
    const stars = [];
    const fullStars = Math.floor(count);
    const hasHalfStar = count % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fa fa-star" />);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fa fa-star-half-alt" />);
    }

    // Ajouter des étoiles vides si nécessaire
    const emptyStars = 5 - Math.ceil(count);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star" />);
    }

    return stars;
  };

  return (
    <div className="testimonial-container">
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What Clients Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-slide px-2">
                    <div className="testi-item">
                      <div className="testi-comment">
                        <p>
                          <i className="fa fa-quote-left" />
                          {testimonial.quote}
                          <i className="fa fa-quote-right" />
                        </p>
                        <div className="stars">
                          {renderStars(testimonial.stars)}
                        </div>
                      </div>
                      <div className="client-info">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="client-img"
                          onError={(e) => {
                            e.target.src =
                              "img/testimonial/default-profile.jpg";
                          }}
                        />
                        <h5>{testimonial.name}</h5>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;


import './styles/About.css';

const About = () => {
  return (
    <div className="container mt-5 text-color">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mb-4">Welcome!</h1>
          <p>
            I&apos;m a coffee enthusiast who loves exploring new flavors and roasting techniques.
            I&apos;m excited to share my experiences and stories about those special coffees that have become part of my life.
          </p>
          <p>
            Here, you&apos;ll find my latest coffee adventures, recipes, and tips and tricks for making the perfect cup of coffee.
            Join me on this flavorful journey and discover the deeper layers of the coffee world!
          </p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <img src="./public/images/coffeeImage.jpg" alt="Coffee Enthusiast" className="img-fluid align-right"/>
        </div>
      </div>
    </div>
  );
}

export default About;

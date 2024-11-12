import { Link } from "react-router-dom";
import "./styles/Home.css"; 

function Home() {
  return (
    <div className="home-container">
    
  
    <div className="video-container">
       <video className="video" autoPlay loop muted>
          <source src="/videos/home.mp4" type="video/mp4" />
       </video>
       <div className="video-overlay">
          <h1>Your Perfect Coffee Awaits</h1>
          <Link to="/products" className="home-btn">Coffee Time</Link> 
       </div>
    </div>
 </div>
 
  );
}

export default Home;

import './styles/Footer.css';

function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-auto">
      <div className="container">
        <form className="form-inline justify-content-center">
          <label className="mr-2">Newsletter Signup:</label>
          <input type="email" className="form-control mr-2" placeholder="Your e-mail" />
          <button type="submit" className="footer-btn">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;

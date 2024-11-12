import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea className="form-control" id="message" name="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
        <div className="col-md-6 d-flex justify-content-end"> 
          <img src="./public/images/contact.jpg" alt="Contact" className="contact-image img-fluid" /> 
        </div>
      </div>
    </div>
  );
}

export default Contact;
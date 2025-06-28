const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or suggestions — we’d love to hear from you!</p>

      <div className="contact-info">
        <div>
          <h3>📧 Email</h3>
          <p>support@khanakazaana.com</p>
        </div>
        <div>
          <h3>📍 Address</h3>
          <p>123 Foodie Street, Kitchen City, Flavorland 500001</p>
        </div>
        <div>
          <h3>📱 Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};



export default Contact;
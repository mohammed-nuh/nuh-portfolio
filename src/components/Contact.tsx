function Contact() {
  return (
    <section className="mb-5 animate__animated animate__fadeInUp px-3 text-center">
      <h2 className="text-dark mb-4">Contact</h2>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {/* Email Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammednuhabuhuseina@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger btn-lg px-4 d-flex align-items-center gap-2"
        >
          <i className="bi bi-envelope-fill"></i> Email Me
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-lg px-4 d-flex align-items-center gap-2"
        >
          <i className="bi bi-whatsapp"></i> WhatsApp Me
        </a>
      </div>
    </section>
  );
}

export default Contact;

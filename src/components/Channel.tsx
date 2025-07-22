function Channel() {
  return (
    <section className="mb-5 animate__animated animate__fadeInUp px-3 text-center">
      <h2>Rapid Code (Channel)</h2>
      <p>
        I run a channel called <strong>Rapid Code</strong>, where I publish short, beginner-friendly videos explaining frontend concepts, coding mini-projects, and tips for aspiring developers.
      </p>

      {/* Long video */}
      <div className="ratio ratio-16x9 my-4" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <iframe
          src="https://www.youtube.com/embed/xBP0UPXzX8s"
          title="Rapid Code Long Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Shorts */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
        <iframe
          width="250"
          height="444"
          src="https://www.youtube.com/embed/Y-KnGuGw8CA"
          title="Rapid Code Short 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="250"
          height="444"
          src="https://www.youtube.com/embed/9Bv9mA2ryUM"
          title="Rapid Code Short 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="250"
          height="444"
          src="https://www.youtube.com/embed/vbRh6Ca1kUo"
          title="Rapid Code Short 3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          width="250"
          height="444"
          src="https://www.youtube.com/embed/D6Z1hY5J0WA"
          title="Rapid Code Short 4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Channel;

type AchievementsProps = {
  onCartClick: () => void;
};

function Achievements({ onCartClick }: AchievementsProps) {
  return (
    <section className="animate__animated animate__fadeInUp px-3 text-center">
      <h2 className="mb-4">Achievements</h2>

      <div className="row justify-content-center g-4 mb-5">
        <div className="col-md-6">
          <div className="card border-success h-100">
            <img
              src="certificates/uwl_rak_certificate.png"
              className="card-img-top"
              alt="UWL RAK Certificate"
            />
            <div className="card-body">
              <h5 className="card-title">Runners Up - UWL RAK Web Design</h5>
              <p className="card-text">
                Our team secured 2nd place in the PAN UAE IDEA MARATHON 2024
                hosted by UWL RAK. I developed the{" "}
                <strong>Voice-Based Cart Adding System</strong> project that
                earned us this position. The entire codebase was written by me
                and my teammates handled the presentation part.
              </p>
              <button onClick={onCartClick} className="btn btn-outline-primary mt-2">
                View Project
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-primary h-100">
            <img
              src="certificates/FullStack_Certificate.jpeg"
              className="card-img-top"
              alt="Full Stack Certificate"
            />
            <div className="card-body">
              <h5 className="card-title">Full Stack Developer Certificate</h5>
              <p className="card-text">
                Successfully completed Full Stack Development training at IT
                Ridge and earned certification.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* On-Stage Photo Section */}
      <div className="mb-5">
        <h4 className="mb-3">On Stage at UWL RAK</h4>
        <div className="card border-dark mx-auto" style={{ maxWidth: "600px" }}>
          <img
            src="images/me_in_stage.png"
            className="card-img-top"
            alt="On Stage Photo"
          />
          <div className="card-body">
            <p className="card-text">
              A proud moment captured during the award ceremony at UWL RAK after
              winning Runners Up in the Web Designing Competition.
            </p>
          </div>
        </div>
      </div>

      {/* Media Coverage Section */}
<div className="mb-5">
  <h4 className="mb-4">Media Coverage</h4>

  <div className="card shadow-sm border-0 mx-auto" style={{ maxWidth: "900px" }}>
    <div className="row g-0 align-items-center">
      <div className="col-md-2 d-none d-md-block">
        <img
          src="images/UWLRak_logo.jpg"
          alt="News"
          className="img-fluid p-3"
        />
      </div>
      <div className="col-md-10">
        <div className="card-body">
          <p
            className="card-text"
            style={{ fontStyle: "italic", fontSize: "1.05rem" }}
          >
            "The University of West London RAK Branch Campus hosted the grand
            finale of PAN UAE IDEA MARATHON on January 21... Mohammed Uzair Ateef,{" "}
            <mark>Mohammed Nuh Abuhuseina</mark> & Sandeep Singh from PACE
            International School, Sharjah became the runner-up in the Web Designing
            Competition."
          </p>

          {/* Center-aligned buttons */}
          <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
            <a
              href="https://uwl.ac.ae/news/uwl-rak-idea-marathon/#:~:text=Annet%20Cecil%20Thomas%20from%20The,Share%20Facebook%20Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              View on UWL RAK Website
            </a>
            <a
              href="https://www.khaleejtimes.com/education/uae-indian-schoolboys-develop-app-to-detect-eye-diseases-win-honourable-mention-at-national-contest"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
            >
              View on Khaleej Times
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </section>
  );
}

export default Achievements;

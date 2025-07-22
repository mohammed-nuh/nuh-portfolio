import { useState } from "react";

function Projects() {
  const projects = [
    {
      title: "Voice Based Cart Adding System",
      video: "project1.mp4",
      short: "Add products to cart using voice commands.",
      full: "An innovative voice-controlled system for hands-free shopping where users can speak to add products to their cart. Built with React and voice recognition APIs.",
    },
    {
      title: "Ecommerce App",
      video: "project2.mp4",
      short: "A full-featured ecommerce frontend.",
      full: "A responsive ecommerce app with product listings, cart, and checkout flow. Designed with Bootstrap and managed with React states.",
    },
    {
      title: "Todo List App",
      video: "project3.mp4",
      short: "Simple and effective todo manager.",
      full: "A React-based todo app to add, delete, and filter tasks. Designed with clean UI and local storage support for persistent data.",
    },
    {
      title: "Theme Toggler App",
      video: "project4.mp4",
      short: "Switch between light and dark themes.",
      full: "A React app that lets users toggle between themes using state management. It remembers user preference using localStorage.",
    },
    {
      title: "Travel And Tourism",
      video: "project5.mp4",
      short: "Explore destinations with this tourism site.",
      full: "A travel website that displays tourist spots with visuals and brief guides. Built using Bootstrap and React routing.",
    },
    {
      title: "Language Switcher App",
      video: "project6.mp4",
      short: "Dynamic multi-language interface.",
      full: "React app that supports multiple languages using i18next. Users can switch languages instantly with preserved content state.",
    },
  ];

  const [expanded, setExpanded] = useState(Array(projects.length).fill(false));

  const toggleDescription = (index: number) => {
    const copy = [...expanded];
    copy[index] = !copy[index];
    setExpanded(copy);
  };

  return (
    <section className="mb-5 animate__animated animate__fadeInUp text-center container">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100 shadow">
              <video className="card-img-top" controls>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body text-start">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">
                  {expanded[i] ? project.full : project.short}
                </p>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => toggleDescription(i)}
                >
                  {expanded[i] ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

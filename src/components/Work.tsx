import "./styles/Work.css";
import { useEffect } from "react";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Amazon Clone",
    category: "Frontend Project",
    description: "Built a responsive Amazon homepage clone using HTML, CSS, and JavaScript.",
    tools: "HTML, CSS, JavaScript",
    image: "/images/amezon.png",
  },
  {
    title: "Spotify Clone",
    category: "Frontend Project",
    description: "Developed a Spotify UI clone with a sidebar, theme switch, and music player UI.",
    tools: "HTML, CSS, JavaScript",
    image: "/images/spotify.png",
  },
  {
    title: "Simon Says Game",
    category: "Frontend Project",
    description: "Created an interactive Simon Says game using HTML, CSS, and JavaScript that generates patterns, remembers previous sequences, and challenges users to repeat them.",
    tools: "HTML, CSS, JavaScript",
    image: "/images/game.png",
  },
  {
    title: "AI-Baised Interview Evaluation System",
    category: "ML Project",
    description: "Built an AI-based interview evaluation system using Python backend libraries like NumPy, pandas, Matplotlib, NLTK, and Gemini, and a Streamlit frontend for interactive reporting.",
    tools: "Python, NumPy, pandas, Matplotlib, NLTK, Gemini, Streamlit",
    image: "/images/Ai-interview.png",
  },
  {
    title: "Wanderlust",
    category: "Full Stack Development Project",
    description: "Final full stack development project focused on building a complete travel and booking experience with modern web app architecture.",
    tools: "React, Node.js, Express, MongoDB, Full Stack Development",
    image: "/images/wanderlust.png",
    link: "https://sigma-major-project-zv0z.onrender.com/listings",
  },
  {
    title: "Weather Prediction",
    category: "Weather Prediction Project",
    description: "A predictive weather application built around forecasting and analytics to provide meaningful weather insights.",
    tools: "Python, ML, Data Analysis, Weather Forecasting",
    image: "/images/wether.png",
    link: "https://weather-app-theta-five-67.vercel.app",
  },
];

const certificates = [
  {
    title: "Full Stack Development Certificate",
    category: "Certificate",
    description: "Certificate earned for completing full stack development training and project-based learning.",
    tools: "Frontend, Backend, Database, Full Stack",
    image: "/images/devlopment.png",
  },
  {
    title: "Machine Learning Certificate",
    category: "Certificate",
    description: "Certificate earned for machine learning learning and practical implementation in AI-driven problem solving.",
    tools: "Python, Machine Learning, AI, Data Science",
    image: "/images/ml.jpg",
  },
];

const Work = () => {
  useEffect(() => {
    const boxes = document.getElementsByClassName("work-box");
    if (!boxes.length) return;

    const workContainer = document.querySelector(".work-container");
    const rectLeft = workContainer?.getBoundingClientRect().left ?? 0;
    const rect = boxes[0].getBoundingClientRect();
    const parentWidth = boxes[0].parentElement?.getBoundingClientRect().width ?? 0;
    const padding = parseInt(window.getComputedStyle(boxes[0]).padding) / 2;
    const translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-flex">
            {projects.map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                  <p>{project.description}</p>
                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="disable"
                    >
                      Visit project
                    </a>
                  )}
                </div>
                <WorkImage image={project.image} alt={project.title} link={project.link} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="certificate-section">
        <div className="work-container section-container">
          <h2>
            My <span>Certificates</span>
          </h2>
          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <div className="certificate-card" key={index}>
                <div className="certificate-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{certificate.title}</h4>
                      <p>{certificate.category}</p>
                    </div>
                  </div>
                  <h4>Skills covered</h4>
                  <p>{certificate.tools}</p>
                  <p>{certificate.description}</p>
                </div>
                <WorkImage image={certificate.image} alt={certificate.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;

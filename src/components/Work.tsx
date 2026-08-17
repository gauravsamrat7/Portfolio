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
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

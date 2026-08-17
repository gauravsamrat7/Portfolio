import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> learning journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in AI & ML</h4>
                <h5>United College of Engineering and Research, Prayagraj</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Pursuing a degree focused on Artificial Intelligence and Machine
              Learning while strengthening my software development and problem-
              solving abilities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Programming Foundation</h4>
                <h5>C, DSA in C++, Full Stack Development and ML</h5>
              </div>
              <h3>Learning</h3>
            </div>
            <p>
              Building a strong base in C programming and currently learning Data
              Structures and Algorithms in C++ with hands-on practice.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Current Focus</h4>
                <h5>Frontend Development & Problem Solving</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Actively exploring web development, building projects, and solving
              problems to grow as a developer and contribute to real-world
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

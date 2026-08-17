import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              BHANU
              <br />
              <span>PRAKASH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>B.Tech (AI & ML)</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Learner</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Web Enthusiast</div>
              <div className="landing-h2-info-1">Problem Solver</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

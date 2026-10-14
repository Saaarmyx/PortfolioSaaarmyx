import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a
          href="#contact"
          className="cta-btn cta-btn-play"
          data-cursor="disable"
        >
          Hablemos →
        </a>

        <a
          href={config.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          Mi GitHub →
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
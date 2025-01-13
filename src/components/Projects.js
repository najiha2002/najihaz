import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const projects = {
      "Echo": {
        desc:
          "A real-time language translation application with buffered capture feature on AR Smart Glasses.",
        techStack: "Java, Vuzix Smart Glasses",
        link: "https://github.com/najiha2002/Echo",
      },
      "KopiLit": {
        desc:
          "A coffee shop application for customizing and managing orders, with comprehensive real-time analytics.",
        techStack: "Python (Streamlit)",
        link: "https://github.com/najiha2002/KopiLit",
        open: "https://kopilit.streamlit.app"
      },
      "Handwritten Signature Classification": {
        desc:
          "A machine learning model capable of classifying handwritten signatures (actual vs forged) used to verify student attendances.",
        techStack: "Python, TensorFlow, Keras",
        link:
          "https://github.com/najiha2002/signature-classification"
      },
      "FruitPox": {
        desc:
          "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
        techStack: "Python, YOLOv8",
        link: "https://github.com/najiha2002/FruitPox",
        open: ""
      },
      "Certificate Generator": {
        desc:
          "A certificate generator for automation and distribution of personalized or customized certificates.",
        techStack: "Python (Pandas, Reportlab)",
        link: "https://github.com/najiha2002/CertificateGen",
        open: ""
      },
      "Syntax Slurp: Food Ordering System": {
        desc:
          "A simple food ordering system to demonstrate OOP principles understanding.",
        techStack: "Python (Tkinter)",
        link: "https://github.com/najiha2002/SyntaxSlurp/tree/main",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
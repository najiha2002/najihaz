import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently a <b>Junior Technical Consultant</b> at
        <a href="https://www.napier.ai/"> Napier</a>, working in the Anti Money Laundering (AML) industry. Recently, I just wrapped up my <b> Bachelor's degree</b> in <b>Computer Science </b>at{" "}
        <a href="https://www.ox.ac.uk/about">Universiti Teknologi PETRONAS</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in travelling to taste different cultures - with my handy dandy camera(s) along. I also enjoy brisk walking. 
      </p>
    );

    const tech_stack = [
      "Python",
      "SQL",
      "React.js",
      "Java",
      "SAP S/4HANA",
      "C++"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Najiha Z." src={"/najihaz/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

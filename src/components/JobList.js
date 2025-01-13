import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const JobList = () => {
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Napier AI": {
      jobTitle: "Junior Technical Consultant @",
      duration: "JAN 2025 - PRESENT",
      desc: [
        "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service).  This enabled the launch of customer-facing global services in new regions within a day, a significant reduction from the previous time-frame of a month.",
        "Re-built Route 53's core domain management and DNS systems to provide a better user experience to millions of customers.",
      ],
    },

    CodeRangers: {
      jobTitle: "Coding Tutor @",
      duration: "MAR 2024 - PRESENT",
      desc: [
        "Developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
        "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia.",
      ],
    },
    Hilti: {
      jobTitle: "IT Business Analyst Intern @",
      duration: "MAY 2020 - APR 2021",
      desc: [
        "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
        "Iteratively built web experiences for 80 million users across high-traffic pages.",
        "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
      ],
    },
    "CIEF Worldwide": {
      jobTitle: "Research Engineer @",
      duration: "MAY 2021 - SEPT 2021",
      desc: [
        "Developed and researched an NLP-based framework using state-of-the-art tools like Spacy and Stanza to facilitate the derivation of requirements from health data by leveraging syntactic dependencies, entity-recognition and rule-based match-making.",
        "Application selected for DCS Research Award ($4,000) as part of the ”Visualizing Privacy Analysis Results” project led by Professor Marsha Chechik.",
      ],
    },

  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexGrow: 1, height: 300, backgroundColor: "transparent" }}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : "horizontal"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--green-bright)", 
          },
        }}
        sx={{ borderRight: !isHorizontal && "1px solid", borderColor: "divider" }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab key={i} label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel key={i} value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">{experienceItems[key]["duration"]}</div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map((descItem, j) => (
              <FadeInSection key={j} delay={`${j + 1}00ms`}>
                <li>{descItem}</li>
              </FadeInSection>
            ))}
          </ul>
        </TabPanel>
      ))}
    </Box>
  );
};

export default JobList;

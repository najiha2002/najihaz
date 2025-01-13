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
        "Collaborated with clients to design and implement data integrations, transformations, and system customizations using JSON/XML and ETL tools such as Apache NiFi.",
        "Leveraged Elasticsearch to index and query large datasets for client solutions as part of data processing pipelines.",
        "Gained experience with API design, cloud platforms (Azure), and integration patterns, including event-driven systems.",
      ],
    },

    CodeRangers: {
      jobTitle: "Coding Tutor @",
      duration: "MAR 2024 - PRESENT",
      desc: [
        "Delivered coding lessons (Python, Web Development) covering foundational concepts to advanced topics such as data analysis techniques and web-game development to more than 20 students across diverse age groups (adolescents and adults)",
        "Accumulated an average of 9 teaching hours per week in leading structured lessons focused on data structures, algorithms, web development and Python data analysis libraries such as Pandas, NumPy, and Matplotlib and Seaborn.",
        "Successfully helped 80% of students complete personal Python projects, specifically tailored to data analytics.",
      ],
    },
    Hilti: {
      jobTitle: "IT Business Analyst Intern @",
      duration: "MAY 2020 - APR 2021",
      desc: [
        "Performed customizations and tests in SAP S/4HANA Sales Distribution (SD) module for Hilti product sales and leasing applications, based on business requirements.",
        "Collaborated with worldwide product owners and business stakeholders to define system requirements, prototype, and test custom solutions implemented in the Finance or Order-to-Cash domains.",
        "Troubleshoot and resolved SD-related tickets in ServiceNow within SLAs, addressing issues from business users and cross-department members.",
        "Contributed to projects like Digital Payments integration in Hilti Online Store, focusing on data reporting and analysis."
      ],
    },
    "CIEF Worldwide": {
      jobTitle: "UI/UX Designer @",
      duration: "MAY 2021 - SEPT 2021",
      desc: [
        "Evaluated user requirements and created user personas to ideate and improve the flow of 2 websites.",
        "Provided aspects of visual and functional product design concepts like wireframes, flows, and mockups, that clearly illustrate how sites function by using Figma.",

      ],
    },

  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexGrow: 1, backgroundColor: "transparent" }}>
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

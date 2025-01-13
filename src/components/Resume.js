import React from "react";
import "../styles/Resume.css";
import FadeInSection from "./FadeInSection";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Resume = () => {
    return (
        <div id="resume">
            <FadeInSection>
                <div className="section-header">
                    <span className="section-title">/ resume</span>
                </div>
                <div className="resume-content">
                    <p className="resume-description">
                        Feel free to download my resume below!
                    </p>
                    <a href="./najihaz/resume.pdf"
                    download="Najiha_Resume.pdf"
                    className="resume-button">
                        <span className="resume-icon"><FileDownloadIcon /></span>
                        Download Resume
                    </a>
                </div>
            </FadeInSection>
        </div>
    )
}

export default Resume;

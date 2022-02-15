import { useState } from "react";
import DropDown from "../dropDown/dropDown";
import "react-dropdown/style.css";
import WorkFlowArticle from "../workFlowArticles/workFlowArticle";

const WorkFlow = (props) => {
  const miro = () => {
    return (
      <div>
        <img src="./images/sFmiro.png" alt="" />
      </div>
    );
  };
  const miroAirTable = () => {
    return (
      <div>
        <img src="./images/sFmiro.png" alt="" />
        <img src="./images/sFsFairTable.png" alt="" />
      </div>
    );
  };
  const figJam = () => {
    return (
      <div>
        <img src="./images/sffigJam.png" alt="" />
      </div>
    );
  };
  const miroFigJamAlly = () => {
    return (
      <div>
        <img src="./images/sFmiro.png" alt="" />
        <img src="./images/sffigJam.png" alt="" />
        <img src="./images/sFally.png" alt="" />
      </div>
    );
  };
  const figma = () => {
    <div>
      <img src="./images/sFfigma.png" alt="" />
    </div>;
  };
  return (
    <section>
      <div className="page-explanation">
        <p>
          I am a systematic thinker with a strong technical proficiency in
          process related problems. I am an idea generator, discussion leader
          and advocate of data-driven design.
        </p>
      </div>
      <WorkFlowArticle
        img="./images/wFmvpScope.png"
        title="MVP/Scope Mapping"
        li1="Mind Mapped the problem space"
        li2="Initiated a unified UX recomendation"
        li3="Contributed to scope definition"
        softwareIcon={miro}
      />
      <WorkFlowArticle
        img="./images/wFdataSort.png"
        title="Data Sorting"
        li1="Survey with 300 responses"
        li2="5 questions with open-ended answers"
        li3="Created tagging system that research team implemented to process data"
        softwareIcon={miroAirTable}
      />
      <WorkFlowArticle
        img="./images/wFusability.png"
        title="Usability test preparation"
        li1="Created a map showing relationship between information architecture and navigation capacity"
        li2="Identified key testing focus areas"
        softwareIcon={figJam}
      />
      <WorkFlowArticle
        img="./images/wFpresSlide.png"
        title="Presentation slide, accessibility"
        li1="Completed heuristic analysis"
        li2="Provided recommendations based on findings"
        li3="Discovered critical accessibility issues and prioritized them"
        softwareIcon={miroFigJamAlly}
      />
      <WorkFlowArticle
        img="./images/wFdataVis.png"
        title="Data visualization"
        li1="Given a pie chart that wasn’t communicating the desired information"
        li2="Recommended this unique view for important data collected"
        softwareIcon={figma}
      />
    </section>
  );
};
export default WorkFlow;

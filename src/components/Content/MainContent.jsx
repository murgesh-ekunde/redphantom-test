import React from "react";
import timelineElements from "../../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./mainContent.css";

function MainContent() {
  return (
    <div className="mainContent">
      <div className="content">
     {/* Vertical timeline component */}
        <VerticalTimeline
          lineColor={
            "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)"
          }
        >
            {/* Props added from data.js so component can be reused */}
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                title={element.title}
                description={element.description}
                contentStyle={{ background: "none", boxShadow: "none" }}
                iconStyle={{
                  background: "black",
                  color: "white",
                  borderRadius: "5px",
                  textAlign: "center",
                  height: "25px",
                  padding: "auto",
                }}
                icon={element.date}
              >
                <h2 className="vertical-timeline-element-title underline__effect">
                  {element.title}
                </h2>
                <p>{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default MainContent;

import React from "react";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";

export const dateFormatting = (date) => {
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString();
  const formattedTime = dateObject.toLocaleTimeString();
  return { date: formattedDate, time: formattedTime };
};

export function GroupNaming({ names, maxNames }) {
  if (!names || names.length === 0) {
    return null;
  }

  const visibleNames = names.slice(0, maxNames);
  const remainingCount = names.length - maxNames;

  return (
    <div>
      {visibleNames.map((name, index) => (
        <span key={index}>
          {name}
          {visibleNames.length - 1 !== index && ","}{" "}
        </span>
      ))}
      {remainingCount > 0 && <span>{`& ${remainingCount} more`}</span>}
    </div>
  );
}

let lastIndex = -1;

export function randomColors(colors) {
  if (colors.length === 0) {
    return;
  }
  lastIndex = (lastIndex + 1) % colors.length;
  return colors[lastIndex];
}

export const hoverEffect = {
  background: "linear-gradient(to right, #5146D6 50%, #F1F2F6 50%)",
  backgroundSize: "200% 100%",
  backgroundPosition: "right bottom",
  transition: "background-position 0.5s ease-out, color 0.5s ease-out",
};

export function HTMLConverter({ children }) {
  const sanitizedHtml = DOMPurify.sanitize(children);
  return <>{ReactHtmlParser(sanitizedHtml)}</>;
}



// backgroundImage: `url(${
//   item.stage === 0
//     ? "/BL.png"
//     : item.stage === 1
//     ? "/answered.png"
//     : item.stage === 2
//     ? "/NotAnswered.png"
//     : item.stage === 3
//     ? "/MarkedforReview.png"
//     : "/Answered&MarkedReview.png"
// })`,



 // Function for setting different stages(accrd to student input)
  // //console.log("data", Data);
  // //console.log("questionStatus", questionStatus);
  // Stage = 0 --> Not Visited
  // Stage = 1 --> Answered
  // Stage = 2 --> Not Answered
  // Stage = 3 --> Mark for review
  // Stage = 4 --> Answered & Mark for review
export const checkType = (value) => {
  switch (value) {
    case 0:
      return {
        color:"white.900",
        type: "Not Visited",
      };
  
    case 1:
      return {
        color: "#69b01c",
        type: "Answered",
        clipPath: "polygon(50% 0%, 100% 38%, 100% 100%, 0 99%, 0% 38%)",
      };
  
    case 2:
      return {
        color: "#e74a01", 
        clipPath: "polygon(50% 0%, 100% 38%, 100% 100%, 0 99%, 0% 38%)",
        type: "Not Answered",   
      };
  
    case 3:
      return {
        color: "#9168c9", 
        type: "Mark for review",   
      };
  
    case 4:
      return {
        color: "#fbfaff", 
        type: "Answered & Mark for review",   
      };
  
    default:
      return {};
  }
};


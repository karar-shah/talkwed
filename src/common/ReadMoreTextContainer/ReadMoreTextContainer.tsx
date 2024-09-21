'use client'
import { useState } from "react";
const ReadMoreTextContainer  = ({ message }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let fullText = message;
  let previewText = fullText.split(" ").slice(0, 25).join(" ");
  return (
    <p className="font-medium text-[#565656]">
      {!isExpanded ? previewText : fullText}{" "}
      <span
        className="text-brand underline cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Read less" : "Read more"}
      </span>
    </p>
  )
};
export default ReadMoreTextContainer;
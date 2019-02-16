import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  height = "100%",
  viewBox="0 0 490.4 490.4",
  className = ""
}) => {
  return (
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    <path d="M245.2 490.4c135.2 0 245.2-110 245.2-245.2S380.4 0 245.2 0 0 110 0 245.2s110 245.2 245.2 245.2zm0-465.9c121.7 0 220.7 99 220.7 220.7s-99 220.7-220.7 220.7-220.7-99-220.7-220.7 99-220.7 220.7-220.7z"  fill={fill} />
    <path d="M180.3 310.1c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l47.6-47.6 47.6 47.6c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6c4.8-4.8 4.8-12.5 0-17.3l-47.8-47.6 47.6-47.6c4.8-4.8 4.8-12.5 0-17.3s-12.5-4.8-17.3 0l-47.6 47.6-47.6-47.6c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l47.6 47.6-47.6 47.6c-4.8 4.8-4.8 12.5 0 17.3z" fill={fill}/>
    </svg>
  );
};

export default SVG;
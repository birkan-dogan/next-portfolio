import React from "react";
import userData from "../constants/data";

const images = userData.mostUsedTech.map((item) => item.src);

const AtomBubbles = () => {
  return (
    <div className="relative flex items-center justify-center h-64 w-[240px]">
      <div
        className="w-24 h-24 rounded-full bg-white shadow-lg z-10"
        style={{
          backgroundImage:
            "url(https://cdn-icons-png.flaticon.com/128/3242/3242257.png)",
          backgroundSize: "cover",
        }}
      ></div>

      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute w-16 h-16 bg-white rounded-full shadow-md transform 
                      animate-rotate group-hover:animate-none`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "contain",
            position: "center",
            animationDelay: `${index * 1}s`,
            animationDuration: "8s",
          }}
        ></div>
      ))}
    </div>
  );
};

export default AtomBubbles;

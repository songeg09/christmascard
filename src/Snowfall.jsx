import React from "react";
import "./Snowfall.css";

export default function Snowfall() {
  const snowflakes = Array.from({ length: 50 });

  return (
    <>
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 14 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 5 + 5}px`, // 5px ~ 10px 크기
            height: `${Math.random() * 5 + 5}px`,
          }}
        ></div>
      ))}
    </>
  );
}

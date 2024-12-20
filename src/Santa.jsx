import React, { useState, useEffect } from "react";
import "./Santa.css";

export default function Santa() {
  const [isTop, setIsTop] = useState(true); // true면 상단에서 시작, false면 하단에서 시작
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true); // 산타가 나타남
      setTimeout(() => setVisible(false), 5000); // 5초 후에 사라짐
      setIsTop((prev) => !prev); // 상단/하단 위치 번갈아 설정
    }, 10000); // 10초 간격으로 반복

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  return (
    <div>
      {visible && (
        <div
          className={`santa ${isTop ? "top-santa" : "bottom-santa"}`} // 위치에 따라 클래스 변경
        ></div>
      )}
    </div>
  );
}

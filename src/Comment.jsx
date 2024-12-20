import "./Comment.css";
import React, { useState, useEffect } from "react";

export default function Comment() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (count === 5) {
      const timer = setTimeout(() => {
        setCount(0); // count를 0으로 초기화
      }, 10000); // 애니메이션 시간 (3초)

      return () => clearTimeout(timer); // 타이머 정리
    }
  }, [count]); // count가 5가 될 때 실행

  return (
    <div onClick={handleClick}>
      {count === 0 ? (
        <>
          <h2>Merry Christmas</h2>
          <h2>I Love You</h2>
          <h2>Thank You</h2>
          <h2>From Cool Eungyo</h2>
        </>
      ) : count > 0 && count < 5 ? (
        <>
          <h2>화면을 {5 - count}번 더 누르면</h2>
          <h2>무언가 나타날지도?</h2>
        </>
      ) : (
        <>
          <h2>울버린이 크리스마스를 축하해주러 왔다..!</h2>
          <img
            src="/wolverine.png"
            style={{
              width: "50%", // 부모 요소 너비의 50%
              maxWidth: "400px", // 최대 너비 400px
              height: "auto", // 이미지 비율 유지
              position: "fixed", // 화면 상단에 고정
              top: "10px", // 상단에서 10px 떨어짐
              left: "50%", // 중앙 정렬
              transform: "translateX(-50%)", // 가로 축 기준 중앙 정렬
              zIndex: 10, // 다른 요소 위에 표시
            }}
          ></img>
        </>
      )}
    </div>
  );
}

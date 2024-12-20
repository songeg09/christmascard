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
          <div
            className={`wolverine`} // 위치에 따라 클래스 변경
          ></div>
        </>
      )}
    </div>
  );
}

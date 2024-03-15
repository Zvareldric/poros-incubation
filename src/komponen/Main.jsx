import React, { useState, useEffect } from "react";
import Card from "./Card";

function Main() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  const [num3, setNum3] = useState(3);
  const [num4, setNum4] = useState(4);
  const [numChanges, setNumChanges] = useState(0);

  useEffect(() => {
    setNumChanges((prev) => prev + 1);
  }, [num1, num2, num3, num4]);

  useEffect(() => {
    setNumChanges(0);
  }, []);

  return (
    <>
      <body>
        <div className="count">{numChanges} number changes detected</div>
        <div className="wrapper">
          <Card className="box-1" number={num1} onClick={() => setNum1(num1 + 1)} />
          <Card className="box-2" number={num2} onClick={() => setNum2(num2 + 2)} />
          <Card className="box-3" number={num3} onClick={() => setNum3(num3 + 3)} />
          <Card className="box-4" number={num4} onClick={() => setNum4(num4 + 4)} />
        </div>
      </body>
    </>
  );
}

export default Main;

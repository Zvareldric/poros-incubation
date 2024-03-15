import React from "react";

function Card({ className, number, onClick }) {
  const tambah = () => {
    onClick();
  };

  return (
    <div className={`box ${className}`} onClick={tambah}>
      {number}
    </div>
  );
}

export default Card;

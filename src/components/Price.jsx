import React from "react";

export function Price({
  initial= 0.33,
  current= 5.3
}) {
  return (
    <div className='c-price'>
      <p>{initial}</p>
      <h4>{current}</h4>
    </div>
  );
}
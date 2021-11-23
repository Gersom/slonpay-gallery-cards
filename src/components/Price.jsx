import React from "react";

export function Price({
  title= 'Price',
  number= 5.3
}) {
  return (
    <div className='c-price'>
      <p className='c-price__title'>
        {title}</p>

      <h4 className='c-price__number'>
        {number} ETH</h4>
    </div>
  );
}
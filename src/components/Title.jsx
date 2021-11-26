import React from "react";

export function Title() {
  return (
    <div className='c-title'>
      <div className='c-title__wrapper'>
        <h1 className='c-title__text'>
          Monstruos</h1>
        <div className='c-title__input'>
          <label htmlFor="15646511">🔍</label>
          <input id='15646511' type="text" placeholder='Buscar monstruos y más' />
        </div>
      </div>
    </div>
  );
}
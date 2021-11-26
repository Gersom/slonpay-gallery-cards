import React from "react";

export function Filters() {
return (
  <div className='c-filters'>
    <div className='c-filters__wrapper'>
      <div className='c-filters__text'>
        🔥 Monstruos Populares
      </div>
      <div className='c-filters__content'>
        <button>All</button>
        <button>🌈 Art</button>
        <button>🤘 Art</button>
        <button>💎 Art</button>
        <button>🎨 Art</button>
      </div>
    </div>
  </div>
);
}
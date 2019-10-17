import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="headerSplit">
        <div className="logoBox">
          <div className="logoM">M</div>
          <div className="logoStackBox">
            <div className="logoTop">entor</div>
            <div className="logoBottom">e</div>
          </div>
        </div>
        <nav></nav>
      </div>
    </header>
  );
}

import React from 'react';
import styled from 'styled-components';
import Logo from '../logo/Logo.js';
import Nav from './Nav.js';

export default function Header() {
  const HeaderSplit = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4vw;
  `;

  return (
    <header>
      <HeaderSplit>
        <Logo />
        <Nav />
      </HeaderSplit>
    </header>
  );
}

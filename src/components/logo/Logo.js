import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  const LogoBox = styled.section`
    display: flex;
  `;

  const LogoM = styled.section`
    font-size: 15vw;
  `;

  const LogoStackBox = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    algin-items: center;
  `;

  const LogoTop = styled.section`
    font-size: 9vw;
    height: 5vw;
  `;

  const LogoBottom = styled.section`
    font-size: 9vw;
    height: 9vw;
  `;

  return (
    <LogoBox>
      <LogoM>M</LogoM>
      <LogoStackBox>
        <LogoTop>entor</LogoTop>
        <LogoBottom>e</LogoBottom>
      </LogoStackBox>
    </LogoBox>
  );
}

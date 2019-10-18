import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  const LogoBox = styled.section`
    display: flex;
    font-family: PTSerif-Caption;
  `;

  const LogoM = styled.section`
    font-size: 15vw;
    height: 15vw;
  `;

  const LogoStackBox = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const LogoTop = styled.section`
    font-size: 10vw;
    height: 8.75vw;
    vertical-align: bottom;
  `;

  const LogoBottom = styled.section`
    font-size: 6.5vw;
    height: 9vw;
    vertical-align: top;
  `;

  return (
    <LogoBox>
      <LogoM>M</LogoM>
      <LogoStackBox>
        <LogoTop>entor</LogoTop>
        <LogoBottom>E</LogoBottom>
      </LogoStackBox>
    </LogoBox>
  );
}

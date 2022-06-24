import React from 'react';
import styled from 'styled-components';
import "@fontsource/work-sans";

const HomePage = () => {
  return (
    <div>
      <NavBarWrapper>
        <NavBar>
          <NavElements href='#Indio'> Indio, CA </NavElements>
          <span> / </span>
          <NavElements href='#Coachella'> Coachella, CA </NavElements>
          <span> / </span>
          <NavElements href='#Moreno'> Moreno, CA </NavElements>
          <span> / </span>
          <NavElements href='#Lomita'> Lomita, CA </NavElements>
          <span> / </span>
          <NavElements href='#Huntsville'> Huntsville, AL </NavElements>
        </NavBar>
      </NavBarWrapper>
      <ImageWrapper>
        <HomePageImage src='assets/HomePage.jpg' alt='homepage'/>
        <ImageText>
          YOUR HOME AWAY FROM HOME
        </ImageText>
      </ImageWrapper>
      <DestinationsText>
        DESTINATIONS
      </DestinationsText>
    </div>
  )
}

export default HomePage;

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  border-bottom: .25px solid black;
`;

const NavBar = styled.nav`
  padding: 20px;
  font-size: 14px;
  font-family: Work Sans;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  a:link {
    color: black;
    text-decoration: none;
  }
  a:visited {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: #A67908;
    text-decoration: none;
  }
  a:active {
    color: black;
    text-decoration: none;
  }
`;

const NavElements = styled.a`
  padding: 10px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const HomePageImage = styled.img`
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  width: 100vw;
`;

const ImageText = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Antic Didone', serif;
  font-size: 50px;
  font-weight: 600;
  color: rgb(0 0 0 / 25%);;
`;

const DestinationsText = styled.div`
  margin: 20px 0px 20px 0px;
  padding: 20px;
  text-align: center;
  font-family: 'Cormorant', serif;
  font-size: 64px;
`;
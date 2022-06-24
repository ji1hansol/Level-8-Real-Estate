import React, { useState } from "react";
import './App.css';
import HomePage from './Homepage.jsx';
import Reserve from './Reserve.jsx';
import About from './About.jsx';
import Owner from './Owner.jsx';
import styled from 'styled-components';
import "@fontsource/work-sans";

const App = () => {
  const [view, setView] = useState('Home');

  const changeView = (name) => {
    setView(name);
  };

  const renderView = () => {
    switch (view) {
      case 'Home':
        return <HomePage />;
      case 'Reserve':
        return <Reserve />;
      case 'About':
        return <About />;
      case 'Owner':
        return <Owner />;
      default:
        return <HomePage />;
    };
  };

  return (
    <div>
      <NavBarWrapper>
        <Logo src='assets/logo2.png' alt='level8logo' onClick={() => {changeView('Home')}} />
        <RightNavBar>
          <RightNavElements href='#Reserve' onClick={() => {changeView('Reserve')}}> Reserve </RightNavElements>
          <RightNavElements href='#About' onClick={() => {changeView('About')}}> About Us </RightNavElements>
          <NavOwner href='#Owner' onClick={() => {changeView('Owner')}}> Owner Login </NavOwner>
        </RightNavBar>
      </NavBarWrapper>
      <div>
        {renderView()}
      </div>
    </div>
  );
}

export default App;

const NavBarWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: .25px solid black;
`;

const Logo = styled.img`
  width: auto;
  height: 100px;
  margin: 20px 0px 20px 50px;
  cursor: pointer;
`;

const RightNavBar = styled.nav`
  float: right;
  margin-right: 100px;
  font-size: 14px;
  font-family: Work Sans;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.0166667em;
  line-height: 9em;
  box-sizing: border-box;
  a:link {
    color: #A67908;
    text-decoration: none;
  }
  a:visited {
    color: #A67908;
    text-decoration: none;
  }
  a:hover {
    color: #A67908;
    text-decoration: none;
  }
  a:active {
    color: #A67908;
    text-decoration: none;
  }
`;

const RightNavElements = styled.a`
  padding: 2.5px 20px 2.5px 20px;
  border-right: .25px solid black;
`;

const NavOwner = styled.a`
  padding: 2.5px 10px 2.5px 10px;
`;
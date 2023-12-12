// ToggleSwitch.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 3.75rem;
  height: 2.13rem;
  margin-bottom: 0.63rem;
  margin-inline: auto;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: brown;
  transition: all .5s ease-in;
  border-radius: 2.15rem;
`;

const SliderHandle = styled.span`
  position: absolute;
  content: "";
  height: 1.65rem;
  width: 1.65rem;
  left: 0.25rem;
  bottom: 0.25rem;
  background-color: #fae29c;
  transition: 0.5s;
  border-radius: 50%;
`;

const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`toggle-switch ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <input type="checkbox" id="mode-toggle" onChange={toggleMode} />
      <span className="slider"></span>
    </div>
  );
}

export default ToggleSwitch;

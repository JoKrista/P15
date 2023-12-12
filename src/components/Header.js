// Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Welcome to My React App</h1>
    </HeaderContainer>
  );
}

export default Header;

import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <MainContainer>
          <h1>
            Welcome to the <br/> 
            MERN Stack blog!
          </h1>
        </MainContainer>
    );
  }
  
  export default Header;

//  Main Container

const MainContainer = styled.header`
background: url(../../images/header-bggg.jpg) no-repeat center/cover;
height: 25rem;

h1 {
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: 900;
  position: absolute;
  top: 25%;
  left: 50%
}
`;

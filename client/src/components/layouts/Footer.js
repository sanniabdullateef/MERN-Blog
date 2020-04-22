import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (

        <FooterContainer>
           <span style={{
            color: '#fff', 
            top: '1.5rem', 
            left: '1rem', 
            position: 'relative',
            float:"right"
            }}>
            &copy; {new Date().getFullYear()}All Right Reserved.OlaLaCoder
           </span>
        </FooterContainer>
    )
}

export default Footer

// MainFooter componen container

const FooterContainer = styled.footer`
  background: var(--dark-green);
  height:4rem;
  left: 0;
  bottom: 0;
  width: 100%
`;



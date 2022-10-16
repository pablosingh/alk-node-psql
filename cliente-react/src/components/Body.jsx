import React from 'react';
import styled from 'styled-components';
import image from '../img/dollar.jpg';
import Dashbord from './Dashbord';

const Body = () => {
  return (
    <Container>
        <Dashbord/>
    </Container>
  )
};
export default Body;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    min-height: 100vh;
    max-width: 100vw;
    &::before{
        content: '';
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-repeat: repeat-y;
        background: url(${image});
        opacity: 0.9;
        z-index: -1;
    }
`;


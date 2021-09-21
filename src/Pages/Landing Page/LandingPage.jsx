import React from 'react'
import landingimage from '../../img/Collection_Web.png';
import styled from 'styled-components';
import Socials from '../../Components/Social Bar/Socials';

const LandingDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #89aea9;
`
const Landingimport = styled.img`
width: clamp(500px, 75vw, 2100px);
`

export default function LandingPage() {
    return (
        <LandingDiv>

        <Landingimport src={landingimage}>
        
        </Landingimport>

        
        <Socials />
        </LandingDiv>
            
        
    )
}

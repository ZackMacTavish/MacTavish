import React from 'react'
import dribbble from '../../img/dribbble.svg';
import github from '../../img/github.svg';
import instagram from '../../img/instagram.svg';
import linkedin from '../../img/linkedin.svg';
import styled from 'styled-components';

const Socialbar = styled.div`
position: absolute;
bottom: 2vw;
display: flex;
width: 100vw;
justify-content: center;


`
const SocialImages = styled.img`
padding: 1vw;
width: clamp(24px, 2vw, 60px);
-webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;


&:hover{
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
 
    cursor: pointer;
}


`

export default function Socials() {
    return (
        <Socialbar>
            <SocialImages src={dribbble} />
            <SocialImages src={github} />
            <SocialImages src={instagram} />
            <SocialImages src={linkedin} />



        </Socialbar>
            

    )
}

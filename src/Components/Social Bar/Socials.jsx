import React from 'react'
import dribbble from '../../img/dribbble.svg';
import github from '../../img/github.svg';
import instagram from '../../img/instagram.svg';
import linkedin from '../../img/linkedin.svg';
import styled from 'styled-components';
import medium from '../../img/medium.svg';


const Socialbar = styled.div`
position: absolute;
bottom: 2vw;
display: flex;
width: 100vw;
justify-content: center;
align-items: center;


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
 

}


`

export default function Socials() {
    return (
        <Socialbar>

            

            <a href="https://dribbble.com/Zmactavish" target='_blank' rel="noreferrer" >
            <SocialImages src={dribbble} />
            </a>

            
            <a href="https://www.instagram.com/seuzerone/?hl=en" target='_blank' rel="noreferrer" >
            <SocialImages src={instagram} />
            </a>

           
            <a href="https://www.linkedin.com/in/zacharymactavish/" target='_blank' rel="noreferrer" >
            <SocialImages src={linkedin} />
            </a>

            <a href="  https://github.com/ZackMacTavish" target='_blank' rel="noreferrer" >
            <SocialImages src={github} />
            </a>

            <a href="https://medium.com/@zmactavish" target='_blank' rel="noreferrer" >
            <SocialImages src={medium} />
            </a>  


            



        </Socialbar>
            

    )
}

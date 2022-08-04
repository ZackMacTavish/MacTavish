import React, { useLayoutEffect } from 'react'
import { NewSectionTheme, ParagraphTwo } from '../Art Landing/Art'
import me from '../About/Me.jpeg';
import { TextLineone, TextSection } from '../Giga/Giga';
import styled from 'styled-components';

const About = () =>  {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

const AboutGrid = styled.div`
display: grid; 
grid-template-columns: 4vw 60vw 32vw 4vw;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
height: 100vh;
width: 100vw;
background-color: ${(props) => props.theme.backgroundColor};

@media (max-width: 450px) {
  height: 75vh;
}
`
const AboutPicture = styled.img`
width: 40vw;
padding-left: 2vw;

@media (max-width: 450px) { 
    width: 90vw;
    padding-top: 10vh;
  }
`
    
  return (
    <div> 
        
        <NewSectionTheme Backgroundheight="100vh">
    <AboutPicture src={me} />


    <ParagraphTwo Widthsize='50vw' >
    My name is Zack MacTavish and I've been a designer since 2015. I recently just finished a contract position with Microsoft. I am constantly taking on new projects for startups, and fortune 500 companies. 
    I am skilled in illustration, branding, packaging, print, digital, UX/UI, and front-end development (I hand coded this site).


    </ParagraphTwo>

  
  </NewSectionTheme>
  
 <AboutGrid>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3rem' style={{color: 'white'}}>Some of the agencies I have worked with include Publicis Groupe, Arkane Society, and Varfaj Partners. With clients such as Chip Ganassi Racing, Walmart, Leysi, VaynerSports, LoudLuxury, Three Pillars Recruiting, and many others.
            I have recently won my first design award, and you can find a link to this here: <a style={{textDecoration:'none', color: 'white'}} href="https://www.indigoawards.com/winners/2390"><h6>Indigo Awards.zackmactavish</h6></a></TextSection>
          
            </AboutGrid>

            <AboutGrid>
            <TextLineone RowsSet="1" />
            
            <TextSection Fontsize='3.5rem' style={{color: 'white'}}>Here are some of the things I would like to accomplish in 2022: <br/> Meet more art & design friends. Collaborate on some great projects. Write a weekly blog post on Medium. Prepare for my second solo art show. Build out a blog section on my website, and also build a music player section to display my musical collaborations with Alek Vasic.   </TextSection>
          
            </AboutGrid>
  
  </div>
  )
};

export default About;

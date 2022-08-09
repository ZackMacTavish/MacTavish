import React, {useLayoutEffect} from 'react'
import styled from 'styled-components';
import gigarocket from '../../img/Giga—Macbookv2.png';
import iphones from '../../img/iphones—Mockup.png';
import mocks from '../../img/Giga—mockup.jpg';
import { FullBg } from '../COMPOSITION/Composition';
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti';
import messages from '../../img/Messages—1920 x 1400.png';
import imac from '../../img/iMac_2.jpg';
import ipadtwo from '../../img/iPad2.jpg';
import dark from '../../img/iPhone_2—Dark—Sq.jpg';
import light from '../../img/LightPhone2—Sq.jpg';
import imactwo from '../../img/iMac.jpg';
import about from '../../img/About.png';
import photos from '../../img/Photos1.jpg';
import photostwo from '../../img/Photos2.jpg';
import photosthree from '../../img/Photos3.jpg';
import photosfour from '../../img/Photos4.jpg';
import guides from '../../img/Guides.jpg';
import create from '../../img/CreateNewPost.png';
import { SingleGrid } from '../Access Direct/AD';

export const GigaGridone = styled.div`
display: grid;
grid-template-columns: ${(props) => props.ColumnsSet};
grid-template-rows: ${(props) => props.RowsSet};
background-color: ${props => props.theme.backgroundTwo};
height: 100vh;
width: 100vw;

@media (max-width: 850px) {
    grid-template-columns: 100vw;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}
` 
export const GigaGridtext = styled.div`
display: grid;
grid-template-columns: ${(props) => props.ColumnsSet};
grid-template-rows: ${(props) => props.RowsSet};
background-color: ${props => props.theme.backgroundTwo};
height: 100vh;
width: 100vw;

@media (max-width: 850px) {
    grid-template-columns: 100vw;
    grid-template-rows: 5vw 1fr 5vw;
}
` 
export const GigaRocket = styled.img`
width: 60vw;
height: auto;
grid-row-start: ${(props) => props.RowStart};
grid-row-end: 8;
align-self: center;
justify-self: center;
grid-column-start: ${(props) => props.ColumnStart};
grid-column-end: ${(props) => props.ColumnEnd};
@media (max-width: 850px) {
    grid-row-start: 2;
    grid-row-end: 3;
      grid-column-start: 1;
      width: 95vw;

  }
`

export const GigaHeader = styled.h2`
grid-row-start: 4;
grid-column-start: 3;
align-self: flex-end;
font-size: 4.5rem;
font-family: 'Space Grotesk', sans-serif;
color: ${(props) => props.theme.fontColor};

&:after {
    content:"";
    display: flex;
    width: clamp(20px, 17vw, 500px);
  height: 10px;
  margin-top: 10px;
  background: ${(props) => props.theme.fontColor};
  }
  @media (max-width: 850px) {
      grid-column-start: 1;
      padding-left: 2vw;
      grid-row-start: 3;
      font-size: 3rem;
  }
`


export const GigaWeb = styled.a`
grid-row-start: ${(props) => props.RowsSet};
grid-column-start: 3;
align-self: flex-start;
font-family: 'Space Grotesk', sans-serif;
color: ${(props) => props.theme.fontColor};
text-decoration: none;

&:hover{
    opacity: 75%;
}
@media (max-width: 850px) {
      grid-column-start: 1;
      padding-left: 2vw;
  }
`

export const GigaTwo =styled.h2`
font-size: 1.4rem;
margin-top: -3vh;
`

export const TextLineone = styled.div`
 width: clamp(250px, 80vw, 2300px);
 grid-row-start: ${(props) => props.RowsSet};
 grid-column-start: 2;
 grid-column-end: 4;
 align-self: center;
 justify-self: center;
  height: 10px;
  background: #5D5D5D;
  @media (max-width: 850px) {
      grid-column-start: 1;
     grid-column-end: 2;
  }
  
`

export const TextLinetwo = styled.div`
 width: clamp(250px, 80vw, 2300px);
 grid-row-start: ${(props) => props.RowsSet};
 grid-column-start: 2;
 grid-column-end: 4;
 align-self: center;
 justify-self: center;
  height: 10px;
  background: #5D5D5D;
  @media (max-width: 850px) {
      grid-column-start: 1;
      grid-row-start: 3;
     grid-row-end: 4;
  }
  
`

export const TextSection = styled.h3`
grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 2;
grid-row-end: 7;
font-size: ${(props) => props.Fontsize};
width: 80vw;
font-family: 'Space Grotesk', sans-serif;
justify-self: center;
align-self: center;
color: ${(props) => props.theme.fontColor};

@media (max-width: 1400px) {  
font-size: 1.8rem;
;}

@media (max-width: 850px){
    grid-column-start: 1;
    grid-row-end: 3;
    font-size: 1.2rem;
    width: 94vw;
    padding-left: 4vw;
    padding-right: 4vw;
    height: auto;
}
`

export const RisoItemtwo = styled.img`
width: ${(props) => props.Width};
box-shadow: 5px 10px 24px rgba(0, 0, 0, 0.3);
margin-top: 3vh;
margin-bottom: 3vh;

@media(max-width: 1400px) {
    width: 96vw;
    height: auto;
}

@media(max-width: 850px) {
    width: 96vw;
    height: auto;
}
`

export const BackgroundColor = styled.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`

export const StyledDiv = styled.div`
background-color: ${props => props.theme.backgroundTwo};
`

export const Cellphones = styled.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`


export default function Giga() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <StyledDiv>
            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
           <GigaRocket ColumnStart="2" RowStart="2" src={gigarocket} />
           
           <GigaHeader>Giga</GigaHeader>
          
           <GigaWeb RowsSet={5} href="https://gigaintelligence.com" target="_blank" rel="noreferrer noopener">
           <GigaTwo>gigaintelligence.com</GigaTwo>
           </GigaWeb>
            </GigaGridone>

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' >Giga is a digital services platform for bloggers, writers, and creatives. I am the lead designer for Giga, and I enjoy creating new flows, and thinking about how a user navigates the website.</TextSection>
            <TextLinetwo />
            </GigaGridtext>

            <FullBg src={iphones} />
            <FullBg src={mocks} />

            <RisoFlex>
                <RisoItemtwo src={messages} Width='60vw' />
            </RisoFlex>

            <RisoFlex>
                <RisoItemtwo src={create} Width='60vw' />
            </RisoFlex>

            <FullBg src={imac} />

            <RisoFlex>
                <RisoItem src={ipadtwo} Width='65vw' />
            </RisoFlex>

           <Cellphones>
                <RisoItem Width='50vw' src={dark} />
                <RisoItem Width='50vw' src={light} />
            </Cellphones>

            <RisoFlex>
                <RisoItem src={imactwo} Width='65vw' />
            </RisoFlex>

            <RisoFlex>
                <RisoItem  src={about} Width='65vw' />
            </RisoFlex>

         <div style={{display:'grid', height: '25vh', gridTemplateRows:'5vh 5vh 5vh 5vh 5vh', gridTemplateColumns:'4vw 60vw 32vw 4vw'}} >
            <TextLineone RowsSet="3" />

        </div>

        <FullBg src={photos} />
        <FullBg src={photostwo} />
        <FullBg src={photosthree} />
        <FullBg src={photosfour} />

        <FullBg src={guides} />


            
        <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founder — Rich Devlin <br />
Lead Designer — Zachary MacTavish <br />
Front-End Development — Xing Yi & Joel Fernando  <br />
Back-End Development — Rich Devlin</TextSection>
            <TextLinetwo />
            </GigaGridtext>
        </StyledDiv>



    )
}

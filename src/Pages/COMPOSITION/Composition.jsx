import React from 'react'
import styled from 'styled-components';
import fullcover from '../../img/FullCover.png';
import renderone from '../../img/Render1.png';
import { HouseOne, NewSection } from '../Art Landing/Art';
import artbook from '../../img/Artbook.png';
import orbital from '../../img/Orbital.jpeg';
import spraywash from '../../img/Spraypaintwash.png';
import rendertwo from '../../img/Render2.png';
import twin1 from '../../img/Twin1.jpeg';
import twin2 from '../../img/Twin2.jpeg';
import staircases from '../../img/Staircases.jpg';
import heartwhite from '../../img/heartwhite.jpeg';
import heartblack from '../../img/heartblack.jpg';

const LanderSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
overflow: hidden;
`

const FullCover = styled.img`
width: 60vw;

`

const Orbital = styled.img`
grid-row-start: 1;
grid-column-start: 2;
justify-self: flex-start;
height: 85vh;
width: auto;
`

const TwinTwo = styled.img`
grid-row-start: 1;
grid-column-start: 3;
justify-self: flex-start;
height: 85vh;
width: auto;
`

const TwinsText = styled.div`
grid-row-start: 2;
grid-column-start: 2;
justify-self: flex-start;
color: #626262;
padding: 0;
margin: 0;
line-height: 0.6;
font-family: 'Space Grotesk', sans-serif;
`

const GridRowTwo = styled.img`
grid-row-start: 3;
grid-column-start: 2;
justify-self: flex-start;
height: 85vh;

width: auto;
`

const FullBg = styled.img`
width: 100vw;
height: auto;
background-size: contain;
`

const ParagraphFour = styled.div`
position: absolute;
right: 3vw;
font-family: 'Space Grotesk', sans-serif;
font-weight: 500;
font-size: 2.7rem;
width: 40vw;
color: #626262;
`
{/* Section with two standard pieces column wise */}
export const ArtSection = styled.div`
display: grid;
grid-template-columns:  10vw 40vw 40vw 10vw;
grid-template-rows: 85vh 7vh 85vh 7vh;
padding-top: 5vh;
background-color:${(props) => props.Backgroundcolor};
`
{/* Section with two pieces side by side horizontally */}
export const ArtSectiontwo = styled.div`
display: grid;
grid-template-columns:  10vw 40vw 40vw 10vw;
grid-template-rows: 85vh 10vh 15vh;
padding-top: 5vh;
background-color:${(props) => props.Backgroundcolor};
`
{/* Section with single piece with text */}
export const ArtSectionsingle = styled.div`
display: grid;
grid-template-columns:  10vw 40vw 40vw 10vw;
grid-template-rows: 85vh 10vh;
padding-top: 5vh;
background-color:${(props) => props.Backgroundcolor};
`
export const ArtText = styled.div`
display: grid;
grid-column-start: 3;
grid-row-start: 1;
align-self: flex-end;
padding: 0;
margin: 0;
padding-left: 4vw;
line-height: 0;
color: #626262;
font-family: 'Space Grotesk', sans-serif;
`

export const ArtTexttwo = styled.div`
display: grid;
grid-column-start: 3;
grid-row-start: 3;
align-self: flex-end;
padding: 0;
margin: 0;
padding-left: 4vw;
line-height: 0;
color: #626262;
font-family: 'Space Grotesk', sans-serif;
`

export const ArtHeader = styled.h1`
font-weight: 700;
font-size: 2.5rem;
`

export const ArtYear = styled.h3`
font-weight: 500;
font-size: 2rem;
`

export const ArtDesc = styled.h2`
font-weight: 400;
font-size: 1.4rem;
`


export default function Composition() {
    return (<div>

{/*COMPOSITION NOTEBOOK Part 2 Landing */}
  <LanderSection>
            <FullCover src={fullcover} />
        </LanderSection>

{/*RENDER 1 FULL SCREEN */}
        
                <FullBg src={renderone} />

                <NewSection>
                    
<HouseOne src={artbook} />
                    <ParagraphFour>
                    Composition was my first solo art exhibition. I released a limited edition of 30 copies of a 46 page art book for 
the show.

                    </ParagraphFour>
                    </NewSection>

                    <ArtSection>
                    <Orbital src={orbital} />
                            <ArtText> 

                            <ArtHeader>ORBITAL</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Acrylic & spray paint on woodpanel.</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={spraywash} />
                            <ArtTexttwo> 

                            <ArtHeader>ERASURE I</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Acrylic, spray paint, & spray paint remover on woodpanel.</ArtDesc>

                            </ArtTexttwo>
                        
                        
                    

                    </ArtSection>

{/*RENDER 2 FULL SCREEN */}
                    <FullBg src={rendertwo} />
{/*EPHEMERAL I & II SECTION */}
                    <ArtSectiontwo>
                    <Orbital src={twin1} />
                    <TwinTwo src={twin2} />

                    <TwinsText>
                        <ArtHeader>EPHEMERAL I & II</ArtHeader>
                        <ArtYear>2021</ArtYear>
                        <ArtDesc>Acrylic & spray paint on wood panels.</ArtDesc>

                    </TwinsText>
                    </ArtSectiontwo>

{/*STAIRCASES SINGLE SECTION */}
                    <ArtSectionsingle>
                    <Orbital src={staircases} />
                    <ArtText> 

                            <ArtHeader>STAIRCASES</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Graphite on heavy paper.</ArtDesc>

                            </ArtText>

                    </ArtSectionsingle>

                    {/*EPHEMERAL I & II SECTION */}
                    <ArtSectiontwo>
                    <Orbital src={heartwhite} />
                    <TwinTwo src={heartblack} />

                    <TwinsText>
                        <ArtHeader>COMPOSITION X</ArtHeader>
                        <ArtYear>2021</ArtYear>
                        <ArtDesc>Acrylic on wood panel.</ArtDesc>

                    </TwinsText>
                    </ArtSectiontwo>
                    

       


    </div>
      
    )
}

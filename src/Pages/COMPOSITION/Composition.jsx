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
import birds from '../../img/Birds.jpg';
import brooklyn from '../../img/Brooklyn.jpg';
import coney from '../../img/Coney.jpg';
import brooklyn2 from '../../img/Brooklyn2.jpg';
import render4 from '../../img/Render4.png';
import rug from '../../img/Rug.jpg';
import mash1 from '../../img/Mash1.png';
import mash2 from '../../img/Mash2.png';
import render5 from '../../img/Render5.png';
import mash3 from '../../img/Mash3.png';
import mash4 from '../../img/Mash4.png';
import mash5 from '../../img/Mash5.png';
import mattos from '../../img/Mattos.png';
import og from '../../img/No.3.png';
import grain from '../../img/Grain.jpg';

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
{/* Art resting on row one */}
export const Orbital = styled.img`
grid-row-start: 1;
grid-column-start: 2;
justify-self: flex-start;
height: 85vh;
width: auto;
`
{/* Art resting on row one */}
const Rug = styled.img`
grid-row-start: 1;
grid-column-start: 2;
justify-self: flex-start;
height: auto;
width: 40vw;
align-self: flex-end;
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
{/* Art resting on row two */}
export const GridRowTwo = styled.img`
grid-row-start: 3;
grid-column-start: 2;
justify-self: flex-start;
height: 85vh;
width: auto;
`
{/* Art resting on row three */}
export const GridRowThree = styled.img`
grid-row-start: 5;
grid-column-start: 2;
justify-self: flex-start;
height: 85vh;
width: auto;
`

export const FullBg = styled.img`
width: 100vw;
height: auto;
margin-top: -1vh;
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
{/* Section with three standard pieces column wise */}
export const ArtSectionthree = styled.div`
display: grid;
grid-template-columns: 10vw 40vw 40vw 10vw;
grid-template-rows: ${(props) => props.Grids};
padding-top: 5vh;
background-color:${(props) => props.Backgroundcolor};
`
{/* Text sitting on row one*/}
export const ArtText = styled.div`
display: grid;
grid-column-start: 3;
grid-row-start: 1;
align-self: flex-end;
padding: 0;
margin: 0;
padding-left: 4.5vw;
line-height: 0;
color: #626262;
font-family: 'Space Grotesk', sans-serif;
`
{/* Text sitting on row two*/}
export const ArtTexttwo = styled.div`
display: grid;
grid-column-start: 3;
grid-row-start: 3;
align-self: flex-end;
padding: 0;
margin: 0;
padding-left: 4.5vw;
line-height: 0;
color: #626262;
font-family: 'Space Grotesk', sans-serif;
`
{/* Text sitting on row three*/}
export const ArtTextthree = styled.div`
display: grid;
grid-column-start: 3;
grid-row-start: 5;
align-self: flex-end;
padding: 0;
margin: 0;
padding-left: 4.5vw;
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


{/*Art Book + Text */}
                <NewSection>
                    
<HouseOne src={artbook} />
                    <ParagraphFour>
                    Composition was my first solo art exhibition. I released a limited edition of 30 copies of a 46 page art book for 
the show.

                    </ParagraphFour>
                    </NewSection>

                    {/* Orbital + Erasure I */}

                    <ArtSectionthree Grids='85vh 7vh 85vh 7vh'>
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
                        
                    </ArtSectionthree>

{/*RENDER 2 FULL SCREEN */}
                    <FullBg src={rendertwo} />
{/*EPHEMERAL I & II SECTION */}
                    <ArtSectionthree Grids='85vh 10vh 15vh'>
                    <Orbital src={twin1} />
                    <TwinTwo src={twin2} />

                    <TwinsText>
                        <ArtHeader>EPHEMERAL I & II</ArtHeader>
                        <ArtYear>2021</ArtYear>
                        <ArtDesc>Acrylic & spray paint on wood panels.</ArtDesc>

                    </TwinsText>
                    </ArtSectionthree>

{/*STAIRCASES SINGLE SECTION */}
                    <ArtSectionthree Grids='85vh 10vh'>
                    <Orbital src={staircases} />
                    <ArtText> 

                            <ArtHeader>STAIRCASES</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Graphite on heavy paper.</ArtDesc>

                            </ArtText>

                    </ArtSectionthree>

                    {/*EPHEMERAL I & II SECTION */}
                    <ArtSectionthree Grids='85vh 10vh 15vh'>
                    <Orbital src={heartwhite} />
                    <TwinTwo src={heartblack} />

                    <TwinsText>
                        <ArtHeader>COMPOSITION X</ArtHeader>
                        <ArtYear>2021</ArtYear>
                        <ArtDesc>Acrylic on wood panel.</ArtDesc>

                    </TwinsText>
                    </ArtSectionthree>

                    {/*BIRDS FULL SCREEN */}
                    <FullBg src={birds} />


                    {/* 3 photos - Passing Grid-template-row props */}
                    <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>
                    <Orbital src={coney} />
                            <ArtText> 

                            <ArtHeader>CONEY ISLAND, NY</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Film photograph with light leaks.</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={brooklyn} />
                            <ArtTexttwo> 

                            <ArtHeader>BROOKLYN, NY I</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Double exposure film photograph.</ArtDesc>

                            </ArtTexttwo>

                            <GridRowThree src={brooklyn2} />
                            <ArtTextthree> 

                            <ArtHeader>BROOKLYN, NY II</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Double exposure film photograph.</ArtDesc>

                            </ArtTextthree>

                            </ArtSectionthree>

                               {/*Render4 FULL SCREEN */}
                    <FullBg src={render4} />

                    {/* 3 Mashes - Passing Grid-template-row props*/}
                    <ArtSectionthree Grids='60vh 7vh 85vh 7vh 85vh 7vh'>
                    <Rug src={rug} />
                            <ArtText> 

                            <ArtHeader>RUG I</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>100% Wool & Monks cloth.</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={mash1} />
                            <ArtTexttwo> 

                            <ArtHeader>Design for COMPOSITION III</ArtHeader> 
                            <ArtYear>2019</ArtYear> 
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc> 

                            </ArtTexttwo>  

                            <GridRowThree src={mash2} />  
                            <ArtTextthree> 

                            <ArtHeader>Design for COMPOSITION IV</ArtHeader> 
                            <ArtYear>2019</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc> 

                            </ArtTextthree> 

                            </ArtSectionthree>

                                {/*Render5 FULL SCREEN */}
                    <FullBg src={render5} />

                     {/* 3 photos - Passing Grid-template-row props */}
                     <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>
                    <Orbital src={mash3} />
                            <ArtText> 

                            <ArtHeader>Design for COMPOSITION V</ArtHeader>
                            <ArtYear>2019</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={mash4} />
                            <ArtTexttwo> 

                            <ArtHeader>Design for COMPOSITION VI</ArtHeader>
                            <ArtYear>2019</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc>

                            </ArtTexttwo>

                            <GridRowThree src={mash5} />
                            <ArtTextthree> 

                            <ArtHeader>Design for COMPOSITION VII</ArtHeader>
                            <ArtYear>2020</ArtYear>
                            <ArtDesc>Digital collage (study for a painting).</ArtDesc>

                            </ArtTextthree>

                            </ArtSectionthree>

                                  {/*MATTOS FULL SCREEN */}
                                    <FullBg src={mattos} />

                        {/* 3 Pieces - Passing Grid-template-row props */}
                     <ArtSectionthree Grids='85vh 7vh 85vh 7vh '>
                    <Orbital src={og} />
                            <ArtText> 

                            <ArtHeader>Design for COMPOSITION I</ArtHeader>
                            <ArtYear>2018</ArtYear>
                            <ArtDesc>Digital collage (study for a screenprint).</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={grain} />
                            <ArtTexttwo> 

                            <ArtHeader>GRAIN</ArtHeader>
                            <ArtYear>2021</ArtYear>
                            <ArtDesc>Acrylic & spraypaint on yupo paper.</ArtDesc>

                            </ArtTexttwo>

                        

                            </ArtSectionthree>



    </div>
      
    )
}

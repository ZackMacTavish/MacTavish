import React, {useLayoutEffect} from 'react'
import gigarocket from '../../img/4.png';
import iphones from '../../img/Cover.png';
import mocks from '../../img/1.png';
import { FullBg, ParagraphFour } from '../COMPOSITION/Composition';
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti';
import messages from '../../img/OneSock-01.png';
import messagestwo from '../../img/BHCwelcomemat2-01.png';
import messagesthree from '../../img/BringHomeChristmas2 (2).png';
import messagesfour from '../../img/BHCstacked3-01.png';
import threestack from '../../img/3Stack.png';
import gobackbig from '../../img/GobackBig.jpg';
import btc from '../../img/BTC-2.jpg';
import bbfone from '../../img/BrooklynBookFestMockup.jpg';
import bbftwo from '../../img/BKBFToteBag.jpg';
import bbfthree from '../../img/BKBFBookmark.jpg';
import bbffour from '../../img/BBFPosterframed.jpg';
import bbffive from '../../img/BBFAd.jpg';
import ironlakadvert from '../../img/IronlakAdvert2.jpg';
import ironlakadone from '../../img/Group 55614@2x.png';
import ironlakadtwo from '../../img/Group 55615@2x.png';
import ironlaksweaters from '../../img/Group 55616@2x.png';
import backcover from '../../img/Back + Cover.png';
import backcovertwo from '../../img/3.png';
import backcoverthree from '../../img/2.png';
import graphicposters from '../../img/GP1.jpg';
import oliviafloral from '../../img/OliviaFloralMockup.jpg';
import goodbyehello from '../../img/GP2.jpg';
import artbook from '../../img/ThisIsIt.jpg';
import styled from 'styled-components';
import {GigaGridone, GigaHeader, TextLineone, TextSection, RisoItemtwo, StyledDiv, GigaGridtext, TextLinetwo} from '../Giga/Giga';
import { HouseOne, NewSection } from '../Art Landing/Art';

export const Pineapple = styled.img`
width: 40vw;
height: auto;
grid-row-start: ${(props) => props.RowStart};
grid-row-end: 8;
align-self: center;
justify-self: center;
grid-column-start: ${(props) => props.ColumnStart};
grid-column-end: ${(props) => props.ColumnEnd};
@media (max-width: 850px) {
    grid-row-start: 2;
    padding-top: 4vh;
    grid-row-end: 3;
      grid-column-start: 1;
      width: 95vw;

  }
`
export const ThisisIt = styled.img`
width: 30vw;
padding-left: 15vw;

@media (max-width: 1000px) { 
  padding: 0;
    width: 96vw;
  }
`

export default function GraphicDesign() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <StyledDiv>
            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
           <Pineapple ColumnStart="2" RowStart="2" src={gigarocket} />
           
           <GigaHeader>Graphic Design</GigaHeader>
            </GigaGridone>

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Stay Golden was a passion project to represent a series of songs created with a friend Alek Vasic. It won a silver & bronze for digital art, and packaging design from Indigo design awards. </TextSection>
            <TextLinetwo />
            </GigaGridtext>

            <FullBg src={iphones} />
            <FullBg src={mocks} />
            <FullBg src={backcover} />
            <FullBg src={backcovertwo} />
            <FullBg src={backcoverthree} />

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Graphic Posters meet at the intersection of my art and design practice. This includes passion projects, and a poster for the 2017 VCD Design show in Chicago, IL.</TextSection>
            <TextLinetwo />
            </GigaGridtext>

            <FullBg src={graphicposters} />
            <FullBg src={oliviafloral} />
            <FullBg src={goodbyehello} />

            {/*Art Book + Text */}
            <NewSection Backgroundheight="95vh">
                    
                    <ThisisIt src={artbook} />
                                        <ParagraphFour>
                                        'This is it' was a poster design I made for the 2017 SAIC VCD Design show. The piece explores a quote from the movie 'Style Wars'.
                    
                                        </ParagraphFour>
                                        </NewSection>


                                        <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Working alongside the Walmart team at Publicis, we created a variety of designs to present to Marketing. The lines I worked on were the Christmas, Halloween, and Back To School campaigns.</TextSection>
            <TextLinetwo />
            </GigaGridtext>


            <RisoFlex>
                <RisoItemtwo style={{boxShadow:'none'}} src={messages} Width='50vw' />
            </RisoFlex>


            <RisoFlex>
                <RisoItemtwo style={{boxShadow:'none'}} src={messagestwo} Width='75vw' />
            </RisoFlex>

            <RisoFlex>
                <RisoItemtwo style={{boxShadow:'none'}} src={messagesthree} Width='60vw' />
            </RisoFlex>

            <FullBg style={{paddingTop: '10vh'}} src={messagesfour} />

            <RisoFlex >
                <RisoItem  src={threestack} Width='65vw' />
            </RisoFlex>

            <FullBg src={gobackbig} />

            <FullBg src={btc} />

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Brooklyn Book Festival is a rebranding of a popular festival that occurs in Brooklyn, NY. 
                I designed totes, bookmarks, brochures, and posters for the event. </TextSection>
            <TextLinetwo />
            </GigaGridtext>


            <RisoFlex>
                <RisoItem  src={bbfone} Width='65vw' />
            </RisoFlex>

          

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={bbftwo} Width='65vw' />
            </RisoFlex>


            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={bbfthree} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={bbffour} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={bbffive} Width='65vw' />
            </RisoFlex>

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>By working on my own version of an Ironlak marketing campaign, it led to me interning for Ironlak shortly after my graduation. 
                I worked on a variety of advertisements.</TextSection>
            <TextLinetwo />
            </GigaGridtext>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={ironlakadvert} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={ironlakadone} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={ironlakadtwo} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={ironlaksweaters} Width='65vw' />
            </RisoFlex>


        </StyledDiv>



    )
}

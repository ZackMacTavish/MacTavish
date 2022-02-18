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

import {GigaGridone, GigaRocket, GigaHeader, TextLineone, TextSection, RisoItemtwo, BackgroundColor} from '../Giga/Giga';
import { HouseOne, NewSection } from '../Art Landing/Art';

export default function GraphicDesign() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
           <GigaRocket style={{width: '40vw'}} ColumnStart="2" RowStart="2" src={gigarocket} />
           
           <GigaHeader>Graphic Design</GigaHeader>
            </GigaGridone>

            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Stay Golden was a passion project to represent a series of songs created with a friend Alek Vasic. It won a silver & bronze for digital art, and packaging design from Indigo design awards. </TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>

            <FullBg src={iphones} />
            <FullBg src={mocks} />
            <FullBg src={backcover} />
            <FullBg src={backcovertwo} />
            <FullBg src={backcoverthree} />

            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Graphic Posters meet at the intersection of my art and design practice. This includes passion projects, and a poster for the 2017 VCD Design show in Chicago, IL.</TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>

            <FullBg src={graphicposters} />
            <FullBg src={oliviafloral} />
            <FullBg src={goodbyehello} />

            {/*Art Book + Text */}
            <NewSection Backgroundheight="85vh">
                    
                    <HouseOne style={{width: '30vw', paddingLeft: '15vw'}} src={artbook} />
                                        <ParagraphFour>
                                        'This is it' was a poster design I made for the 2017 SAIC VCD Design show. The piece explores a quote from the movie 'Style Wars'.
                    
                                        </ParagraphFour>
                                        </NewSection>


                                        <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Working alongside the Walmart team at Publicis, we created a variety of designs to present to Marketing. The lines I worked on were the Christmas, Halloween, and Back To School campaigns.</TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>


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

            <RisoFlex style={{height:'50vh'}}>
                <RisoItem  src={threestack} Width='65vw' />
            </RisoFlex>

            <FullBg src={gobackbig} />

            <FullBg src={btc} />

            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Brooklyn Book Festival is a rebranding of a popular festival that occurs in Brooklyn, NY. 
                I designed totes, bookmarks, brochures, and posters for the event. </TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>


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

            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>By working on my own version of an Ironlak marketing campaign, it led to me interning for Ironlak shortly after my graduation. 
                I worked on a variety of advertisements.</TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>

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








            

        </div>



    )
}

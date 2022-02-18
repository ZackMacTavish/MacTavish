import React, {useLayoutEffect} from 'react'
import highpower from '../../img/Highpower.jpg';
import iphones from '../../img/AD—iphones.jpg';
import mocks from '../../img/AD—pages.jpg';
import { FullBg } from '../COMPOSITION/Composition';
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti';
import admac from '../../img/AD—Macs.jpg';
import imac from '../../img/AD—Macbook.png';
import ipadtwo from '../../img/AD-ipad.jpg';
import dark from '../../img/iPhone_2—Dark.jpg';
import light from '../../img/LightPhone2.jpg';
import imactwo from '../../img/ADiMac.jpg';
import about from '../../img/Group 375.jpg';
import photos from '../../img/ADphotos1.jpg';
import photostwo from '../../img/ADphotos2.jpg';
import photosthree from '../../img/ADphotos3.jpg';
import guides from '../../img/Guides2.jpg';
import create from '../../img/Group 274.jpg';
import { BackgroundColor, GigaGridone, GigaHeader, GigaRocket, GigaTwo, GigaWeb, RisoItemtwo, TextLineone, TextSection } from '../Giga/Giga';

export default function AccessDirect() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
           <GigaRocket ColumnStart="2" RowStart="2" src={imac} />
           
           <GigaHeader>Access Direct</GigaHeader>
          
           <GigaWeb RowsSet={5} href="https://access-direct.net" target="_blank" rel="noreferrer noopener">
           <GigaTwo>access-direct.net</GigaTwo>
           </GigaWeb>
            </GigaGridone>

            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Access Direct is a company focused on  security solutions. My responsibility includes being the UI Designer, and Webmaster for Access Direct. I enjoyed redesigning their website, and building it using React.js.</TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>

            <FullBg src={iphones} />
            <FullBg src={mocks} />

            <RisoFlex>
                <RisoItemtwo src={highpower} Width='60vw' />
            </RisoFlex>

            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'>

            <GigaRocket style={{boxShadow: '5px 10px 24px rgba(0, 0, 0, 0.3'}} RowStart='2' ColumnStart="2" ColumnEnd="4" src={create} />
            <BackgroundColor style={{backgroundColor:'#1F55B9'}} />
            </GigaGridone>

            <FullBg src={admac} />

            <RisoFlex>
                <RisoItem src={ipadtwo} Width='65vw' />
            </RisoFlex>

            <div style={{display: 'flex', height: '100vh', width: '100vw'}}>
                <RisoItem src={dark} />
                <RisoItem src={light} />
            </div>

            <RisoFlex>
                <RisoItem src={imactwo} Width='65vw' />
            </RisoFlex>

            <RisoFlex>
                <RisoItem style={{boxShadow: '5px 10px 24px rgba(0, 0, 0, 0.3'}}  src={about} Width='65vw' />
            </RisoFlex>

         <div style={{display:'grid', height: '25vh', gridTemplateRows:'5vh 5vh 5vh 5vh 5vh', gridTemplateColumns:'4vw 60vw 32vw 4vw'}} >
            <TextLineone RowsSet="3" />

        </div>

        <FullBg src={photosthree} />
        <FullBg src={photostwo} />
        <FullBg src={photos} />
       

        <FullBg src={guides} />


            
        <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founder — David Smith <br />
Lead Designer — Zachary MacTavish <br />
Website Development — Zachary MacTavish  <br />
Content Direction — Wendy Majewski, Alek Vasic</TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>
        </div>



    )
}





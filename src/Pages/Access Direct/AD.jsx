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
import { BackgroundColor, Cellphones, GigaGridone, GigaGridtext, GigaHeader, GigaRocket, GigaTwo, GigaWeb, RisoItemtwo, StyledDiv, TextLineone, TextLinetwo, TextSection } from '../Giga/Giga';
import styled from 'styled-components';

export const SingleGrid = styled.div`
display: grid;
grid-template-columns: ${(props) => props.ColumnsSet};
grid-template-rows: ${(props) => props.RowsSet};
background-color: ${props => props.theme.backgroundTwo};
height: 100vh;
width: 100vw;

@media (max-width: 500px) {
    grid-template-columns: 100vw;
    height: auto;
    padding-top: 2vh;
    padding-bottom: 2vh;
    grid-template-rows: auto 1fr auto ;
}
` 

export default function AccessDirect() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <StyledDiv>
            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
           <GigaRocket ColumnStart="2" RowStart="2" src={imac} />
           
           <GigaHeader>Access Direct</GigaHeader>
          
           <GigaWeb RowsSet={5} href="https://access-direct.net" target="_blank" rel="noreferrer noopener">
           <GigaTwo>access-direct.net</GigaTwo>
           </GigaWeb>
            </GigaGridone>

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Access Direct is a company focused on  security solutions. My responsibility includes being the UI Designer, and Webmaster for Access Direct. I enjoyed redesigning their website, and building it using React.js.</TextSection>
            <TextLinetwo />
            </GigaGridtext>

            <FullBg src={iphones} />
            <FullBg src={mocks} />

            <RisoFlex>
                <RisoItemtwo src={highpower} Width='60vw' />
            </RisoFlex>

            <RisoFlex>
                <RisoItemtwo style={{marginBottom:'3vh'}}src={create} Width='60vw' />
            </RisoFlex>

            <FullBg src={admac} />

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
                <RisoItem style={{boxShadow: '5px 10px 24px rgba(0, 0, 0, 0.3'}}  src={about} Width='65vw' />
            </RisoFlex>

         <div style={{display:'grid', height: '25vh', gridTemplateRows:'5vh 5vh 5vh 5vh 5vh', gridTemplateColumns:'4vw 60vw 32vw 4vw'}} >
            <TextLineone RowsSet="3" />

        </div>

        <FullBg src={photosthree} />
        <FullBg src={photostwo} />
        <FullBg src={photos} />
       

        <FullBg BackgroundColor='white' src={guides} />


            
        <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founder — David Smith <br />
Lead Designer — Zachary MacTavish <br />
Website Development — Zachary MacTavish  <br />
Content Direction — Wendy Majewski, Alek Vasic</TextSection>
            <TextLinetwo />
            </GigaGridtext>
        </StyledDiv>



    )
}





import React, {useLayoutEffect} from 'react'
import highpower from '../../img/Onthemenu.jpg';
import iphones from '../../img/Outsource—iphones.jpg';
import mocks from '../../img/Outsource—pages.jpg';
import { FullBg } from '../COMPOSITION/Composition';
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti';
import admac from '../../img/Outsource_Imac_2.jpg';
import imac from '../../img/Outsource—Macbook.png';
import ipadtwo from '../../img/Outsource-ipad.jpg';
import dark from '../../img/Outsource—iPhone_2—Darksq.jpg';
import light from '../../img/OutsourceLightPhone2.jpg';
import imactwo from '../../img/Outsource—iMac2.jpg';
import about from '../../img/Leadership.jpg';
import photos from '../../img/Group 55591@2x.jpg';
import photostwo from '../../img/Group 55593@2x.jpg';
import photosthree from '../../img/Group 55592@2x.jpg';
import guides from '../../img/Group 55604@2x.jpg';
import create from '../../img/nyu.jpg';
import ceumacbook from '../../img/Outsource—CEUMacbook.png';
import ceuiphones from '../../img/CEU—iphones.jpg';
import ceumocks from '../../img/Outsource—CEUpages.jpg';
import aia from '../../img/AIA.jpg';
import ceuimac from '../../img/CEU_Imac_2.jpg';
import bointro from '../../img/BookADemo-01.jpg';
import bozoom from '../../img/BO_Zoomface-01.png';
import booklet from '../../img/BO—Booklet.png';
import flowmap from '../../img/BOFlowMap—Long-01-01.jpg';
import guidelines from '../../img/BrandGuidelines—Mockup.jpg';
import twentyfive from '../../img/Outsource25-07.png';
import branding from '../../img/Branding_LogoPatterns-01.png';
import { BackgroundColor, Cellphones, GigaGridone, GigaGridtext, GigaHeader, GigaRocket, GigaTwo, GigaWeb, RisoItemtwo, StyledDiv, TextLineone, TextLinetwo, TextSection } from '../Giga/Giga';
import styled from 'styled-components';
import { SingleGrid } from '../Access Direct/AD';
 

export const OutsourceGridone = styled.div`
display: grid;
grid-template-columns: ${(props) => props.ColumnsSet};
grid-template-rows: ${(props) => props.RowsSet};
background-color: ${props => props.theme.backgroundTwo};
height: 100vh;
width: 100vw;

@media (max-width: 500px) {
    grid-template-columns: 100vw;
    grid-template-rows: 1fr 1fr 1fr 5vh 5vh 5vh 5vh 1fr;
}
`
export default function Outsource() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <StyledDiv>
            <OutsourceGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 3vh 3vh 3vh 1fr'>
           <GigaRocket ColumnStart="2" RowStart="2" src={imac} />
           
           <GigaHeader>Outsource</GigaHeader>
          
           <GigaWeb RowsSet={5} href="https://www.outsourceconsultants.com/home" target="_blank" rel="noreferrer noopener">
           <GigaTwo>outsourceconsultants.com</GigaTwo>
           </GigaWeb>
           <GigaWeb RowsSet={6}href="https://www.decoderny.com/" target="_blank" rel="noreferrer noopener">
           <GigaTwo>decoderny.com</GigaTwo>
           </GigaWeb>
           <GigaWeb RowsSet={7}href="https://www.buildingowl.com/" target="_blank" rel="noreferrer noopener">
           <GigaTwo>buildingowl.com</GigaTwo>
           </GigaWeb>
           <GigaWeb RowsSet={8}href="https://www.osinyc.com/" target="_blank" rel="noreferrer noopener">
           <GigaTwo>osinyc.com</GigaTwo>
           </GigaWeb>
            </OutsourceGridone>

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Outsource is a company focused on  expediting. My responsibility included being the Multimedia Designer on a variety of projects. I enjoyed redesigning their website, internal tools, and subsidiaries.</TextSection>
            <TextLinetwo />
            </GigaGridtext>

            <FullBg src={iphones} />
            <FullBg src={mocks} />

            <RisoFlex>
                <RisoItemtwo src={highpower} Width='60vw' />
            </RisoFlex>

            <SingleGrid ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'>

            <GigaRocket style={{boxShadow: '5px 10px 24px rgba(0, 0, 0, 0.3'}} RowStart='2' ColumnStart="2" ColumnEnd="4" src={create} />
            <BackgroundColor style={{backgroundColor:'#26356C'}} />
            </SingleGrid>

            <FullBg src={admac} />

            <RisoFlex>
                <RisoItem src={ipadtwo} Width='65vw' />
            </RisoFlex>

                 <Cellphones>
                <RisoItem src={dark} />
                <RisoItem src={light} />
                </Cellphones>

            <RisoFlex>
                <RisoItem src={imactwo} Width='65vw' />
            </RisoFlex>

            <RisoFlex>
                <RisoItem style={{boxShadow: '5px 10px 24px rgba(0, 0, 0, 0.3'}}  src={about} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{backgroundColor:'#FEC748'}}>
                <RisoItem src={ceumacbook} Width='65vw'  />
            </RisoFlex>

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Outsource CEU is a subsidiary focused on the education of building code. My responsibility was to create a brand identity from the ground up, and create the UI designs for a potential web application.</TextSection>
            <TextLinetwo />
            </GigaGridtext>

            <FullBg src={ceuiphones} />
            <FullBg src={ceumocks} />
            
            <SingleGrid ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'>

            <GigaRocket style={{boxShadow: '5px 10px 24px rgba(0, 0, 0, 0.3'}} RowStart='2' ColumnStart="2" ColumnEnd="4" src={aia} />
            <BackgroundColor style={{backgroundColor:'#F6BF6D'}} />
            </SingleGrid>

            <FullBg src={ceuimac} />

            <FullBg src={bointro} />


            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>BuildingOwl is a technology that monitors and resolves critical building issues. My responsibility included expanding on the existing identity, marketing , and focusing on improvements to UX.</TextSection>
            <TextLinetwo />
            </GigaGridtext>

            <FullBg style={{paddingTop:'2vh'}}src={bozoom} />

            <RisoFlex >
                <RisoItem src={booklet} Width='65vw'  />
            </RisoFlex>

            <FullBg src={flowmap} />

         <div style={{display:'grid', height: '25vh', gridTemplateRows:'5vh 5vh 5vh 5vh 5vh', gridTemplateColumns:'4vw 60vw 32vw 4vw'}} >
            <TextLineone RowsSet="3" />

        </div>
        <FullBg src={photos} />
        <FullBg src={photosthree} />
        <FullBg src={photostwo} />
        
       
        <RisoFlex >
                <RisoItem src={guidelines} Width='65vw'  />
            </RisoFlex>

            <RisoFlex >
                <RisoItem src={twentyfive} Width='65vw'  />
            </RisoFlex>

            <FullBg style={{paddingTop:'10vh'}} src={branding} />
                
        <FullBg src={guides} />


            
        <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founder — Diego Caballero<br />
Designers — Zachary MacTavish & Elvis Cruz<br />
Development — Vinny Nuthakki & Samuel Karkash <br />
Marketing — Kaela Fanning & Zoe Hutzler</TextSection>
            <TextLinetwo />
            </GigaGridtext>
        </StyledDiv>



    )
}





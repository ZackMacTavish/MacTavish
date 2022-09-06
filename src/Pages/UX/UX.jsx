import React, { useLayoutEffect } from 'react'
import { BackgroundColor, Cellphones, GigaGridone, GigaGridtext, GigaHeader, GigaRocket, GigaTwo, GigaWeb, RisoItemtwo, StyledDiv, TextLineone, TextLinetwo, TextSection } from '../Giga/Giga';

import LeysiLogo from '../../img/Leysi-White-01.jpg';
import LeysiBlue from '../../img/Leysi-LG-02.jpg';
import LeysiBluetwo from '../../img/Leysi-LG-01.jpg';
import leysimockup2 from '../../img/mobile-phone-1c.png';
import leysiphones from '../../img/Leysi—iphones.jpg';
import leysiscreens from '../../img/LeysiApp—Screens copy.jpg';
import leysiphones2 from '../../img/Untitled-1800-x-1024-px-1500-x-1024-px.png';
import pitonlogo from '../../img/FullLogo-02.png';
import pitoniphones from '../../img/Piton—iphones copy.jpg';
import pitonscreens from '../../img/Group 55618@2x.png';
import pitonscreens2 from '../../img/Group 55619@2x.png';
import allpiton from '../../img/Piton—Screens.jpg';
import light from '../../img/LightPhone2.png';
import dark from '../../img/iPhone_2—Dark.png';
import pitonlogos from '../../img/Group 55620@2x.png';
import { FullBg } from '../COMPOSITION/Composition';
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti';
import { OutsourceGridone } from '../Outsource/Outsource';
import styled from 'styled-components';

export const FlexLeysi = styled.div`
display: flex;
justify-content: center;
background-color: ${props => props.theme.backgroundTwo};
align-items: center;
height: 100vh;
width: 100vw;

@media(max-width: 450px) {
    height: 40vh;
}
`

export const PitonScreens = styled.div`
display: grid;
grid-template-columns: ${(props) => props.ColumnsSet};
grid-template-rows: ${(props) => props.RowsSet};
background-color: ${props => props.theme.backgroundTwo};
height: 60vh;
width: 100vw;

@media (max-width: 850px) {
    grid-template-columns: 100vw;
    grid-template-rows: 5vw auto 5vw;
    height: auto;
}
` 

export default function Ux() {


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <StyledDiv>
           

            <FullBg src={leysiphones} />



            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
                <TextLineone RowsSet="1" />
                    <TextSection Fontsize='3.5rem' >Leysi is the ultimate food platform designed for young adults. 
                        Manage your spending and engage with friends while discovering deals at local vendors in your campus community.
                        My responsibility included creating the brand identity, and the initial app designs.</TextSection>
                <TextLinetwo />
            </GigaGridtext>

           
            <FlexLeysi>
                <RisoItemtwo style={{borderRadius: '10px'}} src={LeysiLogo} Width='60vw' />
            </FlexLeysi>

            <RisoFlex style={{height: '85vh',backgroundColor:'#0A84E3'}}>
                <RisoItem src={LeysiBlue} Width='50vw'  />
            </RisoFlex>

            <RisoFlex style={{height: '60vh',backgroundColor:'#0A84E3'}}>
                <RisoItem src={LeysiBluetwo} Width='50vw'  />
            </RisoFlex>

            <FullBg src={leysiscreens} />

            <RisoFlex>
                <RisoItem src={leysimockup2} Width='50vw'  />
            </RisoFlex>

            <RisoFlex>
                <RisoItem src={leysiphones2} Width='50vw'  />
            </RisoFlex>


            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founders — Leysi Team<br />
            Designers — Zachary MacTavish & Varfaj Team<br />
Development — Varfaj Team</TextSection>
            <TextLinetwo />
            </GigaGridtext>

            <RisoFlex style={{height: '100vh'}}>
                <RisoItem src={pitonlogo} Width='50vw'  />
            </RisoFlex>

            
            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
                <TextLineone RowsSet="1" />
                    <TextSection Fontsize='3.5rem' >Piton is a startup focused on athleisure clothing with an accompanying workout app. 
The brand is focused on social change, and environmentalism. 
The leading innovation of the app is on the bleeding edge of voice enabled AI. </TextSection>
                <TextLinetwo />
            </GigaGridtext>

            <FullBg src={pitoniphones} />

            <PitonScreens ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='2vh 15vh 2vh'>
            <GigaRocket  RowStart='2' ColumnStart="2" ColumnEnd="4" src={pitonscreens} />
            <BackgroundColor style={{backgroundColor:'#1794BA'}} />
            </PitonScreens>

            <PitonScreens style={{paddingBottom: '3vh'}} ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='2vh 15vh 2vh'>
            <GigaRocket  RowStart='2' ColumnStart="2" ColumnEnd="4" src={pitonscreens2} />
            <BackgroundColor style={{backgroundColor:'#1794BA'}} />
            </PitonScreens>

            <FullBg src={allpiton} />

            <Cellphones>
                <RisoItem Width='50vw' src={dark} />
                <RisoItem Width='50vw'src={light} />
                </Cellphones>

            <FullBg src={pitonlogos} />

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founders — Jemir Martinez<br />
            Designers — Zachary MacTavish<br />
            Development — TBD</TextSection>
            <TextLinetwo />
            </GigaGridtext>


        </StyledDiv>
    )
}

import React, { useLayoutEffect } from 'react'
import { BackgroundColor, GigaGridone, GigaHeader, GigaRocket, GigaTwo, GigaWeb, RisoItemtwo, TextLineone, TextSection } from '../Giga/Giga';

import ThreePillarsMac from '../../img/ThreePillars—Macbook.jpg';
import ThreePillarsIphone from '../../img/ThreePillars—iphones.jpg';
import ThreePillarsPages from '../../img/ThreePillars—pages.jpg';
import recruitingpage from '../../img/Artboard – 11@2x.png';
import ThreePillarsImac from '../../img/ThreePillars_Imac_.jpg';
import ThreePillarsMockup from '../../img/Mockup.jpg';
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

export default function Ux() {


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <div>
            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 3vh 3vh 3vh 1fr 1fr'>
           <GigaRocket ColumnStart="2" RowStart="2" src={ThreePillarsMac} />
           
           <GigaHeader>UX/UI</GigaHeader>
          
                 <GigaWeb RowsSet={4} href="https://threepillars.com/" target="_blank" rel="noreferrer noopener">
                    <GigaTwo>threepillars.com</GigaTwo>
                    </GigaWeb>
                    <GigaWeb RowsSet={5}href="https://leysiapp.com/" target="_blank" rel="noreferrer noopener">
                    <GigaTwo>leysiapp.com</GigaTwo>
                    </GigaWeb>
                    <GigaWeb RowsSet={6}href="https://loudluxurymusic.com/" target="_blank" rel="noreferrer noopener">
                    <GigaTwo>loudluxurymusic.com</GigaTwo>
                    </GigaWeb>
                    <GigaWeb RowsSet={7}href="https://carcorporationofamerica.com/" target="_blank" rel="noreferrer noopener">
                    <GigaTwo>carcorporationofamerica.com</GigaTwo>
                 </GigaWeb>
            </GigaGridone>



            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem'>Three Pillars is a recruiting agency that was looking for a refresh on their brand identity, and website. 
                My responsibility involved working with the Varfaj Partners team to provide them with initial designs for their developer to build</TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>

            <FullBg src={ThreePillarsIphone} />
            <FullBg src={ThreePillarsPages} />

            <RisoFlex>
                <RisoItemtwo src={recruitingpage} Width='60vw' />
            </RisoFlex>

            <FullBg src={ThreePillarsImac} />
            <FullBg src={ThreePillarsMockup} />

            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founders — Three Pillars Team<br />
            Designers — Zachary MacTavish & Varfaj Team<br />
Development — Varfaj Team</TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>

            <FullBg src={leysiphones} />



            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
                <TextLineone RowsSet="1" />
                    <TextSection Fontsize='3.5rem' >Leysi is the ultimate food platform designed for young adults. 
                        Manage your spending and engage with friends while discovering deals at local vendors in your campus community.
                        My responsibility included creating the brand identity, and the initial app designs.</TextSection>
                <TextLineone RowsSet="7" />
            </GigaGridone>

           
            <RisoFlex style={{height: '80vh'}}>
                <RisoItemtwo style={{borderRadius: '10px'}} src={LeysiLogo} Width='60vw' />
            </RisoFlex>

            <RisoFlex style={{height: '85vh',backgroundColor:'#0A84E3', marginTop:'-2vh'}}>
                <RisoItem src={LeysiBlue} Width='50vw'  />
            </RisoFlex>

            <RisoFlex style={{height: '60vh',backgroundColor:'#0A84E3'}}>
                <RisoItem src={LeysiBluetwo} Width='50vw'  />
            </RisoFlex>

            <FullBg src={leysiscreens} />

            <RisoFlex style={{height: '100vh'}}>
                <RisoItem src={leysimockup2} Width='50vw'  />
            </RisoFlex>

            <RisoFlex style={{height: '100vh'}}>
                <RisoItem src={leysiphones2} Width='50vw'  />
            </RisoFlex>


            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founders — Leysi Team<br />
            Designers — Zachary MacTavish & Varfaj Team<br />
Development — Varfaj Team</TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>

            <RisoFlex style={{height: '100vh'}}>
                <RisoItem src={pitonlogo} Width='50vw'  />
            </RisoFlex>

            
            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
                <TextLineone RowsSet="1" />
                    <TextSection Fontsize='3.5rem' >Piton is a startup focused on athleisure clothing with an accompanying workout app. 
The brand is focused on social change, and environmentalism. 
The leading innovation of the app is on the bleeding edge of voice enabled AI. </TextSection>
                <TextLineone RowsSet="7" />
            </GigaGridone>

            <FullBg src={pitoniphones} />

            <RisoFlex style={{height: '45vh',marginTop: '20vh'}}>
                <RisoItem src={pitonscreens} Width='60vw'  />
            </RisoFlex>

            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1vh 1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <GigaRocket  RowStart='2' ColumnStart="2" ColumnEnd="4" src={pitonscreens2} />
            <BackgroundColor style={{backgroundColor:'#1794BA'}} />
            </GigaGridone>

            <FullBg src={allpiton} />

            <div style={{display: 'flex', height: '100vh', width: '100vw', marginTop: '-2vh'}}>
                <RisoItem src={dark} />
                <RisoItem src={light} />
            </div>

            <FullBg src={pitonlogos} />

            <GigaGridone ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founders — Jemir Martinez<br />
            Designers — Zachary MacTavish<br />
Development — TBD</TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>


        </div>
    )
}

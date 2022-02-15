import React, {useLayoutEffect} from 'react'
import { ThreeFlex, ThreeItem } from '../Photography/Photography'
import olivia4 from '../../img/olivia4.jpg';
import olivia2 from '../../img/oliviacollab2.jpg';
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti';
import { TextSection } from '../Dwelling/Dwelling';
import screenprint2 from '../../img/Screenprint2.jpg';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, FullBg, GridRowThree, GridRowTwo, Orbital, TwinTwo } from '../COMPOSITION/Composition';
import screenprinttwo from '../../img/screenprint2.1.jpg';
import screenprint1 from '../../img/Screenprint1.jpg'
import oliviacollab1 from '../../img/Collab-framed.jpg';
import oliviacollab2 from '../../img/Collab-framed2.jpg';
import oliviacollab3 from '../../img/Olivia_3.jpg';
import No2 from '../../img/No.2.jpg';
import oliviacollab4 from '../../img/Collab4.jpg';
import woodblock1 from '../../img/Woodblockprint.jpg';
import oliviacollab5 from '../../img/oliviacollab5.jpg';
import oliviacollab6 from '../../img/oliviacollab6.jpg';
import oliviacollab7 from '../../img/oliviacollab7.jpg';
import oliviacollab8 from '../../img/oliviacollab8.jpg';
import thetown from '../../img/TheTown.jpg';
import graffiticollage from '../../img/GraffitiCollageCMYK.jpg';
import bear from '../../img/BearCMYK.jpg';
import bluecmyk from '../../img/BlueCMYK.jpg';
import people from '../../img/Girl13.jpg';
import exploitationsix from '../../img/EXPLOITATIONSIX.jpg';
import exploitationsiv from '../../img/EXPLOITATIONSIV.jpg';
import exploitationsi from '../../img/EXPLOITATIONSI.jpg';
import exploitationsxii from '../../img/EXPLOITATIONSXII.jpg';
import exploitationsviii from '../../img/EXPLOITATIONSVIII.jpg';
import exploitationsii from '../../img/EXPLOITATIONSII.jpg';
import exploitationsiii from '../../img/EXPLOITATIONSIII.jpg';
import exploitationsxi from '../../img/EXPLOITATIONSXI.jpg';
import exploitationsv from '../../img/EXPLOITATIONSV.jpg';
import exploitationsvi from '../../img/EXPLOITATIONSVI.jpg';
import exploitationsvii from '../../img/EXPLOITATIONSVII.jpg';
import No4 from '../../img/No4-screen.jpg';

export default function Printmaking() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>

        
            <ThreeFlex style={{justifyContent: 'center'}} Backgroundcolor='#191919'>
             <ThreeItem style={{paddingRight: '4vw'}} src={olivia4} />
            <ThreeItem style={{paddingLeft: '4vw'}} src={olivia2} />
            </ThreeFlex>


            <RisoFlex style={{backgroundColor:"black"}}>
            <TextSection>Printmaking is a technique that explores screen printing, and relief printing. Some of these pieces are collaborations with my partner Olivia 
Zita Smith. <br /> <br />
 </TextSection>

            </RisoFlex>


            <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={screenprint2} />
<ArtText> 

<ArtHeader>Screenprint No. 2</ArtHeader>
<ArtYear>2019</ArtYear>
<ArtDesc>Screen print ink on paper. Edtion of 2.</ArtDesc>

</ArtText>


<GridRowTwo src={screenprinttwo} />
<ArtTexttwo> 

<ArtHeader>Screenprint No. 2.1</ArtHeader>
<ArtYear>2019</ArtYear>
<ArtDesc>Screen print ink on paper. Edtion of 20.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={screenprint1} />
<ArtTextthree> 

<ArtHeader>Screenprint No. 1</ArtHeader>
<ArtYear>2019</ArtYear>
<ArtDesc>Screen print ink on paper. Edition of 24.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>


            <ThreeFlex style={{justifyContent: 'center'}}>
             <ThreeItem style={{paddingRight: '5vw', width: '30vw'}} src={oliviacollab1} />
            <ThreeItem style={{paddingLeft: '5vw', width: '30vw'}} src={oliviacollab2} />
            </ThreeFlex>


            <RisoFlex>
            <RisoItem  Width='60vw' img src={oliviacollab3} />
           
            </RisoFlex>


            <ArtSectionthree Grids='85vh 0vh 85vh 14vh 85vh 7vh'>


<Orbital src={No4} />
<ArtText> 

<ArtHeader>Screenprint No. 4</ArtHeader>
<ArtYear>2019</ArtYear>
<ArtDesc>Screen print ink on paper. Edtion of 25.</ArtDesc>

</ArtText>


<GridRowTwo src={No2} />
<ArtTexttwo> 

<ArtHeader>Screenprint No. 2</ArtHeader>
<ArtYear>2019</ArtYear>
<ArtDesc>Screen print ink on paper. Edtion of 20.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={oliviacollab4} />
<ArtTextthree> 

<ArtHeader>Circles</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Collaboration with Olivia Zita Smith.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                <RisoFlex style={{height:'115vh'}}>
            <RisoItem  Width='60vw' img src={woodblock1} />
           
            </RisoFlex>

            {/*2 Olivia Collabs */}
            <ArtSectionthree Grids='85vh 10vh 0vh'>
                    <Orbital src={oliviacollab6} />
                    <TwinTwo src={oliviacollab5} />

                   {/* <TwinsText>
                        <ArtHeader>EPHEMERAL I & II</ArtHeader>
                        <ArtYear>2021</ArtYear>
                        <ArtDesc>Acrylic & spray paint on wood panels.</ArtDesc>

                   </TwinsText> */}
                    </ArtSectionthree>

                     {/*2 Olivia Collabs */}
            <ArtSectionthree Grids='85vh 10vh 15vh'>
                    <Orbital src={oliviacollab7} />
                    <TwinTwo src={oliviacollab8} />

            
                    </ArtSectionthree>




                    <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={bear} />
<ArtText> 

<ArtHeader>CMYK Screenprint 1</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink on paper. Edtion of 8. Sold Out.</ArtDesc>

</ArtText>


<GridRowTwo src={graffiticollage} />
<ArtTexttwo> 

<ArtHeader>CMYK Screenprint 2</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink on paper. Edtion of 6.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={thetown} />
<ArtTextthree> 

<ArtHeader>The Nuns</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink on paper. Part of the Nuns Series (6).</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                <ThreeFlex style={{justifyContent: 'center'}} Backgroundcolor='#191919'>
             <ThreeItem style={{paddingRight: '2vw'}} src={bluecmyk} />
            <ThreeItem style={{paddingLeft: '2vw', paddingRight: '2vw'}} src={bluecmyk} />
            <ThreeItem style={{paddingRight: '2vw', paddingLeft: '2vw'}} src={bluecmyk} />
            <ThreeItem style={{paddingLeft: '2vw'}} src={bluecmyk} />
            </ThreeFlex>

            <FullBg src={people} />



            <RisoFlex style={{backgroundColor:"black", marginTop:'-1vh'}}>
            <TextSection>Exploitations is a conceptual series that investigates the dynamics of an 
abusive relationship. <br /> <br />

It explores the patterns of toxicity, and how art can serve as therapy for unpacking 
these emotions.
 </TextSection>

            </RisoFlex>


            <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={exploitationsix} />
<ArtText> 

<ArtHeader>EXPLOITATIONS IX</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink, charcoal, and oil bar on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={exploitationsiv} />
<ArtTexttwo> 

<ArtHeader>EXPLOITATIONS IV</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink, charcoal, and oil bar on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={exploitationsi} />
<ArtTextthree> 

<ArtHeader>EXPLOITATIONS I</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink, charcoal, and oil bar on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                <FullBg src={exploitationsxii} />

                <RisoFlex style={{height:'115vh'}}>
            <RisoItem  Width='60vw' img src={exploitationsviii} />
           
            </RisoFlex>




                <ArtSectionthree Grids='85vh 7vh 85vh 7vh'>


<Orbital src={exploitationsii} />
<ArtText> 

<ArtHeader>EXPLOITATIONS II</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink, charcoal, and oil bar on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={exploitationsiii} />
<ArtTexttwo> 

<ArtHeader>EXPLOITATIONS III</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink, charcoal, and oil bar on paper.</ArtDesc>

</ArtTexttwo>


                </ArtSectionthree>

                <FullBg src={exploitationsxi} />

                <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={exploitationsv} />
<ArtText> 

<ArtHeader>EXPLOITATIONS V</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink, spray paint charcoal, and oil bar on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={exploitationsiv} />
<ArtTexttwo> 

<ArtHeader>EXPLOITATIONS IV</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink, charcoal, and oil bar on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={exploitationsi} />
<ArtTextthree> 

<ArtHeader>EXPLOITATIONS I</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Screen print ink, charcoal, and oil bar on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                <RisoFlex style={{height:'110vh'}}>
            <RisoItem  Width='60vw' img src={exploitationsvi} />
           
            </RisoFlex>

            <RisoFlex style={{height:'110vh'}}>
            <RisoItem  Width='60vw' img src={exploitationsvii} />
           
            </RisoFlex>



            
        </div>
    )
}

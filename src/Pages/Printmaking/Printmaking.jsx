import React from 'react'
import { ThreeFlex, ThreeItem } from '../Photography/Photography'
import olivia4 from '../../img/olivia4.jpg';
import olivia2 from '../../img/oliviacollab2.jpg';
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti';
import { TextSection } from '../Dwelling/Dwelling';
import screenprint2 from '../../img/Screenprint2.jpg';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';

import screenprinttwo from '../../img/screenprint2.1.jpg';
import screenprint1 from '../../img/Screenprint1.jpg'
import oliviacollab1 from '../../img/Collab-framed.jpg';
import oliviacollab2 from '../../img/Collab-framed2.jpg';
import oliviacollab3 from '../../img/Olivia_3.jpg';
import No2 from '../../img/No.2.jpg';
import oliviacollab4 from '../../img/Collab4.jpg';
import woodblock1 from '../../img/Woodblockprint.jpg';

import No4 from '../../img/No4-screen.jpg';

export default function Printmaking() {
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

            
        </div>
    )
}

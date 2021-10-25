import React from 'react'
import { ThreeFlex, ThreeItem } from '../Photography/Photography'
import olivia4 from '../../img/olivia4.jpg';
import olivia2 from '../../img/oliviacollab2.jpg';
import { RisoFlex } from '../Graffiti/Graffiti';
import { TextSection } from '../Dwelling/Dwelling';
import screenprint2 from '../../img/Screenprint2.jpg';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';

import screenprinttwo from '../../img/screenprint2.1.jpg';
import screenprint1 from '../../img/Screenprint1.jpg'

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
            
        </div>
    )
}

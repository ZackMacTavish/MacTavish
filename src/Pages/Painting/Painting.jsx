import React, {useLayoutEffect} from 'react'
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti';

import lighthouse from '../../img/Lighthouse.jpeg';
import cacti1 from '../../img/E-nobtm.jpg';
import splash from '../../img/splashpanel.jpg';
import yellowz from '../../img/Yellow-Z.jpg';
import { TextSection } from '../Dwelling/Dwelling';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';

export default function Painting() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
    <div>
        <RisoFlex >
            <RisoItem Width='55vw' img src={lighthouse} />
        </RisoFlex>


        <RisoFlex style={{backgroundColor:"black"}}>
            <TextSection>I often look to capture moments throughout my life. Painting allows me to express myself through shapes, and color.
 
            <br /> <br /> Sometimes with literal representation.
            </TextSection>
        </RisoFlex>

        {/* Section with 3 photos */}

        <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={cacti1} />
<ArtText> 

<ArtHeader>ORANGE CACTI</ArtHeader>
<ArtYear>2015-21</ArtYear>
<ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>

</ArtText>


<GridRowTwo src={splash } />
<ArtTexttwo> 

<ArtHeader>MILKBONES</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={yellowz} />
<ArtTextthree> 

<ArtHeader>YELLOW TWEED</ArtHeader>
<ArtYear>2015-21</ArtYear>
<ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>

</ArtTextthree>

</ArtSectionthree>


    </div>
    )
}

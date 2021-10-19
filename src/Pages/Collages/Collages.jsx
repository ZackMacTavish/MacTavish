import React from 'react'
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti'
import bike from '../../img/Bicycle.png';
import { TextSection } from '../Dwelling/Dwelling';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';

import collage50 from '../../img/Collage50.jpg';

export default function Collages() {
    return (
        <div>

        <RisoFlex >

        <RisoItem Width='55vw' img src={bike} />

        </RisoFlex>

        <RisoFlex style={{backgroundColor:"black"}}>
            <TextSection>Collaging is a technique I use to work through compositions, shapes, and colors. 
<br /> <br />Plus, I enjoy making them. <br /> <br />At the end of the day, what else matters.
 </TextSection>

            </RisoFlex>


            {/* Section with 3 photos */}

            <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={collage50} />
<ArtText> 

<ArtHeader>BFA Exhibition (Chicago, IL)</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on brick veneer.</ArtDesc>

</ArtText>


<GridRowTwo src={collage50} />
<ArtTexttwo> 

<ArtHeader>DWELLING MASH I</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Acrylic, photo, and colored paper on heavy paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage50} />
<ArtTextthree> 

<ArtHeader>DWELLING MASH II</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Acrylic, photo, and colored paper on heavy paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>
            
        </div>
    )
}

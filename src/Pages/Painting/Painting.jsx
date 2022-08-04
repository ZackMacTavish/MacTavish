import React, {useLayoutEffect} from 'react'
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti';

import airbrush from '../../img/airbrush.jpg';
import yellowlily from '../../img/YellowLily.jpg';
import lighthouse from '../../img/Lighthouse.jpeg';
import cacti1 from '../../img/E-png.png';
import splash from '../../img/splashpanel.png';
import yellowz from '../../img/Yellow-Z.png';
import { TextSection } from '../Dwelling/Dwelling';
import { ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';
import selfie from '../../img/SelfPortrait.jpg';
export default function Painting() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
    <div>
        <RisoFlex >
            <RisoItem Width='55vw' img src={lighthouse} />
        </RisoFlex>
        <RisoFlex >
            <RisoItem Width='55vw' img src={selfie} />
        </RisoFlex>


        <RisoFlex style={{backgroundColor:"black"}}>
            <TextSection>I often look to capture moments throughout my life. Painting allows me to express myself through shapes, and color.
 
            <br /> <br />I have the understanding of how to paint realism, but I enjoy painting abstract more.
            </TextSection>
        </RisoFlex>

        {/* Section with 3 photos */}

        <ArtSectionthreeog>


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

</ArtSectionthreeog>

    {/* 3 Pieces - Passing Grid-template-row props */}
    <ArtSectionthreeog>
                    <Orbital src={yellowlily} />
                            <ArtText> 

                            <ArtHeader>Yellow Lily</ArtHeader>
                            <ArtYear>2020</ArtYear>
                            <ArtDesc>Airbrush & acrylic on yupo paper.</ArtDesc>

                            </ArtText>


                            <GridRowTwo src={airbrush} />
                            <ArtTexttwo> 

                            <ArtHeader>SHAPES</ArtHeader>
                            <ArtYear>2020</ArtYear>
                            <ArtDesc>Acrylic & spraypaint on yupo paper.</ArtDesc>

                            </ArtTexttwo>

                        

                            </ArtSectionthreeog>



    </div>
    )
}

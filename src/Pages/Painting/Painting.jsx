import React, {useLayoutEffect} from 'react'
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti';

import airbrush from '../../img/airbrush.jpg';
import sarge from '../../img/Sarge2.jpg';
import plastictoy from '../../img/PlasticToyCrop4.png';
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
 
            <br /> <br />I love exploring realism, or abstraction.
            </TextSection>
        </RisoFlex>

        {/* Section with 3 photos */}

        <ArtSectionthreeog>


<Orbital src={plastictoy} />
<ArtText> 

<ArtHeader>Plastic Toy</ArtHeader>
<ArtYear>2022</ArtYear>
<ArtDesc>Oil paint on paper.</ArtDesc>

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

                            <GridRowThree src={cacti1} />
<ArtTextthree> 

<ArtHeader>ORANGE CACTI</ArtHeader>
<ArtYear>2015-21</ArtYear>
<ArtDesc>Spray paint and acrylic paint on wood panel.</ArtDesc>

</ArtTextthree>

                        

                            </ArtSectionthreeog>

                            <ArtSectionthreeog>
                    <Orbital src={sarge} />
                            <ArtText> 

                            <ArtHeader>Sarge</ArtHeader>
                            <ArtYear>2016</ArtYear>
                            <ArtDesc>Oil paint on wood panel.</ArtDesc>

                            </ArtText>

                        

                            </ArtSectionthreeog>



    </div>
    )
}

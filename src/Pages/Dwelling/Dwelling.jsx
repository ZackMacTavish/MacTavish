import React from 'react'
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti'
import housemash from '../../img/House—Mash.jpg';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';
import styled from 'styled-components';
import house1 from '../../img/house5.jpg';
import house2 from '../../img/house6.jpg';


const TextSection =styled.h1`
width: 50vw;
font-family: 'Space Grotesk', sans-serif;
padding-left: 2vw;
color: white;


`

export default function Dwelling() {
    return (
        <div>
            <RisoFlex >

            <RisoItem Width='60vw' img src={housemash} />

            </RisoFlex>

            <RisoFlex style={{backgroundColor:"black"}}>
            <TextSection>Dwelling is a series composed of houses I’ve 
lived in throughout my life. The work aims to
evoke memories, nostalgia, and past experiences. 
<br /> <br />The collage-like compositions are a culmination of the past and bring multiple stories into one.
 </TextSection>

            </RisoFlex>

            {/* Section with 3 photos */}

            <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={house1} />
<ArtText> 

<ArtHeader>BFA Exhibition (Chicago, IL)</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on brick veneer.</ArtDesc>

</ArtText>


<GridRowTwo src={house1} />
<ArtTexttwo> 

<ArtHeader>DWELLING MASH I</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Acrylic, photo, and colored paper on heavy paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={house2} />
<ArtTextthree> 

<ArtHeader>DWELLING MASH II</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Acrylic, photo, and colored paper on heavy paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

            
        </div>
    )
}

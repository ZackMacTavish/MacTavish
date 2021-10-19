import React from 'react'
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti'
import housemash from '../../img/House—Mash.jpg';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';
import styled from 'styled-components';
import house1 from '../../img/house5.jpg';
import house2 from '../../img/house6.jpg';
import ep from '../../img/EP.jpg';
import westwood from '../../img/westwood.jpg';
import manistee2 from '../../img/manistee2.jpg';
import albany from '../../img/albany.jpg';
import maynard from '../../img/maynard.jpg';
import armistice3 from '../../img/armistice3.jpg';
import house5 from '../../img/house1.jpg';
import house6 from '../../img/house2.jpg';
import house3 from '../../img/house3.jpg';
import house4 from '../../img/house4.jpg';
import olympia from '../../img/Olympia.jpg';
import manistee1 from '../../img/manistee1.jpg';
import pawtucket from '../../img/Pawtucket.jpg';
import armistice1 from '../../img/Armistice1.jpg';
import rosewood from '../../img/rosewood.jpg';
import taylor from '../../img/taylor.jpg';
import house7 from '../../img/house7.jpg';



export const TextSection =styled.h1`
width: 50vw;
font-family: 'Space Grotesk', sans-serif;
padding-left: 2vw;
color: white;
`

const PhotoFlexone = styled.div`
display: flex;
justify-content: space-between;
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

                <RisoFlex style={{backgroundColor:"black", flexDirection:"column", height:"105vh"}} >

                <PhotoFlexone>

                <RisoItem style={{padding:"2vw"}} Width='20vw' img src={ep} />
                <RisoItem style={{padding:"2vw"}} Width='20vw' img src={westwood} />
                <RisoItem style={{padding:"2vw"}} Width='20vw' img src={manistee2} />
               

                </PhotoFlexone>
                <PhotoFlexone>

<RisoItem style={{padding:"2vw"}} Width='20vw' img src={albany} />
<RisoItem style={{padding:"2vw"}} Width='20vw' img src={maynard} />
<RisoItem style={{padding:"2vw"}} Width='20vw' img src={armistice3} />


</PhotoFlexone>

            </RisoFlex>


             {/* Section with 3 photos */}

             <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={house4} />
<ArtText> 

<ArtHeader>BFA Exhibition (Chicago, IL)</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on brick veneer.</ArtDesc>

</ArtText>


<GridRowTwo src={house5} />
<ArtTexttwo> 

<ArtHeader>DWELLING MASH I</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Acrylic, photo, and colored paper on heavy paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={house6} />
<ArtTextthree> 

<ArtHeader>DWELLING MASH II</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Acrylic, photo, and colored paper on heavy paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                <RisoFlex style={{backgroundColor:"black", flexDirection:"column", height:"105vh"}} >

<PhotoFlexone>

<RisoItem style={{padding:"2vw"}} Width='20vw' img src={olympia} />
<RisoItem style={{padding:"2vw"}} Width='20vw' img src={manistee1} />
<RisoItem style={{padding:"2vw"}} Width='20vw' img src={pawtucket} />


</PhotoFlexone>
<PhotoFlexone>

<RisoItem style={{padding:"2vw"}} Width='20vw' img src={armistice1} />
<RisoItem style={{padding:"2vw"}} Width='20vw' img src={rosewood} />
<RisoItem style={{padding:"2vw"}} Width='20vw' img src={taylor} />


</PhotoFlexone>

</RisoFlex>

 {/* Section with 3 photos */}

 <ArtSectionthree Grids='85vh 7vh 85vh 7vh'>


<Orbital src={house3} />
<ArtText> 

<ArtHeader>BFA Exhibition (Chicago, IL)</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on brick veneer.</ArtDesc>

</ArtText>


<GridRowTwo src={house7} />
<ArtTexttwo> 

<ArtHeader>DWELLING MASH I</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Acrylic, photo, and colored paper on heavy paper.</ArtDesc>

</ArtTexttwo>


                </ArtSectionthree>


            
        </div>
    )
}

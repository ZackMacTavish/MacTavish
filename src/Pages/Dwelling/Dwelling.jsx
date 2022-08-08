import React, {useLayoutEffect} from 'react'
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti'
import housemash from '../../img/House—Mash.jpg';
import { ArtDesc, ArtHeader, ArtSectionthreeog, ArtSectionThreetwo, ArtText, ArtTextthree, ArtTexttwo, ArtYear, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';
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
import housemash2 from '../../img/housemash2.jpg';
import housepainting from '../../img/House—Pre-Ipad.jpg';
import manisteeblock from '../../img/Manisteeblock.jpg';



export const TextSection =styled.h1`
width: 55vw;
font-family: 'Space Grotesk', sans-serif;
padding-left: 2vw;
color: white;
font-size: 2.5rem;
@media (max-width: 1600px) {
    width: 60vw;
font-size: 1.8rem;
;}

@media (max-width: 450px) {
 width: 90vw;
 font-size: 1.5rem;
}
`

const PhotoFlexone = styled.div`
display: flex;
justify-content: space-between;

@media(max-width: 450px) {
    flex-direction: column;
}
`

const PicturesFlex =styled.div`
display: flex;
justify-content: center;
align-items: center;
height: auto;
width: 100vw;
background-color: black;
flex-direction: column;
`


export default function Dwelling() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <RisoFlex >

            <RisoItem Width='60vw' src={housemash} />

            </RisoFlex>


      

            <RisoFlex style={{backgroundColor:"black"}}>
            <TextSection>Dwelling is a series composed of houses I’ve 
lived in throughout my life. The work aims to
evoke memories, nostalgia, and past experiences. 
<br /> <br />The collage-like compositions are a culmination of the past and bring multiple stories into one.
 </TextSection>

            </RisoFlex>

       

            {/* Section with 3 photos */}

            <ArtSectionthreeog Backgroundcolor='white'>


<Orbital src={housepainting} />
<ArtText> 

<ArtHeader>Open House (WIP)</ArtHeader>
<ArtYear>2021-22</ArtYear>
<ArtDesc>Acrylic, and embroidery on canvas.</ArtDesc>

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

                </ArtSectionthreeog>


                <RisoFlex >

<RisoItem Width='60vw' img src={housemash2} />

</RisoFlex>

                <PicturesFlex >

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

            </PicturesFlex>

    {/* Section with 3 photos */}

             <ArtSectionthreeog Backgroundcolor='white'>


<Orbital src={manisteeblock} />
<ArtText> 

<ArtHeader>Manistee Street</ArtHeader>
<ArtYear>2022</ArtYear>
<ArtDesc>Reduction relief woodblock print.</ArtDesc>

</ArtText>


<GridRowTwo src={house5} />
<ArtTexttwo> 

<ArtHeader>DWELLING MASH IV</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Photo, and colored paper on heavy paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={house6} />
<ArtTextthree> 

<ArtHeader>DWELLING MASH V</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Photo, and colored paper on heavy paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthreeog>

                <PicturesFlex>

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

</PicturesFlex>

 {/* Section with 3 photos */}

 <ArtSectionthreeog Backgroundcolor='white'>


<Orbital src={house3} />
<ArtText> 

<ArtHeader>DWELLING MASH VI</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Photo, and colored paper on heavy paper.</ArtDesc>

</ArtText>


<GridRowTwo src={house7} />
<ArtTexttwo> 

<ArtHeader>DWELLING MASH VII</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Photo, and colored paper on heavy paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={house4} />
<ArtTextthree> 

<ArtHeader>DWELLING MASH III</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Photo, and colored paper on heavy paper.</ArtDesc>

</ArtTextthree>


                </ArtSectionthreeog>


            
        </div>
    )
}

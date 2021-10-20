import React from 'react'
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti'
import bike from '../../img/Bicycle.png';
import { TextSection } from '../Dwelling/Dwelling';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, FullBg, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';

import collage50 from '../../img/collage50.jpg';
import collage47 from '../../img/collage47.jpg';
import collage32 from '../../img/collage32.jpg';
import collage1 from '../../img/Collage1.2.jpg';
import collage2 from '../../img/Collage2.2.jpg';
import collage3 from '../../img/Collage3.jpg';
import collage4 from '../../img/Collage4.jpg';
import collagefour from '../../img/No4.jpg';
import collage45 from '../../img/collage45.jpg';

import boats from '../../img/Boats.jpg';

import spread1 from '../../img/spread1.png';
import spread2 from '../../img/spread2.png';

export default function Collages() {
    return (
        <div>

        <RisoFlex >

        <RisoItem Width='55vw' img src={bike} />

        </RisoFlex>

        <RisoFlex style={{backgroundColor:"black"}}>
            <TextSection>Collaging is a technique I use to work through compositions, shapes, and colors. 
<br /> <br />Plus, I enjoy making them. <br /> <br />
 </TextSection>

            </RisoFlex>


            {/* Section with 3 photos */}

            <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={collage50} />
<ArtText> 

<ArtHeader>No. 50</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={collage47} />
<ArtTexttwo> 

<ArtHeader>No. 47</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage comic book clippings pasted on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage32} />
<ArtTextthree> 

<ArtHeader>No. 32</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                <FullBg src={boats} />


                 {/* Section with 3 photos */}

            <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={collage1} />
<ArtText> 

<ArtHeader>No. 1</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={collage2} />
<ArtTexttwo> 

<ArtHeader>No. 2</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage comic book clippings pasted on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage3} />
<ArtTextthree> 

<ArtHeader>No. 3</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                <RisoFlex >

<RisoItem Width='60vw' img src={spread1} />

</RisoFlex>

<RisoFlex >

<RisoItem Width='60vw' img src={spread2} />

</RisoFlex>


      {/* Section with 3 photos */}

      <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={collage4} />
<ArtText> 

<ArtHeader>No. 4</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={collagefour} />
<ArtTexttwo> 

<ArtHeader>No. 2</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage comic book clippings pasted on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage45} />
<ArtTextthree> 

<ArtHeader>No. 3</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>
            
        </div>
    )
}

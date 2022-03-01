import React, {useLayoutEffect} from 'react'
import { RisoFlex, RisoItem } from '../Graffiti/Graffiti'
import bike from '../../img/Bicycle.png';
import { TextSection } from '../Dwelling/Dwelling';
import { ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, FullBg, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';

import collage50 from '../../img/collage50.png';
import collage47 from '../../img/collage47.png';
import collage32 from '../../img/collage32.png';
import collage1 from '../../img/Collage1.2.jpg';
import collage2 from '../../img/Collage2.2.png';
import collage3 from '../../img/Collage3.png';
import collage4 from '../../img/Collage4.png';
import collagefour from '../../img/No4.png';
import collage45 from '../../img/collage45.png';
import collage41 from '../../img/collage41.jpg';
import collage42 from '../../img/collage42.jpg';
import collage43 from '../../img/collage43.jpg';
import collage44 from '../../img/collage44.png';
import collage37 from '../../img/collage37.jpg';
import collage48 from '../../img/collage48.jpg';
import collage40 from '../../img/collage40.png';
import collage39 from '../../img/collage39.png';
import collage38 from '../../img/collage38.jpg';
import collage34 from '../../img/collage34.jpg';
import collage35 from '../../img/collage35.jpg';
import collage31 from '../../img/collage31.jpg';
import collage28 from '../../img/collage28.jpg';
import collage29 from '../../img/collage29.jpg';
import collage30 from '../../img/collage30.jpg';
import collage46 from '../../img/collage46.jpg';
import collage33 from '../../img/collage33.jpg';
import collage49 from '../../img/collage49.jpg';

import boats from '../../img/Boats.jpg';
import rapture from '../../img/Dabs—Myla—Remix.jpg';

import spread1 from '../../img/spread1.png';
import spread2 from '../../img/spread2.png';
import spread3 from '../../img/spread3.png';
import spread4 from '../../img/spread4.png';
import spread5 from '../../img/spread5.png';
import spread6 from '../../img/spread6.png';

import { ThreeFlex, ThreeItem } from '../Photography/Photography';

export default function Collages() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>

        <RisoFlex >

        <RisoItem Width='55vw' img src={bike} />

        </RisoFlex>

        <RisoFlex style={{backgroundColor:"black"}}>
            <TextSection Fontsize='3.5rem'>Collaging is a technique I use to work through compositions, shapes, and colors. 
<br /> <br />Plus, I enjoy making them. <br /> <br />
 </TextSection>

            </RisoFlex>


            {/* Section with 3 photos */}

            <ArtSectionthreeog>


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

                </ArtSectionthreeog>

                <FullBg src={boats} />


                 {/* Section with 3 photos */}

            <ArtSectionthreeog>


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
<ArtDesc>Vintage newspaper arranged and pasted on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage3} />
<ArtTextthree> 

<ArtHeader>No. 3</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Acrylic, and marker on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthreeog>

                <RisoFlex >

<RisoItem Width='60vw' img src={spread1} />

</RisoFlex>

<RisoFlex >

<RisoItem Width='60vw' img src={spread2} />

</RisoFlex>


      {/* Section with 3 photos */}

      <ArtSectionthreeog>


<Orbital src={collage4} />
<ArtText> 

<ArtHeader>No. 4</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={collagefour} />
<ArtTexttwo> 

<ArtHeader>No. 4.2</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage paper, acrylic, and marker on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage45} />
<ArtTextthree> 

<ArtHeader>No. 45</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthreeog>

                <ThreeFlex Backgroundcolor='#191919'>
             <ThreeItem src={collage41} />
            <ThreeItem src={collage42} />
            <ThreeItem src={collage43} />
            </ThreeFlex>

            <RisoFlex >

<RisoItem Width='60vw' img src={spread3} />

</RisoFlex>


  {/* Section with 3 photos */}

  <ArtSectionthreeog>


<Orbital src={collage44} />
<ArtText> 

<ArtHeader>No. 44</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={collage37} />
<ArtTexttwo> 

<ArtHeader>No. 37</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage comic book clippings pasted on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage48} />
<ArtTextthree> 

<ArtHeader>No. 48</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthreeog>

                <RisoFlex >

<RisoItem Width='60vw' img src={spread4} />

</RisoFlex>


{/* Section with 3 photos */}

<ArtSectionthreeog>


<Orbital src={collage40} />
<ArtText> 

<ArtHeader>No. 40</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage paper, and colored pencil on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={collage39} />
<ArtTexttwo> 

<ArtHeader>No. 39</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Acrylic and marker on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage38} />
<ArtTextthree> 

<ArtHeader>No. 38</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthreeog>

                <RisoFlex >

<RisoItem Width='60vw' img src={spread5} />

</RisoFlex>


{/* Section with 3 photos */}

<ArtSectionthreeog>


<Orbital src={collage34} />
<ArtText> 

<ArtHeader>No. 34</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage paper, and colored pencil on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={collage35} />
<ArtTexttwo> 

<ArtHeader>No. 35</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazines, and color-aid pasted on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage31} />
<ArtTextthree> 

<ArtHeader>No. 31</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthreeog>

                <RisoFlex >

<RisoItem Width='60vw' img src={spread6} />

</RisoFlex>

{/* Section with 3 photos */}

<ArtSectionthreeog>


<Orbital src={collage28} />
<ArtText> 

<ArtHeader>No. 28</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage paper, and colored pencil on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={collage29} />
<ArtTexttwo> 

<ArtHeader>No. 29</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazines, and color-aid pasted on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage30} />
<ArtTextthree> 

<ArtHeader>No. 30</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazine clippings pasted on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthreeog>

                <FullBg src={rapture} />

                {/* Section with 3 photos */}

<ArtSectionthreeog>


<Orbital src={collage46} />
<ArtText> 

<ArtHeader>No. 46</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage comic books, arranged and pasted on paper.</ArtDesc>

</ArtText>


<GridRowTwo src={collage33} />
<ArtTexttwo> 

<ArtHeader>No. 33</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage magazines, and color-aid pasted on paper.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={collage49} />
<ArtTextthree> 

<ArtHeader>No. 49</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Vintage postcards, arranged and pasted on paper.</ArtDesc>

</ArtTextthree>

                </ArtSectionthreeog>


            
        </div>
    )
}

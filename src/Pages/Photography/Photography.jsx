import React, {useLayoutEffect} from 'react';
import styled from 'styled-components';
import polaroid1 from '../../img/polaroid1.jpg';
import polaroid2 from '../../img/polaroid2.jpg';
import polaroid3 from '../../img/polaroid3.jpg';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, FullBg, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';
import Hawaii1 from '../../img/Greenhut.jpg';
import eighteen from '../../img/1821.jpg';
import birdy from '../../img/BirdyBrooklyn.jpg';
import coney2 from '../../img/Coney2.jpg';
import cannon1 from '../../img/Cannon1.jpg';
import cannon2 from '../../img/Cannon2.jpg';
import cannon3 from '../../img/Cannon3.jpg';
import kevin from '../../img/Kevin.jpg';
import skull from '../../img/Skull.jpg';
import twoskulls from '../../img/2skulls.jpg';
import hawaiianchurch from '../../img/HawaiianChurch.jpg';
import aquarium from '../../img/Aquarium.jpg';
import jelly1 from '../../img/Jelly.jpg';
import jelly2 from '../../img/Jelly2.jpg';
import goog from '../../img/Goog.jpg';
import olivia from '../../img/Olivia.jpg';
import williamsburg from '../../img/Williamsburg.jpg';
import splash from '../../img/Splash.jpg';
import circle1 from '../../img/circle1.png';
import circle2 from '../../img/circle2.jpg';
import circle3 from '../../img/circle3.jpg';
import Avalon from '../../img/Avalon.jpg';
import brooklyndouble from '../../img/brooklyndouble.jpg';
import nathans from '../../img/Nathans.jpg';
import polaroid7 from '../../img/polaroid7.jpg';
import polaroid8 from '../../img/polaroid8.jpg';
import polaroid9 from '../../img/polaroid9.jpg';
import greensand from '../../img/greensand.jpg';


export const ThreeFlex = styled.div`
display: flex;
padding: 0 15vw;
margin-top: -1vh;
height: 101vh;
align-items: center;
justify-content: space-between;
justify-self: center;
background-color:${(props) => props.Backgroundcolor};

@media(max-width: 450px) {
  height: auto;
}
`

export const ThreeItem = styled.img`
width: 20vw;
@media (max-width: 450px) {
  width: 80vw;
}
`

export default function Photography() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

    return (
        <div>

            {/* Section with three poloariods */}
            <ThreeFlex Backgroundcolor='#191919'>
            <ThreeItem src={polaroid1} />
            <ThreeItem src={polaroid2} />
            <ThreeItem src={polaroid3} />
          
          
            </ThreeFlex>
  {/* Section with green hut */}
            <FullBg src={Hawaii1} />
            
            {/* Section with 3 photos */}

            <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={eighteen} />
<ArtText> 

<ArtHeader>1821 (Chicago)</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>

</ArtText>


<GridRowTwo src={birdy} />
<ArtTexttwo> 

<ArtHeader>BROOKLYN BRIDGE</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Double exposure film photograph.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={coney2} />
<ArtTextthree> 

<ArtHeader>PARACHUTE (Coney Island)</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Double exposure film photograph.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                  {/* Section with three yellow polaroids */}

                <ThreeFlex Backgroundcolor='#C7B815'>
                <ThreeItem src={cannon1} />
             <ThreeItem src={cannon2} />
             <ThreeItem src={cannon3} />


                </ThreeFlex>


  {/* Section with 3 photos */}

                <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={kevin} />
<ArtText> 

<ArtHeader>KEVIN</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>

</ArtText>


<GridRowTwo src={skull} />
<ArtTexttwo> 

<ArtHeader>SKULL(Manhattan, NY)</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Double exposure film photograph.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={twoskulls} />
<ArtTextthree> 

<ArtHeader>Duo Skulls (Sauvie Island, OR)</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Double exposure film photograph.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                  {/* Section with green hut */}
            <FullBg src={hawaiianchurch} />
            
                 {/* Section with three poloariods */}
                 <ThreeFlex Backgroundcolor='#191919'>
            <ThreeItem src={aquarium} />
            <ThreeItem src={jelly1} />
            <ThreeItem src={jelly2} />
          
          
            </ThreeFlex>

             {/* Section with 3 photos */}

             <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={goog} />
<ArtText> 

<ArtHeader>GOOG</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>

</ArtText>


<GridRowTwo src={olivia} />
<ArtTexttwo> 

<ArtHeader>OLIVIA</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Double exposure film photograph.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={williamsburg} />
<ArtTextthree> 

<ArtHeader>WILLIAMSBURG BRIDGE</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Double exposure film photograph.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                     {/* Section with splash */}
            <FullBg src={splash} />

              {/* Section with three circle poloariods */}
              <ThreeFlex Backgroundcolor='#191919'>
            <ThreeItem src={circle1} />
            <ThreeItem src={circle2} />
            <ThreeItem src={circle3} />
          
          
            </ThreeFlex>


             {/* Section with 3 photos */}

             <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={Avalon} />
<ArtText> 

<ArtHeader>Avalon Theatre (Portland, OR)</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>

</ArtText>


<GridRowTwo src={brooklyndouble} />
<ArtTexttwo> 

<ArtHeader>Street Graffiti (Brooklyn, NY)</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Double exposure film photograph.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={nathans} />
<ArtTextthree> 

<ArtHeader>NATHAN'S (Brooklyn, NY)</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Double exposure film photograph.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                    {/* Section with three circle poloariods */}
              <ThreeFlex Backgroundcolor='#191919'>
            <ThreeItem src={polaroid7} />
            <ThreeItem src={polaroid8} />
            <ThreeItem src={polaroid9} />
          
          
            </ThreeFlex>

            {/* Section with greensand beach */}
            <FullBg src={greensand} />
        </div>
    )
}

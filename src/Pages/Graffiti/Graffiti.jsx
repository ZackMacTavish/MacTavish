import React from 'react'
import { ThreeFlex, ThreeItem } from '../Photography/Photography'
import artbash1 from '../../img/Artbashmash.jpg';
import artbash2 from '../../img/Artbashmash2.jpg';
import artbash3 from '../../img/Artbashmash3.jpg';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, FullBg, GridRowThree, GridRowTwo, Orbital } from '../COMPOSITION/Composition';
import sense from '../../img/RIPSENSE.jpg';
export default function Graffiti() {
    return (
        <div>
             <ThreeFlex Backgroundcolor='#191919'>
             <ThreeItem src={artbash1} />
            <ThreeItem src={artbash2} />
            <ThreeItem src={artbash3} />
            </ThreeFlex>

            <FullBg src={sense} />

              {/* Section with 3 photos */}

              <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={artbash3} />
<ArtText> 

<ArtHeader>1821 (Chicago)</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Film photograph taken on the Holga 120N.</ArtDesc>

</ArtText>


<GridRowTwo src={artbash1} />
<ArtTexttwo> 

<ArtHeader>BROOKLYN BRIDGE</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Double exposure film photograph.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={artbash2} />
<ArtTextthree> 

<ArtHeader>PARACHUTE (Coney Island)</ArtHeader>
<ArtYear>2021</ArtYear>
<ArtDesc>Double exposure film photograph.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

        </div>
    )
}

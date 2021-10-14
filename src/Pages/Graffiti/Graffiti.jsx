import React from 'react'
import { ThreeFlex, ThreeItem } from '../Photography/Photography'
import artbash1 from '../../img/Artbashmash.jpg';
import artbash2 from '../../img/Artbashmash2.jpg';
import artbash3 from '../../img/Artbashmash3.jpg';
import { ArtDesc, ArtHeader, ArtSectionthree, ArtText, ArtTextthree, ArtTexttwo, ArtYear, FullBg, GridRowThree, GridRowTwo, Orbital, ParagraphFour } from '../COMPOSITION/Composition';
import sense from '../../img/RIPSENSE.jpg';
import bfa from '../../img/BFA.jpg';
import reuzes from '../../img/Reuzes.jpg';
import denver from '../../img/Denver.jpg';
import { NewSection } from '../Art Landing/Art';
import Bees from '../../img/Whiteline.jpg';
import styled from 'styled-components';
import mucha from '../../img/Mucha.jpg';
import crawford from '../../img/Crawford.jpg';
import paintlouis from '../../img/Paintlouis.jpg';
import riso from '../../img/riso3.jpg';
import sushix from '../../img/SushiX.jpg';
import rogerrabbit from '../../img/rogerrabbit.jpg';
import summer from '../../img/summer16.jpg';
import stylesmash from '../../img/Reuzes-stylesmash.jpg';
import Lines from '../../img/ReuzesLines.jpg';
import sushixtwo from '../../img/SushiX2.jpg';
import enova from '../../img/Enova.jpg';
import eu from '../../img/EU.jpg';


export const RisoItem = styled.img`
width: ${(props) => props.Width};
`

export const RisoFlex = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
`

const BeesStyle = styled.img`
width: 65vw;
margin-left: -9vw;
`

const FiftyWidth=styled.div`
width: 50vw;
display:flex;
justify-content: center;
`

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


<Orbital src={bfa} />
<ArtText> 

<ArtHeader>BFA Exhibition (Chicago, IL)</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on brick veneer.</ArtDesc>

</ArtText>


<GridRowTwo src={reuzes } />
<ArtTexttwo> 

<ArtHeader>LOWBROW (Brooklyn, NY)</ArtHeader>
<ArtYear>2020</ArtYear>
<ArtDesc>Spray paint on cement.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={denver} />
<ArtTextthree> 

<ArtHeader>RHINO (Denver,CO)</ArtHeader>
<ArtYear>2019</ArtYear>
<ArtDesc>Spray paint on cinderblock.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                {/*Art Book + Text */}
                <NewSection Backgroundheight="125vh">
                    <FiftyWidth>
<BeesStyle src={Bees} />
</FiftyWidth>
                    <ParagraphFour>
                    Composition was my first solo art exhibition. I released a limited edition of 30 copies of a 46 page art book for 
the show.

                    </ParagraphFour>
                    </NewSection>


                     {/* Section with 3 photos */}

              <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={mucha} />
<ArtText> 

<ArtHeader>ORANGE LINE (Chicago, IL)</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on cinderblock.</ArtDesc>

</ArtText>


<GridRowTwo src={crawford} />
<ArtTexttwo> 

<ArtHeader>CRAWFORD (Chicago, IL)</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on cement.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={paintlouis} />
<ArtTextthree> 

<ArtHeader>PAINT LOUIS (St. Louis,MO)</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on cement.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>

                <RisoFlex>
            <RisoItem Width='60vw' img src={riso} />
           
            </RisoFlex>

             {/* Section with 3 photos */}

             <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={sushix} />
<ArtText> 

<ArtHeader>BFA Exhibition (Chicago, IL)</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on brick veneer.</ArtDesc>

</ArtText>


<GridRowTwo src={rogerrabbit} />
<ArtTexttwo> 

<ArtHeader>LOWBROW (Brooklyn, NY)</ArtHeader>
<ArtYear>2020</ArtYear>
<ArtDesc>Spray paint on cement.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={summer} />
<ArtTextthree> 

<ArtHeader>RHINO (Denver,CO)</ArtHeader>
<ArtYear>2019</ArtYear>
<ArtDesc>Spray paint on cinderblock.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>


                <RisoFlex>
            <RisoItem  Width='80vw' img src={Lines} />
           
            </RisoFlex>
            <RisoFlex>
            <RisoItem  Width='80vw' img src={stylesmash} />
           
            </RisoFlex>


             {/* Section with 3 photos */}

             <ArtSectionthree Grids='85vh 7vh 85vh 7vh 85vh 7vh'>


<Orbital src={sushixtwo} />
<ArtText> 

<ArtHeader>Sushi X</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on brick. (Collaboration with 'Leks')</ArtDesc>

</ArtText>


<GridRowTwo src={enova} />
<ArtTexttwo> 

<ArtHeader>ENOVA INTERNATIONAL INC.</ArtHeader>
<ArtYear>2015</ArtYear>
<ArtDesc>Spray paint on wood.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={eu} />
<ArtTextthree> 

<ArtHeader>YARROW'S (Providence, RI)</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on cinderblock.</ArtDesc>

</ArtTextthree>

                </ArtSectionthree>


        </div>
    )
}

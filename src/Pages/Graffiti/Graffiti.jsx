import React, {useLayoutEffect} from 'react'
import artbash1 from '../../img/Artbashmash.jpg';
import artbash2 from '../../img/Artbashmash2.jpg';
import artbash3 from '../../img/Artbashmash3.jpg';
import { ArtDesc, ArtHeader, ArtSectionthreeog, ArtText, ArtTextthree, ArtTexttwo, ArtYear, FullBg, GridRowThree, GridRowTwo, Orbital, ParagraphFour } from '../COMPOSITION/Composition';
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
import { ThreeFlextwo, ThreeItemtwo } from '../Printmaking/Printmaking';
import { TextSection } from '../Dwelling/Dwelling';


export const RisoItem = styled.img`
width: ${(props) => props.Width};
max-width: 1000px;
height: auto;
@media (max-width: 1000px) {
width: 90vw;
padding-top: 20vh;
;}

@media (max-width: 450px) {
    padding-top: 5vh;
    padding-bottom: 5vh;
}
`

export const RisoFlex = styled.div`
display: flex;
justify-content: center;
background-color: ${props => props.theme.backgroundTwo};
align-items: center;
height: auto;
padding-top: 2vh;
padding-bottom: 2vh;
width: 100vw;

@media(max-width: 1400px) {
    height: auto;
    padding-top: 3vh;
    padding-bottom: 3vh;
}

@media(max-width: 450px) {
    height: auto;
}
`

const BeesStyle = styled.img`
max-width: 900px;
height: auto;
width: 65vw;
margin-left: -9vw;
`

const FiftyWidth=styled.div`
width: 50vw;
display:flex;
justify-content: center;
`

export default function Graffiti() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
             <ThreeFlextwo Backgroundcolor='#191919'>
             <ThreeItemtwo Width='20vw' src={artbash1} />
            <ThreeItemtwo Width='20vw' src={artbash2} />
            <ThreeItemtwo Width='20vw' src={artbash3} />
            </ThreeFlextwo>

            <FullBg src={sense} />

            <RisoFlex style={{backgroundColor:"black"}}>
            <TextSection>My roots as an artist started in graffiti. I enjoy sketching letters. 
                Bending, and distorting them in different ways. 
                This eventually led to me trying out different mediums, like a paintbrush, 
                and carried over to my love for typography as well. 
                I love seeing the rich, and saturated colors often used in spray paint. 
 </TextSection>

            </RisoFlex>


              {/* Section with 3 photos */}

              <ArtSectionthreeog>


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

                </ArtSectionthreeog>

                {/*Art Book + Text */}
                <NewSection Backgroundcolor="white" Backgroundheight="125vh">
                    <FiftyWidth>
<BeesStyle src={Bees} />
</FiftyWidth>
                    <ParagraphFour>
                    This B's illustration was made for a self-published book about the art of graffiti writing.

                    </ParagraphFour>
                    </NewSection>


                     {/* Section with 3 photos */}

              <ArtSectionthreeog>


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

                </ArtSectionthreeog>

                <RisoFlex>
            <RisoItem Width='60vw' img src={riso} />
           
            </RisoFlex>

             {/* Section with 3 photos */}

             <ArtSectionthreeog>


<Orbital src={sushix} />
<ArtText> 

<ArtHeader>Sushi X</ArtHeader>
<ArtYear>2016</ArtYear>
<ArtDesc>Spray paint on brick.</ArtDesc>

</ArtText>


<GridRowTwo src={rogerrabbit} />
<ArtTexttwo> 

<ArtHeader>Crawford</ArtHeader>
<ArtYear>2020</ArtYear>
<ArtDesc>Spray paint on cement.</ArtDesc>

</ArtTexttwo>

<GridRowThree src={summer} />
<ArtTextthree> 

<ArtHeader>Crawford</ArtHeader>
<ArtYear>2019</ArtYear>
<ArtDesc>Spray paint on cement.</ArtDesc>

</ArtTextthree>

                </ArtSectionthreeog>


                <RisoFlex>
            <RisoItem  Width='80vw' img src={Lines} />
           
            </RisoFlex>
            


             {/* Section with 3 photos */}

             <ArtSectionthreeog>


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



                </ArtSectionthreeog>
                <RisoFlex>
            <RisoItem  Width='80vw' img src={stylesmash} />
           
            </RisoFlex>


        </div>
    )
}

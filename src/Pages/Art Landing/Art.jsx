import React from 'react'
import Scene from '../../Components/Three/three'
import styled from 'styled-components';
import house from '../../img/House-Web.png';
import Socials from '../../Components/Social Bar/Socials';
import {Link} from 'react-router-dom';


const ArtDiv = styled.div`
overflow-y: hidden;
width: 100vw;

`

const ArtHeader = styled.h1`
display: flex;
padding-top: 10vw;
z-index: 200;
position: absolute;
font-size: 11rem;
padding-left: 10vw;
font-weight: 800;
color: white;
font-family: 'Space Grotesk', sans-serif;
`

export const NewSection = styled.div`
display: flex;
align-items: center;
height: ${(props) => props.Backgroundheight};
width: 100vw;
background-color:${(props) => props.Backgroundcolor};
`


const ParagraphTwo = styled.div`
position: absolute;
right: 2vw;
font-family: 'Space Grotesk', sans-serif;
font-weight: 500;
font-size: 2.7rem;
width: 40vw;
color: white;
`

const ParagraphThree = styled.div`
position: absolute;
left: 3vw;
font-family: 'Space Grotesk', sans-serif;
font-weight: 500;
font-size: 2.7rem;
width: 40vw;
color: white;
`

export const HouseOne = styled.img`
width: 50vw;
padding-left: 2vw;
`

const WorkCategories = styled.ul`
color: white;
position: absolute;
right: 3vw;
font-size: 3rem;
list-style-type: none;
text-align: right;
`

const ListStyling = styled.li`
align-items: center;
padding-bottom: 2vh;
font-weight: 500;

  &:after {
    content:"";
    display: inline-block;
    width: clamp(20px, 17vw, 500px);
  height: 10px;
  margin-bottom: 5px;
  margin-left: 1vw;
  background: white;
  }

  &:hover {
    content:"";
   opacity: 0.8;
  }
`;


class Art extends React.Component {
 
  render() {
    return (  
      
      <div>
      <ArtDiv>

    <ArtHeader>Storytelling <br />through Art</ArtHeader>
                <Scene />
    
                <NewSection Backgroundheight="85vh" Backgroundcolor='#89aea9'>
                  <HouseOne  src={house} />


                  <ParagraphTwo>
                          Throughout my life I’ve
                          lived in 24 different houses.
                          My current work focuses on nostalgia, memory, and 
                          past experiences.   


                  </ParagraphTwo>
    
                
                </NewSection>

                <NewSection Backgroundheight="85vh" Backgroundcolor='#89aea9'>
                  <ParagraphThree>
                  Art gives me
the freedom to share my 
story. Explore the work 
I’ve made in the past.

                  </ParagraphThree>

                  <WorkCategories>
                  <ListStyling>DWELLING</ListStyling>

                  <Link style={{textDecoration: 'none', color:'white'}} to="/Composition"> 
                  <ListStyling>COMPOSITION</ListStyling>
                  </Link>
                  <ListStyling>PAINTINGS</ListStyling>
                
                  <ListStyling>COLLAGE</ListStyling>
                  <ListStyling>PRINTMAKING</ListStyling>
                  <Link style={{textDecoration: 'none', color:'white'}} to="/Photography">
                  <ListStyling>PHOTO</ListStyling>
                  </Link>

                  <Link style={{textDecoration: 'none', color:'white'}} to='/3d'>
                  <ListStyling>3D GRAFFITI</ListStyling>
                  </Link>

                  <Link to='/Graffiti' style={{textDecoration: 'none', color:'white'}} >
                  <ListStyling>GRAFFITI</ListStyling>
                  </Link>


                  </WorkCategories>

                </NewSection>

                
    
                </ArtDiv>
               
                </div>
    )
}};

export default Art;

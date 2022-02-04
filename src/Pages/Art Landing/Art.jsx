import React from 'react'
import Scene from '../../Components/Three/three'
import styled from 'styled-components';
import house from '../../img/House-Web.png';
import {Link} from 'react-router-dom';


export const ArtDiv = styled.div`
overflow-y: hidden;
width: 100vw;

`

export const ArtHeader = styled.h1`
display: flex;
bottom: 13vh;
z-index: 200;
position: absolute;
font-size: clamp(24px, 12vw, 11rem);
padding-left: 10vw;
font-weight: 800;
line-height: 18vh;
color: white;
font-family: 'Space Grotesk', sans-serif;
@media (max-width: 1000px) {
line-height: 15vh;
;}
@media (max-width: 800px) {
line-height: 8vh;
;}
`

export const NewSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: ${(props) => props.Backgroundheight};
width: 100vw;
background-color:${(props) => props.Backgroundcolor};
@media (max-width: 1000px) {
flex-direction: column;
height: auto;
padding-bottom: 10vh;
;}
`


export const ParagraphTwo = styled.div`
position: relative;
font-family: 'Space Grotesk', sans-serif;
font-weight: 500;
padding-right: 2vw;
font-size: 2.7rem;
width: 35vw;
color: white;
@media (max-width: 1000px) {
width: 80vw;
padding: 0;
;}
`

export const ParagraphThree = styled.div`
position: relative;
left: 3vw;
font-family: 'Space Grotesk', sans-serif;
font-weight: 500;
font-size: 2.7rem;
width: 40vw;
color: white;
@media (max-width: 1000px) {
width: 80vw;
padding-bottom: 10vh;
;}
`

export const HouseOne = styled.img`
width: 50vw;
padding-left: 2vw;
`

export const WorkCategories = styled.ul`
color: white;
position: relative;
right: -3vw;
font-size: 3rem;
list-style-type: none;
text-align: right;
@media (max-width: 1000px) {
width: 80vw;
font-size: 2.3rem;
;}
`

export const ListStyling = styled.li`
align-items: center;
padding-bottom: 2vh;
font-weight: 500;

  &:after {
    content:"";
    display: inline-block;
    width: clamp(30px, 17vw, 500px);
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
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
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
                  <Link style={{textDecoration: 'none', color:'white'}} to="/Dwelling">
                  <ListStyling>DWELLING</ListStyling>
                  </Link>

                  <Link style={{textDecoration: 'none', color:'white'}} to="/Composition"> 
                  <ListStyling>COMPOSITION</ListStyling>
                  </Link>

                  <Link style={{textDecoration: 'none', color:'white'}} to="/Painting">
                  <ListStyling>PAINTINGS</ListStyling>
                  </Link>
                  
                <Link style={{textDecoration: 'none', color:'white'}} to="/Collages">
                  <ListStyling>COLLAGE</ListStyling>
                  </Link>
                  
                  <Link style={{textDecoration: 'none', color:'white'}} to="/Printmaking">
                  <ListStyling>PRINTMAKING</ListStyling>
                  </Link>
                  
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

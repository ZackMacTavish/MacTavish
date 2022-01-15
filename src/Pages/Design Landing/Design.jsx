import React from 'react'
import ostrich from '../../img/Books.jpg';
import ostrichcollage from '../../img/OstrichPlumesPhoto.jpg';
import {Link} from 'react-router-dom';
import { ArtDiv, ArtHeader, HouseOne, ListStyling, NewSection, ParagraphThree, ParagraphTwo, WorkCategories } from '../Art Landing/Art';
import { RisoItem } from '../Graffiti/Graffiti';




class Design extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }
 
  render() {
    return (  
      
      <div>
      <ArtDiv>

<NewSection Backgroundheight="100vh" Backgroundcolor='#89aea9'>
    <ArtHeader>Graphic Design,  <br />UI, Front-End.</ArtHeader>
    <RisoItem Width='50vw' img src={ostrichcollage} style={{paddingLeft:'10vw'}}/>
    </NewSection>

                
    
                <NewSection Backgroundheight="85vh" Backgroundcolor='#89aea9'>
                  <HouseOne  src={ostrich} />


                  <ParagraphTwo>
                         Bookmaking has been a joy for my design process. Here are 5 small books that I have self-published since 2015. 


                  </ParagraphTwo>
    
                
                </NewSection>

                <NewSection Backgroundheight="85vh" Backgroundcolor='#89aea9'>
                  <ParagraphThree>
                  Working in Design for 
over 6 years has led me
to work on an array of 
projects. Here are some 
of my favorites. 

                  </ParagraphThree>

                  <WorkCategories>
                  <Link style={{textDecoration: 'none', color:'white'}} to="/Giga">
                  <ListStyling>GIGA</ListStyling>
                  </Link>

                  <Link style={{textDecoration: 'none', color:'white'}} to="/AccessDirect">
                  <ListStyling>ACCESS DIRECT</ListStyling>
                  </Link>

                  <Link style={{textDecoration: 'none', color:'white'}} to="/Outsource">
                  <ListStyling>OUTSOURCE</ListStyling>
                  </Link>

                  <Link style={{textDecoration: 'none', color:'white'}} to="/GraphicDesign"> 
                  <ListStyling>GRAPHIC DESIGN</ListStyling>
                  </Link>

                  <Link style={{textDecoration: 'none', color:'white'}} to="/Ux">
                  <ListStyling>UX/UI</ListStyling>
                  </Link>

                <Link style={{textDecoration: 'none', color:'white'}} to="/MacTavish">
                  <ListStyling>BOOKS</ListStyling>
                  </Link>
                  
                  


                  </WorkCategories>

                </NewSection>

                
    
                </ArtDiv>
               
                </div>
    )
}};

export default Design;

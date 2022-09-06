import React from 'react'
import styled from 'styled-components';
import logo from '../../img/Final-M-SinglePiece.svg';
import {Link} from 'react-router-dom';


const Navdiv = styled.div`
display: flex;
align-items: center;
background-color:rgba(0,0,0,0) ;
position: fixed;
width: 100vw;
height: 8vh;
z-index: 1000;

@media (max-width: 450px) {
  padding-top: 1vh;
}
`

const NavLinks = styled.ul`
display: flex;
width: 100vw;
justify-content: flex-end;
list-style-type: none;
text-decoration: none;
padding: 5vw;
`

const ListItems = styled.div`
font-weight: 800;
padding-right: 4vw;
font-size:  1.2rem;
color: #a6d1ca;
-webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -o-transition: all 2s ease;
  transition: all 2s ease;


`
const Dropdown = styled.div`
position: absolute;
background-color: #4a4a4a;
border-radius: .25rem;
box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
display: none;
`
const ListItemArt = styled.div`
font-weight: 800;
padding-right: 4vw;
font-size:  1.2rem;
color: #a6d1ca;

&:hover ${Dropdown}{
    display: block;
    background-color: #4a4a4a;
    
}
`



const DropdownMenu = styled.div`
position: relative;
padding: .75rem;
left: 0;
color: white;
:hover{
  opacity: 0.5;
}
`





const Logo =styled.img`
width: clamp(46px, 2.6vw, 90px);
padding-top: 1vw;
padding-left: 5vw;
-webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -o-transition: all 2s ease;
  transition: all 2s ease;


&:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
    
}

`




export default function Nav() {
    return (
        <Navdiv>
          
           <Link style={{cursor:'none'}}to="/MacTavish"> 
            <Logo src={logo} />
          </Link> 
         
            <NavLinks>

             
            <Link style={{textDecoration:'none'}} to="/Art"> 

                <ListItems> <ListItemArt>Art
                <Dropdown>
                <Link style={{textDecoration:'none'}} to="/Dwelling"> 
                <DropdownMenu>Dwelling</DropdownMenu>
                </Link>
                <Link style={{textDecoration:'none'}} to="/Composition"> 
                <DropdownMenu>Composition</DropdownMenu>
                </Link>
                <Link style={{textDecoration:'none'}} to="/Painting"> 
                <DropdownMenu>Paintings</DropdownMenu>
                </Link>
                <Link style={{textDecoration:'none'}} to="/Collages"> 
                <DropdownMenu>Collages</DropdownMenu>
                </Link>
                <Link style={{textDecoration:'none'}} to="/Printmaking"> 
                <DropdownMenu>Printmaking</DropdownMenu>
                </Link>
                <Link style={{textDecoration:'none'}} to="/Photography"> 
                <DropdownMenu>Photo</DropdownMenu>
                </Link>
                <Link style={{textDecoration:'none'}} to="/3d"> 
                <DropdownMenu>3d Graffiti</DropdownMenu>
                </Link>
                <Link style={{textDecoration:'none'}} to="/Graffiti"> 
                <DropdownMenu>Graffiti</DropdownMenu>
                </Link>
                </Dropdown>
                </ListItemArt>
                </ListItems>
            </Link>

           
            <Link style={{textDecoration:'none'}} to="/Design"> 

<ListItems> <ListItemArt>Design
<Dropdown>
<Link style={{textDecoration:'none'}} to="/Giga"> 
<DropdownMenu>Giga</DropdownMenu>
</Link>

<Link style={{textDecoration:'none'}} to="/ThreePillars"> 
<DropdownMenu>Three Pillars</DropdownMenu>
</Link>
<Link style={{textDecoration:'none'}} to="/Ux"> 
<DropdownMenu>UX/UI</DropdownMenu>
</Link>
<Link style={{textDecoration:'none'}} to="/AccessDirect"> 
<DropdownMenu>Access Direct</DropdownMenu>
</Link>
<Link style={{textDecoration:'none'}} to="/Outsource"> 
<DropdownMenu>Outsource</DropdownMenu>
</Link>
<Link style={{textDecoration:'none'}} to="/GraphicDesign"> 
<DropdownMenu>Graphic Design</DropdownMenu>
</Link>
</Dropdown>
</ListItemArt>
</ListItems>
</Link>

                <Link to="/About" style={{textDecoration:'none'}}>
                <ListItems>About</ListItems>
                </Link>


                </NavLinks>
        </Navdiv>
    )
}

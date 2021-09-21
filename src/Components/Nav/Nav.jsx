import React from 'react'
import styled from 'styled-components';
import logo from '../../img/Final-M-SinglePiece.svg';
import {Link, BrowserRouter as Router} from 'react-router-dom';

const Navdiv = styled.div`
display: flex;
align-items: center;
background-color:rgba(0,0,0,0) ;
position: fixed;
width: 100vw;
height: 8vh;
z-index: 1000;
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

&:hover{
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
    
}

`

const Logo =styled.img`
width: clamp(50px, 2.6vw, 90px);
padding-left: 5vw;
-webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -o-transition: all 2s ease;
  transition: all 2s ease;


&:hover{
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  
}

`


export default function Nav() {
    return (
        <Navdiv>
          
           <Link style={{cursor:'none'}}to="/"> 
            <Logo src={logo} />
          </Link> 
         
            <NavLinks>
            <Link style={{textDecoration:'none', cursor:'none'}} to="/Art"> 
                <ListItems>Art</ListItems>
            </Link>
                <ListItems>Design</ListItems>
                <ListItems>About</ListItems>


                </NavLinks>
        </Navdiv>
    )
}

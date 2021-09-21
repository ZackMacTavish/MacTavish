import React from 'react'
import Scene from '../../Components/Three/three'
import styled from 'styled-components';


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
`

const NewSection = styled.div`
height: 100vh;
width: 100vw;
background-color: #89aea9;
`


export default function Art() {
    return (
        <ArtDiv>

<ArtHeader>Storytelling <br />through Art</ArtHeader>
            <Scene />

            <NewSection></NewSection>

            </ArtDiv>
    )
}

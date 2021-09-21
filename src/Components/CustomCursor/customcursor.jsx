import React from 'react'
import styled from 'styled-components';


const AppCursorstyles = styled.div`
 z-index: 2000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
    background-color: #ffffff8f;
   pointer-events: none;
    overflow: hidden;
    transform: translate3d(0,0,0);
    position: fixed;
   

`

const SecondaryCursorstyles = styled.div`
  z-index: 20000;
background-color: black;
  // overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
width: 60px;
height: 60px;
opacity: 0;

`


export default function Customcursor() {
    const cursorRef = React.useRef(null);
    const secondaryCursor = React.useRef(null);
    const positionRef = React.useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
      });



  
      React.useEffect(() => {
        document.addEventListener("mousemove", (event) => {
          const { clientX, clientY } = event;
    
          const mouseX = clientX;
          const mouseY = clientY;
    
          positionRef.current.mouseX =
            mouseX - secondaryCursor.current.clientWidth / 2;
          positionRef.current.mouseY =
            mouseY - secondaryCursor.current.clientHeight / 2;
          cursorRef.current.style.transform = `translate3d(${mouseX -
            cursorRef.current.clientWidth / 2}px, ${mouseY -
            cursorRef.current.clientHeight / 2}px, 0)`;
        });
    
        return () => {};
      }, []);

React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);

    
    return (
       <AppCursorstyles ref={cursorRef}>

           <SecondaryCursorstyles ref={secondaryCursor} >

           </SecondaryCursorstyles>

       </AppCursorstyles>
    )
}

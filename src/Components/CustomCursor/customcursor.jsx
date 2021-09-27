import React from 'react'
import styled from 'styled-components';


const AppCursorstyles = styled.div`
 z-index: 2000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
    background-color: #8888888f;
   pointer-events: none;
    overflow: hidden;
    transform: translate3d(0,0,0);
    position: fixed;
   `

export const Customcursor = () => {
    const cursorRef = React.useRef(null);
    



  
      React.useEffect(() => {
        document.addEventListener("mousemove", (event) => {
          const { clientX, clientY } = event;
          const mouseX = clientX - cursorRef.current.clientWidth / 2;
          const mouseY = clientY - cursorRef.current.clientHeight / 2;
          cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });
    }, []);   
    
    return (
       <AppCursorstyles ref={cursorRef}>


       </AppCursorstyles>
    )
}

export default Customcursor;
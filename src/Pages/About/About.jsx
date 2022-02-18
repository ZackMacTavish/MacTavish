import React from 'react'
import { HouseOne, NewSection, ParagraphTwo } from '../Art Landing/Art'
import me from '../About/Me.jpeg';
import { GigaGridone, TextLineone, TextSection } from '../Giga/Giga';

class About extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
    
  return (
    <div> 
        
        <NewSection Backgroundheight="100vh" Backgroundcolor='#89aea9'>
    <HouseOne  style={{width: '40vw'}} src={me} />


    <ParagraphTwo style={{width: '45vw'}}>
    My name is Zack MacTavish and I've been a designer since 2015. I am constantly taking on new projects for startups, and fortune 500 companies. 
    I am skilled in illustration, branding, packaging, print, digital, UX/UI, and front-end development (I hand coded this site).


    </ParagraphTwo>

  
  </NewSection>
  
  <GigaGridone style={{backgroundColor:'#89aea9'}} ColumnsSet='4vw 60vw 32vw 4vw' RowsSet=' 1fr 1fr 1fr 1fr 1fr 1fr 1fr '>
            <TextLineone RowsSet="1" />
            <TextSection style={{color: 'white', fontSize:'3rem'}}>Some of the agencies I have worked with include Publicis Groupe, Arkane Society, and Varfaj Partners. With clients such as Chip Ganassi Racing, Walmart, Leysi, VaynerSports, LoudLuxury, Three Pillars Recruiting, and many others.
            I have recently won my first design award, and you can find a link to this here: <a style={{textDecoration:'none', color: 'white'}} href="https://www.indigoawards.com/winners/2390"><h6>Indigo Awards.zackmactavish</h6></a></TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>

            <GigaGridone style={{backgroundColor:'#89aea9'}} ColumnsSet='4vw 60vw 32vw 4vw' RowsSet=' 1fr 1fr 1fr 1fr 1fr 1fr 1fr '>
            
            <TextSection style={{color: 'white', fontSize:'3rem'}}>Here are some of the things I would like to accomplish in 2022. Meet more art & design friends. Collaborate on some great projects. Write a weekly blog post on Medium. Prepare for my second solo art show. I'd like to build out a blog section on my website, and also build a music player section to display my musical collaborations with Alek Vasic.   </TextSection>
            <TextLineone RowsSet="7" />
            </GigaGridone>
  
  </div>
  )
}};

export default About;
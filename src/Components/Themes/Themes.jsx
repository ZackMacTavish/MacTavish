import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    backgroundColor: '#89aea9',
    backgroundTwo: 'white',
    fontColor: '#5D5D5D'
}

export const darkTheme = {
backgroundColor: '#303030',
backgroundTwo: '#303030',
fontColor: '#a1a1a1'
}

export const GlobalStyles = createGlobalStyle`

body {

    background-color: ${(props) => props.theme.backgroundColor};
}
`
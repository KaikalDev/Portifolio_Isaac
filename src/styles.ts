import { createGlobalStyle } from 'styled-components'

export const Colors = {
  backgroundColor: '#080c09',
  OffWhite: '#f6f6e9',
  primary: '#0a281b',
  secondary: '#0b3a28',
  background2: '#0e120e'
}

export const Fonts = {
  Lexend: "'Lexend', sans-serif",
  Roboto: "'Roboto', sans-serif"
}

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${Fonts.Lexend};
    color: ${Colors.OffWhite};
    font-weight: normal;
    list-style: none;
  }

  body {
    background-color: ${Colors.backgroundColor};
    overflow-x: hidden;
  }
`

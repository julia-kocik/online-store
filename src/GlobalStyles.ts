import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish&family=Roboto:wght@100&display=swap');

  body {
    font-size: 18px;
    font-family: 'Mulish', sans-serif;
    margin: 0 4rem;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 20px;
  }
`

export default GlobalStyles

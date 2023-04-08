import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish&family=Roboto:wght@100&display=swap');

  body {
    font-size: 18px;
    font-family: 'Mulish', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles

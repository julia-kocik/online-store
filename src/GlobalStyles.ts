import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

// Define a styled version of the Link component
export const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
`

// Define global styles
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish&family=Roboto:wght@100&display=swap');
  html {
    font-size: 20px;
  }

  body {
    font-family: 'Mulish', sans-serif;
    margin: 0 4rem;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles

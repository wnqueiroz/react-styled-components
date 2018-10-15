import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  html,    
  body {
    padding: 0;
    margin: 0;
  }  
  
  body {
    font-family: Roboto, sans-serif;
  }

  h1 {
    font-family: Montserrat;
  }
`

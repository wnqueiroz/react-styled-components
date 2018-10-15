import React, { Component, Fragment } from 'react'

import styled, { keyframes } from 'styled-components'

import GlobalStyle from './theme/globalStyle'

import logo from './logo.svg'

import ThemeSelect from './components/ThemeSelect'
import Button from './components/Button'
import ThemeProvider from './theme/ThemeProvider'

const AppWrapper = styled.div`
  text-align: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`

const AppHeader = styled.div`
  height: 12rem;
  padding: 1rem;
  color: ${props => props.theme.dark};
  background-color: ${props => props.theme.primary};
`

const AppTitle = styled.h1`
  font-weight: 900;
`

const AppIntro = styled.p`
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`

const EmojiWrapper = styled.span.attrs({
  role: 'img',
})``

class App extends Component {
  render() {
    return (
      <Fragment>
        <ThemeProvider>
          <AppWrapper>
            <AppHeader>
              <AppLogo src={logo} alt="logo" />
              <AppTitle>Welcome to React</AppTitle>
            </AppHeader>
            <AppIntro>
              Bootstrapped with <code>create-react-app</code>.
            </AppIntro>
            <AppIntro>
              Components styled with <code>styled-components</code>{' '}
              <EmojiWrapper aria-label="nail polish" />
            </AppIntro>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
            <ThemeSelect />
          </AppWrapper>
        </ThemeProvider>
        <GlobalStyle />
      </Fragment>
    )
  }
}

export default App

import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const defaultTheme = {
  name: 'theme1',
  labelName: 'Theme 1',
  styles: {
    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#eb238e',
    light: '#f4f4f4',
    dark: '#222',
  },
}

export const themes = [
  { ...defaultTheme },
  {
    name: 'theme2',
    labelName: 'Theme 2',
    styles: {
      primary: '#6e27c5',
      secondary: '#ffb617',
      danger: '#f16623',
      light: '#f4f4f4',
      dark: '#222',
    },
  },
]

const ThemeContext = React.createContext({
  theme: defaultTheme,
  handleThemeChange: () => {},
})

export const withTheme = Component => props => (
  <ThemeContext.Consumer>
    {({ handleThemeChange, theme }) => (
      <Component
        {...props}
        handleThemeChange={handleThemeChange}
        theme={theme}
      />
    )}
  </ThemeContext.Consumer>
)

class ThemeProvider extends Component {
  state = {
    theme: defaultTheme.styles,
  }

  handleThemeChange = e => {
    let theme = e.target.value
    theme = themes.find(storedThemes => storedThemes.name === theme)
    if (theme) this.setState({ theme: theme.styles })
  }

  render() {
    const { children } = this.props

    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          handleThemeChange: this.handleThemeChange,
        }}
      >
        <StyledThemeProvider theme={this.state.theme}>
          {children}
        </StyledThemeProvider>
      </ThemeContext.Provider>
    )
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ThemeProvider

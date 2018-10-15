import React from 'react'
import styled from 'styled-components'
import { withTheme, themes } from '../theme/ThemeProvider'

const Select = styled.select`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.light};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.light};
  border-radius: 2px;
`

export const SelectOpt = styled.option`
  font-family: Roboto;
  font-size: 1rem;
`

class ThemeSelect extends React.Component {
  renderThemedSelects = () => {
    return themes.map((theme, key) => (
      <SelectOpt key={key} value={`${theme.name}`}>
        {theme.labelName}
      </SelectOpt>
    ))
  }

  render() {
    return (
      <div>
        <Select onChange={e => this.props.handleThemeChange(e)}>
          {this.renderThemedSelects()}
        </Select>
      </div>
    )
  }
}

export default withTheme(ThemeSelect)

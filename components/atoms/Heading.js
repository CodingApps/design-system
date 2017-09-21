import React from 'react'
import styled, { css } from 'styled-components'

import { space, fontSize, fontSizeMult, color, width } from '../util'

const styles = css`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  line-height: 1.5;
  font-weight: ${props => (props.h == 1 || props.h == 2) ? 300 : 600};
`

export const Heading = props => {
  const biggestFont = 5
  let fontSize = 0
  let BaseEl = styled.h1`${styles}`
  if (props.h !== undefined) {
    fontSize = biggestFont - props.h + 1
    BaseEl = styled[`h${props.h}`]`${styles}`
  }
  return <BaseEl fontSize={fontSize} {...props} />
}

Heading.defaultProps = {
  mt: 2,
  mb: 2
}
export default Heading
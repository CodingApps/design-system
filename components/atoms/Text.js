import styled from 'styled-components'

import {
  space,
  fontSize,
  fontWeight,
  textStyle,
  textAlign,
  color,
  width
} from '../util'

const Text = styled.p`
  ${space}
  ${width}
  ${fontSize}
  ${fontWeight}

  ${textStyle}
  ${textAlign}
  ${color}
  line-height: 1.25;
`

Text.defaultProps = {
  f: 1,
  p: 0,
  m: 0
}
export default Text

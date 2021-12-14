import styled from 'styled-components'

import { FontColor } from './Colors'

const DefaultFont = styled.p<{ darkMode: boolean }>`
  font-family: 'Spartan', serif;  
  margin: 0;
  padding: 0;
  color: ${props => FontColor(props.darkMode)};
`

export const Heading_1 = styled(DefaultFont)`
  line-height: 36px;
  letter-spacing: -1px;
  font-weight: bold;
  @media screen and (min-width: 767px) {

  }
  @media screen and (min-width: 1023px) {
    font-size: 32px;
  }
`

export const Heading_2 = styled(DefaultFont)`
  font-weight: bold;
  line-height: 22px;
  letter-spacing: -0.625px;

  @media screen and (min-width: 767px) {
    
  }
  @media screen and (min-width: 1023px) {
    font-size: 20px;
  }
`

export const Heading_3 = styled(DefaultFont)`
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.8px;
  @media screen and (min-width: 767px) {
    
  }
  @media screen and (min-width: 1023px) {
    font-size: 16px;
  }
`

export const Heading_4 = styled(DefaultFont)`
  font-weight: bold;
  line-height: 15px;
  letter-spacing: -0.25px;
  @media screen and (min-width: 767px) {
    
  }
  @media screen and (min-width: 1023px) {
    font-size: 12px;
  }
`

export const BodyFont1 = styled(DefaultFont)`
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  @media screen and (min-width: 767px) {
    
  }
  @media screen and (min-width: 1023px) {
    font-size: 12px;
  }
`

export const BodyFont2 = styled(DefaultFont)`
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.229167px;
  @media screen and (min-width: 767px) {
    
  }
  @media screen and (min-width: 1023px) {
    font-size: 11px;
  }
`

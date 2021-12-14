import styled from 'styled-components'

import { 
  FontDefaultColor
} from './Colors'

const DefaultFont = styled.p<{ darkMode?: boolean }>`
  font-family: 'Spartan', serif;  
  margin: 0;
  padding: 0;
  color: ${props => props.darkMode !== undefined? FontDefaultColor(props.darkMode) : "#FFFFFF"};
`

export const Heading_1 = styled(DefaultFont)`
  line-height: 22.4px;
  letter-spacing: -0.63px;
  font-weight: bold;
  font-size: 20px;
  @media screen and (min-width: 767px) {
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.625px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 32px;
    line-height: 36px;
  }
`

export const Heading_2 = styled(DefaultFont)`
  font-size: 20px;
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
  font-size: 12px;
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
  font-size: 12px;
  
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

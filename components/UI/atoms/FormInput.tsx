import styled from "styled-components";

import { BodyFont1 } from "./Fonts";
import { 
  FontBodyFontColor3, InvoiceInputColor,
  CardBackgroundColor, FontDefaultColor
} from "./Colors";


const GridInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%:
`

const LabelFont = styled(BodyFont1)<{ darkMode: boolean }>`
  margin-bottom: 10px;
  color: ${props => FontBodyFontColor3(props.darkMode)};
`

const GridInputTag = styled.input<{ darkMode: boolean }>`
  background: ${props => CardBackgroundColor(props.darkMode)};
  height: 48px;
  padding-left: 20px;
  border: 1px solid ${props => InvoiceInputColor(props.darkMode)};
  border-radius: 4px;
  font-family: 'Spartan', serif;  
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${props => FontDefaultColor(props.darkMode)};
`

interface GridInputProps {
  darkMode: boolean
  name: string
  label: string
}

const GridInput = ({darkMode, name, label}: GridInputProps) => {
  return (
    <GridInputContainer>
      <label htmlFor={name}>
        <LabelFont darkMode={darkMode}>{label}</LabelFont>
      </label>
      <GridInputTag type="text" id={name} name={name} darkMode={darkMode} />
    </GridInputContainer>
  )
}

export default GridInput;
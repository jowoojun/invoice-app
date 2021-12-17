import styled from "styled-components";

import { Heading_4 } from "./Fonts";
import { 
  FontBodyFontColor3, FontBillTotalPriceColor,
  CardBackgroundColor, FontDefaultColor
} from "./Colors";
import { useState } from "react";


const FormCalcPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%:
`

const LabelFont = styled(Heading_4)<{ darkMode: boolean }>`
  margin-bottom: 10px;
  color: ${props => FontBodyFontColor3(props.darkMode)};
`

const CalcPriceContainer = styled.div`
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const CalcPriceFont = styled(Heading_4)`
  color: ${FontBillTotalPriceColor};
`

interface FormCalcPriceProps {
  darkMode: boolean
  name: string
  label: string
}

const FormCalcPrice = ({darkMode, name, label}: FormCalcPriceProps) => {
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <FormCalcPriceContainer>
      <label htmlFor={name}>
        <LabelFont darkMode={darkMode}>{label}</LabelFont>
      </label>
      <CalcPriceContainer>
        <CalcPriceFont>{totalPrice.toFixed(2)}</CalcPriceFont>
      </CalcPriceContainer>
    </FormCalcPriceContainer>
  )
}

export default FormCalcPrice;

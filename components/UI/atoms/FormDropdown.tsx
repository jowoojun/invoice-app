import styled from "styled-components";
import Image from 'next/image';
import { useState } from "react";

import { BodyFont1 } from "./Fonts";
import { 
  FontBodyFontColor3, InvoiceInputColor,
  CardBackgroundColor, FontDefaultColor
} from "./Colors";

const FormDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%:
`

const LabelFont = styled(BodyFont1)<{ darkMode: boolean }>`
  margin-bottom: 10px;
  color: ${props => FontBodyFontColor3(props.darkMode)};
`

const FormDropdownTag = styled.button<{ darkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => CardBackgroundColor(props.darkMode)};
  height: 48px;
  padding-left: 20px;
  padding-right: 15px;
  border: 1px solid ${props => InvoiceInputColor(props.darkMode)};
  border-radius: 4px; 
`

const DropdownFont = styled(BodyFont1)<{ darkMode: boolean }>`
  color: ${props => FontDefaultColor(props.darkMode)};
`

interface FormDropdownProps {
  darkMode: boolean
  name: string
  label: string
}

const FormDropdown = ({darkMode, name, label}: FormDropdownProps) => {
  const [paymentTerms, setPaymentTerms] = useState<string>('Net 30 Days');
  
  return (
    <FormDropdownContainer>
      <LabelFont darkMode={darkMode}>{label}</LabelFont>
      <FormDropdownTag darkMode={darkMode}>
        <DropdownFont darkMode={darkMode}>{paymentTerms}</DropdownFont>
        <Image alt={paymentTerms} src={'/images/icon-arrow-down.svg'} width={10} height={6} />
      </FormDropdownTag>
    </FormDropdownContainer>
  )
}

export default FormDropdown;
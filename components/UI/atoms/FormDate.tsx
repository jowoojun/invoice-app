import styled from "styled-components";
import Image from 'next/image';
import { useState } from "react";

import { BodyFont1 } from "./Fonts";
import { 
  FontBodyFontColor3, InvoiceInputColor,
  CardBackgroundColor, FontDefaultColor
} from "./Colors";

import useTimeFormat from "../../../hooks/useTimeFormat";

const FormDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%:
`

const LabelFont = styled(BodyFont1)<{ darkMode: boolean }>`
  margin-bottom: 10px;
  color: ${props => FontBodyFontColor3(props.darkMode)};
`

const FormDateTag = styled.button<{ darkMode: boolean }>`
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

interface FormDateProps {
  darkMode: boolean
  name: string
  label: string
}

const FormDate = ({darkMode, name, label}: FormDateProps) => {
  const formmatedTime = useTimeFormat(new Date().toISOString());

  return (
    <FormDateContainer>
      <LabelFont darkMode={darkMode}>{label}</LabelFont>
      <FormDateTag darkMode={darkMode}>
        <DropdownFont darkMode={darkMode}>{formmatedTime}</DropdownFont>
        <Image alt={formmatedTime} src={'/images/icon-calendar.svg'} width={16} height={16} />
      </FormDateTag>
    </FormDateContainer>
  )
}

export default FormDate;
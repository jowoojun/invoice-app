import styled from "styled-components";

import {
  InvoiceStatusButtonColor, InvoiceStatusTextColor,
} from './Colors';
import {
  Heading_4,
} from './Fonts';


// StatusButton
const StatusButtonContainer = styled.button<{ darkMode: boolean, status: String }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 40px;
  margin-left: 20px;
  background-color: ${props => InvoiceStatusButtonColor(props.darkMode, props.status)};
  mix-blend-mode: normal;
  border-radius: 6px;
`

const StatusCircle = styled.span<{ darkMode: boolean, status: String }>`
  width: 8px;
  height: 8px;
  display: inline-block;
  background-color: ${props => InvoiceStatusTextColor(props.darkMode, props.status)};
  border-radius: 50%;
  margin-right: 8px;
`

const StatusButtonText = styled(Heading_4)<{ darkMode: boolean, status: String }>`
  color: ${props => InvoiceStatusTextColor(props.darkMode, props.status)};
  text-transform: capitalize;
`


interface StatusButtonProps {
  darkMode: boolean
  status: String
}

const StatusButton = ({darkMode, status}: StatusButtonProps) => {
  return (
    <StatusButtonContainer darkMode={darkMode} status={status}>
      <StatusCircle darkMode={darkMode} status={status} />
      <StatusButtonText darkMode={darkMode} status={status}>{status}</StatusButtonText>
    </StatusButtonContainer>
  )
}

export default StatusButton;
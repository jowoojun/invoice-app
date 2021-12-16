import styled from 'styled-components'

import {
  CardBackgroundColor
} from '../atoms/Colors';
import EditButton from '../atoms/InvoiceButtons/EditButton';
import DeleteButton from '../atoms/InvoiceButtons/DeleteButton';
import PaidButton from '../atoms/InvoiceButtons/PaidButton';

const InvoiceFooterButtonContainer = styled.div<{ darkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 91px;
  padding: 0 24px;
  background-color: ${props => CardBackgroundColor(props.darkMode)};
  @media screen and (min-width: 767px) {
    display: none;
  }
`

interface InvoiceFooterButtonProps { 
  darkMode: boolean
}

const InvoiceFooterButton = ({darkMode}: InvoiceFooterButtonProps) => {
  return (
    <InvoiceFooterButtonContainer darkMode={darkMode}>
      <EditButton darkMode={darkMode} />
      <DeleteButton />
      <PaidButton />
    </InvoiceFooterButtonContainer>
  )
}

export default InvoiceFooterButton;
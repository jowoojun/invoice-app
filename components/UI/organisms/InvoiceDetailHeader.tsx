import styled from "styled-components"

import { CardBackgroundColor, FontBodyFontColor2 } from "../atoms/Colors"
import { BodyFont1 } from "../atoms/Fonts"
import StatusButton from "../atoms/StatusButton"

import { invoiceProps } from "../../../store/invoice/types"
import EditButton from "../atoms/InvoiceButtons/EditButton"
import DeleteButton from "../atoms/InvoiceButtons/DeleteButton"
import PaidButton from "../atoms/InvoiceButtons/PaidButton"

const InvoiceDetailHeaderContainer = styled.div<{ darkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  padding: 24px 24px 27px 24px;
  background-color: ${props => CardBackgroundColor(props.darkMode)}
`

const InvoiceStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 767px) {
    width: auto;
  }
`

const InvoiceButtonListContainer = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 309px;
    height: 48px;
  }
`

const StatusFont = styled(BodyFont1)<{ darkMode: boolean }>`
  color: ${props => FontBodyFontColor2(props.darkMode)};
`

interface InvoiceDetailHeaderProps {
  darkMode: boolean
  invoice: invoiceProps
}

const InvoiceDetailHeader = ({darkMode, invoice}: InvoiceDetailHeaderProps) => {
  return (
    <InvoiceDetailHeaderContainer darkMode={darkMode}>
      <InvoiceStatusContainer>
        <StatusFont darkMode={darkMode}>Status</StatusFont>
        <StatusButton status={invoice.status} darkMode={darkMode} />
      </InvoiceStatusContainer>
      <InvoiceButtonListContainer>
        <EditButton darkMode={darkMode} />
        <DeleteButton />
        <PaidButton />
      </InvoiceButtonListContainer>
    </InvoiceDetailHeaderContainer>
  )
}

export default InvoiceDetailHeader;
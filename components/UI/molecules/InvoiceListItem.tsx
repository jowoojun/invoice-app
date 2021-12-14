import styled from "styled-components";

import { invoiceProps } from "../../../store/invoice/types";
import { 
  CardBackgroundColor, FontShopTagColor1, 
  InvoiceStatusButtonColor, InvoiceStatusTextColor,
  FontBodyFontColor1
} from "../atoms/Colors";
import { BodyFont1, Heading_3, Heading_4 } from "../atoms/Fonts";

import useWindowSize from "../../../hooks/useWindowSize";
import useTimeFormat from "../../../hooks/useTimeFormat";

const InvoiceListItemContainer = styled.div<{ darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;  
  padding: 12px 24px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: ${props => CardBackgroundColor(props.darkMode)};
  @media screen and (min-width: 767px){
    justify-content: space-between;
    aligin-items: center;
  }
`

const ShopTagFont = styled(Heading_4)<{ darkMode: boolean }>`
  display: inline-block; 
  color: ${props => FontShopTagColor1(props.darkMode)};
`

const InvoiceCardTypeLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0;
`

const InvoiceDueText = styled(BodyFont1)<{ darkMode: boolean }>`
  margin-bottom: 8px;
`

// StatusButton
const StatusButton = styled.button<{ darkMode: boolean, status: String }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 40px;
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

interface InvoiceListItemProps {
  invoice: invoiceProps
  darkMode: boolean
}

const InvoiceListItem = ({invoice, darkMode}: InvoiceListItemProps) => {
  const width = useWindowSize();
  const newFormatTime = useTimeFormat(invoice.paymentDue.toString());
  
  if(width < 767) { // mobile design
    return (
      <InvoiceListItemContainer darkMode={darkMode}>
        <InvoiceCardTypeLayout>
          <Heading_4 darkMode={darkMode}>
            <ShopTagFont darkMode={darkMode}>#</ShopTagFont>{invoice.id}
          </Heading_4>
          <BodyFont1 darkMode={darkMode}>{invoice.clientName}</BodyFont1>
        </InvoiceCardTypeLayout>
        <InvoiceCardTypeLayout>
          <div>
            <InvoiceDueText darkMode={darkMode}>Due {newFormatTime}</InvoiceDueText>
            <Heading_3 darkMode={darkMode}>£ {invoice.total}</Heading_3>
          </div>
          <StatusButton darkMode={darkMode} status={invoice.status}>
            <StatusCircle darkMode={darkMode} status={invoice.status} />
            <StatusButtonText darkMode={darkMode} status={invoice.status}>{invoice.status}</StatusButtonText>
          </StatusButton>
        </InvoiceCardTypeLayout>
      </InvoiceListItemContainer>
    )
  } else { // tablet & desktop design
    return (
      <InvoiceListItemContainer darkMode={darkMode}>
        <Heading_4 darkMode={darkMode}>
          <ShopTagFont darkMode={darkMode}>#</ShopTagFont>{invoice.id}
        </Heading_4>
        <BodyFont1 darkMode={darkMode}>Due {newFormatTime}</BodyFont1>
        <BodyFont1 darkMode={darkMode}>{invoice.clientName}</BodyFont1>
        <Heading_3 darkMode={darkMode}>£ {invoice.total}</Heading_3>
        <StatusButton darkMode={darkMode} status={invoice.status}>
          <StatusCircle darkMode={darkMode} status={invoice.status} />
          <StatusButtonText darkMode={darkMode} status={invoice.status}>{invoice.status}</StatusButtonText>
        </StatusButton>        
      </InvoiceListItemContainer>
    )
  }
}

export default InvoiceListItem;
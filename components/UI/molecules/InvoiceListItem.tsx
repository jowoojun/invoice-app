import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';

import { invoiceProps } from "../../../store/invoice/types";
import { 
  CardBackgroundColor, FontShopTagColor1, 
} from "../atoms/Colors";
import { BodyFont1, Heading_3, Heading_4 } from "../atoms/Fonts";
import StatusButton from '../atoms/StatusButton'

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
  cursor: pointer;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  &:hover {
    border: 1px solid #7C5DFA;
    padding: 11px 23px;
  }
  @media screen and (min-width: 767px){
    display: grid;
    grid-template-columns: 0.7fr 1.5fr 1fr 1fr 1fr 0.2fr;
    align-items: center;
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
  @media screen and (min-width: 767px){
    margin-bottom: 0;
    padding-left: 27px;
    padding-right: 37px;
  }
`

const InvoiceTotalFont = styled(Heading_3)<{ darkMode: boolean }>`
  text-align: right;
  margin-right: 20px;
`

// Arrow Icon
const ArrowIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

interface InvoiceListItemDesignProps {
  newFormatTime: string
  invoice: invoiceProps
  darkMode: boolean
}

const InvoiceListItemMobile = ({newFormatTime, invoice, darkMode}: InvoiceListItemDesignProps) => {
  return (
    <>
      <InvoiceCardTypeLayout>
        <Heading_4 darkMode={darkMode}>
          <ShopTagFont darkMode={darkMode}>#</ShopTagFont>{invoice.id}
        </Heading_4>
        <BodyFont1 darkMode={darkMode}>{invoice.clientName}</BodyFont1>
      </InvoiceCardTypeLayout>
      <InvoiceCardTypeLayout>
        <div>
          <InvoiceDueText darkMode={darkMode}>Due {newFormatTime}</InvoiceDueText>
          <Heading_3 darkMode={darkMode}>£ {invoice.total.toFixed(2)}</Heading_3>
        </div>
        <StatusButton status={invoice.status} darkMode={darkMode} />
      </InvoiceCardTypeLayout>
    </>
  )
}

const InvoiceListItemTablet = ({newFormatTime, invoice, darkMode}: InvoiceListItemDesignProps) => {
  return (
    <>
      <Heading_4 darkMode={darkMode}>
        <ShopTagFont darkMode={darkMode}>#</ShopTagFont>{invoice.id}
      </Heading_4>
      <InvoiceDueText darkMode={darkMode}>Due {newFormatTime}</InvoiceDueText>
      <BodyFont1 darkMode={darkMode}>{invoice.clientName}</BodyFont1>
      <InvoiceTotalFont darkMode={darkMode}>£ {invoice.total.toFixed(2)}</InvoiceTotalFont>
      <StatusButton status={invoice.status} darkMode={darkMode} />
      <ArrowIconContainer>
        <Image alt={'arrow-right'} src={'/images/icon-arrow-right.svg'} width={6} height={10} />
      </ArrowIconContainer>
    </>
  )
}

interface InvoiceListItemProps {
  invoice: invoiceProps
  darkMode: boolean
}

const InvoiceListItem = ({invoice, darkMode}: InvoiceListItemProps) => {
  const width = useWindowSize();
  const newFormatTime = useTimeFormat(invoice.paymentDue.toString());
  
  return (
    <Link href={'/invoice/' + invoice.id} passHref>
      <InvoiceListItemContainer darkMode={darkMode}>
        {width < 767 ?
          <InvoiceListItemMobile newFormatTime={newFormatTime} invoice={invoice} darkMode={darkMode} />
        :
          <InvoiceListItemTablet newFormatTime={newFormatTime} invoice={invoice} darkMode={darkMode} />
        }
      </InvoiceListItemContainer>
    </Link>
  )
}

export default InvoiceListItem;
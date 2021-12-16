import styled from 'styled-components';

import { FontBodyFontColor3 } from '../../atoms/Colors';
import { BodyFont1, Heading_5 } from '../../atoms/Fonts';
import InvoiceAddress from '../../atoms/InvoiceAddress';

const InvoiceDetailSection2Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 32px;

  @media screen and (min-width: 767px) {
    grid-template-columns: 0.85fr 1fr 1.3fr;
    grid-template-rows: repeat(2, 1fr);
  }
`

const InvoiceInfoBillContainer = styled.div`
  padding-left: 9px;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  @media screen and (min-width: 767px) {
    padding-left: 0px;
  }
`

const InvoiceInfoEmailContainer = styled.div`
  grid-column: 1 / 3;

  @media screen and (min-width: 767px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`

const InvoiceSmallFont = styled(BodyFont1)<{ darkMode: boolean }>`
  color: ${props => FontBodyFontColor3(props.darkMode)};
`

const InvoiceBigFont = styled(Heading_5)`
  margin-top: 12px;
`

interface InvoiceDetailSection2Props {
  darkMode: boolean
  invoiceDate: string
  paymentDue: string
  clientName: String
  clientEmail: String
  clientAddress: {
    street: String
    city: String
    postCode: String
    country: String
  }
}

const InvoiceDetailSection2 = ({darkMode, invoiceDate, clientName, paymentDue, clientEmail, clientAddress}: InvoiceDetailSection2Props) => {
  return (
    <InvoiceDetailSection2Container>
      <div>
        <InvoiceSmallFont darkMode={darkMode}>Invoice Date</InvoiceSmallFont>
        <InvoiceBigFont darkMode={darkMode}>{invoiceDate}</InvoiceBigFont>
      </div>
      <div>
        <InvoiceSmallFont darkMode={darkMode}>Payment Due</InvoiceSmallFont>
        <InvoiceBigFont darkMode={darkMode}>{paymentDue}</InvoiceBigFont>
      </div>

      <InvoiceInfoBillContainer>
        <InvoiceSmallFont darkMode={darkMode}>Bill to</InvoiceSmallFont>
        <InvoiceBigFont darkMode={darkMode}>{clientName}</InvoiceBigFont>
        <InvoiceAddress
          darkMode={darkMode}
          street={clientAddress.street}
          city={clientAddress.city}
          postCode={clientAddress.postCode}
          country={clientAddress.country}
        />
      </InvoiceInfoBillContainer>
      
      <InvoiceInfoEmailContainer>
        <InvoiceSmallFont darkMode={darkMode}>Sent to</InvoiceSmallFont>
        <InvoiceBigFont darkMode={darkMode}>{clientEmail}</InvoiceBigFont>
      </InvoiceInfoEmailContainer>
    </InvoiceDetailSection2Container>
  )
}

export default InvoiceDetailSection2;
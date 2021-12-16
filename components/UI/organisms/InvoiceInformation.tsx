import styled from "styled-components"

import InvoiceDetailSection1 from '../molecules/InvoiceDetail/Section1';
import InvoiceDetailSection2 from '../molecules/InvoiceDetail/Section2';

import useTimeFormat from "../../../hooks/useTimeFormat"

import { invoiceProps } from "../../../store/invoice/types"

const InvoiceInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`

interface InvoiceInformationProps {
  darkMode: boolean
  invoice: invoiceProps
}

const InvoiceInformation = ({darkMode, invoice}: InvoiceInformationProps) => {
  const invoiceDate = useTimeFormat(invoice.createdAt.toString());
  const paymentDue = useTimeFormat(invoice.paymentDue.toString());
  
  return (
    <InvoiceInformationContainer>
      <InvoiceDetailSection1 
        darkMode={darkMode}
        id={invoice.id}
        description={invoice.description}
        senderAddress={invoice.senderAddress}
      />
      <InvoiceDetailSection2 
        darkMode={darkMode}
        invoiceDate={invoiceDate}
        paymentDue={paymentDue}
        clientName={invoice.clientName}
        clientEmail={invoice.clientEmail}
        clientAddress={invoice.clientAddress}
      />

    </InvoiceInformationContainer>
  )
}

export default InvoiceInformation;
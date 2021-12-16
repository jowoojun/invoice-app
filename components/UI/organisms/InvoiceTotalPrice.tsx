import styled from "styled-components"

import { invoiceProps } from "../../../store/invoice/types"
import { CardBackgroundColor } from "../atoms/Colors"

import InvoicePriceDetail from '../molecules/InvoicePrice/Section1';
import InvoicePriceTotal from '../molecules/InvoicePrice/Section2';

const InvoiceTotalPriceContainer = styled.div<{ darkMode: boolean }>`
  margin-top: 40px;
  background-color: ${props => CardBackgroundColor(props.darkMode)};
`

interface InvoiceTotalPriceProps {
  darkMode: boolean
  invoice: invoiceProps
}

const InvoiceTotalPrice = ({darkMode, invoice}: InvoiceTotalPriceProps) => {
  return (
    <InvoiceTotalPriceContainer darkMode={darkMode}>
      <InvoicePriceDetail 
        darkMode={darkMode} 
        priceItems={invoice.items}
      />
      <InvoicePriceTotal 
        darkMode={darkMode} 
        total={invoice.total}
      />
    </InvoiceTotalPriceContainer>
  )
}

export default InvoiceTotalPrice;
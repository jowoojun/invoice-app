import styled from "styled-components";

import { 
  CardBackgroundColor, FontBodyFontColor2,
  InvoiceDetailTotalPrice, InvoiceDetailPrice
} from "../../atoms/Colors"
import { BodyFont2, Heading_3, DefaultFont } from "../../atoms/Fonts";

const InvoicePriceSection2Container = styled.div<{ darkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 0px 0px 8px 8px;
  background-color: ${props => InvoiceDetailTotalPrice(props.darkMode)}
`

const PriceTotalLabel = styled(BodyFont2)<{ darkMode: boolean }>`
  color: #FFFFFF
`

const PriceTotalNumber = styled(DefaultFont)<{ darkMode: boolean }>`
  font-size: 20px;  
  font-weight: bold;
  line-height: 32px;
  letter-spacing: -0.42px;
  color: #FFFFFF;
  @media screen and (min-width: 767px) {
    font-size: 24px;
    letter-spacing: -0.5px;
  }
`

interface InvoicePriceSection2Props {
  darkMode: boolean
  total: Number
}

const InvoicePriceSection2 = ({darkMode, total}: InvoicePriceSection2Props) => {
  return (
    <InvoicePriceSection2Container darkMode={darkMode}>
      <PriceTotalLabel darkMode={darkMode}>Grand Total</PriceTotalLabel>
      <PriceTotalNumber darkMode={darkMode}>£ {total.toFixed(2)}</PriceTotalNumber>
    </InvoicePriceSection2Container>
  )
}

export default InvoicePriceSection2;
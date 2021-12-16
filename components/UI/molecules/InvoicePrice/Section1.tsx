import styled from "styled-components";

import { 
  CardBackgroundColor, FontBodyFontColor2,
  FontShopTagColor1, InvoiceDetailPrice
} from "../../atoms/Colors"
import { Heading_3, Heading_4 } from "../../atoms/Fonts";

const InvoicePriceSection1Container = styled.div<{ darkMode: boolean }>`
  padding: 12px;
  border-radius: 8px 8px 0px 0px;
  background-color: ${props => InvoiceDetailPrice(props.darkMode)}
`

const PriceItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`

const PriceCalculateFont = styled(Heading_4)<{ darkMode: boolean }>`
  margin-top: 8px;  
  color: ${props => FontShopTagColor1(props.darkMode)}
`

type InvoiceItemProps = {
  name: String
  quantity: Number
  price: Number
  total: Number
}

interface InvoicePriceSection1Props {
  darkMode: boolean
  priceItems: InvoiceItemProps[]
}

const InvoicePriceSection1 = ({darkMode, priceItems}: InvoicePriceSection1Props) => {
  console.log(priceItems)
  return (
    <InvoicePriceSection1Container darkMode={darkMode}>
      {priceItems.map((item) => 
        <PriceItemsContainer key={item.name.toString()}>
          <div>
            <Heading_4 darkMode={darkMode}>{item.name.toString()}</Heading_4>
            <PriceCalculateFont darkMode={darkMode}>{item.quantity} x £ {item.price.toFixed(2)}</PriceCalculateFont>
          </div>
          <Heading_4 darkMode={darkMode}>£ {item.total.toFixed(2)}</Heading_4>
        </PriceItemsContainer>
      )}
    </InvoicePriceSection1Container>
  )
}

export default InvoicePriceSection1;
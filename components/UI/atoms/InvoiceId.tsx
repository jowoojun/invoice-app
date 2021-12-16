import styled from "styled-components";

import { Heading_4 } from "./Fonts";
import { FontShopTagColor1 } from "./Colors";

const ShopTagFont = styled(Heading_4)<{ darkMode: boolean }>`
  display: inline-block; 
  color: ${props => FontShopTagColor1(props.darkMode)};
`

interface InvoiceIdProps {
  darkMode: boolean
  id: String
}

const InvoiceId = ({darkMode, id}: InvoiceIdProps) => {
  return (
    <Heading_4 darkMode={darkMode}>
      <ShopTagFont darkMode={darkMode}>#</ShopTagFont>{id}
    </Heading_4>
  )
}

export default InvoiceId;
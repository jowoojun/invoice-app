import Image from "next/image";
import styled from "styled-components"

import { BodyFont1, Heading_2 } from "../atoms/Fonts";
import { FontBodyFontColor1 } from "../atoms/Colors";

const InvoiceEmptyImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 217px;
  height: 277px;
`

const EmptyText = styled.div`
  width: 100%;  
  height: 77px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const EmptyImage = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
`

const EmptySubText = styled(BodyFont1)<{darkMode: boolean}>`
  text-align: center;
  color: ${props => FontBodyFontColor1(props.darkMode)}
`

interface InvoiceEmptyImageProps {
  darkMode: boolean
}

const InvoiceEmptyImage = ({darkMode}: InvoiceEmptyImageProps) => {
  return (
    <InvoiceEmptyImageContainer>
      <EmptyImage>
        <Image src={'/images/illustration-empty.svg'} alt={"empty"} layout={'fill'} objectFit={'contain'} />
      </EmptyImage>
      <EmptyText>
        <Heading_2 darkMode={darkMode}>There is nothing here</Heading_2>
        <EmptySubText darkMode={darkMode}>Create an invoice by clicking the <strong>New</strong> button and get started</EmptySubText>
      </EmptyText>
    </InvoiceEmptyImageContainer>
  )
}

export default InvoiceEmptyImage;
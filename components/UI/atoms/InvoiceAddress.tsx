import styled from "styled-components";

import { BodyFont2 } from "./Fonts";

const InvoiceAddressContainer = styled.div`
  margin-top: 8px;
`

interface InvoiceAddressProps {
  darkMode: boolean
  street: String
  city: String
  postCode: String
  country: String
}

const InvoiceAddress = ({darkMode, street, city, postCode, country}: InvoiceAddressProps) => {
  return (
    <InvoiceAddressContainer>
      <BodyFont2 darkMode={darkMode}>{street}</BodyFont2>
      <BodyFont2 darkMode={darkMode}>{city}</BodyFont2>
      <BodyFont2 darkMode={darkMode}>{postCode}</BodyFont2>
      <BodyFont2 darkMode={darkMode}>{country}</BodyFont2>
    </InvoiceAddressContainer>
  )
}

export default InvoiceAddress;
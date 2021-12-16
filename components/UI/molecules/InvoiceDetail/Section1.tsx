import styled from 'styled-components';

import { FontBodyFontColor3 } from '../../atoms/Colors';
import { BodyFont1 } from '../../atoms/Fonts';
import InvoiceId from "../../atoms/InvoiceId"
import InvoiceAddress from "../../atoms/InvoiceAddress"

const InvoiceDetailSection1Container = styled.div`
  margin-bottom: 27px;
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`

const InvoiceInfoIdLayout = styled.div`
  margin-bottom: 22px;
  @media screen and (min-width: 767px) {
    margin: 0;
  }
`

const InvoiceSmallFont = styled(BodyFont1)<{ darkMode: boolean }>`
  margin-top: 4px;
  color: ${props => FontBodyFontColor3(props.darkMode)};
  @media screen and (min-width: 767px) {
    margin-top: 8px;
  }
`

interface InvoiceDetailSection1Props {
  darkMode: boolean
  id: String
  description: String
  senderAddress: {
    street: String
    city: String
    postCode: String
    country: String
  }
}

const InvoiceDetailSection1 = ({darkMode, id, description, senderAddress}: InvoiceDetailSection1Props) => {
  return (
    <InvoiceDetailSection1Container>
      <InvoiceInfoIdLayout>
        <InvoiceId id={id} darkMode={darkMode} />
        <InvoiceSmallFont darkMode={darkMode}>{description}</InvoiceSmallFont>
      </InvoiceInfoIdLayout>
      <InvoiceAddress
        darkMode={darkMode}
        street={senderAddress.street}
        city={senderAddress.city}
        postCode={senderAddress.postCode}
        country={senderAddress.country}
      />
    </InvoiceDetailSection1Container>
  )
}

export default InvoiceDetailSection1;
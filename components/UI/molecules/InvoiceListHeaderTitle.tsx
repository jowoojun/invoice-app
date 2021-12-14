import styled from 'styled-components';

import {
  Heading_1, BodyFont1
} from '../atoms/Fonts';
import {
  InvoiceListHeader_Subheader_FontColor,
} from '../atoms/Colors';


const SubheaderFont = styled(BodyFont1)<{ darkMode: boolean }>`
  margin-top: 4px;
  color: ${props => InvoiceListHeader_Subheader_FontColor(props.darkMode)};
`

interface InvoiceListHeaderTitleProps {
  darkMode: boolean;
} 


const InvoiceListHeaderTitle = ({darkMode}: InvoiceListHeaderTitleProps) => {
  return (
    <div>
      <Heading_1 darkMode={darkMode}>Invoices</Heading_1>
      <SubheaderFont darkMode={darkMode}>No invoices</SubheaderFont>
    </div>
  )
}

export default InvoiceListHeaderTitle;
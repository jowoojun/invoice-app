import styled from 'styled-components';

import {
  Heading_1, BodyFont1
} from '../atoms/Fonts';
import {
  FontBodyFontColor1,
} from '../atoms/Colors';


const SubheaderFont = styled(BodyFont1)<{ darkMode: boolean }>`
  margin-top: 4px;
`

interface InvoiceListHeaderTitleProps {
  darkMode: boolean;
  nInvoices: number;
} 


const InvoiceListHeaderTitle = ({darkMode, nInvoices}: InvoiceListHeaderTitleProps) => {
  return (
    <div>
      <Heading_1 darkMode={darkMode}>Invoices</Heading_1>
      {nInvoices == 0? 
        <SubheaderFont darkMode={darkMode}>No invoices</SubheaderFont>
      :
        <SubheaderFont darkMode={darkMode}>{nInvoices} invoices</SubheaderFont>
      }
    </div>
  )
}

export default InvoiceListHeaderTitle;
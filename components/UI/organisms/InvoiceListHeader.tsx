import styled from 'styled-components';

import InvoiceListHeaderTitle from '../molecules/InvoiceListHeaderTitle';
import InvoiceListHeaderButton from '../molecules/InvoiceListHeaderButton';

const InvoiceListHeaderBContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface InvoiceListHeaderProps {
  darkMode: boolean;
  nInvoices: number;
} 

const InvoiceListHeader = ({darkMode, nInvoices}: InvoiceListHeaderProps) => {
  return (
    <InvoiceListHeaderBContainer>
      <InvoiceListHeaderTitle darkMode={darkMode} nInvoices={nInvoices} />
      <InvoiceListHeaderButton darkMode={darkMode}/>
    </InvoiceListHeaderBContainer>
  )
}

export default InvoiceListHeader;
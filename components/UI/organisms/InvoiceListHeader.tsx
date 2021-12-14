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
} 

const InvoiceListHeader = ({darkMode}: InvoiceListHeaderProps) => {
  return (
    <InvoiceListHeaderBContainer>
      <InvoiceListHeaderTitle darkMode={darkMode}/>
      <InvoiceListHeaderButton darkMode={darkMode}/>
    </InvoiceListHeaderBContainer>
  )
}

export default InvoiceListHeader;
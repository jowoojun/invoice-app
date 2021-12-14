import styled from 'styled-components';

import Filter from '../atoms/Filter';
import NewButton from '../atoms/NewButtons';

const InvoiceListHeaderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


interface InvoiceListHeaderButtonProps {
  darkMode: boolean;
} 

const InvoiceListHeaderButton = ({darkMode}: InvoiceListHeaderButtonProps) => {
  return (
    <InvoiceListHeaderButtonContainer>
      <Filter darkMode={darkMode} />
      <NewButton />
    </InvoiceListHeaderButtonContainer>
  )
}

export default InvoiceListHeaderButton;
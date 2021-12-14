import styled from 'styled-components'

import InvoiceEmptyImage from '../molecules/InvoiceEmptyImage'

const InvoiceListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 102px;
`

interface InvoiceListProps {
  darkMode: boolean
}

const InvoiceList = ({darkMode}: InvoiceListProps) => {
  return (
    <InvoiceListContainer>
      <InvoiceEmptyImage darkMode={darkMode} />
    </InvoiceListContainer>
  )
}

export default InvoiceList;
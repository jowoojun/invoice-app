import styled from 'styled-components'

import InvoiceListItem from '../molecules/InvoiceListItem'
import InvoiceEmptyImage from '../molecules/InvoiceEmptyImage'

import { invoiceProps } from '../../../store/invoice/types';

const InvoiceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  @media screen and (min-width: 767px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1023px){
    margin-top: 49px;
  }
`

interface InvoiceListProps {
  darkMode: boolean
  mainInvoices: invoiceProps[]
}

const InvoiceList = ({darkMode, mainInvoices}: InvoiceListProps) => {
  return (
    <InvoiceListContainer>
      {mainInvoices.length !== 0? 
        mainInvoices.map((invoice) => (
          <InvoiceListItem key={invoice.id.toString()} invoice={invoice} darkMode={darkMode} />
        ))
      :
        <InvoiceEmptyImage darkMode={darkMode} />
      }
    </InvoiceListContainer>
  )
}

export default InvoiceList;
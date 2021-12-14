import styled from 'styled-components';

import { invoiceProps } from '../../store/invoice/types';

import {
  MainBackgroundColor
} from '../UI/atoms/Colors';
import Header from '../UI/organisms/Header'
import InvoiceListHeader from '../UI/organisms/InvoiceListHeader'
import InvoiceList from '../UI/organisms/InvoiceList'

const HomeTemplateContainer = styled.div<{ darkMode: boolean }>`
  height: 100%;
  min-height: 100vh;
  background-color: ${props => MainBackgroundColor(props.darkMode)};
  @media screen and (min-width: 1023px) {
    display: flex;
  }
`

const InvoiceListContainer = styled.div`
  padding: 32px 24px;
`

interface HomeTemplateProps {
  darkMode: boolean,
  mainInvoices: invoiceProps[]
}

const HomeTemplate = ({darkMode, mainInvoices}: HomeTemplateProps) => {
  return (
    <HomeTemplateContainer darkMode={darkMode}>
      <Header />
      <InvoiceListContainer>
        <InvoiceListHeader darkMode={darkMode} nInvoices={mainInvoices.length} />
        <InvoiceList darkMode={darkMode} mainInvoices={mainInvoices} />
      </InvoiceListContainer>
    </HomeTemplateContainer>
  )
}

export default HomeTemplate;
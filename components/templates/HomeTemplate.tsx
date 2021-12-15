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
  @media screen and (min-width: 1023px) {
    display: flex;
    position: absolute;
    justify-content: center;
    width: 100vw;
  }
`

const InvoiceListLayout = styled.div`
  padding: 32px 24px;
  @media screen and (min-width: 767px) {
    padding: 56px 48px;
  }
  @media screen and (min-width: 1023px) {
    padding: 72px 0;
    width: 730px;
  }
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
        <InvoiceListLayout>
          <InvoiceListHeader darkMode={darkMode} nInvoices={mainInvoices.length} />
          <InvoiceList darkMode={darkMode} mainInvoices={mainInvoices} />
        </InvoiceListLayout>
      </InvoiceListContainer>
    </HomeTemplateContainer>
  )
}

export default HomeTemplate;
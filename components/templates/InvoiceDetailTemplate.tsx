import styled from "styled-components";
import { FunctionComponent } from "react"

import { MainBackgroundColor, CardBackgroundColor } from "../UI/atoms/Colors";
import Tailspin from '../UI/atoms/Tailspin';
import BackButton from '../UI/atoms/BackButton';
import InvoiceDetailHeader from '../UI/organisms/InvoiceDetailHeader';
import Header from '../UI/organisms/Header'
import InvoiceInformation from '../UI/organisms/InvoiceInformation';
import InvoiceTotalPrice from '../UI/organisms/InvoiceTotalPrice';

import { invoiceProps } from "../../store/invoice/types"

const InvoiceDetailTemplateContainer = styled.div<{ darkMode: boolean }>`
  height: 100%;
  min-height: 100vh;
  background-color: ${props => MainBackgroundColor(props.darkMode)};
  @media screen and (min-width: 1023px) {
    display: flex;
  }
`

const InvoideDetailPageContainer = styled.div`
  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: center;
    width: 100vw;
  }  
`

const InvoideDetailLayout = styled.div`
  padding: 16px 24px;
  @media screen and (min-width: 767px) {
    padding: 32px 40px;
  }
  @media screen and (min-width: 1023px) {
    padding: 48px 0px;
    width: 730px;
  }  
`

// Loading...
const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InvoiceDetailContainer = styled.div<{ darkMode: boolean }>`
  padding: 24px;
  background-color: ${props => CardBackgroundColor(props.darkMode)};
  @media screen and (min-width: 767px) {
    padding: 32px;
  }
`

interface InvoiceDetailTemplate {
  darkMode: boolean
  invoice: invoiceProps | null
}

const InvoiceDetailTemplate: FunctionComponent<InvoiceDetailTemplate> = ({darkMode, invoice}) => {
  
  return (
    <InvoiceDetailTemplateContainer darkMode={darkMode}>
      <Header />
      {invoice?
        <InvoideDetailPageContainer>
          <InvoideDetailLayout>
            <BackButton darkMode={darkMode} />
            <InvoiceDetailHeader darkMode={darkMode} invoice={invoice} />
            <InvoiceDetailContainer darkMode={darkMode}>
              <InvoiceInformation invoice={invoice} darkMode={darkMode} />
              <InvoiceTotalPrice invoice={invoice} darkMode={darkMode} />
            </InvoiceDetailContainer>
          </InvoideDetailLayout>
        </InvoideDetailPageContainer>
      :
        <LoadingContainer>
          <Tailspin />
        </LoadingContainer>
      }
    </InvoiceDetailTemplateContainer>
  )
}

export default InvoiceDetailTemplate;
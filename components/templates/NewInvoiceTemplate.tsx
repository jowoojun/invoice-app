import styled from "styled-components";

import { ModalBackgroundColor } from "../UI/atoms/Colors";
import BackButton from '../UI/atoms/BackButton'
import Header from '../UI/organisms/Header'
import BillFrom from "../UI/organisms/Bill/BillFrom"
import BillTo from "../UI/organisms/Bill/BillTo"
import BillDate from "../UI/organisms/Bill/BillDate"
import BillItemList from "../UI/organisms/Bill/BillItemList"
import BillNewButtons from '../UI/organisms/Bill/BillNewButtons'

const NewInvoiceTemplateContainer = styled.div<{ darkMode: boolean }>`
  height: 100%;
  background-color: ${props => ModalBackgroundColor(props.darkMode)};
`

const NewInvoicePageContainer = styled.div`
  padding: 16px 24px 0px;
`

const GradientBottom = styled.div`
  width: 100%;
  height: 64px;
  margin-bottom: 91px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.1) 100%);
`

interface NewInvoiceTemplateProps {
  darkMode: boolean
}

const NewInvoiceTemplate = ({darkMode}: NewInvoiceTemplateProps) => {
  return (
    <NewInvoiceTemplateContainer darkMode={darkMode}>
      <Header />
      <NewInvoicePageContainer>
        <BackButton darkMode={darkMode} />
        <BillFrom darkMode={darkMode}/>
        <BillTo darkMode={darkMode}/>
        <BillDate darkMode={darkMode}/>     
        <BillItemList darkMode={darkMode}/>
      </NewInvoicePageContainer>
      <GradientBottom />
      <BillNewButtons darkMode={darkMode}/>
    </NewInvoiceTemplateContainer>
  )
}

export default NewInvoiceTemplate;
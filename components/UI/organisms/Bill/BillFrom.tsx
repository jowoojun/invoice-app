import styled from 'styled-components';

import { Heading_6, Heading_4 } from '../../atoms/Fonts'
import { FontBillTitle } from '../../atoms/Colors'
import GridInput from '../../atoms/FormInput'

import { invoiceProps } from "../../../../store/invoice/types"

const BillFromContainer = styled.div`
  padding: 8px 0 48px;
`

const BillFromBlockContainer = styled.div`
  margin-bottom: 24px;
`

const BillFromBlockTitle = styled(Heading_4)<{ darkMode: boolean }>`
  color: ${FontBillTitle};
`

const BillFromInputLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`

const GridLongColumnContainer = styled.div`
  display: flex;
  flex-direction: column;  
  grid-column: 1 / 3;
  @media screen and (min-width: 767px) {
    grid-column: 1 / 4;
  }
`

const GridShortColumnContainer = styled(GridLongColumnContainer)`
  @media screen and (min-width: 767px) {
    grid-column: 3 / 4;
  }
`

interface InvoiceFormProps {
  darkMode: boolean
  invoice?: invoiceProps
}

const BillFrom = ({darkMode, invoice}: InvoiceFormProps) => {
  return (
    <BillFromContainer>
      <BillFromBlockContainer>
        <Heading_6 darkMode={darkMode}>New Invoice</Heading_6>
      </BillFromBlockContainer>
      <BillFromBlockContainer>
        <BillFromBlockTitle darkMode={darkMode}>Bill From</BillFromBlockTitle>
      </BillFromBlockContainer>
      <BillFromInputLayout>
        <GridLongColumnContainer>
          <GridInput darkMode={darkMode} name={"senderStreet"} label={"Street Address"}/>
        </GridLongColumnContainer>
        <GridInput darkMode={darkMode} name={"senderCity"} label={"City"}/>
        <GridInput darkMode={darkMode} name={"senderPostCode"} label={"Post Code"}/>
        <GridShortColumnContainer>
          <GridInput darkMode={darkMode} name={"senderCountry"} label={"Country"}/>
        </GridShortColumnContainer>
      </BillFromInputLayout>
    </BillFromContainer>
  )
}

export default BillFrom;
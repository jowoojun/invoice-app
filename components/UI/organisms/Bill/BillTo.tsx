import styled from 'styled-components';

import { Heading_6, Heading_4 } from '../../atoms/Fonts'
import { FontBillTitle } from '../../atoms/Colors'
import GridInput from '../../atoms/FormInput'

import { invoiceProps } from "../../../../store/invoice/types"

const BillToContainer = styled.div`
  padding: 0 0 48px;
`

const BillToBlockContainer = styled.div`
  margin-bottom: 24px;
`

const BillToBlockTitle = styled(Heading_4)<{ darkMode: boolean }>`
  color: ${FontBillTitle};
`

const BillToInputLayout = styled.div`
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

const BillTo = ({darkMode, invoice}: InvoiceFormProps) => {
  return (
    <BillToContainer>
      <BillToBlockContainer>
        <BillToBlockTitle darkMode={darkMode}>Bill To</BillToBlockTitle>
      </BillToBlockContainer>
      
      <BillToInputLayout>
        <GridLongColumnContainer>
          <GridInput darkMode={darkMode} name={"clientName"} label={"Client's Name"}/>
        </GridLongColumnContainer>
        <GridLongColumnContainer>
          <GridInput darkMode={darkMode} name={"clientEmail"} label={"Client's Email"}/>
        </GridLongColumnContainer>
        <GridLongColumnContainer>
          <GridInput darkMode={darkMode} name={"clientStreet"} label={"Street Address"}/>
        </GridLongColumnContainer>
        <GridInput darkMode={darkMode} name={"clientCity"} label={"City"}/>
        <GridInput darkMode={darkMode} name={"clientPostCode"} label={"Post Code"}/>
        <GridShortColumnContainer>
          <GridInput darkMode={darkMode} name={"clientCountry"} label={"Country"}/>
        </GridShortColumnContainer>
      </BillToInputLayout>
    </BillToContainer>
  )
}

export default BillTo;
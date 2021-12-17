import styled from 'styled-components';

import GridInput from '../../atoms/FormInput';
import FormDropdown from '../../atoms/FormDropdown';
import FormDate from '../../atoms/FormDate';

import { invoiceProps } from "../../../../store/invoice/types"

const BillDateContainer = styled.div`
  padding: 0px 0 66px;
`

const BillDateInputLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 24px;
  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`

const GridLongColumnContainer = styled.div`
  @media screen and (min-width: 767px) {
    grid-column: 1 / 3;
    grid-rows: 2 / 3;
  }
`

export interface InvoiceFormProps {
  darkMode: boolean
  invoice?: invoiceProps
}

const BillDate = ({darkMode, invoice}: InvoiceFormProps) => {
  return (
    <BillDateContainer>
      <BillDateInputLayout>
        <FormDate name={"InvoiceDate"} label={"Invoice Date"} darkMode={darkMode} />
        <FormDropdown name={"PaymentTerms"} label={"Payment Terms"} darkMode={darkMode} />
        <GridLongColumnContainer>
          <GridInput name={"projectDescription"} label={"Project Description"} darkMode={darkMode} />
        </GridLongColumnContainer>
      </BillDateInputLayout>
    </BillDateContainer>
  )
}

export default BillDate;
import styled from 'styled-components';

import BillItem from '../../molecules/BillItem';

import { invoiceProps } from "../../../../store/invoice/types"
import { Heading_4 } from '../../atoms/Fonts';
import { EditButtonColor, FontBodyFontColor3 } from '../../atoms/Colors';

const BillItemListContainer = styled.div`
  padding: 0px 0 24px;
`

const NewItemButton = styled.button<{ darkMode: boolean }>`
  width: 100%;
  background: ${props => EditButtonColor(props.darkMode)};
  border-radius: 24px;
  height: 48px;
  margin-top: 48px;
`

const NewItemButtonFont = styled(Heading_4)<{ darkMode: boolean }>`
  color: ${props => FontBodyFontColor3(props.darkMode)};
`

interface InvoiceFormProps {
  darkMode: boolean
  invoice?: invoiceProps
}

const BillItemList = ({darkMode, invoice}: InvoiceFormProps) => {
  return (
    <BillItemListContainer>
      <BillItem darkMode={darkMode} />
      <NewItemButton darkMode={darkMode}>
        <NewItemButtonFont darkMode={darkMode}>+ Add New Item</NewItemButtonFont>
      </NewItemButton>
    </BillItemListContainer>
  )
}

export default BillItemList;
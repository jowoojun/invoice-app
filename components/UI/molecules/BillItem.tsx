import styled from "styled-components";
import Image from "next/image";

import GridInput from "../atoms/FormInput";
import FormCalcPrice from '../atoms/FormCalcPrice';

const BillItemListLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-template-columns: minmax(0, 0.25fr) minmax(0, 0.4fr) minmax(0, 0.325fr) minmax(0, 0.125fr);
  gap: 16px;
  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
`

const GridLongColumnContainer = styled.div`
  grid-column: 1 / 5;
  @media screen and (min-width: 767px) {
    grid-column: 1 / 2;
  }
`

const DeleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 26px;
`

interface BillItemProps {
  darkMode: boolean
}

const BillItem = ({darkMode}: BillItemProps) => {
  return (
    <BillItemListLayout>
      <GridLongColumnContainer>
        <GridInput name={"itemName"} label={"Item Name"} darkMode={darkMode} />
      </GridLongColumnContainer>
      <GridInput name={"quantity"} label={"Qty."} darkMode={darkMode} />
      <GridInput name={"price"} label={"Price"} darkMode={darkMode} />
      <FormCalcPrice name={"total"} label={"Total"} darkMode={darkMode} />
      <DeleteContainer>
        <Image alt={'delete'} src={'/images/icon-delete.svg'} width={12.44} height={16} />
      </DeleteContainer>
    </BillItemListLayout>
  )
}

export default BillItem;
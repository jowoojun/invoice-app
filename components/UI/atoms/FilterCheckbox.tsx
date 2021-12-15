import Image from "next/image";
import { ChangeEvent, useState } from "react";
import styled from 'styled-components';
import { Heading_4 } from "./Fonts";

const FilterCheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`

const CheckboxLabel = styled.label<{ checked: boolean}>`
  display: flex;
  margin: 0;
  cursor: pointer;
  text-transform: capitalize;
  &:hover > div {
    background: ${props => props.checked ? '#7C5DFA' : '#DFE3FA'};
    border: 1px solid #7C5DFA;
  }
`

const FilterCheckboxLayout = styled.div<{ checked: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin: 0;
  margin-right: 13px;
  border: 1px solid transparent;
  background-color: ${props => props.checked ? '#7C5DFA' : '#DFE3FA'};
  border-radius: 2px;
`

const FilterCheckboxImage = styled.div`
  position: relative;
  width: 75%;
  height: 75%;
`

interface FilterCheckboxProps {
  darkMode: boolean,
  name: string,
  checkedItemHandler: (id: string, isChecked: boolean) => void,
}

const FilterCheckbox = ({darkMode, name, checkedItemHandler}: FilterCheckboxProps) => {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(!bChecked);
    checkedItemHandler(e.target.id, e.target.checked);
  };

  return (
    <FilterCheckboxContainer>
      <input style={{display: 'none'}} type="checkbox" id={name} name={name} onChange={(e) => checkHandler(e)} />
      <CheckboxLabel htmlFor={name} checked={bChecked}>
        <FilterCheckboxLayout checked={bChecked}>
          <FilterCheckboxImage>
            {bChecked && <Image src={"/images/icon-check.svg"} alt={"check"} layout={"fill"} objectFit={"contain"} />}
          </FilterCheckboxImage>
        </FilterCheckboxLayout>
        <Heading_4 darkMode={darkMode}>{name}</Heading_4>
      </CheckboxLabel>
    </FilterCheckboxContainer>
  )
}

export default FilterCheckbox;
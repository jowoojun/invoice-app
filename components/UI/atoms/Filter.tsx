import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Heading_4 } from './Fonts';
import { FilterBackgroundColor } from './Colors'
import FilterCheckbox from './FilterCheckbox';

import { FILTER_INVOICES_LIST } from "../../../store/invoice/types";

import useWindowSize from "../../../hooks/useWindowSize";

const FilterContainer = styled.div`
  position: relative;
  width: 54px;
  height: 100%;  
  @media screen and (min-width: 767px){
    width: 118px;
  }
`

const FilterButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16.5px 0;
  cursor: pointer;
`

const FilterIcon = styled.div<{ filter: boolean}>`
  position: relative;
  width: 10px;
  height: 6px;
  transform: ${props => props.filter ? 'matrix(1, 0, 0, -1, 0, 0)' : ''};
`

const FilterModal = styled.form<{ darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  top: 45px;
  left: -40px; 
  width: 132px;
  height: 128px;
  padding: 16px;
  background: ${props => FilterBackgroundColor(props.darkMode)};
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  @media screen and (min-width: 767px) {
    width: 192px;
  }
`

interface FilterProps {
  darkMode: boolean
}

const StatusList = ['draft', 'pending', 'paid']

const Filter = ({darkMode}: FilterProps) => {
  const dispatch = useDispatch()
  const width = useWindowSize();
  const [filter, onFilter] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  
  
  const checkedItemHandler = (id: string, isChecked: boolean) => {
    if (isChecked) {
      checkedItems.add(id);  
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
    }
    setCheckedItems(checkedItems);
    dispatch({
      type: FILTER_INVOICES_LIST,
      payload: checkedItems
    })
  };

  return (
    <FilterContainer >
      <FilterButton onClick={() => onFilter(!filter)}>
        <Heading_4 darkMode={darkMode}>
          {width < 767? 'Filter' : 'Filter by status'}
        </Heading_4>
        <FilterIcon filter={filter}>
          <Image alt={"filter"} src={'/images/icon-arrow-down.svg'} layout={"fill"} objectFit={'contain'} />
        </FilterIcon>
      </FilterButton>
      {filter && 
        <FilterModal darkMode={darkMode}>
          {StatusList.map((status) => 
            <FilterCheckbox key={status} darkMode={darkMode} name={status} checkedItemHandler={checkedItemHandler} />
          )}
        </FilterModal>
      }
    </FilterContainer>
  )
}

export default Filter;
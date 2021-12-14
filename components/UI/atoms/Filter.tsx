import Image from "next/image";
import styled from "styled-components";
import useWindowSize from "../../../hooks/useWindowSize";

import {
  Heading_4
} from '../atoms/Fonts';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 54px;
  height: 100%;
  padding: 16.5px 0;
  @media screen and (min-width: 767px){
    width: 118px;
  }
`

const FilterIcon = styled.div`
  position: relative;
  width: 10px;
  height: 6px;
`

interface FilterProps {
  darkMode: boolean
}

const Filter = ({darkMode}: FilterProps) => {
  const width = useWindowSize();
  return (
    <FilterContainer>
      <Heading_4 darkMode={darkMode}>
        {width < 767? 'Filter' : 'Filter by status'}
      </Heading_4>
      <FilterIcon>
        <Image alt={"filter"} src={'/images/icon-arrow-down.svg'} layout={"fill"} objectFit={'contain'} />
      </FilterIcon>
    </FilterContainer>
  )
}

export default Filter;
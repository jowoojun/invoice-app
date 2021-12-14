import styled from "styled-components";
import { useSelector } from "react-redux";

import { RootState } from "../../../store/reducer";

import {
  HeaderBackgroundColor
} from '../atoms/Colors';
import HeaderLogo from "../molecules/HeaderLogo";
import HeaderButton from "../molecules/HeaderButton";

const HeaderLayoutContainer = styled.div<{darkMode: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: ${props => HeaderBackgroundColor(props.darkMode)};
  
  @media screen and (min-width: 767px) {
    height: 80px;
  }
  @media screen and (min-width: 1023px) {
    flex-direction: column;
    height: 100vh;
  }
`

const Header = () => {
  const { darkMode } = useSelector((state:RootState) => state.setting);

  return (
    <HeaderLayoutContainer darkMode={darkMode}>
      <HeaderLogo />
      <HeaderButton />
    </HeaderLayoutContainer>
  )
}

export default Header;
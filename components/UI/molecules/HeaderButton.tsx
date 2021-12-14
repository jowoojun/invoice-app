import styled from "styled-components";

import ProfileIcon from "../atoms/ProfileIcon";
import DarkModeIcon from "../atoms/DarkModeIcon";


const HeaderButtonContainer = styled.div`
  display: flex;
  @media screen and (min-width: 1023px) {
    flex-direction: column;
  }
`

const HeaderButton = ({}) => {
  return (
    <HeaderButtonContainer>
      <DarkModeIcon />
      <ProfileIcon />
    </HeaderButtonContainer>
  )
}

export default HeaderButton;
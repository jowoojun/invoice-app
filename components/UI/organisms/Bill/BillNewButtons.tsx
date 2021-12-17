import styled from "styled-components";

import { CardBackgroundColor } from '../../atoms/Colors';
import DiscardButton from "../../atoms/Buttons/DiscardButton";
import DraftButton from "../../atoms/Buttons/DraftButton";
import SaveButton from "../../atoms/Buttons/SaveButton";


const BillNewButtonsContainer = styled.div<{ darkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 0 24px;
  width: 100%;
  height: 91px;
  background-color: ${props => CardBackgroundColor(props.darkMode)};
`

interface BillNewButtonsProps {
  darkMode: boolean
}

const BillNewButtons = ({darkMode}: BillNewButtonsProps) => {
  return (
    <BillNewButtonsContainer darkMode={darkMode} >
      <DiscardButton darkMode={darkMode} />
      <DraftButton />
      <SaveButton />
    </BillNewButtonsContainer> 
  )
}

export default BillNewButtons;
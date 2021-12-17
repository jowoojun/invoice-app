import styled from "styled-components";

import { EditButtonColor, FontBodyFontColor3 } from '../Colors'
import { Heading_4 } from '../Fonts'

const DiscardButtonContainer = styled.div<{ darkMode: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => EditButtonColor(props.darkMode)};
  width: 26%;
  height: 48px;
  border-radius: 24px;

`

const DiscardButtonFont = styled(Heading_4)<{ darkMode: boolean }>`
  color: ${props => FontBodyFontColor3(props.darkMode)};
`

interface DiscardButtonProps {
  darkMode: boolean
}

const DiscardButton = ({ darkMode }: DiscardButtonProps) => {
  return (
    <DiscardButtonContainer darkMode={darkMode}>
      <DiscardButtonFont darkMode={darkMode}>Discard</DiscardButtonFont>
    </DiscardButtonContainer>
  )
}

export default DiscardButton;
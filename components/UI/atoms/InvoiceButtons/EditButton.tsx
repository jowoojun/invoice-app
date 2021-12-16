import styled from "styled-components";

import { EditButtonColor, FontBodyFontColor3 } from '../Colors'
import { Heading_4 } from '../Fonts'

const EditButtonContainer = styled.div<{ darkMode: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => EditButtonColor(props.darkMode)};
  width: 22.32%;
  height: 48px;
  border-radius: 24px;

`

const EditButtonFont = styled(Heading_4)<{ darkMode: boolean }>`
  color: ${props => FontBodyFontColor3(props.darkMode)};
`

interface EditButtonProps {
  darkMode: boolean
}

const EditButton = ({ darkMode }: EditButtonProps) => {
  return (
    <EditButtonContainer darkMode={darkMode}>
      <EditButtonFont darkMode={darkMode}>Edit</EditButtonFont>
    </EditButtonContainer>
  )
}

export default EditButton;
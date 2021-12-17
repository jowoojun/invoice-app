import styled from "styled-components";

import { DeleteButtonColor, FontButtonWhite } from '../Colors'
import { Heading_4 } from '../Fonts'

const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${DeleteButtonColor};
  width: 27.21%;
  height: 48px;
  border-radius: 24px;

`

const DeleteButtonFont = styled(Heading_4)`
  color: ${FontButtonWhite};
`

const DeleteButton = () => {
  return (
    <DeleteButtonContainer>
      <DeleteButtonFont>Delete</DeleteButtonFont>
    </DeleteButtonContainer>
  )
}

export default DeleteButton;
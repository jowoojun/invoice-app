import styled from "styled-components";

import { MarkPaidButtonColor, FontButtonWhite } from '../Colors'
import { Heading_4 } from '../Fonts'

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${MarkPaidButtonColor};
  width: 35%;
  height: 48px;
  border-radius: 24px;
  @media screen and (min-width: 767px) {
    width: 131px;
  }

`

const SaveButtonFont = styled(Heading_4)`
  color: ${FontButtonWhite};
`

const SaveButton = () => {
  return (
    <SaveButtonContainer>
      <SaveButtonFont>Save</SaveButtonFont>
    </SaveButtonContainer>
  )
}

export default SaveButton;
import styled from "styled-components";

import { BlackButton, FontButtonWhite } from '../Colors'
import { Heading_4 } from '../Fonts'

const DraftButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${BlackButton};
  width: 37%;
  height: 48px;
  border-radius: 24px;
  @media screen and (min-width: 767px) {
    width: 131px;
  }

`

const DraftButtonFont = styled(Heading_4)`
  color: ${FontButtonWhite};
`

const DraftButton = () => {
  return (
    <DraftButtonContainer>
      <DraftButtonFont>Save as Draft</DraftButtonFont>
    </DraftButtonContainer>
  )
}

export default DraftButton;

import styled from "styled-components";

import { MarkPaidButtonColor, FontButtonWhite } from '../Colors'
import { Heading_4 } from '../Fonts'

const PaidButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${MarkPaidButtonColor};
  width: 45.56%;
  height: 48px;
  border-radius: 24px;
  @media screen and (min-width: 767px) {
    width: 131px;
  }

`

const PaidButtonFont = styled(Heading_4)`
  color: ${FontButtonWhite};
`

const PaidButton = () => {
  return (
    <PaidButtonContainer>
      <PaidButtonFont>Mark as Paid</PaidButtonFont>
    </PaidButtonContainer>
  )
}

export default PaidButton;
import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";

import { Heading_4 } from "./Fonts";

const BackButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 81px;
  padding: 16px 0;
`

interface BackButtonProp {
  darkMode: boolean
}

const BackButton = ({darkMode}: BackButtonProp) => {
  return (
    <BackButtonContainer onClick={() => Router.back()}>
      <Image alt={'back button'} src={"/images/icon-arrow-left.svg"} width={6} height={10} />
      <Heading_4 darkMode={darkMode}>Go back</Heading_4>
    </BackButtonContainer>
  )
}

export default BackButton;
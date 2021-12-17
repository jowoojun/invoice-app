import styled from 'styled-components'
import Link from 'next/link'

import { Heading_4 } from './Fonts'
import { 
  NewButtonColor,
  InvoiceListHeader_NewButton_FontColor
} from './Colors'
import Image from 'next/image'
import useWindowSize from '../../../hooks/useWindowSize'

const NewButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 44px;
  border-radius: 24px;
  background: ${NewButtonColor};
  cursor: pointer;
  margin-left: 18px;
  &:hover {
    background: #9277FF;
  }
  @media screen and (min-width: 767px) {
    width: 150px;
    height: 48px;
    margin-left: 40px;
  }
`

const PlueIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 6px;
  background-color: white;
  @media screen and (min-width: 767px) {
    margin: 8px;
  }
`

const PlueIcon = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
`

const NewButtonFont = styled(Heading_4)`
  margin-right: 14px;
  color: ${InvoiceListHeader_NewButton_FontColor};
  @media screen and (min-width: 767px) {
    margin-right: 15px;
  }
`

const NewButton = () => {
  const width = useWindowSize();
  return (
    <Link href={'/newInvoice'} passHref>
      <NewButtonContainer>
        <PlueIconContainer>
          <PlueIcon>
            <Image alt={'new invoice'} src={'/images/icon-plus.svg'} layout={'fill'} objectFit={'contain'} />
          </PlueIcon>
        </PlueIconContainer>
        <NewButtonFont>
          {width < 767 ? "New" : "New Invoice"}
        </NewButtonFont>
      </NewButtonContainer>
    </Link>
  )
}

export default NewButton;
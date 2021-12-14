import Image from 'next/image';
import styled from 'styled-components'

import useDarkMode from '../../../hooks/useDarkMode';

const DarkModeIconLayout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px 23px;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    padding: 30px 32px;
  }
  @media screen and (min-width: 1023px) {
    padding: 28px 41.5px;
  }
`

const DarkModeIconBox = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`

const DarkModeIcon = ({}) => {
  const { darkMode, toggleDarkMode, IconSrc } = useDarkMode()
  
  return (
    <DarkModeIconLayout onClick={() => toggleDarkMode()}>
      <DarkModeIconBox>
        <Image alt={'icon-sun'} src={IconSrc} objectFit="contain" layout={'fill'} />
      </DarkModeIconBox>
    </DarkModeIconLayout>
  )
}

export default DarkModeIcon;
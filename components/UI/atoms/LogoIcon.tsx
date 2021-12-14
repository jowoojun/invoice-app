import Image from 'next/image';
import styled from 'styled-components'

const ProfileIconLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 23px 22px;
  background: #7C5DFA;
  border-radius: 0px 20px 20px 0px;
  
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 767px) {
    padding: 26px 24px 25px 25px;
  }
  @media screen and (min-width: 1023px) {
    padding: 31px 31px 32px 32px;
  }
`

const ProfileIconBox = styled.div`
  position: relative;
  width: 28px;
  height: 26px;
  z-index: 9999;
  @media screen and (min-width: 767px) {
    width: 31px;
    height: 29px;
  }
  @media screen and (min-width: 1023px) {
    width: 40px;
    height: 40px;
  }
`

const LogoPattern = styled.div`
  position: absolute;
  width: 72px;
  height: 72px;
  top: 36.35px;

  background: #9277FF;
  border-radius: 0px 20px 20px 0px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  

  @media screen and (min-width: 767px) {
    top: 40.39px;
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 1023px) {
    top: 52px;
    width: 103px;
    height: 103px;
  }
`

const ProfileIcon = () => {
 
  return (
    <ProfileIconLayout>
      <ProfileIconBox>
        <Image alt={'avatar'} src={"/images/logo.svg"} objectFit="contain" layout={'fill'} />
      </ProfileIconBox>
      <LogoPattern />
    </ProfileIconLayout>
  )
}

export default ProfileIcon;
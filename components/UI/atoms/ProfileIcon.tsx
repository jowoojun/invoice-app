import Image from 'next/image';
import styled from 'styled-components'

const ProfileIconLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #494E6E;
  padding: 20px 24px;
  @media screen and (min-width: 767px) {
    padding: 24px 31.5px;
  }
  @media screen and (min-width: 1023px) {
    border-top: 1px solid #494E6E;
    border-left: 0px;
  }
`

const ProfileIconBox = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  
  @media screen and (min-width: 1023px) {
    width: 40px;
    height: 40px;
  }
`

const ProfileIcon = () => {
  return (
    <ProfileIconLayout>
      <ProfileIconBox>
        <Image alt={'avatar'} src={"/images/image-avatar.jpg"} objectFit="contain" layout={'fill'} />
      </ProfileIconBox>
    </ProfileIconLayout>
  )
}

export default ProfileIcon;
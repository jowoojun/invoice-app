
import styled from 'styled-components';
import Header from '../UI/organisms/Header'

const HomeTemplateContainer = styled.div`

  @media screen and (min-width: 1023px) {
    display: flex;
    height: 100vh;
  }
`

const HomeTemplate = () => {
  return (
    <HomeTemplateContainer>
      <Header />
    </HomeTemplateContainer>
  )
}

export default HomeTemplate;
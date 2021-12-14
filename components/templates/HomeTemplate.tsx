
import styled from 'styled-components';
import Header from '../UI/organisms/Header'

import InvoiceListHeader from '../UI/organisms/InvoiceListHeader'
import InvoiceList from '../UI/organisms/InvoiceList'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

import {
  MainBackgroundColor
} from '../UI/atoms/Colors';

const HomeTemplateContainer = styled.div<{ darkMode: boolean }>`
  height: 100vh;
  background-color: ${props => MainBackgroundColor(props.darkMode)};
  @media screen and (min-width: 1023px) {
    display: flex;
  }
`

const InvoiceListContainer = styled.div`
  padding: 32px 24px;
`


const HomeTemplate = () => {
  const { darkMode } = useSelector((state: RootState) => state.setting);

  return (
    <HomeTemplateContainer darkMode={darkMode}>
      <Header />
      <InvoiceListContainer>
        <InvoiceListHeader darkMode={darkMode}/>
        <InvoiceList darkMode={darkMode} />
      </InvoiceListContainer>
    </HomeTemplateContainer>
  )
}

export default HomeTemplate;
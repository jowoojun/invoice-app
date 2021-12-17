import type { NextPage } from 'next'
import { useSelector } from 'react-redux'

import NewInvoiceTemplate from '../components/templates/NewInvoiceTemplate'
import { RootState } from '../store/reducer'

const NewInvoice: NextPage = () => {
  const { darkMode } = useSelector((state: RootState) => state.mode);

  return (
   <NewInvoiceTemplate darkMode={darkMode} />
  )
}

export default NewInvoice;

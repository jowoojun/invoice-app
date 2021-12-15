import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeTemplate from '../components/templates/HomeTemplate'
import { LOAD_INVOICES_REQUEST } from '../store/invoice/types'
import { RootState } from '../store/reducer'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const { filteredInvoices } = useSelector((state: RootState) => state.invoice);
  const { darkMode } = useSelector((state: RootState) => state.mode);

  useEffect(() => {
    dispatch({
      type: LOAD_INVOICES_REQUEST,
    })
  }, [])

  return (
   <HomeTemplate darkMode={darkMode} mainInvoices={filteredInvoices} />
  )
}

export default Home

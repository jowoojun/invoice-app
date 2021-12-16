import type { NextPage } from 'next';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InvoiceDetailTemplate from '../../components/templates/InvoiceDetailTemplate';

import { RootState } from '../../store/reducer';
import { LOAD_INVOICE_BY_ID_REQUEST } from '../../store/invoice/types';

const InvoiceDetail: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query
  const { darkMode } = useSelector((state:RootState) => state.mode)
  const { invoice } = useSelector((state:RootState) => state.invoice)
  
  useEffect(() => {
    dispatch({
      type: LOAD_INVOICE_BY_ID_REQUEST,
      payload: { id: id },
    })
  }, [id])

  return (
    <InvoiceDetailTemplate darkMode={darkMode} invoice={invoice} />
  )
}

export default InvoiceDetail;
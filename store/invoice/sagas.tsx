import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_INVOICES_REQUEST, LOAD_INVOICES_SUCCESS, LOAD_INVOICES_FAILURE,
  LOAD_INVOICE_BY_ID_REQUEST, LOAD_INVOICE_BY_ID_SUCCESS, LOAD_INVOICE_BY_ID_FAILURE,
  invoiceProps
} from './types';
import { 
  LoadInvoiceByIdRequestAction,
} from './actions';

// dummey data
import dummeyData from '../../public/data.json'

// invoice 목록 불러오기
function loadInvoicesAPI() {
  // return axios.get('/invoices');
  // return { data: [] }
  return { data: dummeyData }
}

function* loadInvoices() {
  try {
    const result: { data: invoiceProps[] } = yield call(loadInvoicesAPI);
    yield put({
      type: LOAD_INVOICES_SUCCESS,
      payload: result,
    });
  } catch (error: any) {
    yield put({
      type: LOAD_INVOICES_FAILURE,
      payload: { error: error.response.data },
    });
  }
}

function* watchLoadInvoices() {
  yield takeLatest(LOAD_INVOICES_REQUEST, loadInvoices);
}

// 특정 invoice를 id로 불러오기
function loadInvoiceByIdAPI(data: { id: string; }) {
  // return axios.get('/invoices');
  // return { data: [] }
  return { data: dummeyData.filter((invoice) => invoice.id.includes(data.id)) }
}

function* loadInvoiceById({payload}: LoadInvoiceByIdRequestAction) {
  try {
    const result: { data: invoiceProps } = yield call(loadInvoiceByIdAPI, payload);
    yield put({
      type: LOAD_INVOICE_BY_ID_SUCCESS,
      payload: result
    });
  } catch (error: any) {
    yield put({
      type: LOAD_INVOICE_BY_ID_FAILURE,
      payload: { error: error.response.data },
    });
  }
}

function* watchLoadInvoiceById() {
  yield takeLatest(LOAD_INVOICE_BY_ID_REQUEST, loadInvoiceById);
}

export default function* invoicesSaga() {
  yield all([
    fork(watchLoadInvoices),
    fork(watchLoadInvoiceById),
  ]);
}

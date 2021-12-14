import {
  all, put, fork, takeLatest, call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_INVOICES_REQUEST, LOAD_INVOICES_SUCCESS, LOAD_INVOICES_FAILURE,
  invoiceProps
} from './types';

// dummey data
import dummeyData from '../../public/data.json'

// 행성 목록 불러오기
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
      payload: result.data,
    });
  } catch (error: any) {
    yield put({
      type: LOAD_INVOICES_FAILURE,
      payload: error.response.data,
    });
  }
}

function* watchLoadInvoices() {
  yield takeLatest(LOAD_INVOICES_REQUEST, loadInvoices);
}

export default function* invoicesSaga() {
  yield all([
    fork(watchLoadInvoices),
  ]);
}

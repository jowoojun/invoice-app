import {
  LOAD_INVOICES_REQUEST, LOAD_INVOICES_SUCCESS, LOAD_INVOICES_FAILURE,
  LOAD_INVOICE_BY_ID_REQUEST, LOAD_INVOICE_BY_ID_SUCCESS, LOAD_INVOICE_BY_ID_FAILURE,
  FILTER_INVOICES_LIST, invoiceProps
} from "./types";

export interface LoadInvoicesRequestAction {
  type: typeof LOAD_INVOICES_REQUEST
}

interface LoadInvoicesSuccessAction  {
  type: typeof LOAD_INVOICES_SUCCESS
  payload: { data: invoiceProps[] },
}

interface LoadInvoicesFailureAction {
  type: typeof LOAD_INVOICES_FAILURE
  payload: { error: string },
}

export interface LoadInvoiceByIdRequestAction {
  type: typeof LOAD_INVOICE_BY_ID_REQUEST,
  payload: { id: string },
}
interface LoadInvoiceByIdSuccessAction {
  type: typeof LOAD_INVOICE_BY_ID_SUCCESS,
  payload: { data: invoiceProps },
}
interface LoadInvoiceByIdFailureAction {
  type: typeof LOAD_INVOICE_BY_ID_FAILURE,
  payload: { error: string },
}

interface FilterInvoicesListAction {
  type: typeof FILTER_INVOICES_LIST,
  payload: string[],
}

export type ActionRequest =
  | LoadInvoicesRequestAction
  | LoadInvoicesSuccessAction
  | LoadInvoicesFailureAction
  | LoadInvoiceByIdRequestAction
  | LoadInvoiceByIdSuccessAction
  | LoadInvoiceByIdFailureAction
  | FilterInvoicesListAction;
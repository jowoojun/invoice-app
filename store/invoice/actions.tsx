import {
  LOAD_INVOICES_REQUEST, LOAD_INVOICES_SUCCESS, LOAD_INVOICES_FAILURE,
  FILTER_INVOICES_LIST, invoiceProps
} from "./types";

interface LoadInvoicesRequestAction {
  type: typeof LOAD_INVOICES_REQUEST
}

interface LoadInvoicesSuccessAction  {
  type: typeof LOAD_INVOICES_SUCCESS
  payload: invoiceProps[],
}

interface LoadInvoicesFailureAction {
  type: typeof LOAD_INVOICES_FAILURE
  payload: string,
}

interface LoadInvoicesFailureAction {
  type: typeof LOAD_INVOICES_FAILURE
  payload: string,
}

interface FilterInvoicesListAction {
  type: typeof FILTER_INVOICES_LIST,
  payload: string[],
}

export type ActionRequest =
  | LoadInvoicesRequestAction
  | LoadInvoicesSuccessAction
  | LoadInvoicesFailureAction
  | FilterInvoicesListAction;
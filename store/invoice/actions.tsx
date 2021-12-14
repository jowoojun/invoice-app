import {
  LOAD_INVOICES_REQUEST, LOAD_INVOICES_SUCCESS, LOAD_INVOICES_FAILURE,
  invoiceProps
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

export type ActionRequest =
  | LoadInvoicesRequestAction
  | LoadInvoicesSuccessAction
  | LoadInvoicesFailureAction;
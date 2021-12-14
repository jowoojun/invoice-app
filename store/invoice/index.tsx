import produce from "../../utils/produce";
import {
  LOAD_INVOICES_REQUEST, LOAD_INVOICES_SUCCESS, LOAD_INVOICES_FAILURE,
  invoicesProps
} from './types'
import { ActionRequest } from "./actions";

export const initalState: invoicesProps = {
  mainInvoices: [],
  loadInvoicesLoading: false,
  loadInvoicesDone: false,
  loadInvoicesError: null,
};

const ReducerSetting = (
  state:invoicesProps = initalState,
  action: ActionRequest
) => produce(state, (draft: invoicesProps) => {
  switch(action.type) {
  case LOAD_INVOICES_REQUEST: {
    draft.mainInvoices = [];
    draft.loadInvoicesLoading = true;
    draft.loadInvoicesDone = false;
    draft.loadInvoicesError = null;
    break;
  }
  case LOAD_INVOICES_SUCCESS: {
    draft.loadInvoicesLoading = false;
    draft.loadInvoicesDone = true;
    draft.mainInvoices = draft.mainInvoices.concat(action.payload);
    break;
  }
  case LOAD_INVOICES_FAILURE: {
    draft.loadInvoicesLoading = false;
    draft.loadInvoicesError = action.payload;
    break;
  }
  default:
    break;
  }
});

export default ReducerSetting;
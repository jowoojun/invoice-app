import produce from "../../utils/produce";
import {
  LOAD_INVOICES_REQUEST, LOAD_INVOICES_SUCCESS, LOAD_INVOICES_FAILURE,
  LOAD_INVOICE_BY_ID_REQUEST, LOAD_INVOICE_BY_ID_SUCCESS, LOAD_INVOICE_BY_ID_FAILURE,
  FILTER_INVOICES_LIST, invoicesProps
} from './types'
import { ActionRequest } from "./actions";

export const initalState: invoicesProps = {
  mainInvoices: [],
  invoice: null,
  filteredInvoices: [],
  loadInvoicesLoading: false,
  loadInvoicesDone: false,
  loadInvoicesError: null,
};

const ReducerInvoice = (
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
    draft.mainInvoices = draft.mainInvoices.concat(action.payload.data);
    draft.filteredInvoices = draft.mainInvoices;
    break;
  }
  case LOAD_INVOICES_FAILURE: 
  case LOAD_INVOICE_BY_ID_FAILURE: {
    draft.loadInvoicesLoading = false;
    draft.loadInvoicesError = action.payload.error;
    break;
  }
  case LOAD_INVOICE_BY_ID_REQUEST: {
    draft.loadInvoicesLoading = true;
    draft.loadInvoicesDone = false;
    draft.loadInvoicesError = null;
    break;
  }
  case LOAD_INVOICE_BY_ID_SUCCESS: {
    draft.loadInvoicesLoading = false;
    draft.loadInvoicesDone = true;
    draft.invoice = action.payload.data;
    break;
  }
  case FILTER_INVOICES_LIST: {
    const checkList = [...action.payload];
    draft.filteredInvoices = [];
    draft.filteredInvoices = draft.mainInvoices.filter(invoice => {
      for (var item of checkList){
        if (invoice.status.includes(item)){
          return invoice;
        }
      }
      if(checkList.length === 0){
        return invoice;
      }
    });
    break;
  }
  default:
    break;
  }
});

export default ReducerInvoice;
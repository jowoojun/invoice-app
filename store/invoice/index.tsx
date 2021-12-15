import produce from "../../utils/produce";
import {
  LOAD_INVOICES_REQUEST, LOAD_INVOICES_SUCCESS, LOAD_INVOICES_FAILURE,
  FILTER_INVOICES_LIST, invoicesProps
} from './types'
import { ActionRequest } from "./actions";

export const initalState: invoicesProps = {
  mainInvoices: [],
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
    draft.mainInvoices = draft.mainInvoices.concat(action.payload);
    draft.filteredInvoices = draft.mainInvoices;
    break;
  }
  case LOAD_INVOICES_FAILURE: {
    draft.loadInvoicesLoading = false;
    draft.loadInvoicesError = action.payload;
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
export const LOAD_INVOICES_REQUEST = 'LOAD_INVOICES_REQUEST';
export const LOAD_INVOICES_SUCCESS = 'LOAD_INVOICES_SUCCESS';
export const LOAD_INVOICES_FAILURE = 'LOAD_INVOICES_FAILURE';
export const FILTER_INVOICES_LIST = 'FILTER_INVOICES_LIST';
export const LOAD_INVOICE_BY_ID_REQUEST = 'LOAD_INVOICE_BY_ID_REQUEST';
export const LOAD_INVOICE_BY_ID_SUCCESS = 'LOAD_INVOICE_BY_ID_SUCCESS';
export const LOAD_INVOICE_BY_ID_FAILURE = 'LOAD_INVOICE_BY_ID_FAILURE';

export type invoiceProps = {
  id: String,
  createdAt: String,
  paymentDue: String,
  description: String,
  paymentTerms: Number,
  clientName: String,
  clientEmail: String,
  status: String,
  senderAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String,
  },
  clientAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String,
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
      total: Number,
    }
  ],
  total: Number,
}

export type invoicesProps = {
  mainInvoices: invoiceProps[],
  invoice: invoiceProps | null,
  filteredInvoices: invoiceProps[],
  loadInvoicesLoading: boolean,
  loadInvoicesDone: boolean,
  loadInvoicesError: String | null,
}
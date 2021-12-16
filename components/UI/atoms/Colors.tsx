// darkMode & whiteMode
// Background Color
export const HeaderBackgroundColor = (darkMode: boolean) => ( darkMode ? "#1E2139" : "#373B53");
export const MainBackgroundColor = (darkMode: boolean) => ( darkMode ? "#141625" : "#F2F2F2");
export const FilterBackgroundColor = (darkMode: boolean) => ( darkMode ? "#252945" : "#FFFFFF");

// Card
export const CardBackgroundColor = (darkMode: boolean) => ( darkMode ? "#1E2139" : "#FFFFFF");
// Font
export const FontDefaultColor = (darkMode: boolean) => ( darkMode ? "#FFFFFF" : "#0C0E16");
export const FontBodyFontColor1 = (darkMode: boolean) => ( darkMode ? "#DFE3FA" : "#888EB0");
export const FontBodyFontColor2 = (darkMode: boolean) => ( darkMode ? "#DFE3FA" : "#858BB2");
export const FontBodyFontColor3 = (darkMode: boolean) => ( darkMode ? "#DFE3FA" : "#7E88C3");
export const FontShopTagColor1 = (darkMode: boolean) => ( darkMode ? "#888EB0" : "#7E88C3");
export const FontButtonWhite = "#FFFFFF"
export const InvoiceStatusTextColor = (darkMode: boolean, status: String) => {
  if(status === "paid") return "rgba(51, 214, 159, 1)"
  else if(status === "pending") return "rgba(255, 143, 0, 1)"
  else return darkMode? "rgba(223, 227, 250, 1)" : "rgba(55, 59, 83, 1)" ;
}
// Button
export const EditButtonColor = (darkMode: boolean) => ( darkMode ? "#252945" : "#F9FAFE");
export const DeleteButtonColor = "#EC5757";
export const MarkPaidButtonColor = "#7C5DFA";
export const NewButtonColor = "#7C5DFA;"
export const InvoiceStatusButtonColor = (darkMode: boolean, status: String) => {
  if(status === "paid") return "rgba(51, 214, 159, 0.06)"
  else if(status === "pending") return "rgba(255, 143, 0, 0.06)"
  else return darkMode? "rgba(223, 227, 250, 0.06)" : "rgba(55, 59, 83, 0.06)" ;
}
// InvoiceDetailPrice
export const InvoiceDetailPrice = (darkMode: boolean) => ( darkMode ? "#252945" : "#F9FAFE");
export const InvoiceDetailTotalPrice = (darkMode: boolean) => ( darkMode ? "#0C0E16" : "#373B53");


// components/UI/organisms/InvoiceListHeader.tsx
export const InvoiceListHeader_NewButton_FontColor = "#FFFFFF";

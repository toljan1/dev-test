import { Provider } from "react-redux";

import { store } from "./appStore/store";
import CurrencyConverterPage from "./(components)/currencyConverterPage/page";

export default function Root() {
  return (
    <Provider store={store}>
      <CurrencyConverterPage />
    </Provider>
  )
};
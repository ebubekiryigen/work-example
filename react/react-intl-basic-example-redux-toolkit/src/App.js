import { FormattedMessage } from "react-intl";
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from "react-redux";
import lang from "./lang"
import {langchangeEN, langchangeTR} from './store/lang'

function App() {

  const value = useSelector((state) => state.lang.value)
  const dispatch = useDispatch()
  const defaultLocale = navigator.language

  return (
    <div className="App">
      <IntlProvider messages={lang[value]}>
          <FormattedMessage values={{number:12}} id="title" /><br /><br />
          <FormattedMessage values={{number:12}} id="desc" /><br /><br />
          <button onClick={()=>dispatch(langchangeEN())}>EN</button>
          <button onClick={()=>dispatch(langchangeTR())}>TR</button>
      </IntlProvider>
    </div>
  );
}

export default App;

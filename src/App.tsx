import './App.css'
import { IntlProvider } from 'react-intl';
import messages_ru from './translations/ru.json';
import messages_uz from './translations/uz.json';
import { useContext } from 'react';
import Main from './pages/main';
import AppContext from './context/AppContext';
const messages: { [key: string]: { greeting: string } } = {
  ru: messages_ru,
  uz: messages_uz,
};
import { AppContextType } from './context/AppContext';
function App() {
  const ctx: AppContextType = useContext(AppContext);
  return (
    <IntlProvider locale={ctx.language} messages={messages[ctx.language]}>
      <Main />
      {/* <div className="App">
        <h1>
          <FormattedMessage id="greeting" />
        </h1>
        <select onChange={(e) => ctx.changeLanguage({ language: e.target.value })} value={ctx.language}>
          <option value="uz">Uzbek</option>
          <option value="ru">Russian</option>
        </select>
      </div> */}
    </IntlProvider>
  )
}

export default App

import './App.css'
import { IntlProvider } from 'react-intl';
import messages_ru from './translations/ru.json';
import messages_uz from './translations/uz.json';
import { useContext } from 'react';
import Main from './pages/main';
import AppContext from './context/AppContext';
const messages: { [key: string]: { [id: string]: string } } = {
  ru: messages_ru,
  uz: messages_uz,
};
import { AppContextType } from './context/AppContext';
function App() {
  const ctx: AppContextType = useContext(AppContext);
  return (
    <IntlProvider locale={ctx.language} messages={messages[ctx.language]}>
      <Main />
    </IntlProvider>
  )
}

export default App

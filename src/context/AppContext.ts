import { createContext } from "react";
export type AppContextType = {
  language: string;
  changeLanguage: (item: { language: string }) => void;
};
const AppContext = createContext<AppContextType>({
  language: "",
  changeLanguage: () => {},
});
export default AppContext;

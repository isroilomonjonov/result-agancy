import { useReducer } from "react";
import AppContext, { AppContextType } from "./AppContext";
import appReducer from "./appReducer";

const defaultAppState = {
    language: "ru",
};

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [appState, dispatch] = useReducer(appReducer, defaultAppState);

    const changeLanguage = (item: { language: string }) => {
        dispatch({ type: "changeLN", item });
    };
    const context: AppContextType = {
        language: appState.language,
        changeLanguage
    };

    return (
        <>
            <AppContext.Provider value={context}>{children}</AppContext.Provider>
        </>
    );
};

export default AppContextProvider;
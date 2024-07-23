import React, { createContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
    mode: "light",
    modeName: "dark",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_MODE":
            return { ...state, mode: action.payload };
        case "CHANGE_MODE_NAME":
            return { ...state, modeName: action.payload };
        default:
            return state;
    }
};

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const changeMode = () => {
        dispatch({
            type: "CHANGE_MODE",
            payload: state.mode === "light" ? "dark" : "light",
        });
    };

    const changeModeName = () => {
        dispatch({
            type: "CHANGE_MODE_NAME",
            payload: state.modeName === "light" ? "dark" : "light",
        });
    };

    return (
        <ThemeContext.Provider value={{ ...state, changeMode, changeModeName }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;


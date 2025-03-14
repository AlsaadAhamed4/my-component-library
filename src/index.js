import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SignUpModal } from "./Components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { ThemeProvider } from "styled-components"; //allows us to pass the theme to our components

const App = () => {
    const [useDarkTheme, setDarkTheme] = useState();
    const [toggleModal, SetToggleModal] = useState(true);
    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button onClick={() => setDarkTheme(true)}>Dark Theme</button>
            <button onClick={() => setDarkTheme(false)}>Default Theme</button>
            <button onClick={() => SetToggleModal(!toggleModal)}>{toggleModal ? "Hide Modal" : "Show Modal"}</button>
            <div
                style={{
                    background: useDarkTheme
                        ? defaultTheme.primaryColor
                        : darkTheme.primaryColor,
                    width: "100vw",
                    height: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}
            >
                <SignUpModal toggleModal={toggleModal} SetToggleModal={SetToggleModal} />
                <GlobalStyle />
            </div>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
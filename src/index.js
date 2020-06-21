import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Components/buttons";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { ThemeProvider } from "styled-components"; //allows us to pass the theme to our components

const App = () => {
    const [useDarkTheme, setDarkTheme] = useState();
    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button onClick={() => setDarkTheme(true)}>Dark Theme</button>
            <button onClick={() => setDarkTheme(false)}>Default Theme</button>
            <h1>Hello world</h1>
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
                <PrimaryButton>Primary Button</PrimaryButton>&nbsp;
                <SecondaryButton>Secondary Button</SecondaryButton>&nbsp;
                <TertiaryButton> Turtiary Button</TertiaryButton>
                <GlobalStyle />
            </div>
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
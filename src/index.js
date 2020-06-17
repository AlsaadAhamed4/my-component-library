import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Components/buttons";
import { GlobalStyle } from "./utils";

const App = () => (
    <div>
        <h1>Hello world</h1>
        <PrimaryButton modifiers={["small", "warning"]}>Primary Button</PrimaryButton>&nbsp;
        <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Secondary Button</SecondaryButton>&nbsp;
        <TertiaryButton modifiers={["small", "warning", "tertiaryButtonWarning"]}>Turtiary Button</TertiaryButton>
        <GlobalStyle />
    </div>
);


ReactDOM.render(<App />, document.querySelector('#root'));
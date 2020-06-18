import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Components/buttons";
import { GlobalStyle } from "./utils";

const App = () => (
    <div>
        <h1>Hello world</h1>
        <PrimaryButton modifiers={["small", "error"]}>Primary Button</PrimaryButton>&nbsp;
        <SecondaryButton modifiers={["large", "error", "secondaryButtonError"]}>Secondary Button</SecondaryButton>&nbsp;
        <TertiaryButton modifiers={["small", "error", "tertiaryButtonError"]}>Turtiary Button</TertiaryButton>
        <GlobalStyle />
    </div>
);


ReactDOM.render(<App />, document.querySelector('#root'));
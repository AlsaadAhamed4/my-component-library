import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Components/buttons";
import { GlobalStyle } from "./utils";

const App = () => (
    <div>
        <h1>Hello world</h1>
        <PrimaryButton disabled={true}>Primary Button</PrimaryButton>&nbsp;
        <SecondaryButton disabled={true}>Secondary Button</SecondaryButton>&nbsp;
        <TertiaryButton disabled={true}>Turtiary Button</TertiaryButton>
        <GlobalStyle />
    </div>
);


ReactDOM.render(<App />, document.querySelector('#root'));
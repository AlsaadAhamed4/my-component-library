import React from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Components/buttons";

const App = () => (
    <div>
        <h1>Hello world</h1>
        <PrimaryButton>Primary Button</PrimaryButton>&nbsp;
        <SecondaryButton>Secondary Button</SecondaryButton>&nbsp;
        <TertiaryButton>Turtiary Button</TertiaryButton>
    </div>
);


ReactDOM.render(<App />, document.querySelector('#root'));
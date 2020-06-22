import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import myTheme from "./myTheme";

//for storybook theme 
addons.setConfig({
    theme: myTheme  //choose with dark or light
});
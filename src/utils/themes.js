import { purple, neutral, yellow, green, red } from './colors';
import { primaryFont } from "./typography";

export const defaultTheme = {
    primaryColor: purple[300],
    primaryColorHover: purple[200],
    primaryColorActive: purple[500],
    disabled: neutral[400],
    textColorPrimary: neutral[100], //color on primary color
    textColor: neutral[600],// color on light backgrounds
    textColorInverted: neutral[100], //color on dark backgrounds
    primaryFont,  // font
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],

    //Added status 
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
};

export const darkTheme = {
    primaryColor: neutral[100],
    primaryColorHover: neutral[200],
    primaryColorActive: neutral[500],
    disabled: neutral[400],
    textColorPrimary: purple[100], //color on primary color
    textColor: purple[600],// color on light backgrounds
    textColorInverted: neutral[100], //color on dark backgrounds
    primaryFont,  // font
    formElementBackground: purple[100],
    textOnFormElementBackground: neutral[100],

    //Added status 
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    }
};

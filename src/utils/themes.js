import { purple, neutral } from './colors';
import { primaryFont } from "./typography";

export const defaultTheme = {
    primaryColor: purple[300],
    primaryColorHover: purple[200],
    primaryColorActive: purple[100],
    textColorPrimary: neutral[100], //color on primary color
    textColor: neutral[600],// color on light backgrounds
    textColorInverted: neutral[100], //color on dark backgrounds
    primaryFont  // font
};
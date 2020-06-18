import styled from "styled-components";
import { defaultTheme, typeScale, primaryFont } from "../utils";

import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: () => `
        font-size : ${typeScale.helperText};
        padding:8px;
    `,
    large: () => `
    font-size: ${typeScale.header5};
    padding : 16px 24px;
    `,
    warning: () => `
    background : ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover{
        background : ${defaultTheme.status.warningColorHover};
    }

    &:focus{
        background : ${defaultTheme.status.warningColorHover};
        outline : 3px solid ${defaultTheme.status.warningColorHover};
    }

    &:active{
        background : ${defaultTheme.status.warningColorActive};
        border: none;
    }
    `,
    secondaryButtonWarning: () => `
    background : none;
    border: 2px solid ${defaultTheme.status.warningColor};
    color:  ${defaultTheme.status.warningColor};
    outline:none;
    `,
    tertiaryButtonWarning: () => `
    background:none;
    color:${defaultTheme.status.warningColor};
    `,
    success: () => `
    background : ${defaultTheme.status.successColor};
    color:  ${defaultTheme.textColorInverted};

    &:hover{
        background : ${defaultTheme.status.successColorHover};
    }

    &:focus{
        background : ${defaultTheme.status.successColorHover};
        outline: 3px solid ${defaultTheme.status.successColorHover};
    }

    &:active{
        background : ${defaultTheme.status.successColorActive};
    }
    `,
    secondaryButtonSuccess: () => `
    background:none;
    border:2px solid ${defaultTheme.status.successColor};
    color : ${defaultTheme.status.successColor};
    outline:none;
    `,
    tertiaryButtonSuccess: () => `
    background:none;
    color: ${defaultTheme.status.successColor};
    `,
    error: () => `
    background : ${defaultTheme.status.errorColor};
    color:  ${defaultTheme.textColorInverted};

    &:hover{
        background : ${defaultTheme.status.errorColorHover};
    }

    &:focus{
        background : ${defaultTheme.status.errorColorHover};
        outline: 3px solid ${defaultTheme.status.errorColorHover};
    }

    &:active{
        background : ${defaultTheme.status.errorColorActive};
    }
    `,
    secondaryButtonError: () => `
    background:none;
    border:2px solid ${defaultTheme.status.errorColor};
    color : ${defaultTheme.status.errorColor};
    outline:none;
    `,
    tertiaryButtonError: () => `
    background:none;
    color: ${defaultTheme.status.errorColor};
    `
}

const Button = styled.button`
    padding 12px 26px;
    font-size : ${typeScale.paragraph};
    border-radius:2px;
    min-width:100px;
    cursor:pointer;
    font-family: ${primaryFont};

    &:hover{
        background: ${defaultTheme.primaryColorHover};
        color:${defaultTheme.textColorPrimary};
        transition : background 0.2s linear, color 0.2s linear;
    }

    &:focus{
        background: ${defaultTheme.primaryColorHover};
        color:${defaultTheme.textColorPrimary};
        outline : 3px solid ${defaultTheme.primaryColorHover};
        outline-offset : 2px;
        transition : background 0.5s linear, color 0.5s linear;
    }

    &:active{
        background: ${defaultTheme.primaryColorActive};
        color:${defaultTheme.textColorPrimary};
        transition : background 0.2s linear, color 0.2s linear;
    }
`;

export const PrimaryButton = styled(Button)`
    background :  ${defaultTheme.primaryColor};
    border: none;
    color:white;

    &:disabled{
        background: ${defaultTheme.disabled};
        color:${defaultTheme.textColorInverted};
        transition : background 0.2s linear, color 0.2s linear;
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    border:2px solid ${defaultTheme.primaryColor};
    color : ${defaultTheme.primaryColor};
    background : none;

    &:disabled{
        background:none;
        color:${defaultTheme.disabled};
        transition : background 0.2s linear, color 0.2s linear;
        border : 2px solid ${defaultTheme.disabled} !important;
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)} //Modifiers should be placed at the end 
`;

export const TertiaryButton = styled(Button)`
    border: none;
    background : none;
    color : ${defaultTheme.primaryColor};


    &:disabled{
        background: none;
        color:${defaultTheme.disabled};
        transition : background 0.2s linear, color 0.2s linear;
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

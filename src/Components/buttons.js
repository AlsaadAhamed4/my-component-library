import styled from "styled-components";
import { typeScale, primaryFont } from "../utils";

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
    warning: ({ props }) => `
    background : ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover{
        background : ${props.theme.status.warningColorHover};
    }

    &:focus{
        background : ${props.theme.status.warningColorHover};
        outline : 3px solid ${props.theme.status.warningColorHover};
    }

    &:active{
        background : ${props.theme.status.warningColorActive};
        border: none;
    }
    `,
    secondaryButtonWarning: ({ props }) => `
    background : none;
    border: 2px solid ${props.theme.status.warningColor};
    color:  ${props.theme.status.warningColor};
    outline:none;
    `,
    tertiaryButtonWarning: ({ props }) => `
    background:none;
    color:${props.theme.status.warningColor};
    `,
    success: ({ props }) => `
    background : ${props.theme.status.successColor};
    color:  ${props.theme.textColorInverted};

    &:hover{
        background : ${props.theme.status.successColorHover};
    }

    &:focus{
        background : ${props.theme.status.successColorHover};
        outline: 3px solid ${props.theme.status.successColorHover};
    }

    &:active{
        background : ${props.theme.status.successColorActive};
    }
    `,
    secondaryButtonSuccess: ({ props }) => `
    background:none;
    border:2px solid ${props.theme.status.successColor};
    color : ${props.theme.status.successColor};
    outline:none;
    `,
    tertiaryButtonSuccess: ({ props }) => `
    background:none;
    color: ${props.theme.status.successColor};
    `,
    error: ({ props }) => `
    background : ${props.theme.status.errorColor};
    color:  ${props.theme.textColorInverted};

    &:hover{
        background : ${props.theme.status.errorColorHover};
    }

    &:focus{
        background : ${props.theme.status.errorColorHover};
        outline: 3px solid ${props.theme.status.errorColorHover};
    }

    &:active{
        background : ${props.theme.status.errorColorActive};
    }
    `,
    secondaryButtonError: ({ props }) => `
    background:none;
    border:2px solid ${props.theme.status.errorColor};
    color : ${props.theme.status.errorColor};
    outline:none;
    `,
    tertiaryButtonError: ({ props }) => `
    background:none;
    color: ${props.theme.status.errorColor};
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
        background: ${props => props.theme.primaryColorHover};
        color:${props => props.theme.textColorPrimary};
        transition : background 0.2s linear, color 0.2s linear;
    }

    &:focus{
        background: ${props => props.theme.primaryColorHover};
        color:${props => props.theme.textColorPrimary};
        outline : 3px solid ${props => props.primaryColorHover};
        outline-offset : 2px;
        transition : background 0.5s linear, color 0.5s linear;
    }

    &:active{
        background: ${props => props.theme.primaryColorActive};
        color:${props => props.theme.textColorPrimary};
        transition : background 0.2s linear, color 0.2s linear;
    }
`;

export const PrimaryButton = styled(Button)`
    background :  ${props => props.theme.primaryColor};
    border: none;
    color:${props => props.theme.textColorPrimary};

    &:disabled{
        background: ${props => props.theme.disabled};
        color:${props => props.theme.textColorInverted};
        transition : background 0.2s linear, color 0.2s linear;
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    border:2px solid ${props => props.theme.primaryColor};
    color : ${props => props.theme.primaryColor};
    background : none;

    &:disabled{
        background:none;
        color:${props => props.theme.disabled};
        transition : background 0.2s linear, color 0.2s linear;
        border : 2px solid ${props => props.theme.disabled} !important;
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)} //Modifiers should be placed at the end 
`;

export const TertiaryButton = styled(Button)`
    border: none;
    background : none;
    color : ${props => props.theme.primaryColor};


    &:disabled{
        background: none;
        color:${props => props.theme.disabled};
        transition : background 0.2s linear, color 0.2s linear;
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

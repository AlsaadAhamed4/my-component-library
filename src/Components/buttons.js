import styled from "styled-components";
import { defaultTheme, typeScale, primaryFont } from "../utils";

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
`;

export const TertiaryButton = styled(Button)`
    border: none;
    background : none;
    color : ${defaultTheme.primaryColor};
    cursor: not-allowed;

    &:disabled{
        background: none;
        color:${defaultTheme.disabled};
        transition : background 0.2s linear, color 0.2s linear;
        cursor: not-allowed;
    }
`;

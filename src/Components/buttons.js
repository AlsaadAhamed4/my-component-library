import styled from "styled-components";
import { defaultTheme, typeScale, primaryFont } from "../utils";

const Button = styled.button`
    padding 12px 26px;
    font-size : ${typeScale.paragraph};
    border-radius:2px;
    min-width:100px;
    cursor:pointer;
    font-family: ${primaryFont};
`;

export const PrimaryButton = styled(Button)`
    background :  ${defaultTheme.primaryColor};
    border: none;
    color:white;
`;

export const SecondaryButton = styled(Button)`
    border:2px solid ${defaultTheme.primaryColor};
    color : ${defaultTheme.primaryColor};
    background : none;
`;

export const TertiaryButton = styled(Button)`
    border: none;
    background : none;
    color : ${defaultTheme.primaryColor};
`;

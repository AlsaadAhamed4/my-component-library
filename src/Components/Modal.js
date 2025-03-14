import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { Illustraions, CloseIcon } from "../Assets";
import { PrimaryButton } from "./buttons";
import { useSpring, animated, config } from "react-spring";

//styles for our modal

const ModalWrapper = styled.div`
    width : 800px;
    height : 600px;
    box-shadow : 0 5px 16px rgba(0,0,0,0.2);
    background-color : ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    position: relative;
    border-radius : 2px;
`;

const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align : center;
`;

const CloseModalButton = styled.button`
    cursor: pointer;
    background : none;
    border: none;
    position: absolute;
    padding : 0;
    right: 40px;
    top: 40px;
    width:35px;
    height:35px;
`;

//end of styles

//start of modal

export const SignUpModal = ({ toggleModal, SetToggleModal }) => {
    const animation = useSpring({
        opacity: toggleModal ? 1 : 0,
        transform: toggleModal ? "translateY(0%)" : "translateY(-200%)",
        config: config.slow
    });
    return (
        <animated.div style={animation}>
            <ModalWrapper  >
                <img src={Illustraions.SignUp} alt="Sign up for an account" aria-hidden="true" />
                <SignUpHeader>Sign Up</SignUpHeader>
                <SignUpText>Sign up today to access cool things!</SignUpText>
                <PrimaryButton>Sign up</PrimaryButton>
                <CloseModalButton aria-label="closeIcon"><CloseIcon /></CloseModalButton>
            </ModalWrapper>
        </animated.div>
    )
};
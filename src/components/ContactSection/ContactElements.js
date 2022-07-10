import styled, { css }  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const green = '#1ECD97';
const red = '#ED4337';
const gray = '#bbbbbb';

export const ContactContainer = styled.div`
    background-color: black;
    padding-top: 40px;
    padding-bottom: 40px;
`

export const InfoSection = styled.div`
    height: 30%;
    width: 100%;
`

export const InfoLink = styled.a`
    margin-left: 6px;
    color: lightblue;
`

export const InfoH1 = styled.h1`
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
`

export const InfoH2 = styled.h2`
    text-align: center;
    margin-bottom: 5px;
    color: #fff;
`

export const InfoH3 = styled.h3`
    margin-top: 20px;
    text-align: center;
    color: #fff;
`

export const FormSection = styled.div`
    width: 100%;
    padding-top: 50px;
    display: flex;
    justify-content: center;
`

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center; 
`

export const FormColumn1 = styled.div`
    margin-right: 20px;
    max-height: 212px;
`

export const FormColumn2 = styled.div`
    width: 35%;
    min-height: 10%;
    position: relative;
`

export const ContactForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ContactInput = styled.input`
    padding: 10px 20px 10px 15px;
    margin-top: 0px;
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 20px;
    width: 500px;
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
`

const onSubmitClick = () => css`
    width: 40px;
    border-color:${gray};
    border-width:3px;
    font-size:0;
    border-left-color:${green};
    animation: rotating 2s 0.25s linear infinite;

    &:after {
        content:"";
    }
    &:hover {
        color:${green};
        background: white;
        background-color: black;
        cursor: default;
    }

    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

export const validSubmit = (confirmation) => css`
    font-size: 13px;
    color: white;
    background: ${confirmation ? green : red};
    border: ${confirmation ? green: red };
    &:after {
        content: "h"
        /* font-family:'FontAwesome';
        content: '\f007'; */
    }

    &:hover {
        background-color: ${confirmation ? green : red};
    }

`

export const ContactFormSubmit = styled.input`
    margin: 10px auto 0 auto;
    outline: none;
    text-align: center;
    height: 40px;
    width: 130px;
    border-radius: 40px;
    background: black;
    border: 2px solid ${green};
    color: ${green};
    letter-spacing:1px;
    text-shadow:0;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
        color: white;
        background: ${green};
    }
    &:active {
        letter-spacing: 2px ;
    }
    &:after {
        content:"SUBMIT";
    }
    ${({ rotate }) => rotate ? onSubmitClick : undefined}
    ${({ valid }) => valid[0] ? validSubmit(valid[1]) : undefined }
`

export const ContactMessage = styled.textarea`
    min-height: 194px;
    width: 100%;
    font-size: 20px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 20px;
    margin-bottom: 26px;
    border-radius: 5px;
    outline: none;
    resize: vertical;
`

export const ContactInputError = styled.li`
    margin-top: -26px;
    margin-bottom: 16px;
    margin-left: 5px;
    color: ${red};
`

export const ContactFormTip = styled.p`
    color: grey;
    position: absolute;
    bottom: 35px;
    right: 10px;
`


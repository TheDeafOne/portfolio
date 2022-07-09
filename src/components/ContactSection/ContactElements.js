import styled from 'styled-components';

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

export const ContactFormSubmit = styled.input`
    width: 120px;
    height: 50px;
    margin: 10px auto 0 auto;
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
    color: red;
`

export const ContactMessageError = styled.li`
    margin-top: -26px;
    margin-left: 5px;
    position: absolute;
    color: red;
`

export const ContactFormTip = styled.p`
    color: grey;
    position: absolute;
    bottom: 35px;
    right: 10px;
`


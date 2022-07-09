import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import {
  ContactContainer,
  InfoSection,
  InfoH1,
  InfoH2,
  InfoH3,
  InfoLink,
  FormSection,
  FormWrapper,
  FormColumn1,
  FormColumn2,
  ContactForm,
  ContactInput,
  ContactMessage,
  ContactInputError,
  ContactFormTip,
  ContactFormSubmit
} from './ContactElements';
init('pbMBicGKWnIczBhTP')

const ContactSection = () => {
  const [contactNumber, setContactNumber] = useState('000000');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState(true);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = d => {
    generateContactNumber();
    sendForm('default_service', 'template_ux0a5xg', '#contact-form')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
  };
  
  const generateContactNumber = () => {
    const numStr = '000000' + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length-6));
  }
  
  const handlePhoneChange = (value) => {
    if (/^[\+]?[(]?[0-9]{0,3}[)]?[-\s\.]?[0-9]{0,3}[-\s\.]?[0-9]{0,6}$/im.test(value)) {
      setPhoneNumber(value);
    }
  }

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailValidError(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver((element) => {
      const newHeight = element[0].contentRect.height-30;
      document.getElementById('contactMessage').setAttribute('style','height: ' + newHeight + 'px;')
    });
    resizeObserver.observe(document.getElementById('formColumn2'));
  }, [])
  
  const message = watch('message') || "";
  const messageCharsLeft = message.length;

  return (
    <ContactContainer id='contact'>
      <InfoSection>
        <InfoH1>
          Contact Me <br/>
        </InfoH1>
        <InfoH2>
          Email: 
          <InfoLink href="mailto:woodburnkb20@gcc.edu">
            woodburnkb20@gcc.edu
          </InfoLink>  or 
          <InfoLink href="mailto:keegan.woodburn@gmail.com">
            keegan.woodburn@gmail.com
          </InfoLink>
        </InfoH2>
        <InfoH2>
          Phone:
          <InfoLink href="tel:240-319-3593">
            240-319-3593
          </InfoLink>
        </InfoH2>
        <InfoH3>
          or use the following form:
        </InfoH3>
      </InfoSection>
      <FormSection>
        <ContactForm 
          id='contact-form'
          onSubmit={handleSubmit(onSubmit)}>
          <FormWrapper>
            <FormColumn1 id='formColumn1'>
              <ContactInput 
                type='text' 
                name='user_name' 
                placeholder='name*' 
                maxLength='30'
                aria-invalid={errors.user_name ? 'true' : 'false'}
                {...register('user_name', {required: 'required'})}/><br />
              {errors.user_name && errors.user_name.type === 'required' && errors.user_name !== undefined && (
                <ContactInputError>Name is required<br/></ContactInputError>
              )}
              <ContactInput 
                type='text' 
                name='user_email' 
                placeholder='email*' 
                aria-invalid={errors.user_email ? 'true' : 'false'}
                {...register('user_email', {
                  required: 'required', 
                  value: email,
                  onChange: (e) => handleEmailChange(e.target.value)
                })}/><br />
              {!emailValidError && (
                <ContactInputError>email is not valid<br/></ContactInputError>
              )}
              {errors.user_email && errors.user_email.type === 'required' && errors.user_email !== undefined && (
                <ContactInputError style={{paddingTop: emailValidError ? '0px' : '10px'}}>email is required<br/></ContactInputError>
              )}
              <ContactInput 
                type='text'
                name='user_phone' 
                placeholder='phone number' 
                value={phoneNumber}
                onChange={(e) => handlePhoneChange(e.target.value)}
                aria-invalid={errors.user_phone ? 'true' : 'false'}
                {...register}/>
              </FormColumn1>
              <FormColumn2 id='formColumn2'>
                <ContactMessage 
                  id='contactMessage'
                  type='text' 
                  name='message' 
                  placeholder='message*' 
                  maxLength='1500'
                  aria-invalid={errors.message ? 'true' : 'false'}
                  {...register('message', {required: 'required'})} />
                  <ContactFormTip>{messageCharsLeft}/1500 characters</ContactFormTip>
                {errors.message && errors.message.type === 'required' && errors.message !== undefined && (
                  <ContactInputError style={{marginBottom:'0px',position:'absolute'}}>message is required<br/></ContactInputError>
                )}
              </FormColumn2>
            </FormWrapper>
          <ContactFormSubmit type='submit' value='Send' />
          <ContactInput type='hidden' name='contact_number' value={contactNumber} />
        </ContactForm>
      </FormSection>
    </ContactContainer>
  )
}

export default ContactSection
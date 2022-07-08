import React, { useState } from 'react'
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
  ContactFormError,
  ContactFormTip,
  ContactFormSubmit
} from './ContactElements';
init('pbMBicGKWnIczBhTP')

const ContactSection = () => {
  const [contactNumber, setContactNumber] = useState('000000');
  const [phoneNumber, setPhoneNumber] = useState();

  
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
    if (value === 'a') {
      setPhoneNumber(value);
    }
  }
  
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
            <FormColumn1>
              <ContactInput 
                type='text' 
                name='user_name' 
                placeholder='name*' 
                maxLength='30'
                aria-invalid={errors.user_name ? 'true' : 'false'}
                {...register('user_name', {required: 'required'})}/><br />
              {errors.user_name && errors.user_name.type === 'required' && errors.user_name !== undefined && (
                <ContactFormError>Name is required<br/></ContactFormError>
              )}
              <ContactInput 
                type='text' 
                name='user_email' 
                placeholder='email*' 
                aria-invalid={errors.user_email ? 'true' : 'false'}
                {...register('user_email', {required: 'required'})}/><br />
              {errors.user_email && errors.user_email.type === 'required' && errors.user_email !== undefined && (
                <ContactFormError>email is required<br/></ContactFormError>
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
              <FormColumn2>
                <ContactMessage 
                  type='text' 
                  name='message' 
                  placeholder='message*' 
                  maxLength='1500'
                  aria-invalid={errors.message ? 'true' : 'false'}
                  {...register('message', {required: 'required'})} /><br />
                {errors.message && errors.message.type === 'required' && errors.message !== undefined && (
                  <ContactFormError>message is required<br/></ContactFormError>
                  )}
                <ContactFormTip>{messageCharsLeft}/1500 characters</ContactFormTip>
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
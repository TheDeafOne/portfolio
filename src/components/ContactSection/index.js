import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { CheckMark, XMark } from '../../images';
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
  ContactFormSubmit,
  SubmitIcon,
  SubmitSuccess
} from './ContactElements';

const ContactSection = () => {
  const [contactNumber, setContactNumber] = useState('000000');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);

  const [validSubmit, setValidSubmit] = useState(false);
  const [submitConfirmation, setSubmitConfirmation] = useState(false);
  const [submitError, setSubmitError] = useState(true);
  const [submitIcon, setSubmitIcon] = useState('');

  const [canReset, setCanReset] = useState(false);

  const form = useRef();


  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const onSubmit = (e) => {
    setSubmitError(false);
    generateContactNumber();
    if (emailValid) {
      emailjs.sendForm('service_rrbh1zk', 'template_ux0a5xg', form.current, 'pbMBicGKWnIczBhTP')
      .then(function(response) {
        console.log(form.current);
        console.log(response);
        setCanReset(true);
        setEmail('');
        setPhoneNumber('');
        document.getElementById('contact-form').reset();
      }, function(error) {
        console.log(error);
      });
    }
  };
  
  const onError = (e) => {
    setSubmitError(true);
  }

  const callbackSubmit = () => {
    setTimeout(() => {
      setSubmitIcon('');
      setValidSubmit(false);
    }, 1250);
  }

const handleSubmitClick = () => {
  setValidSubmit(true);
  callbackSubmit();
}
  
  const generateContactNumber = () => {
    const numStr = '000000' + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length-6));
  }
  
  const handlePhoneChange = (value) => {
    if (/^[+]?[(]?[0-9]{0,3}[)]?[-\s.]?[0-9]{0,3}[-\s.]?[0-9]{0,6}$/im.test(value)) {
      setPhoneNumber(value);
    }
  }

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver((element) => {
      const newHeight = element[0].contentRect.height-30;
      document.getElementById('contactMessage').setAttribute('style','height: ' + newHeight + 'px;')
    });
    resizeObserver.observe(document.getElementById('formColumn2'));
  }, [])

  useEffect(() => {
    if (validSubmit) {
      if (submitError || !emailValid) {
        setSubmitIcon(XMark);
        setSubmitConfirmation(false);
      } else {
        setSubmitIcon(CheckMark);
        setSubmitConfirmation(true);
      }
    }
  }, [submitError, emailValid, validSubmit])

  useEffect(() => {
    if (canReset) {
      setEmail('');
      setPhoneNumber('');
      reset({room: null}, { keepValues: false });
    }
  }, [canReset, reset])
  
  useEffect(() => {
    if (submitConfirmation) {
      console.log("confirmation is true");
      setTimeout(() => {
        setSubmitConfirmation(false);
        console.log("set confirmation to false");
      }, 5000);
    }
  }, [submitConfirmation]);

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
          ref={form}
          onSubmit={handleSubmit(onSubmit, onError)}>
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
              {!emailValid && (
                <ContactInputError>email is not valid<br/></ContactInputError>
              )}
              {errors.user_email && errors.user_email.type === 'required' && errors.user_email !== undefined && (
                <ContactInputError style={{paddingTop: emailValid ? '0px' : '10px'}}>email is required<br/></ContactInputError>
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
                  <ContactInputError style={{marginBottom:'0px', position:'absolute'}}>message is required<br/></ContactInputError>
                )}
              </FormColumn2>
            </FormWrapper>
            <SubmitSuccess active={+submitConfirmation}>Your message was sent!</SubmitSuccess>
            <ContactFormSubmit 
              valid={[+validSubmit, submitConfirmation]}
              onClick={handleSubmitClick}>
                <SubmitIcon src={submitIcon}/>
            </ContactFormSubmit>
          <ContactInput type='hidden' name='contact_number' value={contactNumber} />
        </ContactForm>
      </FormSection>
    </ContactContainer>
  )
}

export default ContactSection
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('pbMBicGKWnIczBhTP')

const ContactSection = () => {
  const [contactNumber, setContactNumber] = useState('000000');

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

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;



  return (
    <div id='contact'>
      <h1>
        <span>Contact Me</span>
      </h1>
      <form 
        id='contact-form'
        onSubmit={handleSubmit(onSubmit)}>
        <input 
          type='text' 
          name='user_name' 
          placeholder='Your Name' 
          maxLength='30'
          aria-invalid={errors.user_name ? 'true' : 'false'}
          {...register('user_name', {required: 'required'})}/><br />
        {errors.user_name && errors.user_name.type === 'required' && errors.user_name !== undefined && (
          <div>Name is required<br/></div>
        )}
        <input 
          type='text' 
          name='user_email' 
          placeholder='Your Email' 
          aria-invalid={errors.user_email ? 'true' : 'false'}
          {...register('user_email', {required: 'required'})}/><br />
        {errors.user_email && errors.user_email.type === 'required' && errors.user_email !== undefined && (
          <div>email is required<br/></div>
        )}
        <input 
          type='text' 
          name='user_phone' 
          placeholder='Your Phone Number' 
          aria-invalid={errors.user_phone ? 'true' : 'false'}
          {...register}/><br />
        <input 
          type='text' 
          name='message' 
          placeholder='message' 
          maxLength='1500'
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message', {required: 'required'})}/><br />
        {errors.message && errors.message.type === 'required' && errors.message !== undefined && (
          <div>message is required<br/></div>
        )}
        <p>{messageCharsLeft}</p>
        <input type='submit' value='Send' />
        <input type='hidden' name='contact_number' value={contactNumber} />
      </form>
    </div>
  )
}

export default ContactSection
import React, { Component, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { useParams } from "react-router-dom";

const EmailForm = ({ UniqueID, superheroName }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_arkp1em';
    const templateId = 'template_tqp2w0f';
    const publicKey = 'Qps1VbyFe8Ddg4MuA';

    // Create a new object that contains dynamic template params
    const templateParams = {
      uid: UniqueID,
      fig: superheroName,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert("You've completed the game! Thank you for your donation!");
        setUniqueID('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='emailForm'>
        <input
          type="text"
          placeholder="Unique ID"
          value={UniqueID}
          disabled
        />
        <input
          type="text"
          placeholder="Figurine"
          value={superheroName}
          disabled // Disables field from edits
        />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default EmailForm;

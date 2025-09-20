import React, { useState } from 'react';
import emailjs, {init} from '@emailjs/browser';

export default function ContactForm() {

    init(import.meta.env.EMAILJS_PUB_KEY);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    emailjs
      .send(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.EMAILJS_PUB_KEY
      )
      .then(
        (result) => {
          console.log('Email Sent Successfully.', result.text);
          alert('Message sent!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
        }
      )
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        alert('Failed to send message!');
      });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-blue-50 rounded-md p-6 mx-6"
      >
        <h1 className="w-full bg-amber-50 rounded text-xl py-2 text-center">
          Contact Form
        </h1>

        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
          id="firstName"
          required
        />
        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
          id="lastName"
          required
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          id="email"
          required
        />

        <div className="flex-col justify-around items-center font-ubuntu my-4">
          <label htmlFor="message" className="text-white">
            Message:
          </label>
          <textarea
            id="message"
            className="bg-white px-1 w-full rounded"
            placeholder="Enter message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            cols={35}
            required
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer hover:opacity-50 bg-blue-50 w-full h-10 px-2 rounded font-ubuntu"
        >
          Send
        </button>
      </form>
    </div>
  );
}

const InputField = ({ label, type, name, value, placeholder, onChange, id, required }) => {
  return (
    <div className="flex-col justify-around items-center font-ubuntu my-4">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        className="bg-blue-50 w-full h-10 px-2 rounded"
        required={required}
      />
    </div>
  );
};
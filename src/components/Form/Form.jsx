import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const AppointmentForm = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    emailjs.init('zju17tWDRF35C4Jii'); // Replace with your actual EmailJS Public Key
  }, []);

  const services = [
    'Audit and Assurance Services', 'Taxation Services', 'Financial Reporting', 'Management Consulting', 'Forensic Accounting',
    'Financial Management', 'Financial Planning and Analysis', 'Performance Management', 'Risk Management', 'Internal Controls',
    'Strategic Management', 'Financial Advisory','Business Valuation'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.mobile || !formData.email || !formData.service || !formData.date || !formData.time) {
      alert(t('Please fill in all fields.'));
      return;
    }

    emailjs.send(
      'service_cafeacj', // Replace with your EmailJS service ID
      'template_74uv7qz', // Replace with your EmailJS template ID
      formData,
      'zju17tWDRF35C4Jii' // Replace with your EmailJS Public Key
    ).then((result) => {
      console.log(result.text);
      alert(t('Appointment booked successfully!'));
      onClose();
    }, (error) => {
      console.log(error);
      alert(`${t('Failed to book appointment. Please try again. Error:')} ${error.text}`);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">{t('Book an Appointment')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">{t('Name')}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">{t('Mobile Number')}</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">{t('Email')}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">{t('Service')}</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">{t('Select a service')}</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{t(service)}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">{t('Appointment Date')}</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">{t('Appointment Time')}</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 p-2 rounded mr-2"
            >
              {t('Close')}
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              {t('Submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;

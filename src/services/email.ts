import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS configuration is missing');
  }

  try {
    const templateParams = {
      to_email: 'bijaybajuri@gmail.com',
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send message. Please try again later.');
  }
};


import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen scroll-mt-20 bg-pink-950 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-serif font-bold text-white mb-4'>Contactez-nous</h1>
          <p className='text-lg text-gray-200 max-w-2xl mx-auto'>
          Vous avez des questions ou des suggestions ? Remplissez le formulaire ci-dessous.
          </p>
        </div>

        <div className='bg-white p-8 rounded-lg shadow-xl border border-gray-100 mb-12'>
          <h2 className='text-2xl font-serif font-semibold text-gray-900 mb-6'>Envoyez-nous un Message</h2>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-800 mb-1'>Votre Nom</label>
              <input type="text" className='w-full px-4 py-3 border border-gray-300 rounded focus:ring-gray-500 focus:border-transparent' placeholder='Your name' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-800 mb-1'>Votre Email</label>
              <input type="email" className='w-full px-4 py-3 border border-gray-300 rounded focus:ring-gray-500 focus:border-transparent' placeholder='mamadou@gmail.com' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-800 mb-1'>Sujet</label>
              <input type="text" className='w-full px-4 py-3 border border-gray-300 rounded focus:ring-gray-500 focus:border-transparent' placeholder='' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-800 mb-1'>Votre Message</label>
              <textarea rows="5" className='w-full px-4 py-3 border border-gray-300 rounded focus:ring-gray-500 focus:border-transparent' placeholder='Tell us about your fragrance needs...' />
            </div>
            <button className='w-full bg-pink-700 hover:bg-pink-800 text-white py-3 px-6 rounded-lg transition duration-300 font-medium shadow-md'>
              Envoie Message
            </button>
          </form>
        </div>

        <div className='bg-white p-8 rounded-lg shadow-xl border border-gray-100 space-y-8'>
          <h2 className='text-2xl font-serif font-semibold text-gray-900 mb-6'>Contact Information</h2>

          <div className='space-y-6'>
            <div className='flex items-start'>
              <div className='bg-pink-200 p-3 rounded-full mr-4'>
                <FaPhone className='text-pink-950 text-lg' />
              </div>
              <div>
                <h3 className='text-lg font-medium text-gray-900'>Téléphone</h3>
                <p className='text-gray-800'>+221 77 426 68 48</p>
                <p className='text-gray-600'>Ouvert du lundi au vendredi : 9h00 – 21h00</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='bg-pink-200 p-3 rounded-full mr-4'>
                <FaEnvelope className='text-pink-900 text-lg' />
              </div>
              <div>
                <h3 className='text-lg font-medium text-gray-900'>Email</h3>
                <p className='text-gray-800'>correamandionka@gmail.com</p>
                <p className='text-gray-600'>Support@perfume.com</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='bg-pink-200 p-3 rounded-full mr-4'>
                <FaMapMarkedAlt className='text-pink-900 text-lg' />
              </div>
              <div>
                <h3 className='text-lg font-medium text-gray-900'>Notre Boutique</h3>
                <p className='text-gray-800'>123 Rue du Parfum,</p>
                <p className='text-gray-600'>Dakar, Sénégal 084756</p>
              </div>
            </div>
          </div>

          <div className='mt-12'>
            <h3 className='text-lg font-medium text-gray-900 mb-4'>Suivez-nous</h3>
            <div className='flex space-x-4'>
              <a href="#" className='bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300'>
                <FaInstagram className='text-pink-950' />
              </a>
              <a href="#" className='bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300'>
                <FaFacebook className='text-pink-950' />
              </a>
              <a href="#" className='bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300'>
                <FaTwitter className='text-pink-950' />
              </a>
               <a href="#" className='bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300'>
                <FaLinkedin className='text-pink-950' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


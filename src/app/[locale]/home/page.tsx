'use client';

import About from './about';
import Form from './form';
import NavBar from './nav-bar';
import React from 'react';
import { services } from '@/constants';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("../login.png")' }}>
        <NavBar/>
        <div className="container mx-auto flex flex-col md:flex-row justify-center mt-20 lg:w-3/5  md:space-x-32">
            <About
                title ='Welcome!'
                introduction='The easiest and fastest way for verification.'
                services={services}
            />
            <div className="flex-col flex-1 justify-between mx-1 md:mx-4 my-4 bg-white bg-opacity-10 p-6 rounded-3xl shadow-lg py-40">
                <Form services={services} />
            </div>
      </div>
    </div>
  );
};

export default HomePage;

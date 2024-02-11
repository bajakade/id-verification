'use client';

import About from './about';
import Form from './form';
import NavBar from './nav-bar';
import React from 'react';
import { services } from '@/constants';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("../login.png")' }}>
        <NavBar/>
        <div className="container mx-auto flex sm:flex-column justify-center mt-20 w-3/5 space-x-32">
            <About
                title ='Welcome!'
                introduction='The easiest and fastest way for verification.'
                services={services}
            />
            <div className="flex-column flex-1 justify-between ml-4 bg-white bg-opacity-10 p-6 rounded-3xl shadow-lg py-40">
                <Form services={services} />
            </div>
      </div>
    </div>
  );
};

export default HomePage;

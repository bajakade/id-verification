import React, { ReactNode } from 'react';

import { UseFormRegister } from 'react-hook-form';

type InputProps = {
  type: 'text' | 'email' | 'password';
  name: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<any>
}

const Input = ({type, label, placeholder, name, register}: InputProps) => {
  return (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-500">{label}</label>
        <input
          id={name}
          type={type}
          autoComplete={type}
          placeholder={placeholder}
          {...register(name)}
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
    </div>
  )
}
const InputWithRightIcon = ({ icon, name, label, register, ...rest }: InputProps & {
    icon: ReactNode,
}) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-500">{label}</label>
      <input
        {...rest}
        {...register(name)}
        className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none mt-5">
        {icon}
      </div>
    </div>
  );
};

export {Input, InputWithRightIcon};

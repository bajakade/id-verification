import { FaAngleRight, FaShieldAlt } from "react-icons/fa";

import { Dropdown } from "@/components/drop-down";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form({services}: {services: Array<any>}) {
    const {register, handleSubmit, watch} = useForm();
    const serviceName = watch('serviceType');
    
    const searchRecord = () => {
        
    }
    return (
        <form onSubmit={handleSubmit(searchRecord)}>
            <FaShieldAlt className="w-24 h-24 mx-auto mb-24" color='white' />
            <h3 className="text-3xl text-white text-center">To Start</h3>
            <p className="text-xl text-gray-300 text-center my-2">Select the credentials to verify</p>
            <div className='flex-column space-y-6'>
                <div className='w-4/5 mx-auto'>
                    <Dropdown
                        options={services.map(service => ({name: service.title, value: service.title}))}
                        {...register('serviceType')}
                        className="mt-16 block w-full bg-white bg-opacity-10 text-white border border-white border-opacity-50 rounded-md py-3 px-1 w-4/5 mx-auto focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                    />  
                </div>
                <div className='w-4/5 mx-auto'>
                {serviceName && (
                    <>
                        <label className="block text-sm font-medium text-gray-300 mb-1">{`Insert ${serviceName}`}</label>
                        <input
                            className='block w-full bg-white bg-opacity-10 text-white border border-white border-opacity-50 rounded-md py-2 px-4 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500'
                            placeholder='Enter Number'
                            type='text'
                        />
                    </>
                )}
                </div>
                {serviceName && (
                    <button className="w-1/2 flex mx-auto items-center justify-center bg-blue-600 text-white py-4 px-4 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span>Verify</span>
                        <FaAngleRight className="ml-2 w-4 h-4" />
                    </button>
                )}
                
            </div>
        </form>
    )
}
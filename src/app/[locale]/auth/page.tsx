'use client';

import { Input, InputWithRightIcon } from "@/components/input";
import { SubmitHandler, useForm } from "react-hook-form";

import { AuthForm } from "@/types";
import { FaEye } from "react-icons/fa";
import React from "react";
import { useRouter } from "../../../../navigation";

export default function Login() {

    const {register, handleSubmit} = useForm<AuthForm>();
    const router = useRouter();

    const login: SubmitHandler<AuthForm> = (data) => {
        //todo: validate inputs
        router.push('/home');
    }
    return (
        <div className="h-screen">
            <div className="flex w-8/12 h-5/6  bg-gray-100 mx-auto my-20">
                <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("../login.png")' }}>
                </div>

                <div className="w-full xl:w-1/2 flex items-center justify-center">
                    <div className="max-w-md mx-auto py-12 px-6 w-full lg:w-2/3">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome</h2>
                        <p className="mt-2 text-sm text-gray-600">Sign in to continue</p>

                        <form className="mt-8 space-y-6" onSubmit={handleSubmit(login)}>
                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    label="Email Address"
                                    placeholder="Enter email address"
                                    register={register}
                                />
                            </div>
                            <div>
                                <InputWithRightIcon
                                    name="password"
                                    type="password"
                                    label="Password"
                                    placeholder="Enter you password"
                                    register={register}
                                    icon={<FaEye className="h-5 w-5 text-gray-400" />}
                                />
                            </div>

                            <div className="flex justify-between">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-indigo-500">Forgot your password?</a>
                                </div>
                            </div>

                            <div>
                            <button className="w-full flex justify-center bg-blue-600 text-white py-2 px-4 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign in
                            </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <p className="text-center text-sm text-gray-600">Trouble signing in? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Contact support</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import InputField from '@/components/InputField';
import LoginButton from '@/components/LoginButton';
import LoginBorder from '@/components/LoginBorder';
import GoogleAuth from '@/components/GoogleAuth';

interface LoginFormInputs {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
        mode: 'onChange'
    });

    const onSubmit = (data: LoginFormInputs) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-center text-gray-800">Login</h1>
                <div className="space-y-4">
                    <InputField
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        register={register}
                        error={errors.email?.message}
                    />
                    <InputField
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        register={register}
                        error={errors.password?.message}
                    />
                    <LoginButton>Sign In</LoginButton>
                    <p className="text-sm font-medium text-center text-gray-500 py-2">
                        Don't have an account yet?
                        <a href="/signup" className="text-blue-500 hover:underline">
                            Sign Up
                        </a>
                    </p>
                    <LoginBorder />
                    <GoogleAuth />
                </div>
            </Form>
        </div>
    );
};

export default Login;


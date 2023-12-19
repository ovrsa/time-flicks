import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import InputField from '@/components/InputField';
import { Button } from '@/components/ui/Button'; // LoginButtonをButtonに変更してより一般的なものに
import LoginBorder from '@/components/LoginBorder';
import GoogleAuth from '@/components/GoogleAuth';

interface SignupFormInputs {
    email: string;
    password: string;
    confirmPassword: string; // 確認用パスワードフィールドを追加
}

const Signup: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupFormInputs>({
        mode: 'onChange'
    });

    const onSubmit = (data: SignupFormInputs) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-center text-gray-800">Create Account</h1>
                <div className="space-y-4">
                    <InputField
                        id="email"
                        type="email"
                        placeholder="Email"
                        register={register}
                        error={errors.email?.message}
                    />
                    <InputField
                        id="password"
                        type="password"
                        placeholder="Password"
                        register={register}
                        error={errors.password?.message}
                    />
                    <InputField
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        register={register}
                        error={errors.confirmPassword?.message}
                    />
                    <Button type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Sign Up</Button>
                    <p className="text-sm font-medium text-center text-gray-500 py-2">
                        Already have an account?
                        <a href="/login" className="text-blue-500 hover:underline">
                            Log in
                        </a>
                    </p>
                    <LoginBorder />
                    <GoogleAuth />
                </div>
            </Form>
        </div >
    )
}

export default Signup;
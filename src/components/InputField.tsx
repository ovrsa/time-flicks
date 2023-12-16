// src/components/InputField.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';

interface InputFieldProps {
    id: string;
    type: string;
    placeholder: string;
    register: ReturnType<typeof useForm>['register']; // ReturnTypeは関数の戻り値の型を取得する
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, type, placeholder, register, error }) => {
    return (
        <div>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register(id)}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default InputField;
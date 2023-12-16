// src/components/LoginButton.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

interface LoginButtonProps {
    children: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children }) => {
    return (
        <Button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
            {children}
        </Button>
    );
};

export default LoginButton;
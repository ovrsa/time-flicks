import React from 'react';
import { Link } from 'react-router-dom';

interface ImageCardProps {
    src: string;
    title: string;
    linkTo: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title, linkTo }) => {
    return (
        <Link
            to={linkTo}
            className="
                max-w-sm 
                bg-white 
                rounded-lg 
                border 
                border-gray-200 
                shadow-xl 
                overflow-hidden 
                block 
                relative 
                transform 
                transition 
                duration-500 
                hover:-translate-y-2
            "
        >
            <img
                className="
                    w-full 
                    h-56 
                    object-cover 
                    object-center 
                    transition-transform 
                    duration-600 
                    ease-in-out 
                    transform 
                    hover:scale-105
                "
                src={src}
                alt={title}
            />
            <div
                className="
                    absolute 
                    bottom-0 
                    left-0 
                    p-5 
                    w-full 
                    h-full 
                    opacity-0 
                    hover:opacity-100 
                    transition-opacity 
                    duration-300 
                    ease-in-out 
                    bg-black 
                    bg-opacity-50
                "
            >
                <h5 className="text-lg font-bold tracking-tight text-white">
                    {title}
                </h5>
            </div>
        </Link>
    );
};

export default ImageCard;
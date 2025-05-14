"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type OptimizedImageProps = Omit<ImageProps, 'onLoad'> & {
    fallbackSrc?: string;
    isDarkMode?: boolean;
};

export default function OptimizedImage({
    fallbackSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjEyMTIxIi8+PC9zdmc+',
    isDarkMode = true,
    ...props
}: OptimizedImageProps) {
    const [isLoading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    
    if (hasError) {
        return (
            <div 
                className={`${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'} flex items-center justify-center ${props.className}`} 
                style={{ aspectRatio: '16/9' }}
                data-testid="image-error"
            >
                <span>Image unavailable</span>
            </div>
        );
    }
    
    return (
        <div 
            className={`relative overflow-hidden ${props.className}`} 
            style={{ aspectRatio: '16/9' }}
            data-testid="image-container"
        >
            {isLoading && (
                <div 
                    className={`absolute inset-0 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse`}
                    data-testid="image-loading"
                ></div>
            )}
            <Image
                {...props}
                className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${props.className}`}
                placeholder="blur"
                blurDataURL={fallbackSrc}
                onLoad={() => setLoading(false)}
                onError={() => setHasError(true)}
            />
        </div>
    );
} 
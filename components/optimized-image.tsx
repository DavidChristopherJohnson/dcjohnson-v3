"use client";

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

type OptimizedImageProps = Omit<ImageProps, 'onLoad' | 'onError'> & {
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
    const [imageSrc, setImageSrc] = useState(props.src);
    
    // Debug logs
    useEffect(() => {
        console.log('OptimizedImage props:', {
            src: props.src,
            fallbackSrc,
            hasFill: 'fill' in props,
            isExternalImage: typeof props.src === 'string' && (props.src.startsWith('http://') || props.src.startsWith('https://'))
        });
    }, [props.src, fallbackSrc, props]);
    
    // Check if image is from an external source
    const isExternalImage = typeof imageSrc === 'string' && 
                           (imageSrc.startsWith('http://') || 
                            imageSrc.startsWith('https://'));
    
    const handleError = () => {
        console.log('Image error occurred. Using fallback:', fallbackSrc);
        setHasError(true);
        
        // If we have a fallback image and current image is not already the fallback
        if (fallbackSrc && imageSrc !== fallbackSrc) {
            // Use the fallback image instead
            setHasError(false);
            setImageSrc(fallbackSrc);
        }
    };
    
    if (hasError && !fallbackSrc) {
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
    
    // Create a copy of props that we can modify
    const imageProps = { ...props, src: imageSrc };
    
    // For external images, we need to handle dimensions differently
    if (isExternalImage && !('fill' in props)) {
        // Add width and height for external images
        imageProps.width = imageProps.width || 800;
        imageProps.height = imageProps.height || 450;
        imageProps.unoptimized = true;
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
                {...imageProps}
                className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${props.className}`}
                // Only apply blur placeholder for non-external images
                {...(!isExternalImage ? {
                    placeholder: "blur",
                    blurDataURL: fallbackSrc
                } : {})}
                onLoad={() => setLoading(false)}
                onError={handleError}
            />
        </div>
    );
} 
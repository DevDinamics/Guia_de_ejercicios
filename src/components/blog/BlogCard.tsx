import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  icon: string;
  coverImage?: string;
}

const FacebookLoader = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div 
      className="h-full w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer"
      style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite linear'
      }}
    />
  </div>
);

export const BlogCard: React.FC<BlogCardProps> = ({ 
  title, 
  description, 
  slug, 
  icon,
  coverImage 
}) => {
  const [isLoading, setIsLoading] = useState(!!coverImage);
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/blog/${slug}`} legacyBehavior>
      <a className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-200 hover:border-orange-300 group">
        {/* loader */}
        {coverImage && (
          <div className="relative aspect-video w-full overflow-hidden">
            {isLoading && <FacebookLoader />}
            
            <Image
              src={coverImage}
              alt={`Portada: ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-all duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100 group-hover:scale-105'
              }`}
              quality={85}
              unoptimized={coverImage.startsWith('http')}
              onLoadingComplete={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setImageError(true);
              }}
            />
            
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <span className="text-gray-400 text-sm">Imagen no disponible</span>
              </div>
            )}
          </div>
        )}

        {/* Card */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-start mb-4">
            <span className="text-4xl mr-4">{icon}</span>
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                {title}
              </h2>
              <p className="text-gray-600 line-clamp-2">{description}</p>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100">
            <span className="inline-flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
              Leer más
              <svg 
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};
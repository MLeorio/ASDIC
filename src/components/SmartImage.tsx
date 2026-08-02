import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Image avec squelette "blur-up" + lazy loading.
 * transition-all pour animer à la fois le fondu d'apparition
 * et le zoom au survol (group-hover:scale-110).
 */
export default function SmartImage({ src, alt, className = '' }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`img-skeleton relative h-full w-full overflow-hidden ${loaded ? '' : 'animate-pulse'}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
}
import React, { useEffect, useState } from 'react';

interface GoogleAdProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
  contentRequired?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

export const GoogleAd: React.FC<GoogleAdProps> = ({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  contentRequired = false,
}) => {
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    try {
      // Initialize adsbygoogle if not already initialized
      if (!window.adsbygoogle) {
        window.adsbygoogle = [];
      }
      
      // Push the ad
      window.adsbygoogle.push({});
      setAdLoaded(true);
    } catch (error) {
      console.error('Error loading Google Ad:', error);
      setAdError(true);
    }
  }, [slot]);

  // Determine ad container classes based on format
  const getFormatClasses = () => {
    switch (format) {
      case 'rectangle':
        return 'min-h-[250px] min-w-[300px]';
      case 'horizontal':
        return 'min-h-[90px] min-w-[728px] max-w-full';
      case 'vertical':
        return 'min-h-[600px] min-w-[120px]';
      default:
        return 'min-h-[100px]';
    }
  };

  // If content is required and there's an error, don't show the ad placeholder
  if (contentRequired && adError) {
    return null;
  }

  return (
    <div className={`ad-container ${getFormatClasses()} ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: responsive ? '100%' : 'auto', height: '100%' }}
        data-ad-client="ca-pub-1234567890123456" // Replace with your actual ad client ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
      {!adLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50/50">
          <span className="text-xs text-slate-400">Advertisement loading...</span>
        </div>
      )}
    </div>
  );
};
import React, { useEffect } from 'react';

interface GoogleAdProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
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
}) => {
  useEffect(() => {
    try {
      // 当组件挂载后，通知 Google 展示广告
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('广告加载失败:', error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4602201282246605"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};
import React, { useEffect, useState } from 'react';

interface GoogleAdProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
  contentRequired?: boolean; // 添加内容检测选项
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
  contentRequired = true, // 默认需要内容
}) => {
  // 检测页面是否有足够内容
  const [hasContent, setHasContent] = useState(false);
  
  useEffect(() => {
    // 如果需要内容检测
    if (contentRequired) {
      // 简单检测页面内容
      const textContent = document.body.textContent || '';
      const wordCount = textContent.split(/\s+/).filter(Boolean).length;
      
      // 设置一个最小内容阈值，例如100个单词
      setHasContent(wordCount > 100);
    } else {
      // 如果不需要内容检测，直接设为true
      setHasContent(true);
    }
    
    try {
      // 只有在有内容的情况下才加载广告
      if (hasContent && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('广告加载失败:', error);
    }
  }, [contentRequired, hasContent]);

  // 如果需要内容检测且没有足够内容，则不显示广告
  if (contentRequired && !hasContent) {
    return null;
  }

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
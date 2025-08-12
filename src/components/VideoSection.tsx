'use client';

import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Type definitions for video fullscreen methods
interface VideoWithFullscreen extends HTMLVideoElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface VideoSectionProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

export default function VideoSection({ videoRef }: VideoSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="video" className="relative h-[70vh] sm:h-screen" aria-labelledby="video-heading">
      <video
        ref={videoRef}
        id="kaiyi-video"
        className="w-full h-full object-cover"
        poster="https://kaiyiglobal.com/upload/dd/87741cf96bb4d4d48290491df9b47d.png"
        muted
        loop
        aria-describedby="video-description"
        preload="metadata"
      >
        <source src="https://kaiyiglobal.com/assets/shouyevie1-1-84f87b2c.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play Button Overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 cursor-pointer"
        onClick={() => {
          if (videoRef.current) {
            const video = videoRef.current as VideoWithFullscreen;
            if (video.requestFullscreen) {
              video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
              video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
              video.msRequestFullscreen();
            }
            video.muted = false;
            video.play();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Play KAIYI brand video"
      >
        <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
          <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      
      {/* Video Info */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
        <h2 id="video-heading" className="text-lg sm:text-2xl font-bold">{t('home.video.title')}</h2>
        <p id="video-description" className="text-sm sm:text-lg text-gray-300">{t('home.video.subtitle')}</p>
      </div>
    </section>
  );
}

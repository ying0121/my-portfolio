import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  className?: string;
}

export const VideoBackground = ({ className = '' }: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow down the video slightly
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.3)' }}
      >
        {/* Using a web development themed video from a CDN */}
        <source
          src="./assets/videoes/hacking.mp4"
          type="video/mp4"
        />
        {/* Fallback gradient if video fails to load */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-900/30 to-blue-900/40" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />

      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/4 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};
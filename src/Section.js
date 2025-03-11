import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Section = ({
  id,
  title,
  children,
  className = '',
  style = {},
  backgroundImage,
  backgroundVideo,
  playbackSpeed = 1.0, // default playback speed
  titleColor = 'black', // default title color
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return (
    <motion.section
      id={id}
      className={`relative py-16 px-8 pt-24 pb-24 overflow-hidden glowing-border ${className}`}
      style={{
        scrollMarginTop: "5px",
        ...style,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image or Video */}
      {backgroundVideo ? (
        <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
                zIndex: 0, // video stays at the lowest layer
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        ></video>
    ) : backgroundImage ? (
        <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        ></div>
    ) : null}

      {/* Overlay for Legibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div> 


      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        {title && (
          <h2
            className="text-5xl font-bold font-jersey mb-8 text-center"
            style={{ color: titleColor }}
          >
            {title}
          </h2>
        )}

        {/* Children Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Section;

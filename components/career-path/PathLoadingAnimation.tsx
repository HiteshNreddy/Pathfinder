'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const messages = [
  "Mapping your journey...",
  "Analyzing opportunities...",
  "Building your path...",
  "Evaluating skill gaps...",
  "Connecting milestones..."
];

interface PathLoadingAnimationProps {
  isLoading: boolean;
}

export function PathLoadingAnimation({ isLoading }: PathLoadingAnimationProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isLoading]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.98, filter: 'blur(4px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 1.02, filter: 'blur(4px)', transition: { duration: 0.4 } }
  };

  const nodeContainerVariants = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const nodeVariants: any = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 300, damping: 20 } 
    },
    animate: {
      scale: [1, 1.1, 1],
      boxShadow: [
        '0 0 0 0 rgba(16, 185, 129, 0)',
        '0 0 0 10px rgba(16, 185, 129, 0.1)',
        '0 0 0 0 rgba(16, 185, 129, 0)'
      ],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const lineVariants: any = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full h-[400px] md:h-[600px] flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm rounded-3xl border border-emerald-100/50 shadow-xl relative overflow-hidden z-10"
        >
          {/* Animated SVG Path */}
          <div className="relative w-full max-w-md h-32 flex items-center justify-center mb-8">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid meet">
              <motion.path
                d="M 50 50 L 150 50 L 250 50 L 350 50"
                fill="transparent"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="6 6"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
              />
            </svg>
            
            <motion.div 
              variants={nodeContainerVariants}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 flex items-center justify-between px-[34px]"
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  variants={nodeVariants}
                  animate="animate"
                  className={`w-8 h-8 rounded-full border-4 border-white z-10 ${
                    i === 0 || i === 3 ? 'bg-emerald-600' : 'bg-emerald-400'
                  }`}
                />
              ))}
            </motion.div>
          </div>

          {/* Rotating Text */}
          <div className="h-8 overflow-hidden relative w-full text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={messageIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-emerald-800 font-medium text-lg absolute inset-0"
              >
                {messages[messageIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

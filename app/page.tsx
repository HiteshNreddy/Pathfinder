'use client';

import { useState, useEffect } from 'react';
import { RoleInput } from '@/components/forms/RoleInput';
import { PathVisualization } from '@/components/career-path/PathVisualization';
import { NodeDetails } from '@/components/career-path/NodeDetails';
import { PathLoadingAnimation } from '@/components/career-path/PathLoadingAnimation';
import { CursorGlow } from '@/components/ui/CursorGlow';
import { StarfallBackground } from '@/components/ui/StarfallBackground';
import { useCareerStore } from '@/store/useCareerStore';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Compass } from 'lucide-react';

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export default function Home() {
  const { paths, error, isLoading } = useCareerStore();
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } else {
        setHasKey(true); // Fallback for environments without the selection API
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      setHasKey(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 relative overflow-hidden">
      {/* Background Effects */}
      <StarfallBackground />
      <CursorGlow />

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-sm">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">Pathfinder</span>
          </div>
          
          {hasKey === false && (
            <button
              onClick={handleSelectKey}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
            >
              Select API Key
            </button>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            AI-Powered Career Mapping
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
          >
            Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Career Trajectory</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Enter your current role and your ultimate goal. Our intelligence engine will generate realistic, step-by-step pathways to get you there.
          </motion.p>
        </div>

        {/* Input Form */}
        <div className="mb-16 relative z-20">
          <RoleInput />
        </div>

        {/* Error State */}
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              className="max-w-3xl mx-auto mb-12 overflow-hidden"
            >
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700 shadow-sm">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading & Visualization Area */}
        <div className="relative z-10 min-h-[400px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div key="loading" className="absolute inset-0 w-full">
                <PathLoadingAnimation isLoading={isLoading} />
              </motion.div>
            ) : paths.length > 0 ? (
              <motion.div 
                key="visualization"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-6 px-2">
                  <h2 className="text-2xl font-bold text-slate-800">Your Generated Paths</h2>
                  <p className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    Click any role to view details
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-2 rounded-3xl shadow-xl border border-slate-200/60">
                  <PathVisualization />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      <NodeDetails />
    </main>
  );
}

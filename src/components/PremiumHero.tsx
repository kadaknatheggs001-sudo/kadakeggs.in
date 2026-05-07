import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { generateHeroImage } from '../services/imageService';

interface PremiumHeroProps {
  prompt: string;
  children: React.ReactNode;
}

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export const PremiumHero: React.FC<PremiumHeroProps> = ({ prompt, children }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [needsKey, setNeedsKey] = useState(false);

  useEffect(() => {
    const checkAndGenerate = async () => {
      try {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          setNeedsKey(true);
          setLoading(false);
          return;
        }

        const cachedImage = localStorage.getItem('hero_image_cache');
        if (cachedImage) {
          setImageUrl(cachedImage);
          setLoading(false);
          return;
        }

        const generatedUrl = await generateHeroImage(prompt);
        if (generatedUrl) {
          setImageUrl(generatedUrl);
          localStorage.setItem('hero_image_cache', generatedUrl);
        }
      } catch (error) {
        console.error("Hero generation failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAndGenerate();
  }, [prompt]);

  const handleOpenKey = async () => {
    await window.aistudio.openSelectKey();
    setNeedsKey(false);
    setLoading(true);
    const generatedUrl = await generateHeroImage(prompt);
    if (generatedUrl) {
      setImageUrl(generatedUrl);
      localStorage.setItem('hero_image_cache', generatedUrl);
    }
    setLoading(false);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-black">
      <div className="absolute inset-0 z-0">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center bg-brand-black">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
              <p className="text-brand-gold font-bold animate-pulse">Crafting Premium Atmosphere...</p>
            </div>
          </div>
        ) : needsKey ? (
          <div className="w-full h-full flex items-center justify-center bg-brand-black p-8 text-center">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold text-white mb-4">Unlock Premium Visuals</h2>
              <p className="text-gray-400 mb-8">To experience the luxury AI-generated background, please select your Gemini API key.</p>
              <button 
                onClick={handleOpenKey}
                className="btn-primary"
              >
                Select API Key
              </button>
              <p className="mt-4 text-xs text-gray-500">
                Requires a paid Google Cloud project. <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline">Billing Info</a>
              </p>
            </div>
          </div>
        ) : imageUrl ? (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full"
          >
            <img
              src={imageUrl}
              alt="Premium Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
          </motion.div>
        ) : (
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://picsum.photos/seed/farm-eggs/1920/1080"
              alt="Fallback background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        {children}
      </div>
    </section>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, MessageCircle, RefreshCw, AlertCircle, CheckCircle2, Info, Dumbbell, Zap, Heart } from 'lucide-react';
import { KADAKNATH_NUTRITION, WHATSAPP_NUMBER } from '../constants';

export const NutritionCalculator = () => {
  const [proteinGoal, setProteinGoal] = useState<string>('50');
  const [ironGoal, setIronGoal] = useState<string>('10');
  const [cholesterolLimit, setCholesterolLimit] = useState<string>('300');
  const [showResults, setShowResults] = useState(false);

  const calculateResults = useMemo(() => {
    const p = parseFloat(proteinGoal) || 0;
    const i = parseFloat(ironGoal) || 0;
    const c = parseFloat(cholesterolLimit) || 0;

    const eggsForProtein = p / KADAKNATH_NUTRITION.protein;
    const eggsForIron = i / KADAKNATH_NUTRITION.iron;
    
    let recommendedEggs = Math.ceil(Math.max(eggsForProtein, eggsForIron));
    let warning = "";

    if (recommendedEggs * KADAKNATH_NUTRITION.cholesterol > c) {
      const maxSafeEggs = Math.floor(c / KADAKNATH_NUTRITION.cholesterol);
      if (maxSafeEggs < recommendedEggs) {
        warning = `Note: To stay within your ${c}mg cholesterol limit, we recommend a maximum of ${maxSafeEggs} eggs. Your other goals may only be partially met.`;
        recommendedEggs = maxSafeEggs;
      }
    }

    // Ensure at least 0
    recommendedEggs = Math.max(0, recommendedEggs);

    return {
      recommendedEggs,
      protein: (recommendedEggs * KADAKNATH_NUTRITION.protein).toFixed(1),
      iron: (recommendedEggs * KADAKNATH_NUTRITION.iron).toFixed(1),
      cholesterol: (recommendedEggs * KADAKNATH_NUTRITION.cholesterol).toFixed(0),
      warning
    };
  }, [proteinGoal, ironGoal, cholesterolLimit]);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setProteinGoal('50');
    setIronGoal('10');
    setCholesterolLimit('300');
    setShowResults(false);
  };

  return (
    <section className="py-20 bg-white" id="nutrition-calculator">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-gold/10 rounded-3xl text-brand-gold mb-8 shadow-inner">
            <Calculator size={40} />
          </div>
          <h2 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight">Nutrition <span className="text-brand-gold">Calculator</span></h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Find out how many Kadaknath eggs your body needs based on your specific health goals.</p>
        </div>

        <div className="bg-brand-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 border border-gray-100 shadow-2xl">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div className="space-y-4">
              <label className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                <Dumbbell size={18} className="text-brand-gold" />
                Protein Goal (g)
              </label>
              <input
                type="number"
                value={proteinGoal}
                onChange={(e) => setProteinGoal(e.target.value)}
                placeholder="e.g. 50"
                className="w-full px-6 py-5 bg-white border-2 border-gray-100 rounded-2xl focus:border-brand-gold focus:outline-none transition-all font-black text-2xl"
              />
            </div>
            <div className="space-y-4">
              <label className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                <Zap size={18} className="text-brand-gold" />
                Iron Goal (mg)
              </label>
              <input
                type="number"
                value={ironGoal}
                onChange={(e) => setIronGoal(e.target.value)}
                placeholder="e.g. 10"
                className="w-full px-6 py-5 bg-white border-2 border-gray-100 rounded-2xl focus:border-brand-gold focus:outline-none transition-all font-black text-2xl"
              />
            </div>
            <div className="space-y-4">
              <label className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                <Heart size={18} className="text-brand-gold" />
                Cholesterol Limit (mg)
              </label>
              <input
                type="number"
                value={cholesterolLimit}
                onChange={(e) => setCholesterolLimit(e.target.value)}
                placeholder="e.g. 300"
                className="w-full px-6 py-5 bg-white border-2 border-gray-100 rounded-2xl focus:border-brand-gold focus:outline-none transition-all font-black text-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <button
              onClick={handleCalculate}
              className="btn-primary px-16 py-5 text-xl shadow-2xl shadow-brand-black/20"
            >
              Calculate Needs
            </button>
            <button
              onClick={handleReset}
              className="btn-secondary px-10 py-5 flex items-center justify-center gap-3 text-lg"
            >
              <RefreshCw size={20} />
              Reset
            </button>
          </div>

          {/* Results Card */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-brand-black rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                
                <div className="text-center mb-12">
                  <h3 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-8">Recommended Intake</h3>
                  <div className="inline-block relative">
                    <span className="text-7xl md:text-9xl font-black text-white">{calculateResults.recommendedEggs}</span>
                    <span className="text-2xl font-bold text-brand-gold ml-4">Eggs / Day</span>
                  </div>
                  <p className="mt-10 text-xl md:text-2xl font-medium text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    “You should consume <span className="text-brand-gold font-black">{calculateResults.recommendedEggs} Kadaknath eggs</span> per day to achieve your nutrition goals.”
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center">
                    <p className="text-[10px] font-black text-gray-500 uppercase mb-3 tracking-widest">Protein Provided</p>
                    <p className="text-3xl font-black text-brand-gold">{calculateResults.protein} g</p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center">
                    <p className="text-[10px] font-black text-gray-500 uppercase mb-3 tracking-widest">Iron Provided</p>
                    <p className="text-3xl font-black text-brand-gold">{calculateResults.iron} mg</p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center">
                    <p className="text-[10px] font-black text-gray-500 uppercase mb-3 tracking-widest">Cholesterol</p>
                    <p className="text-3xl font-black text-brand-gold">{calculateResults.cholesterol} mg</p>
                  </div>
                </div>

                {calculateResults.warning && (
                  <div className="flex gap-4 p-6 bg-amber-500/10 text-amber-200 rounded-2xl border border-amber-500/20 mb-12 text-sm md:text-base">
                    <AlertCircle size={24} className="shrink-0 text-amber-500" />
                    <p>{calculateResults.warning}</p>
                  </div>
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="flex items-start gap-4 text-sm md:text-base text-gray-400 max-w-2xl mb-12 leading-relaxed">
                    <Info size={24} className="text-brand-gold shrink-0 mt-0.5" />
                    <p>
                      Kadaknath eggs are naturally rich in protein and iron. Including them in your daily diet can support muscle growth, improve hemoglobin levels, and boost overall nutrition.
                    </p>
                  </div>

                  <div className="w-full h-px bg-white/10 mb-12"></div>

                  <p className="text-white font-bold text-xl mb-8">Start your healthy routine today.</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=I used the nutrition calculator and I need ${calculateResults.recommendedEggs} eggs daily.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp px-16 py-6 text-xl shadow-2xl shadow-[#25D366]/20"
                  >
                    <MessageCircle size={28} />
                    Order Kadaknath Eggs
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Consumption Guide */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { group: "Fitness Users", range: "3–5 eggs/day", icon: <Dumbbell size={20} /> },
            { group: "Families", range: "2–4 eggs/day", icon: <CheckCircle2 size={20} /> },
            { group: "General Health", range: "1–3 eggs/day", icon: <Heart size={20} /> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 bg-brand-white rounded-2xl border border-gray-100">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-gold shadow-sm">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">{item.group}</p>
                <p className="font-bold text-brand-black">{item.range}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

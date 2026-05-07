import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, MessageCircle, Dumbbell, Heart, Users, Info, ArrowRight, Egg } from 'lucide-react';
import { KADAKNATH_NUTRITION, WHATSAPP_NUMBER } from '../constants';

export const ProteinCalculator = () => {
  const [proteinGoal, setProteinGoal] = useState<string>('');
  const [result, setResult] = useState<{
    eggs: number;
    protein: number;
    iron: number;
    cholesterol: number;
  } | null>(null);

  const calculateIntake = (goal: number) => {
    if (!goal || goal <= 0) return;
    const eggs = Math.round(goal / KADAKNATH_NUTRITION.protein);
    setResult({
      eggs,
      protein: parseFloat((eggs * KADAKNATH_NUTRITION.protein).toFixed(1)),
      iron: parseFloat((eggs * KADAKNATH_NUTRITION.iron).toFixed(1)),
      cholesterol: eggs * KADAKNATH_NUTRITION.cholesterol
    });
  };

  const handleQuickSelect = (value: number) => {
    setProteinGoal(value.toString());
    calculateIntake(value);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    calculateIntake(Number(proteinGoal));
  };

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-brand-gold/10 rounded-xl md:rounded-2xl text-brand-gold mb-3 md:mb-4">
            <Calculator size={24} className="md:w-[32px] md:h-[32px]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black mb-3 md:mb-4 tracking-tight">Protein <span className="text-brand-gold">Calculator</span></h2>
          <p className="text-gray-600 text-sm md:text-xl max-w-2xl mx-auto">Find out how many Kadaknath eggs your body needs daily to reach your fitness goals in Bengaluru.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-16">
            <form onSubmit={handleCalculate} className="space-y-8 md:space-y-10">
              {/* Input Field */}
              <div className="space-y-4">
                <label className="block text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
                  Daily Protein Goal (grams)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={proteinGoal}
                    onChange={(e) => setProteinGoal(e.target.value)}
                    placeholder="Enter goal (e.g., 50g)"
                    className="w-full px-8 py-6 bg-brand-white border-2 border-gray-100 rounded-2xl md:rounded-3xl focus:border-brand-gold focus:outline-none transition-all text-2xl md:text-3xl font-black"
                    required
                  />
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 text-brand-gold font-black text-xl">
                    g
                  </div>
                </div>
              </div>

              {/* Quick Selection */}
              <div className="space-y-4">
                <p className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Choose Your Lifestyle</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  <button
                    type="button"
                    onClick={() => handleQuickSelect(60)}
                    className="flex items-center gap-4 p-6 rounded-2xl border-2 border-gray-100 hover:border-brand-gold hover:bg-brand-gold/5 transition-all group text-left"
                  >
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                      <Dumbbell size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase leading-none mb-1">Fitness</p>
                      <p className="font-bold text-lg text-brand-black">60g Protein</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickSelect(40)}
                    className="flex items-center gap-4 p-6 rounded-2xl border-2 border-gray-100 hover:border-brand-gold hover:bg-brand-gold/5 transition-all group text-left"
                  >
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                      <Heart size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase leading-none mb-1">General</p>
                      <p className="font-bold text-lg text-brand-black">40g Protein</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickSelect(30)}
                    className="flex items-center gap-4 p-6 rounded-2xl border-2 border-gray-100 hover:border-brand-gold hover:bg-brand-gold/5 transition-all group text-left"
                  >
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                      <Users size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase leading-none mb-1">Family</p>
                      <p className="font-bold text-lg text-brand-black">30g Protein</p>
                    </div>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-6 text-xl shadow-2xl shadow-brand-black/20"
              >
                Calculate Daily Intake
              </button>
            </form>

            {/* Results Section */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-12 md:mt-16 space-y-8 md:space-y-10"
                >
                  <div className="bg-brand-black rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    
                    <div className="text-center mb-10 md:mb-12">
                      <h3 className="text-[10px] md:text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-6">Recommended Daily Intake</h3>
                      <div className="flex items-center justify-center gap-6 mb-6">
                        <div className="w-20 h-20 bg-brand-gold rounded-2xl flex items-center justify-center shadow-2xl shrink-0 rotate-3">
                          <Egg className="text-brand-black" size={40} />
                        </div>
                        <p className="text-5xl md:text-7xl font-black text-white">
                          {result.eggs} <span className="text-2xl md:text-3xl font-bold text-brand-gold">Eggs</span>
                        </p>
                      </div>
                      <p className="text-lg md:text-xl text-gray-400 font-medium max-w-md mx-auto leading-relaxed">
                        "Consume <span className="text-white font-bold">{result.eggs} Kadaknath eggs</span> daily to reach your goal."
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                        <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">Protein</p>
                        <p className="text-3xl font-black text-brand-gold">{result.protein}g</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                        <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">Iron</p>
                        <p className="text-3xl font-black text-brand-gold">{result.iron}mg</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                        <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">Cholesterol</p>
                        <p className="text-3xl font-black text-brand-gold">{result.cholesterol}mg</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 p-8 bg-brand-gold/5 rounded-3xl border border-brand-gold/20">
                    <Info className="text-brand-gold shrink-0" size={28} />
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Kadaknath eggs are naturally rich in protein and iron. Including them in your daily diet can support muscle growth, improve hemoglobin levels, and provide powerful nutrition.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=I calculated my protein needs and I need ${result.eggs} eggs daily.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full py-6 text-xl shadow-2xl shadow-[#25D366]/20"
                  >
                    <MessageCircle size={24} />
                    Order Fresh Kadaknath Eggs
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

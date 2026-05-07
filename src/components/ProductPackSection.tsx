import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MessageCircle, Truck } from 'lucide-react';
import { PRODUCT_PACKS, WHATSAPP_NUMBER } from '../constants';

export const ProductPackSection = () => {
  const [activePack, setActivePack] = useState(0);

  return (
    <section
      id="products"
      className="py-12 md:py-24 bg-brand-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4 block"
          >
            FARM FRESH
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-6xl font-extrabold text-brand-black mb-4 md:mb-6 tracking-tight"
          >
            Choose Your <span className="text-brand-gold">Pack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-xl text-gray-600 leading-relaxed"
          >
            Premium Kadaknath eggs delivered fresh from farm to your doorstep.
          </motion.p>

          <div className="mt-6 md:mt-8 text-left bg-white border border-brand-gold/20 rounded-2xl px-5 py-4 shadow-sm">
            <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.25em] mb-1">
              A humble note on originality
            </p>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Since these are naturally farm-laid eggs, the eggs you receive may not all be the same size and color. This natural
              variation is a sign of originality.
            </p>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex bg-brand-black/5 rounded-full p-1 mb-4 border border-brand-black/10"
          >
            {PRODUCT_PACKS.map((pack, idx) => (
              <button
                key={pack.id}
                onClick={() => setActivePack(idx)}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300 ${
                  activePack === idx
                    ? 'bg-brand-gold text-brand-black shadow-sm'
                    : 'text-gray-500'
                }`}
              >
                {pack.count} Eggs
              </button>
            ))}
          </motion.div>

          {/* Swipeable Animated Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePack}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(e, info) => {
                  if (
                    info.offset.x < -80 &&
                    activePack < PRODUCT_PACKS.length - 1
                  ) {
                    setActivePack((prev) => prev + 1);
                  }

                  if (
                    info.offset.x > 80 &&
                    activePack > 0
                  ) {
                    setActivePack((prev) => prev - 1);
                  }
                }}
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="cursor-grab active:cursor-grabbing"
              >
                <PackCard pack={PRODUCT_PACKS[activePack]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {PRODUCT_PACKS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActivePack(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activePack === idx
                    ? 'w-5 bg-brand-gold'
                    : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Swipe Hint */}
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-3">
            Swipe to explore packs
          </p>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-10">
          {PRODUCT_PACKS.map((pack, idx) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col h-full rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 bg-white border border-gray-100 ${
                pack.isBestValue
                  ? 'ring-4 ring-brand-gold ring-offset-8 ring-offset-white'
                  : ''
              }`}
            >
              {pack.isBestValue && (
                <div className="absolute top-5 right-5 z-10 bg-brand-gold text-brand-black px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase shadow-xl">
                  Best Value
                </div>
              )}

              <PackCardInner pack={pack} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* MOBILE CARD */

const PackCard = ({ pack }) => (
  <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">

    {pack.isBestValue && (
      <div className="absolute top-4 right-4 z-10 bg-brand-gold text-brand-black px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow">
        Best Value
      </div>
    )}

    <PackCardInner pack={pack} />
  </div>
);

/* SHARED CARD CONTENT */

const PackCardInner = ({ pack }) => (
  <>
    {/* Image */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={pack.image}
        alt={`${pack.name} Kadaknath eggs`}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-5 left-5">
        <p className="text-brand-gold text-[10px] uppercase tracking-widest font-black mb-1">
          {pack.bestFor}
        </p>

        <h3 className="text-3xl font-black text-white">
          {pack.name}
        </h3>
      </div>

      <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-brand-black text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full">
        {pack.count} Eggs
      </div>
    </div>

    {/* Content */}
    <div className="p-6 md:p-8 flex flex-col grow">

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {pack.description}
      </p>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] mb-3">
          Key Features
        </h4>

        <ul className="space-y-3">
          {[
            '100% Original Kadaknath',
            'Fresh from Farm',
            'Hygienically Packed'
          ].map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-sm text-gray-700"
            >
              <CheckCircle2
                className="text-brand-green shrink-0"
                size={16}
              />

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing */}
      <div className="mb-6 p-4 bg-gray-50 rounded-2xl border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              Price Per Egg
            </p>

            <p className="text-xl font-bold text-brand-black">
              ₹{pack.pricePerEgg}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              Total
            </p>

            <p className="text-3xl font-black text-brand-black">
              ₹{pack.totalPrice}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Truck size={14} className="text-brand-gold" />
          {pack.deliveryNote}
        </div>
      </div>

      {/* CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=I want to order the ${pack.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp w-full py-4 text-base shadow-xl shadow-[#25D366]/10 flex items-center justify-center gap-2 mt-auto"
      >
        <MessageCircle size={20} />
        Order on WhatsApp
      </a>
    </div>
  </>
);
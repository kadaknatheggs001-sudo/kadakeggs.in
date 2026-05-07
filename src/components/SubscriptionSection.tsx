import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MessageCircle, Calendar, Package, TrendingDown } from 'lucide-react';
import { SUBSCRIPTION_PLANS, WHATSAPP_NUMBER } from '../constants';

export const SubscriptionSection = () => {
  const [activePlan, setActivePlan] = useState(0);
  const plansCount = SUBSCRIPTION_PLANS.length;

  return (
    <section id="subscription" className="py-12 md:py-24 bg-white overflow-hidden md:overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4 block"
          >
            WEEKLY DELIVERY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-6xl font-extrabold text-brand-black mb-4 md:mb-6 tracking-tight"
          >
            Subscription <span className="text-brand-gold">Plans</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-xl text-gray-600 leading-relaxed"
          >
            Get fresh Kadaknath eggs delivered to your doorstep regularly with our flexible subscription plans.
          </motion.p>
        </div>

        {/* ── MOBILE: Tab switcher ── */}
        <div className="md:hidden">
          {/* Tab pill strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex bg-brand-black/5 rounded-full p-1 mb-4 border border-brand-black/10"
          >
            {SUBSCRIPTION_PLANS.map((plan, idx) => (
              <button
                key={plan.id}
                onClick={() => setActivePlan(idx)}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-250 ${
                  activePlan === idx
                    ? 'bg-brand-gold text-brand-black shadow-sm'
                    : 'text-gray-500'
                }`}
              >
                {plan.name.split(' ')[0]}
              </button>
            ))}
          </motion.div>

          {/* Animated card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlan}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  const swipePower = Math.abs(info.offset.x) * info.velocity.x;
                  const shouldGoNext = info.offset.x < -70 || swipePower < -7000;
                  const shouldGoPrev = info.offset.x > 70 || swipePower > 7000;

                  if (shouldGoNext) setActivePlan((p) => (p + 1) % plansCount);
                  else if (shouldGoPrev) setActivePlan((p) => (p - 1 + plansCount) % plansCount);
                }}
              >
                <PlanCard plan={SUBSCRIPTION_PLANS[activePlan]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4 mb-2">
            {SUBSCRIPTION_PLANS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActivePlan(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activePlan === idx ? 'w-5 bg-brand-gold' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP: Original 3-column grid ── */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-10 md:mb-16">
          {SUBSCRIPTION_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col h-full rounded-[2.5rem] p-10 transition-all duration-500 shadow-2xl ${
                plan.id === 'fitness-plan'
                  ? 'bg-brand-black text-white ring-4 ring-brand-gold ring-offset-8 ring-offset-white'
                  : 'bg-brand-black text-white'
              }`}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-black px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase shadow-xl">
                {plan.label}
              </div>
              <PlanCardInner plan={plan} />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-100">
          {[
            { label: "Farm Fresh", value: "Daily Collection" },
            { label: "Hygienic", value: "FSSAI Licensed" },
            { label: "Delivery", value: "Doorstep Service" },
            { label: "Support", value: "WhatsApp Active" }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-sm font-bold text-brand-black">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Mobile card — full self-contained card
const PlanCard = ({ plan }) => (
  <div className="relative bg-brand-black text-white rounded-[2rem] p-6 shadow-2xl border border-brand-gold/20">
    <div className="inline-block bg-brand-gold text-brand-black px-5 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 shadow">
      {plan.label}
    </div>
    <PlanCardInner plan={plan} />
  </div>
);

// Shared inner content for both mobile and desktop cards
const PlanCardInner = ({ plan }) => (
  <>
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-1 text-brand-gold">{plan.name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
    </div>

    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
        <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
          <Calendar size={18} />
        </div>
        <div>
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{plan.deliveryFrequency}</p>
          <p className="text-sm font-bold">{plan.deliveryDetails}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
        <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
          <Package size={18} />
        </div>
        <div>
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Monthly Quantity</p>
          <p className="text-sm font-bold">{plan.monthlyEggs} Eggs / Month</p>
        </div>
      </div>
    </div>

    <div className="mb-6">
      <h4 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] mb-3">Plan Benefits</h4>
      <ul className="space-y-2.5">
        {plan.benefits.map((benefit, bIdx) => (
          <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-300">
            <CheckCircle2 className="text-brand-gold shrink-0 mt-0.5" size={15} />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-auto mb-6 p-4 bg-brand-gold/10 rounded-2xl border border-brand-gold/20">
      <div className="flex items-center gap-2 text-brand-gold font-bold text-[10px] mb-2 uppercase tracking-widest">
        <TrendingDown size={13} /> Subscription Savings
      </div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-500 text-xs">Regular Price</span>
        <span className="text-gray-500 text-xs line-through">₹{plan.regularPrice}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm font-medium">You Save</span>
        <span className="text-brand-gold font-black text-sm">₹{plan.savings} / month</span>
      </div>
    </div>

    <div className="mb-6">
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-4xl font-black text-white">₹{plan.monthlyTotal}</span>
        <span className="text-gray-400 text-sm">/ month</span>
      </div>
      <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">₹{plan.pricePerEgg} per egg</p>
    </div>

    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=I want to subscribe to the ${plan.name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp w-full py-4 text-base shadow-2xl shadow-[#25D366]/20 flex items-center justify-center gap-2"
    >
      <MessageCircle size={20} />
      Subscribe on WhatsApp
    </a>
  </>
);
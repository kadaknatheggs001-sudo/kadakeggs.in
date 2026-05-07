import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, Calendar, Truck, CreditCard, Star, Heart, TrendingDown, Package } from 'lucide-react';
import { SUBSCRIPTION_PLANS, WHATSAPP_NUMBER } from '../constants';

export const SubscriptionPlans = () => {
  return (
    <section className="py-24 bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Flexible Delivery</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Kadaknath Egg Subscription Plans</h2>
          <p className="text-xl text-gray-600">
            Enjoy farm-fresh Kadaknath eggs delivered regularly to your doorstep with our flexible subscription plans.
          </p>
        </div>

        {/* Subscription Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {SUBSCRIPTION_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl flex flex-col h-full transition-all hover:shadow-2xl hover:-translate-y-2 ${
                plan.id === 'smart-family-plan' ? 'ring-2 ring-brand-gold' : ''
              }`}
            >
              {plan.id === 'smart-family-plan' && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-black text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-brand-black mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{plan.description}</p>
              </div>

              <div className="mb-8 p-6 bg-brand-black rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-brand-gold" size={20} />
                  <span className="text-sm font-bold">{plan.deliveryFrequency}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="text-brand-gold" size={20} />
                  <span className="text-sm font-bold">{plan.monthlyEggs} Eggs per month</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-brand-black">₹{plan.monthlyTotal}</span>
                  <span className="text-gray-500 text-sm font-medium">/ month</span>
                </div>
                <p className="text-brand-gold font-bold text-xs uppercase tracking-widest">₹{plan.pricePerEgg} per egg</p>
              </div>

              <div className="flex-grow mb-10">
                <ul className="space-y-4">
                  {plan.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-brand-green shrink-0" size={20} />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I want to subscribe to the ${plan.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-4 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={20} />
                Subscribe on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-brand-black">How Subscription Works</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Star />, title: "Choose Plan", desc: "Choose your subscription plan" },
              { icon: <MessageCircle />, title: "WhatsApp Us", desc: "Click Subscribe on WhatsApp" },
              { icon: <CreditCard />, title: "Confirm", desc: "Confirm address and payment" },
              { icon: <Truck />, title: "Receive", desc: "Receive fresh eggs delivered regularly" }
            ].map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-6 text-brand-gold group-hover:scale-110 transition-transform border border-gray-50">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Benefits */}
        <div className="bg-brand-black rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {[
              { title: "Guaranteed Fresh", icon: <Star /> },
              { title: "Lower Prices", icon: <TrendingDown /> },
              { title: "Free Delivery", icon: <Truck /> },
              { title: "Weekly Delivery", icon: <Calendar /> },
              { title: "Healthy Lifestyle", icon: <Heart /> }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-gold mb-6">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <p className="font-bold text-xs uppercase tracking-widest leading-relaxed">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-brand-gold rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-brand-gold/20">
          <h3 className="text-3xl md:text-5xl font-bold text-brand-black mb-8 max-w-3xl mx-auto leading-tight">
            Start your healthy routine with Kadak Kadaknath Eggs
          </h3>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=I want to start a subscription for Kadaknath eggs`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-brand-black text-white hover:bg-brand-brown inline-flex px-12 py-6 text-xl shadow-2xl"
          >
            <MessageCircle size={28} />
            Subscribe via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

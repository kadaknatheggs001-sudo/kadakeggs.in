import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, MessageCircle, ChevronRight, Heart, ShieldCheck, Zap, Dumbbell, Star, ArrowRight, Instagram, Facebook, Twitter, Mail, Phone, MapPin, CheckCircle2, Truck, Egg } from 'lucide-react';
import { BRAND_NAME, TAGLINE, WHATSAPP_NUMBER, PRODUCT_PACKS, FAQS, COMPARISON_DATA, BENEFITS, CONTACT_EMAIL, CONTACT_ADDRESS, FSSAI_LICENSE_NUMBER, FSSAI_LICENSE_TEXT, SERVICE_AREAS } from './constants';
import { ProteinCalculator } from './components/ProteinCalculator';
import { SubscriptionSection } from './components/SubscriptionSection';
import { ProductPackSection } from './components/ProductPackSection';
import { TermsPage, PrivacyPage } from './components/LegalPages';
import { Analytics } from '@vercel/analytics/react';
import Credits  from './components/Credits';
// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Benefits', id: 'benefits' },
    { name: 'Products', id: 'products' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-2 md:py-3 shadow-sm' : 'bg-transparent py-3 md:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center cursor-pointer group" onClick={() => setActivePage('home')} role="button" aria-label="Go to home page">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-black rounded-xl flex items-center justify-center mr-3 md:mr-4 shrink-0 group-hover:bg-brand-gold transition-colors">
            <span className="text-brand-gold font-black text-xl md:text-2xl group-hover:text-brand-black">K</span>
          </div>
          <div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-brand-black leading-none block">KADAK</span>
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">Kadaknath Eggs</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-gold ${activePage === link.id ? 'text-brand-gold' : 'text-brand-black'}`}
            >
              {link.name}
            </button>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-2 px-5 text-sm"
          >
            <MessageCircle size={18} />
            Order Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-black p-1" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-1 pb-4 space-y-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 text-sm font-medium ${activePage === link.id ? 'text-brand-gold bg-brand-gold/5' : 'text-brand-black'}`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2 px-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full py-2.5 text-sm"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <footer className="bg-brand-black text-white pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-2 md:mr-3">
                <span className="text-brand-black font-bold text-lg md:text-xl">K</span>
              </div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight">KADAK KADAKNATH</h2>
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Providing premium, farm-fresh Kadaknath eggs to health-conscious families across India. Experience the power of black chicken nutrition.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all" aria-label="Instagram">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all" aria-label="Facebook">
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all" aria-label="Twitter">
                <Twitter size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-brand-gold">Quick Links</h3>
            <ul className="space-y-2 md:space-y-4">
              {['Home', 'About Us', 'Benefits', 'Products', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setActivePage(item.toLowerCase().replace(' ', ''))}
                    className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-brand-gold">Health Benefits</h3>
            <ul className="space-y-2 md:space-y-4 text-xs md:text-sm text-gray-400">
              <li>High Protein Content</li>
              <li>Low Cholesterol (Heart Safe)</li>
              <li>Rich in Iron & Minerals</li>
              <li>Boosts Immunity</li>
              <li>Essential Amino Acids</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-brand-gold">Contact Us</h3>
            <ul className="space-y-2 md:space-y-4">
              <li className="flex items-start gap-3 text-xs md:text-sm text-gray-400">
                <MapPin size={16} className="text-brand-gold shrink-0 md:w-4.5 md:h-4.5" />
                <span>{CONTACT_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-xs md:text-sm text-gray-400">
                <Phone size={16} className="text-brand-gold shrink-0 md:w-4.5 md:h-4.5" />
                <span>{WHATSAPP_NUMBER}</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <span>{CONTACT_EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Kadak Kadaknath Eggs. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-gray-500">
              <span className="bg-white/10 px-1.5 py-0.5 rounded font-bold text-white/80">FSSAI</span>
              <span>{FSSAI_LICENSE_TEXT} - Lic. No. {FSSAI_LICENSE_NUMBER}</span>
            </div>
          </div>
          <div className="flex gap-6 text-xs text-gray-500">
            <button onClick={() => setActivePage('privacy')} className="hover:text-white">Privacy Policy</button>
            <button onClick={() => setActivePage('terms')} className="hover:text-white">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 group"
    aria-label="Order on WhatsApp"
  >
    <MessageCircle size={24} className="md:w-8 md:h-8" />
    <span className="absolute right-full mr-3 bg-white text-brand-black px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
      Order on WhatsApp
    </span>
  </a>
);

// --- Pages ---

const HERO_ANIMATION_KEY = 'kadak-hero-animated';

const heroContentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.65,
      staggerChildren: 0.22,
    },
  },
};

const heroContentItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const HomePage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  const [heroInitialState, setHeroInitialState] = useState<'hidden' | 'visible'>(() => {
    if (typeof window === 'undefined') return 'hidden';
    return sessionStorage.getItem(HERO_ANIMATION_KEY) === 'true' ? 'visible' : 'hidden';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(HERO_ANIMATION_KEY) !== 'true') {
      sessionStorage.setItem(HERO_ANIMATION_KEY, 'true');
      setHeroInitialState('hidden');
    }
  }, []);

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[95vh] flex items-center overflow-hidden bg-brand-black">
        <motion.div 
          initial={{ scale: 1.03, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/hero-bg.jpeg"
            alt="Premium Kadaknath Eggs Bengaluru"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-black/82 via-brand-black/52 to-brand-black"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
          <motion.div
            variants={heroContentContainerVariants}
            initial={heroInitialState}
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span 
              variants={heroContentItemVariants}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-gold/10 text-brand-gold text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 border border-brand-gold/20 backdrop-blur-sm"
            >
              <Star size={14} className="fill-brand-gold" />
              India’s Most Premium Kadaknath Eggs
            </motion.span>

            <motion.h1
              variants={heroContentItemVariants}
              className="text-4xl md:text-8xl font-extrabold text-white leading-[1.1] mb-6 md:mb-8 tracking-tighter"
            >
              The Gold Standard of <span className="text-brand-gold">Nutrition.</span>
            </motion.h1>

            <motion.p
              variants={heroContentItemVariants}
              className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed font-medium"
            >
              Experience the power of <span className="text-white font-bold">Kali Masi</span>. Premium, farm-fresh Kadaknath eggs delivered across <span className="text-brand-gold">Bengaluru</span>, with active service in <span className="text-brand-gold">JP Nagar, BTM, and Jayanagar</span>.
            </motion.p>

            <motion.div variants={heroContentItemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-whatsapp text-lg px-8 py-4 shadow-2xl shadow-[#25D366]/20"
              >
                <MessageCircle size={22} />
                Order on WhatsApp
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePage('benefits')} 
                className="btn-secondary border-white/30! text-white! hover:bg-white/10 text-lg px-8 py-4 hover:backdrop-blur-sm"
              >
                Explore Benefits
                <ArrowRight size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePage('products')} 
                className="btn-secondary border-white/30! text-white! hover:bg-white/10 text-lg px-8 py-4 hover:backdrop-blur-sm"
              >
                View Products
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Why Kadaknath Eggs - Bento Grid Style */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight">Why Choose <span className="text-brand-gold">Kadaknath?</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Known as the "Black Gold" of poultry, Kadaknath eggs offer a nutritional profile that far exceeds regular white or brown eggs.
              </p>
            </div>
            <div className="hidden md:block">
              <button onClick={() => setActivePage('about')} className="text-brand-gold font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Learn more about the breed <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Main Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 p-8 md:p-12 rounded-4xl bg-brand-black text-white relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-8 text-brand-gold">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">25% More Protein</h3>
                <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                  Kadaknath eggs are a concentrated source of high-quality protein, essential for muscle repair, growth, and overall vitality.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-brand-gold/20 transition-all duration-700"></div>
            </motion.div>

            {/* Side Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 p-8 rounded-4xl bg-brand-gold text-brand-black flex flex-col justify-between"
            >
              <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center mb-6">
                <Heart size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Heart Friendly</h3>
                <p className="font-medium opacity-80">
                  With less than 1% cholesterol, it's the safest choice for heart health.
                </p>
              </div>
            </motion.div>

            {/* Side Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 p-8 rounded-4xl bg-brand-white border border-gray-100 flex flex-col justify-between group hover:border-brand-gold/30 transition-all"
            >
              <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Immunity Boost</h3>
                <p className="text-gray-600">
                  Rich in antioxidants and vitamins that strengthen your body's defense.
                </p>
              </div>
            </motion.div>

            {/* Side Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-8 p-8 md:p-12 rounded-4xl bg-brand-green text-white relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold mb-4">Rich in Iron</h3>
                  <p className="text-lg text-white/70">
                    Helps in preventing anemia and boosting energy levels naturally. Essential for women and growing children.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center animate-float">
                    <Zap size={48} className="text-brand-gold" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Section - Local SEO */}
      <section className="py-16 bg-brand-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="shrink-0">
              <h2 className="text-xl md:text-2xl font-bold text-brand-gold">Delivering to:</h2>
            </div>
            <div className="grow overflow-hidden relative">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-12 whitespace-nowrap"
              >
                {[...SERVICE_AREAS, ...SERVICE_AREAS].map((area, idx) => (
                  <span key={idx} className="text-2xl md:text-4xl font-black opacity-20 hover:opacity-100 transition-opacity cursor-default uppercase tracking-tighter">
                    {area}
                  </span>
                ))}
              </motion.div>
              <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-brand-black to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-brand-black to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Trust Section */}
      <section className="section-padding bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-6xl font-extrabold mb-8 tracking-tight">Bengaluru's Trusted <span className="text-brand-gold">Egg Partner.</span></h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We are proud to serve the health-conscious community of Bengaluru. Our localized delivery network ensures that whether you are in <span className="text-brand-black font-bold">JP Nagar</span>, <span className="text-brand-black font-bold">BTM Layout</span>, or <span className="text-brand-black font-bold">Jayanagar</span>, you get your eggs within 24 hours of collection.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="text-3xl font-black text-brand-gold mb-1">12h</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Delivery Time</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="text-3xl font-black text-brand-gold mb-1">5k+</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-brand-black overflow-hidden relative group">
                <img 
                  src="/Images/img2.png" 
                  alt="Premium Kadaknath Eggs" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-black/80 via-transparent to-transparent"></div>
                
                {/* Animated Eggs "Popping" over delivery areas */}
                {[
                  { top: '25%', left: '35%', delay: 0 },
                  { top: '55%', left: '25%', delay: 0.7 },
                  { top: '45%', left: '65%', delay: 1.2 },
                  { top: '70%', left: '55%', delay: 1.8 },
                  { top: '20%', left: '75%', delay: 2.5 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ 
                      scale: [0, 1.2, 1],
                      opacity: [0, 1, 0.8],
                    }}
                    animate={{
                      y: [0, -10, 0]
                    }}
                    viewport={{ once: false }}
                    transition={{ 
                      scale: { duration: 0.5, delay: pos.delay },
                      opacity: { duration: 0.5, delay: pos.delay },
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute z-10"
                    style={{ top: pos.top, left: pos.left }}
                    aria-hidden="true"
                  >
                    <div className="bg-brand-gold p-2 md:p-3 rounded-full shadow-2xl border-2 border-brand-black/20">
                      <Egg size={20} className="text-brand-black" />
                    </div>
                  </motion.div>
                ))}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-20">
                    <MapPin size={48} className="text-brand-gold mx-auto mb-4 animate-bounce" aria-hidden="true" />
                    <p className="text-white font-bold text-xl drop-shadow-lg">Serving South Bengaluru</p>
                  </div>
                </div>
              </div>
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 z-20"
              >
                <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Now in</p>
                <p className="font-bold">HSR Layout</p>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 z-20"
              >
                <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Serving</p>
                <p className="font-bold">BTM Layout</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-24 bg-brand-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Kadaknath vs Regular Eggs</h2>
            <p className="text-sm md:text-base text-gray-600">See the clear difference in nutritional value.</p>
          </div>

          <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-gray-200 shadow-xl bg-white mb-12 md:mb-20">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-brand-black text-white">
                    <th className="px-4 md:px-8 py-4 md:py-6 font-bold text-sm md:text-base">Feature</th>
                    <th className="px-4 md:px-8 py-4 md:py-6 font-bold text-brand-gold text-sm md:text-base">Kadaknath Eggs</th>
                    <th className="px-4 md:px-8 py-4 md:py-6 font-bold text-sm md:text-base">Regular Eggs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {COMPARISON_DATA.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 md:px-8 py-3 md:py-5 font-semibold text-brand-black text-xs md:text-sm">{row.feature}</td>
                      <td className="px-4 md:px-8 py-3 md:py-5 text-brand-green font-bold text-xs md:text-sm">{row.kadaknath}</td>
                      <td className="px-4 md:px-8 py-3 md:py-5 text-gray-500 text-xs md:text-sm">{row.regular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <ProteinCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-extrabold mb-6 tracking-tight">Loved by <span className="text-brand-gold">Health Enthusiasts</span></h2>
            <p className="text-lg text-gray-600">Join 5000+ families in Bengaluru choosing Kadaknath for their daily nutrition.</p>
            <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">Swipe to explore</span>
              <motion.span
                aria-hidden="true"
                animate={{ x: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="text-gray-400 text-sm"
              >
                →
              </motion.span>
            </div>
          </div>

          <div className="relative -mx-4 md:mx-0 overflow-x-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-white to-transparent md:hidden" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-white to-transparent md:hidden" aria-hidden="true" />
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-4 md:px-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { name: "Rahul Sharma", role: "Fitness Trainer, JP Nagar", text: "As a trainer, I always recommend Kadaknath eggs to my clients. The protein-to-cholesterol ratio is unbeatable. Kadak Eggs delivers the freshest batch every time." },
              { name: "Priya V.", role: "Nutritionist, Jayanagar", text: "I've been prescribing these eggs for my patients with low iron levels. The results are visible within weeks. Truly a superfood for Bengaluru households." },
              { name: "Anish K.", role: "Athlete, BTM Layout", text: "The subscription model is a lifesaver. I get my 30 eggs every Monday morning without fail. The quality is consistent and the taste is much richer." }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-4xl bg-brand-white border border-gray-100 relative shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-start"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-gold text-brand-gold" aria-hidden="true" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-brand-gold font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/Images/img1.png"
                  alt="Majestic Kadaknath Hen with Eggs"
                  className="rounded-2xl md:rounded-3xl shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-24 md:w-32 h-24 md:h-32 bg-brand-gold rounded-2xl md:rounded-3xl z-0 opacity-20"></div>
                <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-24 md:w-32 h-24 md:h-32 bg-brand-green rounded-2xl md:rounded-3xl z-0 opacity-20"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4 block">Trust & Quality</span>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Our Quality Promise</h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  { title: "Hygienic Handling", desc: "Every egg is carefully inspected and cleaned using state-of-the-art hygienic processes." },
                  { title: "Farm-Raised Chickens", desc: "Our Kadaknath chickens are raised in a natural, stress-free environment with organic feed." },
                  { title: "Daily Fresh Collection", desc: "Eggs are collected every morning and dispatched within 24 hours." },
                  { title: "Careful Packaging", desc: "Eco-friendly, shock-proof packaging ensures your eggs reach you in perfect condition." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 md:gap-4">
                    <div className="mt-1 text-brand-green">
                      <CheckCircle2 size={20} className="md:w-6 md:h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:mt-10 p-5 bg-brand-white rounded-2xl border border-brand-gold/20 flex items-center gap-4 shadow-sm">
                <div className="w-24 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0 border border-gray-100 px-3 py-2">
                  <img 
                    src="/Images/fssai.png" 
                    alt="FSSAI Logo" 
                    className="w-full h-auto object-contain brightness-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-0.5">{FSSAI_LICENSE_TEXT}</p>
                  <p className="text-sm font-bold text-brand-black">License No: {FSSAI_LICENSE_NUMBER}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pack Options */}
      <ProductPackSection />

      <SubscriptionSection />

      {/* How It Works */}
      <section className="py-12 md:py-24 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">How It Works</h2>
            <p className="text-xs md:text-gray-400">Our simple farm-to-table process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-gold/20 -translate-y-1/2 z-0"></div>
            {[
              { step: "01", title: "Farm Collection", desc: "Eggs are collected fresh every morning from our natural farms." },
              { step: "02", title: "Quality Check", desc: "Hygienic packing and rigorous quality checks for every single egg." },
              { step: "03", title: "Safe Delivery", desc: "Fast and safe delivery right to your doorstep, ensuring freshness." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-black font-bold text-lg md:text-xl mb-4 md:mb-6 shadow-xl shadow-brand-gold/20">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">{item.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed px-4 md:px-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-10 md:py-16 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="text-brand-black text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to boost your health?</h2>
            <p className="text-sm md:text-base font-medium opacity-80">Join thousands of health-conscious families today.</p>
          </div>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-primary bg-brand-black text-white hover:bg-brand-brown w-full md:w-auto py-3 md:py-4">
            Order on WhatsApp
            <MessageCircle size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-24 md:pt-32 pb-12 md:pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-12 md:mb-16">
        <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4 block">Our Story</span>
        <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8">Authentic Nutrition, Rooted in Tradition</h1>
        <p className="text-base md:text-xl text-gray-600 leading-relaxed">
          Kadak Kadaknath Eggs was founded with a simple mission: to bring the incredible health benefits of India's native black chicken to every household.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
        <div>
          <img
            src="/Images/img3.png"
            alt="Kadaknath Chicken"
            className="rounded-2xl md:rounded-3xl shadow-xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">What is Kadaknath?</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The Kadaknath is a unique Indian breed of chicken, primarily found in the Jhabua and Dhar districts of Madhya Pradesh. Known locally as "Kali Masi" (fowl with black flesh), it is one of the only three breeds of black-meat chicken in the world.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            This breed is legendary not just for its striking appearance, but for its medicinal properties and exceptional nutritional profile. Its eggs are a concentrated source of protein and iron, making them a superfood in the truest sense.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
            <div className="p-3 md:p-4 bg-brand-white rounded-xl border border-gray-100">
              <h4 className="font-bold text-brand-gold text-xl md:text-2xl mb-1">100%</h4>
              <p className="text-[9px] md:text-xs text-gray-500 uppercase font-bold">Pure Breed</p>
            </div>
            <div className="p-3 md:p-4 bg-brand-white rounded-xl border border-gray-100">
              <h4 className="font-bold text-brand-gold text-xl md:text-2xl mb-1">Organic</h4>
              <p className="text-[9px] md:text-xs text-gray-500 uppercase font-bold">Farm Raised</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-black text-white rounded-2xl md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-24 md:-mr-32 -mt-24 md:-mt-32"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Why We Started</h2>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            In a world of mass-produced, industrial food, we noticed that the most nutritious traditional foods were being forgotten. We saw an opportunity to bridge this gap by creating a professional, hygienic, and reliable supply chain for Kadaknath eggs.
          </p>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Our commitment is to quality and health. We don't just sell eggs; we provide a foundation for a healthier lifestyle, supporting local farmers and preserving a precious Indian heritage breed.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const BenefitsPage = () => (
  <div className="pt-24 md:pt-32 pb-12 md:pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
        <span className="text-brand-gold font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3 md:mb-4 block">Nutrition Science</span>
        <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8">Why Kadaknath Eggs Are Healthier</h1>
        <p className="text-base md:text-xl text-gray-600">
          A deep dive into the nutritional powerhouse that is the black chicken egg.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
        {[
          { title: "Protein Power", val: "25% More", desc: "Higher protein density compared to regular eggs, essential for tissue repair.", icon: <Dumbbell className="md:w-8 md:h-8" /> },
          { title: "Cholesterol", val: "< 1%", desc: "Extremely low cholesterol levels make it safe for heart patients.", icon: <Heart className="md:w-8 md:h-8" /> },
          { title: "Iron Rich", val: "High Iron", desc: "Significantly higher iron content helps boost hemoglobin levels.", icon: <Zap className="md:w-8 md:h-8" /> }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl border border-gray-100 shadow-xl text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-gold/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-brand-gold">
              {item.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
            <div className="text-2xl md:text-3xl font-bold text-brand-black mb-3 md:mb-4">{item.val}</div>
            <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <ProteinCalculator />
      </div>

      <div className="space-y-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Perfect for Fitness & Athletes</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For those who push their bodies, Kadaknath eggs provide the high-quality protein and essential amino acids needed for rapid muscle recovery and sustained energy.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-brand-black font-medium">
                <CheckCircle2 className="text-brand-green" size={20} /> Post-workout recovery
              </li>
              <li className="flex items-center gap-3 text-brand-black font-medium">
                <CheckCircle2 className="text-brand-green" size={20} /> Lean muscle building
              </li>
              <li className="flex items-center gap-3 text-brand-black font-medium">
                <CheckCircle2 className="text-brand-green" size={20} /> Natural stamina booster
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/Images/b1.png" alt="Fitness" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Ideal for Growing Children</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The rich iron and mineral content in Kadaknath eggs supports brain development and strengthens the immune system in children, providing a natural shield against common illnesses.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-brand-black font-medium">
                <CheckCircle2 className="text-brand-green" size={20} /> Enhances cognitive function
              </li>
              <li className="flex items-center gap-3 text-brand-black font-medium">
                <CheckCircle2 className="text-brand-green" size={20} /> Boosts natural immunity
              </li>
              <li className="flex items-center gap-3 text-brand-black font-medium">
                <CheckCircle2 className="text-brand-green" size={20} /> Rich in Vitamin B1, B2, B6, B12
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/Images/img1.png" alt="Children Health" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProductsPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Products</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Freshness in Every Pack</h1>
        <p className="text-xl text-gray-600">
          Choose the right pack for your lifestyle. All eggs are collected daily and quality-tested.
        </p>
      </div>
        <ProductPackSection/>

      <div className="mt-24">
        <SubscriptionSection />
      </div>

      <div className="mt-12 md:mt-24 p-8 md:p-12 bg-brand-white rounded-2xl md:rounded-[3rem] border border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-gold rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-black mb-4 md:mb-6">
            <ShoppingCart size={32} className="md:w-12 md:h-12" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Bulk Orders</h2>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6">
            Are you a gym owner, a nutritionist, or a retailer? We offer special bulk pricing and regular subscription models for businesses and high-volume consumers.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary inline-flex w-full md:w-auto py-3 md:py-4">
            Inquire for Bulk Pricing
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Common Questions</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Frequently Asked Questions</h1>
        </div>

        <div className="space-y-3 md:space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-5 md:px-8 py-4 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-sm md:text-lg text-brand-black pr-4">{faq.question}</span>
                <div className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''} shrink-0`}>
                  <ChevronRight size={20} className="text-brand-gold md:w-6 md:h-6" />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-8 pb-5 md:pb-8 text-xs md:text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center p-8 md:p-12 bg-brand-black text-white rounded-2xl md:rounded-[2.5rem]">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Still have questions?</h3>
          <p className="text-xs md:text-sm text-gray-400 mb-6 md:mb-8">We're here to help you understand the benefits of Kadaknath eggs better.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-3 md:py-4">
              Chat on WhatsApp
            </a>
            <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="btn-secondary border-white text-white hover:bg-white hover:text-brand-black py-3 md:py-4">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '', pack: 'Pack of 12' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '', pack: 'Pack of 12' });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">We'd Love to Hear From You</h1>
          <p className="text-xl text-gray-600">
            Order your pack of health today or ask us anything about our farm-fresh eggs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Phone & WhatsApp</p>
                      <p className="text-lg font-bold">{WHATSAPP_NUMBER}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Email Address</p>
                      <p className="text-lg font-bold">{CONTACT_EMAIL}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Location</p>
                      <p className="text-lg font-bold leading-tight">{CONTACT_ADDRESS}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Follow Our Journey</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 rounded-2xl bg-brand-white border border-gray-100 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-2xl bg-brand-white border border-gray-100 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-2xl bg-brand-white border border-gray-100 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] border border-gray-100 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-brand-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 md:px-5 py-3 md:py-4 bg-brand-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-gray-700">Interested In</label>
                <select
                  value={formState.pack}
                  onChange={(e) => setFormState({ ...formState, pack: e.target.value })}
                  className="w-full px-4 md:px-5 py-3 md:py-4 bg-brand-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all text-sm md:text-base"
                >
                  <option>Pack of 6</option>
                  <option>Pack of 12</option>
                  <option>Pack of 30</option>
                  <option>Bulk Inquiry</option>
                </select>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-xs md:text-sm font-bold text-gray-700">Your Message</label>
                <textarea
                  required
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 md:px-5 py-3 md:py-4 bg-brand-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all resize-none text-sm md:text-base"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-3 md:py-4 text-base md:text-lg">
                {submitted ? 'Message Sent!' : 'Send Message'}
                {!submitted && <ArrowRight size={18} className="md:w-5 md:h-5" />}
                {submitted && <CheckCircle2 size={18} className="text-brand-gold md:w-5 md:h-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main id="main-content" className="grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
            {activePage === 'about' && <AboutPage />}
            {activePage === 'benefits' && <BenefitsPage />}
            {activePage === 'products' && <ProductsPage />}
            {activePage === 'faq' && <FAQPage />}
            {activePage === 'contact' && <ContactPage />}
            {activePage === 'terms' && <TermsPage />}
            {activePage === 'privacy' && <PrivacyPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
      <Credits />
      <ScrollToTop />
      <WhatsAppButton />
      <Analytics />
    </div>
  );
}

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40 w-10 h-10 md:w-12 md:h-12 bg-brand-black text-brand-gold rounded-full flex items-center justify-center shadow-lg hover:bg-brand-gold hover:text-brand-black transition-all border border-brand-gold/20"
          aria-label="Scroll to top"
        >
          <ChevronRight size={24} className="-rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

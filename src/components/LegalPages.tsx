import React from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, CheckCircle2, AlertCircle, Clock, Truck, CreditCard, RefreshCw, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND_NAME, WHATSAPP_NUMBER, CONTACT_EMAIL, CONTACT_ADDRESS, FSSAI_LICENSE_NUMBER } from '../constants';

export const TermsPage = () => {
  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
              <FileText size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-black">Terms & Conditions</h1>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-brand-gold" /> 1. Introduction
              </h2>
              <p>
                Welcome to {BRAND_NAME}. By accessing our website or placing an order through our various channels (WhatsApp, Website, or Subscription), you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-brand-gold" /> 2. Products
              </h2>
              <p>
                Our Kadaknath eggs are natural, farm-fresh products. Due to the nature of the product, minor variations in size, weight, and shell color are normal and expected. We guarantee that all eggs provided are authentic Kadaknath eggs sourced from our licensed farms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <CreditCard size={20} className="text-brand-gold" /> 3. Orders & Payments
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Orders can be placed via our WhatsApp business account or the website contact form.</li>
                <li>An order is considered confirmed only after we send a confirmation message and receive the payment.</li>
                <li>We accept payments via UPI and other digital payment methods as specified during the checkout process.</li>
                <li>Pricing is subject to change based on market conditions, but confirmed orders will be honored at the booked price.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <Truck size={20} className="text-brand-gold" /> 4. Delivery Policy
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>We follow a weekly delivery schedule, with primary deliveries happening every Sunday.</li>
                <li>Bi-weekly delivery options are available for specific subscription plans.</li>
                <li>Delivery is currently limited to our serviceable regions. Please check availability for your area before ordering.</li>
                <li>While we strive for punctuality, delays may occur due to extreme weather, traffic, or unforeseen logistical challenges.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <RefreshCw size={20} className="text-brand-gold" /> 5. Subscription Terms
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Subscriptions require a monthly advance payment to secure your weekly supply.</li>
                <li>Deliveries are automated based on your chosen plan.</li>
                <li>You can pause your subscription for a week by notifying us at least 48 hours before the scheduled Sunday delivery.</li>
                <li>Plan modifications (upgrading or downgrading) will take effect from the next billing cycle.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-brand-gold" /> 6. Cancellations & Refunds
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>One-time orders can be cancelled within 12 hours of placement for a full refund.</li>
                <li>Subscription cancellations must be requested before the next billing cycle begins.</li>
                <li>Refunds for damaged products are provided in the form of replacements in the next delivery or a partial refund, provided photographic evidence is shared within 4 hours of delivery.</li>
                <li>Due to the perishable nature of eggs, we do not accept returns.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <Shield size={20} className="text-brand-gold" /> 7. Food Safety Disclaimer
              </h2>
              <p>
                {BRAND_NAME} is an FSSAI licensed business (Lic. No. {FSSAI_LICENSE_NUMBER}). We maintain the highest standards of hygiene during collection and packing. However, eggs are perishable items. Once delivered, the responsibility for proper storage (refrigeration) and safe consumption lies with the customer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <Clock size={20} className="text-brand-gold" /> 8. Limitation of Liability
              </h2>
              <p>
                Our liability is limited to the value of the products purchased. We are not liable for any indirect or consequential losses arising from the use of our products or website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <FileText size={20} className="text-brand-gold" /> 9. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, images, and logos, is the property of {BRAND_NAME} and is protected by Indian copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
                <Shield size={20} className="text-brand-gold" /> 10. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in our place of business registration.
              </p>
            </section>

            <section className="bg-brand-white p-6 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-bold text-brand-black mb-4">11. Contact Information</h2>
              <div className="space-y-3">
                <p className="flex items-center gap-3"><Mail size={18} className="text-brand-gold" /> {CONTACT_EMAIL}</p>
                <p className="flex items-center gap-3"><Phone size={18} className="text-brand-gold" /> {WHATSAPP_NUMBER}</p>
                <p className="flex items-start gap-3"><MapPin size={18} className="text-brand-gold mt-1" /> {CONTACT_ADDRESS}</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const PrivacyPage = () => {
  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-24 bg-brand-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold">
              <Shield size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-black">Privacy Policy</h1>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4">1. Introduction</h2>
              <p>
                At {BRAND_NAME}, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This policy outlines how we collect, use, and protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us when you place an order or contact us:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Name and contact details (Phone number, Email)</li>
                <li>Delivery address</li>
                <li>Order history and subscription details</li>
                <li>Communication data (WhatsApp chats or emails related to your orders)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To process and fulfill your orders and subscriptions.</li>
                <li>To coordinate deliveries with our logistics team.</li>
                <li>To provide customer support and respond to your inquiries.</li>
                <li>To send service updates, such as delivery confirmations or schedule changes.</li>
                <li>With your consent, to send promotional offers or news about our products.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4">4. Data Protection</h2>
              <p>
                We implement reasonable security practices and procedures to protect your personal data from unauthorized access, alteration, or disclosure. Access to your information is limited to employees and partners who need it to fulfill your orders.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4">5. Data Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We only share your name, address, and phone number with our delivery partners to ensure your eggs reach you safely.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4">6. Cookies & Analytics</h2>
              <p>
                Our website may use basic cookies to enhance your browsing experience and analyze website traffic. This data is used solely to improve our website performance and user experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4">7. Your Rights</h2>
              <p>
                You have the right to request access to the personal information we hold about you, or to ask for corrections or deletion of your data. To do so, please contact us via WhatsApp or email.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to external sites (like social media). We are not responsible for the privacy practices or content of these third-party websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-black mb-4">9. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically.
              </p>
            </section>

            <section className="bg-brand-white p-6 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-bold text-brand-black mb-4">10. Contact Information</h2>
              <p className="mb-4">If you have any questions about our privacy practices, please reach out to us:</p>
              <div className="space-y-3">
                <p className="flex items-center gap-3"><Mail size={18} className="text-brand-gold" /> {CONTACT_EMAIL}</p>
                <p className="flex items-center gap-3"><Phone size={18} className="text-brand-gold" /> {WHATSAPP_NUMBER}</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

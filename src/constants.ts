import { ProductPack, FAQItem, BenefitItem, ComparisonRow } from './types';

export const BRAND_NAME = "Kadak Kadaknath Eggs";
export const TAGLINE = "Best Kadaknath Eggs in Bengaluru – Premium Nutrition";
export const WHATSAPP_NUMBER = "+918123232781";
export const CONTACT_EMAIL = "kadaknatheggs001@gmail.com";
export const CONTACT_ADDRESS = "Electronic city, Bangalore, India 560100";

export const SERVICE_AREAS = [
  "JP Nagar",
  "BTM Layout",
  "Jayanagar",
  "Electronic City",
  "HSR Layout",
  "Koramangala",
  "Indiranagar",
  "Whitefield"
];

export const SEO_KEYWORDS = [
  "Best eggs in Bengaluru",
  "Kadaknath eggs JP Nagar",
  "Kadaknath eggs BTM Layout",
  "Kadaknath eggs Jayanagar",
  "Premium black chicken eggs Bangalore",
  "High protein eggs online Bengaluru"
];
export const FSSAI_LICENSE_NUMBER = "21225010006054";
export const FSSAI_LICENSE_TEXT = "FSSAI Licensed Food Business";

export const PRODUCT_PACKS: ProductPack[] = [
  {
    id: 'pack-6',
    name: 'Pack of 6',
    count: 6,
    bestFor: 'Individuals & Couples',
    description: 'Perfect for a healthy breakfast routine for individuals or small households.',
    pricePerEgg: 25,
    totalPrice: 150,
    deliveryNote: 'Small delivery charge may apply depending on location',
    image: '/Images/6.jpeg'
  },
  {
    id: 'pack-12',
    name: 'Pack of 12',
    count: 12,
    bestFor: 'Health-Conscious Families',
    description: 'Our popular choice for families focusing on immunity and daily nutrition.',
    pricePerEgg: 25,
    totalPrice: 300,
    deliveryNote: 'Small delivery charge may apply depending on location',
    image: '/Images/12.jpeg'
  },
  {
    id: 'pack-30',
    name: 'Pack of 30',
    count: 30,
    bestFor: 'Athletes & Fitness Enthusiasts',
    description: 'Bulk pack ideal for fitness enthusiasts and families following a high-protein diet.',
    pricePerEgg: 23,
    totalPrice: 690,
    deliveryNote: 'Free Delivery',
    isBestValue: true,
    image: '/Images/30.jpeg'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What are Kadaknath eggs?",
    answer: "Kadaknath eggs are laid by the Kadaknath chicken, an Indian breed native to Madhya Pradesh. They are famous for their dark shells and significantly higher nutritional value compared to regular eggs."
  },
  {
    question: "Why are they black?",
    answer: "The Kadaknath breed has a unique genetic trait called fibromelanosis, which causes high melanin deposition. This results in black feathers, black meat, and dark-tinted eggshells."
  },
  {
    question: "Are they healthier than regular eggs?",
    answer: "Yes. Kadaknath eggs contain about 25% more protein, significantly lower cholesterol (0.73-1.05% vs 13-25% in regular eggs), and are much richer in iron and essential amino acids."
  },
  {
    question: "How fresh are the eggs?",
    answer: "We collect eggs daily from our farms. They are hygienically handled, quality-checked, and delivered to you within 24-48 hours of collection to ensure maximum freshness."
  },
  {
    question: "Where do you deliver?",
    answer: "We currently deliver across major metropolitan areas. Please check our contact page or message us on WhatsApp to confirm delivery to your specific pincode."
  },
  {
    question: "How can I order?",
    answer: "You can order directly through our website's contact form, or for faster service, simply click the WhatsApp button to chat with our team."
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: "Protein Content", kadaknath: "High (~25% more)", regular: "Standard" },
  { feature: "Cholesterol", kadaknath: "Very Low (0.73-1.05%)", regular: "High (13-25%)" },
  { feature: "Iron Content", kadaknath: "Rich in Iron", regular: "Low" },
  { feature: "Fat Content", kadaknath: "Low Fat", regular: "Higher Fat" },
  { feature: "Taste", kadaknath: "Rich & Creamy", regular: "Standard" },
  { feature: "Health Benefits", kadaknath: "Boosts Immunity & Stamina", regular: "Basic Nutrition" }
];

export const KADAKNATH_NUTRITION = {
  protein: 7.2,
  iron: 1.4,
  cholesterol: 170
};

export const SUBSCRIPTION_PLANS = [
  {
    id: 'family-plan',
    name: 'Family Plan',
    label: 'BEST VALUE',
    description: 'Best for families and regular egg consumption.',
    deliveryFrequency: 'Weekly delivery',
    deliveryDetails: '12 Eggs / Week',
    monthlyEggs: 48,
    pricePerEgg: 22,
    monthlyTotal: 1056,
    regularPrice: 1200,
    savings: 144,
    benefits: [
      'Free delivery',
      'Fresh eggs every week',
      'Perfect for healthy families'
    ]
  },
  {
    id: 'smart-family-plan',
    name: 'Smart Family Plan',
    label: 'FLEXIBLE PLAN',
    description: 'Perfect for small families who need fewer eggs.',
    deliveryFrequency: 'Twice per month',
    deliveryDetails: '1st Sunday + 3rd Sunday (30 Eggs / delivery)',
    monthlyEggs: 60,
    pricePerEgg: 20,
    monthlyTotal: 1200,
    regularPrice: 1500,
    savings: 300,
    benefits: [
      'Free delivery',
      'Fresh eggs twice per month',
      'Ideal for smaller households'
    ]
  },
  {
    id: 'fitness-plan',
    name: 'Fitness Plan',
    label: 'MOST POPULAR',
    description: 'Best for gym users and high-protein diets.',
    deliveryFrequency: 'Weekly delivery',
    deliveryDetails: '30 Eggs / Week',
    monthlyEggs: 120,
    pricePerEgg: 20,
    monthlyTotal: 2400,
    regularPrice: 2640,
    savings: 240,
    benefits: [
      'Free delivery',
      'High-protein nutrition',
      'Ideal for fitness routines'
    ]
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Higher Protein",
    description: "Essential for muscle repair and growth, especially for fitness enthusiasts.",
    icon: "Dumbbell"
  },
  {
    title: "Lower Cholesterol",
    description: "Heart-friendly alternative for those monitoring their lipid levels.",
    icon: "Heart"
  },
  {
    title: "Rich in Iron",
    description: "Helps in preventing anemia and boosting energy levels naturally.",
    icon: "Zap"
  },
  {
    title: "Boost Immunity",
    description: "Packed with antioxidants and vitamins that strengthen your body's defense.",
    icon: "ShieldCheck"
  }
];

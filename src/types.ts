export interface ProductPack {
  id: string;
  name: string;
  count: number;
  bestFor: string;
  description: string;
  pricePerEgg: number;
  totalPrice: number;
  deliveryNote: string;
  isBestValue?: boolean;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface ComparisonRow {
  feature: string;
  kadaknath: string;
  regular: string;
}

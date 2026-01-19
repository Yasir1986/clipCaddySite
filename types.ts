import { IconType } from 'react-icons';

export interface Clip {
  id: string;
  content: string;
  type: 'text' | 'image' | 'link' | 'code';
  timestamp: Date;
  tags: string[];
  isPinned: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isBestValue?: boolean;
}

export enum ViewMode {
  LANDING = 'LANDING',
  APP_DEMO = 'APP_DEMO'
}

export interface Feature {
  title: string;
  desc: string;
  color: string;
  icon: IconType;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ProFeature {
  icon: IconType;
  text: string;
}
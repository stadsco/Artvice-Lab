import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  doctorName: string;
  role: string;
  quote: string;
  image: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}
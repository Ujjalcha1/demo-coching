import type { LucideIcon } from "lucide-react";

export type IconType = LucideIcon;

export type Course = {
  title: string;
  description: string;
  icon: IconType;
  accent: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Teacher = {
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  image: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type Faq = {
  question: string;
  answer: string;
};

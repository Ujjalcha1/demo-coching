import {
  Atom,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Calculator,
  Code2,
  FlaskConical,
  GraduationCap,
  Headphones,
  Languages,
  Laptop,
  LineChart,
  MessageSquareText,
  MonitorPlay,
  PenTool,
  School,
  Sparkles,
  Trophy,
  Users,
  Video
} from "lucide-react";
import type { Course, Faq, Stat, Teacher, Testimonial } from "@/types/site";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Teachers", href: "#teachers" },
  { label: "Admission", href: "#admission" },
  { label: "Contact", href: "#contact" }
];

export const heroBadges = [
  { label: "98% Success Rate", icon: Trophy },
  { label: "Live + Recorded Classes", icon: MonitorPlay },
  { label: "1:1 Mentor Support", icon: Users }
];

export const stats: Stat[] = [
  { label: "Successful Students", value: 12000, suffix: "+" },
  { label: "Expert Teachers", value: 48, suffix: "+" },
  { label: "Years Experience", value: 18, suffix: "+" },
  { label: "Courses Completed", value: 700, suffix: "+" }
];

export const courses: Course[] = [
  {
    title: "Mathematics",
    description: "Concept mastery, problem solving drills, and exam-focused practice.",
    icon: Calculator,
    accent: "from-blue-500 to-cyan-300"
  },
  {
    title: "Science",
    description: "Physics, Chemistry, and Biology taught with visual experiments.",
    icon: FlaskConical,
    accent: "from-cyan-400 to-emerald-300"
  },
  {
    title: "English",
    description: "Grammar, literature, writing skills, and confidence-led expression.",
    icon: BookOpen,
    accent: "from-indigo-500 to-sky-300"
  },
  {
    title: "Computer Science",
    description: "Computing fundamentals, logic, applications, and school curriculum.",
    icon: Laptop,
    accent: "from-blue-600 to-violet-400"
  },
  {
    title: "Competitive Exam Preparation",
    description: "Structured test strategy for foundation, boards, olympiads, and entrance exams.",
    icon: Trophy,
    accent: "from-orange-400 to-yellow-300"
  },
  {
    title: "Spoken English",
    description: "Fluency practice, pronunciation, vocabulary, and real conversation labs.",
    icon: Languages,
    accent: "from-sky-400 to-cyan-200"
  },
  {
    title: "Programming Courses",
    description: "Python, JavaScript, web development, and project-based coding skills.",
    icon: Code2,
    accent: "from-violet-500 to-blue-400"
  },
  {
    title: "Commerce",
    description: "Accounts, economics, business studies, and practical case analysis.",
    icon: BriefcaseBusiness,
    accent: "from-amber-400 to-orange-400"
  },
  {
    title: "Arts",
    description: "Humanities coaching with writing frameworks and critical thinking.",
    icon: PenTool,
    accent: "from-rose-400 to-orange-300"
  },
  {
    title: "Online Classes",
    description: "Interactive digital classrooms, recordings, doubt rooms, and progress dashboards.",
    icon: Video,
    accent: "from-blue-500 to-teal-300"
  }
];

export const chooseUs = [
  { title: "Experienced Teachers", icon: GraduationCap, body: "Subject experts who translate hard topics into clear mental models." },
  { title: "Small Batch Sizes", icon: Users, body: "Focused attention, active participation, and faster doubt resolution." },
  { title: "Smart Classrooms", icon: MonitorPlay, body: "Visual lessons, digital boards, and engaging classroom technology." },
  { title: "Personalized Guidance", icon: Brain, body: "Individual learning maps built from diagnostics and weekly reviews." },
  { title: "Online/Offline Support", icon: Headphones, body: "Hybrid learning access with teacher support beyond class hours." },
  { title: "Regular Mock Tests", icon: BadgeCheck, body: "Exam simulations with analytics, answer review, and improvement plans." },
  { title: "Performance Tracking", icon: BarChart3, body: "Transparent progress dashboards for students and parents." },
  { title: "Scholarship Support", icon: Sparkles, body: "Merit-based support and guidance for high-potential learners." }
];

export const achievements = [
  { title: "Board Toppers", value: "245+", icon: Trophy },
  { title: "Avg. Score Growth", value: "37%", icon: LineChart },
  { title: "Parent Satisfaction", value: "4.9/5", icon: MessageSquareText },
  { title: "Olympiad Selections", value: "530+", icon: Atom }
];

export const teachers: Teacher[] = [
  {
    name: "Dr. Aisha Mehra",
    subject: "Mathematics",
    qualification: "PhD, Applied Mathematics",
    experience: "14 years",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Rahul Sen",
    subject: "Physics & Competitive Exams",
    qualification: "M.Tech, IIT Alumni",
    experience: "11 years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Maya Kapoor",
    subject: "English & Communication",
    qualification: "MA English, CELTA",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Arjun Rao",
    subject: "Computer Science",
    qualification: "B.Tech, Full-stack Mentor",
    experience: "9 years",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Ananya S.",
    role: "Class 12 Science",
    quote: "The weekly analytics made my weak areas obvious. I moved from nervous preparation to a clear score plan.",
    rating: 5
  },
  {
    name: "Rohan's Parent",
    role: "Parent Review",
    quote: "Teachers stayed connected with us and gave practical feedback after every assessment. It felt premium and personal.",
    rating: 5
  },
  {
    name: "Kabir M.",
    role: "Programming Batch",
    quote: "I built real projects in class and finally understood logic instead of memorizing code.",
    rating: 5
  }
];

export const materials = [
  { title: "Board Revision Notes", type: "PDF Pack", icon: BookOpen },
  { title: "Weekly Mock Test Series", type: "Timed Practice", icon: BadgeCheck },
  { title: "Formula Sprint Sheets", type: "Quick Review", icon: Calculator },
  { title: "Coding Project Kits", type: "Hands-on Lab", icon: Code2 }
];

export const faqs: Faq[] = [
  {
    question: "Do you offer both online and offline classes?",
    answer: "Yes. Students can choose classroom batches, live online sessions, or hybrid access with recordings and doubt support."
  },
  {
    question: "How do you track student progress?",
    answer: "We use diagnostics, weekly tests, attendance insights, mentor notes, and parent updates to keep progress visible."
  },
  {
    question: "Can students change courses after enrollment?",
    answer: "Course changes are available after an academic counseling review so the student moves into the right batch level."
  },
  {
    question: "Are demo classes available?",
    answer: "Yes. Students can attend a demo class and speak with a mentor before confirming enrollment."
  }
];

export const videos = [
  "https://www.youtube.com/watch?v=5MgBikgcWnY",
  "https://www.youtube.com/watch?v=H14bBuluwB8",
  "https://www.youtube.com/watch?v=ZXsQAXx_ao0"
];

export const contactMailto =
  "mailto:coaching@email.com?subject=Course%20Inquiry&body=Hello%20Coaching%20Institute,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20courses.%0A%0AName:%0APhone:%0ACourse:%0AMessage:%0A";

export const instituteSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Astra Prime Coaching Institute",
  url: "https://example.com",
  email: "coaching@email.com",
  telephone: "+91 98765 43210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Academic Avenue, Knowledge Park",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700001",
    addressCountry: "IN"
  },
  sameAs: ["https://www.facebook.com", "https://www.instagram.com", "https://www.linkedin.com"]
};

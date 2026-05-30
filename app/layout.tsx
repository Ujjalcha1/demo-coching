import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { instituteSchema } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astra Prime Coaching Institute | Premium Tuition & Exam Preparation",
  description:
    "A premium coaching institute for school tuition, competitive exams, programming, spoken English, and hybrid academic mentoring.",
  keywords: [
    "coaching institute",
    "tuition classes",
    "competitive exam preparation",
    "online classes",
    "school tuition",
    "programming courses"
  ],
  openGraph: {
    title: "Astra Prime Coaching Institute",
    description: "Shape your future with quality education, expert teachers, and measurable academic growth.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Students learning in a modern coaching institute"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(instituteSchema) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  ArrowUp,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  PlayCircle,
  Send,
  Sparkles,
  Star,
  Sun,
  X
} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import {
  achievements,
  chooseUs,
  contactMailto,
  courses,
  faqs,
  heroBadges,
  materials,
  navItems,
  stats,
  teachers,
  testimonials,
  videos
} from "@/data/site";
import { useLenis } from "@/hooks/use-lenis";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

const emptyAdmissionForm = {
  name: "",
  phone: "",
  studentClass: "",
  course: "",
  mode: "",
  time: ""
};

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const counter = { value: 0 };
      gsap.to(counter, {
        value,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 86%",
          once: true
        },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = `${Math.round(counter.value).toLocaleString()}${suffix}`;
        }
      });
    }, ref);

    return () => ctx.revert();
  }, [suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}

function SectionIntro({
  eyebrow,
  title,
  body,
  align = "center"
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("reveal mx-auto max-w-3xl", align === "center" ? "text-center" : "mx-0 text-left")}>
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-4 py-2 text-sm font-bold text-royal dark:bg-blue-500/10">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-extrabold tracking-normal text-navy dark:text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{body}</p>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-2xl dark:bg-navy/70">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-royal to-cyan-300 text-white shadow-glow">
            <BookOpenCheck className="h-6 w-6" />
          </span>
          <span>
            <span className="block font-heading text-lg font-extrabold text-navy dark:text-white">Astra Prime</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-royal">Coaching Institute</span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-royal dark:text-slate-200 dark:hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          {mounted ? (
            <Button
              aria-label="Toggle theme"
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          ) : null}
          <Button asChild variant="gold">
            <Link href="#admission">Enroll Now</Link>
          </Button>
        </div>
        <Button className="lg:hidden" variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </nav>
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        className="fixed inset-0 z-50 bg-navy/50 backdrop-blur-sm lg:hidden"
      >
        <motion.div
          initial={false}
          animate={{ x: open ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
          className="ml-auto flex h-screen w-[84%] max-w-sm flex-col bg-white p-6 shadow-2xl dark:bg-navy"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-heading text-xl font-extrabold">Astra Prime</span>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 font-semibold hover:bg-blue-50 dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between rounded-lg bg-blue-50 p-4 dark:bg-white/10">
            <span className="font-semibold">Dark mode</span>
            <Switch checked={theme === "dark"} onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy pt-28 text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
      >
        <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(167,243,255,0.26),transparent_30%),linear-gradient(110deg,rgba(7,26,61,0.96),rgba(7,26,61,0.72)_48%,rgba(29,78,216,0.55))]" />
      <div className="parallax-blob absolute left-[8%] top-32 h-32 w-32 rounded-full bg-cyan-300/20 blur-2xl" />
      <div className="parallax-blob absolute bottom-24 right-[12%] h-48 w-48 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="hero-reveal mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-sunshine" />
            Premium hybrid tuition for ambitious learners
          </p>
          <h1 className="hero-title max-w-4xl font-heading text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            Shape Your Future With Quality Education
          </h1>
          <p className="hero-reveal mt-6 max-w-2xl text-lg leading-8 text-blue-50/85 sm:text-xl">
            Expert mentors, smart classrooms, exam analytics, and personal guidance designed to turn daily study into measurable success.
          </p>
          <div className="hero-reveal mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="gold">
              <Link href="#admission">
                Enroll Now <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#courses">
                Explore Courses <PlayCircle className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="hero-reveal mt-10 grid gap-3 sm:grid-cols-3">
            {heroBadges.map((badge) => (
              <div key={badge.label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                <badge.icon className="mb-3 h-6 w-6 text-sunshine" />
                <p className="text-sm font-bold">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative hidden lg:block"
        >
          <div className="premium-border rounded-lg">
            <div className="glass rounded-lg p-4">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1100&q=80"
                alt="Students learning in a premium classroom"
                width={900}
                height={700}
                priority
                className="h-[560px] rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-8 rounded-lg bg-white p-5 text-navy shadow-2xl">
            <p className="text-sm font-bold text-slate-500">Admissions Open</p>
            <p className="font-heading text-3xl font-black">2026</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-academic-grid bg-[length:42px_42px] opacity-60" />
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="reveal image-scale relative">
          <Image
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1100&q=80"
            alt="Institute campus and students"
            width={900}
            height={720}
            className="rounded-lg object-cover shadow-2xl"
          />
          <div className="absolute -bottom-7 right-5 rounded-lg bg-navy p-6 text-white shadow-glow">
            <p className="text-sm text-cyan-100">Learning philosophy</p>
            <p className="font-heading text-2xl font-black">Clarity. Practice. Confidence.</p>
          </div>
        </div>
        <div>
          <SectionIntro
            align="left"
            eyebrow="About the institute"
            title="An academic environment where students feel guided, challenged, and seen."
            body="Astra Prime blends disciplined teaching with modern mentorship. Every program is built around concept clarity, active practice, performance feedback, and parent communication."
          />
          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="reveal premium-border">
                <CardContent>
                  <p className="font-heading text-3xl font-black text-royal">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="bg-white py-24 dark:bg-[#071326]">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Courses"
          title="Premium programs for school success, exams, language, and future-ready skills."
          body="Choose from focused academic courses, competitive preparation, spoken English, online classes, and project-led programming."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {courses.map((course) => (
            <motion.article
              key={course.title}
              whileHover={{ y: -8 }}
              className="course-card premium-border group rounded-lg bg-white p-5 shadow-lg shadow-blue-950/5 dark:bg-white/[0.06]"
            >
              <div className={cn("mb-5 grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br text-white shadow-lg", course.accent)}>
                <course.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-extrabold text-navy dark:text-white">{course.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{course.description}</p>
              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 dark:from-navy dark:to-[#071326]">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Why choose us"
          title="A coaching experience engineered for trust, attention, and measurable progress."
          body="From batch planning to scholarship support, each layer is designed to keep students motivated and families informed."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {chooseUs.map((item) => (
            <Card key={item.title} className="reveal group overflow-hidden">
              <CardContent>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-blue-50 text-royal transition group-hover:bg-royal group-hover:text-white dark:bg-white/10">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="parallax-blob absolute right-0 top-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionIntro
            align="left"
            eyebrow="Results"
            title="Achievement stories backed by consistent academic systems."
            body="Students improve when teaching, practice, feedback, and mentorship work together. Our rank holders and growth stories reflect that rhythm."
          />
          <div className="mt-10 grid grid-cols-2 gap-4">
            {achievements.map((item) => (
              <div key={item.title} className="reveal rounded-lg border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <item.icon className="mb-4 h-7 w-7 text-sunshine" />
                <p className="font-heading text-3xl font-black">{item.value}</p>
                <p className="mt-2 text-sm text-blue-100">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal grid gap-4 sm:grid-cols-2">
          {[
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"
          ].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Successful students"
              width={720}
              height={860}
              className={cn("h-[430px] rounded-lg object-cover shadow-2xl", index === 1 && "sm:mt-12")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Video showcase"
          title="Demo classes, student motivation, and bite-sized learning previews."
          body="Watch how expert explanation, practical examples, and classroom energy make difficult topics easier to approach."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {videos.map((video, index) => (
            <Card key={video} className="reveal overflow-hidden">
              <div className="aspect-video bg-navy">
                <ReactPlayer url={video} width="100%" height="100%" light controls />
              </div>
              <CardContent>
                <p className="font-heading text-lg font-extrabold">Class Preview {index + 1}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Interactive learning sample with expert-led explanation.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Teachers() {
  return (
    <section id="teachers" className="bg-white py-24 dark:bg-[#071326]">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Faculty"
          title="Meet the mentors who make learning sharper, calmer, and more personal."
          body="Our teachers combine subject mastery with student psychology, exam strategy, and long-term mentorship."
        />
        <div className="teacher-grid mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <Card key={teacher.name} className="teacher-card overflow-hidden">
              <Image src={teacher.image} alt={teacher.name} width={720} height={840} className="h-72 w-full object-cover" />
              <CardContent>
                <p className="font-heading text-xl font-extrabold">{teacher.name}</p>
                <p className="mt-1 font-semibold text-royal">{teacher.subject}</p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{teacher.qualification}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-royal dark:bg-white/10">{teacher.experience}</span>
                  <div className="flex gap-2 text-slate-400">
                    <Linkedin className="h-4 w-4" />
                    <Instagram className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 dark:from-navy dark:to-[#071326]">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Testimonials"
          title="Trusted by students and parents who want clarity, care, and results."
          body="Real stories from families who experienced structured support, stronger confidence, and visible progress."
        />
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <Card className="h-full">
                  <CardContent>
                    <div className="mb-5 flex gap-1 text-sunshine">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="min-h-32 text-lg leading-8 text-slate-700 dark:text-slate-200">"{item.quote}"</p>
                    <div className="mt-8 border-t border-blue-950/10 pt-5 dark:border-white/10">
                      <p className="font-heading font-extrabold">{item.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function Admission() {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState(emptyAdmissionForm);
  const courseOptions = useMemo(() => courses.map((course) => course.title), []);

  const updateField = (field: keyof typeof emptyAdmissionForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailBody = [
      "Hello Astra Prime Coaching Institute,",
      "",
      "I would like to submit an enrollment interest with the following details:",
      "",
      `Student name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Class / Grade: ${form.studentClass}`,
      `Preferred course: ${form.course}`,
      `Learning mode: ${form.mode || "Not specified"}`,
      `Preferred time: ${form.time || "Not specified"}`
    ].join("\n");

    window.location.href = `mailto:coaching@email.com?subject=${encodeURIComponent(
      "Enrollment Interest"
    )}&body=${encodeURIComponent(emailBody)}`;

    setForm(emptyAdmissionForm);
    setSuccess(true);
    window.setTimeout(() => setSuccess(false), 3500);
  };

  return (
    <section id="admission" className="relative overflow-hidden py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionIntro
          align="left"
          eyebrow="Admissions open"
          title="Start with a course consultation and a clear learning roadmap."
          body="Share a few details and our academic counselor will help match the student to the right batch, teacher, and study plan."
        />
        <Card className="reveal premium-border">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Student name</Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="class">Class / Grade</Label>
                  <Input
                    id="class"
                    name="class"
                    value={form.studentClass}
                    onChange={(event) => updateField("studentClass", event.target.value)}
                    placeholder="Class 10"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Preferred course</Label>
                <Select value={form.course} onValueChange={(value) => updateField("course", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courseOptions.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="mode">Learning mode</Label>
                  <Input
                    id="mode"
                    name="mode"
                    value={form.mode}
                    onChange={(event) => updateField("mode", event.target.value)}
                    placeholder="Online / Offline / Hybrid"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Preferred time</Label>
                  <Input
                    id="time"
                    name="time"
                    value={form.time}
                    onChange={(event) => updateField("time", event.target.value)}
                    placeholder="Evening batch"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" variant="gold" className="mt-2">
                Submit Enrollment Interest <Send className="h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: success ? 1 : 0, y: success ? 0 : 20, scale: success ? 1 : 0.96 }}
        className="pointer-events-none fixed bottom-8 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg bg-navy p-5 text-white shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-7 w-7 text-cyan-300" />
          <div>
            <p className="font-heading font-extrabold">Enrollment interest received</p>
            <p className="text-sm text-blue-100">Our counselor will contact you shortly.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StudyMaterials() {
  return (
    <section className="bg-white py-24 dark:bg-[#071326]">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Study materials"
          title="Premium notes, mock tests, and resources built for focused revision."
          body="Students receive concise study packs, timed practice, formula reviews, and project resources aligned with their program."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {materials.map((item) => (
            <Card key={item.title} className="reveal group">
              <CardContent>
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br from-royal to-cyan-300 text-white shadow-glow">
                  <item.icon className="h-7 w-7" />
                </div>
                <p className="font-heading text-xl font-extrabold">{item.title}</p>
                <p className="mt-2 text-sm font-semibold text-royal">{item.type}</p>
                <Button className="mt-6 w-full" variant="secondary">
                  Preview Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionIntro
          align="left"
          eyebrow="FAQ"
          title="Clear answers before you begin."
          body="The most common questions from students and parents about batches, progress tracking, and demo classes."
        />
        <Card className="reveal">
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-navy py-24 text-white">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Contact"
          title="Visit the institute or email us for course guidance."
          body="Our academic office is open through the week for counseling, admissions, demo classes, and parent consultations."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-white/10 text-white">
            <CardContent className="space-y-6">
              {[
                { icon: MapPin, title: "Address", body: "Academic Avenue, Knowledge Park, Kolkata 700001" },
                { icon: Phone, title: "Phone", body: "+91 98765 43210, +91 90000 12345" },
                { icon: Clock3, title: "Opening hours", body: "Monday to Saturday, 8:00 AM - 8:00 PM" }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/10 text-sunshine">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-heading font-extrabold">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-blue-100">{item.body}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 pt-2">
                {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <Button key={index} variant="outline" size="icon" aria-label="Social profile">
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
              <Button asChild size="lg" variant="gold" className="w-full">
                <a href={contactMailto}>
                  Contact via Email <Mail className="h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
          <div className="overflow-hidden rounded-lg border border-white/10 shadow-2xl">
            <iframe
              title="Astra Prime map"
              src="https://www.google.com/maps?q=Kolkata%20India&output=embed"
              className="h-[460px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/919876543210?text=Hello%20Astra%20Prime,%20I%20want%20to%20know%20about%20your%20courses."
        className="fixed bottom-24 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="h-6 w-6" />
      </a>
      <motion.button
        initial={false}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 10, pointerEvents: showTop ? "auto" : "none" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-2xl dark:bg-white dark:text-navy"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </>
  );
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      gsap.to(ref.current, { x: event.clientX, y: event.clientY, duration: 0.45, ease: "power3.out" });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="cursor-glow" />;
}

function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0, pointerEvents: loading ? "auto" : "none" }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-[80] grid place-items-center bg-navy text-white"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border border-white/15 border-t-sunshine"
        >
          <BookOpenCheck className="h-7 w-7" />
        </motion.div>
        <p className="font-heading text-xl font-extrabold">Preparing your learning space</p>
      </div>
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return <motion.div className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-royal via-cyan-300 to-sunshine" style={{ scaleX }} />;
}

export function HomePage() {
  useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: 60, opacity: 0, duration: 1, ease: "power4.out" });
      gsap.from(".hero-reveal", { y: 28, opacity: 0, duration: 0.85, stagger: 0.12, delay: 0.25, ease: "power3.out" });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 46,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%" }
        });
      });
      gsap.utils.toArray<HTMLElement>(".image-scale").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.94 },
          { scale: 1, scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true } }
        );
      });
      gsap.utils.toArray<HTMLElement>(".parallax-blob").forEach((element) => {
        gsap.to(element, {
          yPercent: -35,
          ease: "none",
          scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true }
        });
      });
      gsap.from(".teacher-card", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: { trigger: ".teacher-grid", start: "top 82%" }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Results />
        <VideoShowcase />
        <Teachers />
        <Testimonials />
        <Admission />
        <StudyMaterials />
        <FAQ />
        <Contact />
      </main>
      <FloatingActions />
    </>
  );
}

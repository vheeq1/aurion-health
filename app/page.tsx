"use client";
import { motion } from "framer-motion";
import { ArrowRight, Brain, HeartPulse, Building2, Stethoscope, ShieldCheck, Mail, Globe, Phone, BarChart3, Database, Activity, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "AI & Data Analytics Consulting",
    description:
      "Helping health agencies use predictive and diagnostic AI models for improved decisions.",
    icon: Brain,
  },
  {
    title: "Health Information Systems",
    description:
      "Integrating AI-powered analytics and automation into DHIS2, EMRs, and other electronic health systems.",
    icon: Database,
  },
  {
    title: "Telemedicine & Patient Support AI",
    description:
      "Developing chatbots, voice assistants, and remote monitoring tools for better patient engagement.",
    icon: HeartPulse,
  },
  {
    title: "Public Health Intelligence",
    description:
      "Using AI to detect, predict, and respond to disease outbreaks through smart data analytics.",
    icon: Activity,
  },
  {
    title: "Hospital Operations Optimization",
    description:
      "Deploying AI systems for resource allocation, inventory control, and patient flow efficiency.",
    icon: BarChart3,
  },
  {
    title: "Training & Capacity Building",
    description:
      "Empowering healthcare professionals, policymakers, and data scientists through AI education programs.",
    icon: ShieldCheck,
  },
];

const clients = [
  "Federal Ministry of Health (FMoH)",
  "National Primary Health Care Development Agency (NPHCDA)",
  "Nigeria Centre for Disease Control (NCDC)",
  "State Ministries of Health",
  "Teaching Hospitals & Federal Medical Centres",
  "International Development Partners",
];

const stats = [
  { value: "AI", label: "Driven healthcare solutions" },
  { value: "Gov", label: "Institutional and public sector focus" },
  { value: "24/7", label: "Digital care and analytics potential" },
  { value: "Africa", label: "Long-term innovation vision" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

export default function AurionHealthWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.png" alt="Aurion Health Logo" className="h-11 w-auto" />
            <div>
              <p className="text-lg font-bold tracking-tight">Aurion Health</p>
              <p className="text-xs text-slate-500">AI health innovation company</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <a href="#about" className="transition hover:text-emerald-700">About</a>
            <a href="#services" className="transition hover:text-emerald-700">Services</a>
            <a href="#clients" className="transition hover:text-emerald-700">Clients</a>
            <a href="#vision" className="transition hover:text-emerald-700">Vision</a>
            <a href="#contact" className="transition hover:text-emerald-700">Contact</a>
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="rounded-2xl bg-slate-900 px-5 shadow-lg">
              <a href="#contact">Start a conversation</a>
            </Button>
          </div>

          <button className="rounded-2xl border border-slate-200 p-2 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.12),_transparent_30%)]">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                <Building2 className="h-4 w-4" />
                Nigerian-based healthcare AI consultancy
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl xl:text-7xl">
                A structured, premium digital presence for a future-ready health company.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Aurion Health Limited transforms healthcare through data-driven innovation, smart technologies, public health intelligence, and practical AI systems built for real institutional impact.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-2xl bg-emerald-600 px-6 shadow-xl shadow-emerald-200 hover:bg-emerald-700">
                  <a href="#services">
                    Explore services <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl px-6">
                  <a href="#contact">Partner with us</a>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="rounded-3xl border-0 bg-white/80 shadow-lg shadow-slate-200/50 backdrop-blur">
                    <CardContent className="p-5">
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -left-6 top-12 h-24 w-24 rounded-full bg-emerald-200/60 blur-2xl" />
              <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-slate-200/70 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/60 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Healthcare intelligence</p>
                      <h3 className="mt-2 text-2xl font-semibold">Modern systems. Better outcomes.</h3>
                    </div>
                    <div className="rounded-2xl bg-emerald-500/20 p-3 text-emerald-300">
                      <Stethoscope className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4">
                    {[
                      "AI-powered analytics for public health and clinical decision-making",
                      "Digital tools that improve efficiency and patient support",
                      "Capacity building that drives long-term adoption",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
              <SectionTitle
                eyebrow="About Aurion"
                title="Built to bridge AI innovation and public health outcomes"
                text="Aurion Health Limited is dedicated to transforming the health sector through data-driven innovation, capacity building, and smart technologies across Nigeria."
              />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="grid gap-5 md:grid-cols-2">
              <Card className="rounded-[2rem] border-slate-200 shadow-sm">
                <CardContent className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Mission</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">Empower healthcare with AI tools and knowledge</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    To empower Nigeria’s healthcare ecosystem with cutting-edge AI tools and knowledge that improve public health outcomes and operational efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-slate-200 bg-slate-950 text-white shadow-sm">
                <CardContent className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Vision</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">Lead Africa’s AI health transformation</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    To be Africa’s leading AI-driven health innovation company, recognized for advancing data intelligence and healthcare transformation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
              <SectionTitle
                eyebrow="Services"
                title="Six focused solutions for modern healthcare delivery"
                text="A premium service structure designed for governments, institutions, hospitals, and development partners ready to adopt AI in practical ways."
              />
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <Card className="group h-full rounded-[2rem] border-0 bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <CardContent className="p-7">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:scale-105">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">{service.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="clients" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
              <SectionTitle
                eyebrow="Clients"
                title="Structured for government, institutional, and development partnerships"
                text="Aurion Health is positioned to support key stakeholders across the Nigerian health ecosystem and international development space."
              />
              <div className="mt-8 grid gap-3">
                {clients.map((client) => (
                  <div key={client} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm">
                    {client}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="h-full rounded-[2rem] border-0 bg-[linear-gradient(135deg,#0f172a,#064e3b)] text-white shadow-2xl shadow-emerald-100">
                <CardContent className="p-8 md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Strategic positioning</p>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight">Nigeria’s pioneer AI health consultancy</h3>
                  <p className="mt-5 text-sm leading-8 text-slate-200">
                    Aurion Health bridges the gap between artificial intelligence and public health outcomes. Its strong focus on capacity building and AI education supports sustainability and long-term adoption within healthcare institutions.
                  </p>
                  <div className="mt-8 grid gap-4">
                    {[
                      "Health sector innovation rooted in local institutional realities",
                      "Public health intelligence designed for faster and smarter decisions",
                      "Training-led implementation for sustainable long-term adoption",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-7 text-slate-100">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="vision" className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Future-ready company profile</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  This upgraded website now feels premium, modern, and investor-ready.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  The structure has been expanded beyond a simple corporate page into a more complete digital experience with stronger hierarchy, better visual sections, richer calls to action, smoother presentation, and a polished healthcare-tech brand direction.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="grid gap-4 md:grid-cols-2">
                {[
                  ["Premium design", "Layered cards, glassmorphism touches, stronger spacing, and modern layouts."],
                  ["Structured pages", "Clear sections for about, services, positioning, clients, and contact."],
                  ["Brand-ready", "Easy to add logo, exact brand colors, imagery, and company assets."],
                  ["Animation support", "Framer Motion transitions for a more polished user experience."],
                ].map(([title, desc]) => (
                  <Card key={title} className="rounded-[2rem] border border-white/10 bg-white/5 text-white">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#ecfdf5,#ffffff,#f8fafc)] p-8 shadow-2xl shadow-slate-200 md:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Contact</p>
                  <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                    Let’s build smarter healthcare systems together.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                    For partnerships, collaborations, and project inquiries, Aurion Health Limited is ready to support institutions looking to modernize health service delivery through AI and data-driven systems.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button className="rounded-2xl bg-slate-900 px-6">Request a consultation</Button>
                    <Button variant="outline" className="rounded-2xl px-6">Download profile</Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    { icon: Mail, label: "Email", value: "info@aurionhealth.ng" },
                    { icon: Globe, label: "Website", value: "www.aurionhealth.ng" },
                    { icon: Phone, label: "Phone", value: "+234 000 000 0000" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Card key={item.label} className="rounded-[2rem] border-0 bg-white shadow-lg shadow-slate-200/60">
                        <CardContent className="flex items-center gap-4 p-6">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500">{item.label}</p>
                            <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Aurion Health Limited. All rights reserved.</p>
          <p>Designed for a premium corporate healthcare-tech presence.</p>
        </div>
      </footer>
    </div>
  );
}

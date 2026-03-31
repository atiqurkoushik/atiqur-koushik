import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Server, Code, Zap, TrendingDown, BarChart3, Users, DollarSign } from "lucide-react";
import metaAdsPreview from "@/assets/meta-ads-preview.png";

const techStack = [
  {
    name: "Meta Ads",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.93 3.78-3.93 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
      </svg>
    ),
    color: "text-blue-500",
  },
  {
    name: "Conversions API",
    icon: <Server className="w-6 h-6" />,
    color: "text-green-400",
  },
  {
    name: "Pixel",
    icon: <Code className="w-6 h-6" />,
    color: "text-purple-400",
  },
];

const features = [
  {
    icon: Target,
    title: "Pixel Setup",
    subtitle: "Browser-Side Tracking",
    desc: "Complete Meta Pixel installation with custom event tracking for form submissions, page views, and candidate interactions across the hiring funnel.",
  },
  {
    icon: Server,
    title: "Conversions API (CAPI)",
    subtitle: "Server-Side Integration",
    desc: "Server-side event tracking via Conversions API for reliable data collection, bypassing ad blockers and browser restrictions for accurate attribution.",
  },
  {
    icon: Code,
    title: "Server-Side Data Tracking",
    subtitle: "Enhanced Data Quality",
    desc: "Dual-layer tracking combining Pixel and CAPI for deduplication, ensuring every form submission and candidate action is accurately reported to Meta.",
  },
  {
    icon: Zap,
    title: "Custom & Offline Events",
    subtitle: "Advanced Event Setup",
    desc: "Custom event definitions for hiring-specific actions — application started, resume uploaded, interview scheduled — plus offline event uploads for tracking hires.",
  },
  {
    icon: Users,
    title: "Special Ads Category",
    subtitle: "Compliance & Targeting",
    desc: "Fully compliant campaign setup under Meta's Special Ads Category for employment, with optimized audience targeting within regulatory constraints.",
  },
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    subtitle: "Lower CPR Strategy",
    desc: "Data-driven optimization reducing cost per form submission through audience refinement, creative testing, and conversion event optimization.",
  },
];

const stats = [
  { value: "$0.14", label: "Cost Per Result", icon: DollarSign },
  { value: "150", label: "Applications Received", icon: Users },
  { value: "$20.87", label: "Total Ad Spend", icon: BarChart3 },
  { value: "2", label: "Active Ad Sets", icon: Target },
];

const problems = [
  "High cost per application with standard campaign setup for hiring ads",
  "Special Ads Category restrictions limited targeting and audience options",
  "Browser-side Pixel alone missed 20-30% of conversion events due to ad blockers",
  "No server-side tracking — unreliable data for optimization algorithms",
  "Offline hiring events (interviews, offers) not fed back to Meta for optimization",
];

const solutions = [
  "Implemented dual-layer tracking with Pixel + Conversions API for 95%+ event capture",
  "Set up server-side data tracking to bypass ad blockers and ensure accurate reporting",
  "Created custom events for each hiring funnel stage — view, apply, submit, interview",
  "Configured offline event uploads to feed hire/interview data back to Meta's algorithm",
  "Optimized for form submissions within Special Ads Category constraints, achieving $0.14 CPR",
];

const challenges = [
  "Navigating Special Ads Category restrictions while maintaining targeting effectiveness",
  "Implementing Conversions API server-side without disrupting existing infrastructure",
  "Deduplicating events between Pixel and CAPI to avoid double-counting conversions",
  "Setting up offline event matching with proper customer data hashing for privacy compliance",
  "Optimizing ad delivery with limited audience signals under employment category rules",
];

const successPoints = [
  "Reduced cost per form submission to $0.14 — significantly below industry average",
  "150 quality applications generated with only $20.87 total spend",
  "95%+ event capture rate with dual Pixel + CAPI tracking",
  "Offline event feedback loop improved Meta's algorithm targeting over time",
  "Full compliance with Special Ads Category requirements for employment advertising",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ProjectMetaAds = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header {...fadeUp} className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/#projects" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            {techStack.map((tech) => (
              <div key={tech.name} className={`${tech.color} opacity-70 hover:opacity-100 transition-opacity`} title={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">Marketing Case Study</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-4">
              Meta Ads <span className="gradient-text">Hiring Campaign</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Special Ads Category campaign for employee hiring — reduced cost per form submission to $0.14 with advanced tracking and server-side data integration.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30 glow-purple">
            <img src={metaAdsPreview} alt="Meta Ads Campaign Dashboard" className="w-full" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }} className="glass rounded-xl p-5 text-center">
                <s.icon className="mx-auto mb-2 text-neon-purple" size={22} />
                <div className="text-2xl font-heading font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-3xl font-heading font-bold mb-10 text-center">
            Core <span className="gradient-text">Features</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp} transition={{ delay: i * 0.08, duration: 0.5 }} className="glass rounded-xl p-6 hover:glow-purple transition-all duration-500">
                <f.icon className="text-neon-purple mb-3" size={24} />
                <h3 className="font-heading font-semibold mb-1">{f.title}</h3>
                <p className="text-xs text-neon-purple font-mono mb-2">{f.subtitle}</p>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-heading font-bold mb-6">
                🔴 Problems <span className="gradient-text">Identified</span>
              </h2>
              <div className="space-y-3">
                {problems.map((p, i) => (
                  <div key={i} className="glass rounded-lg p-4 flex gap-3 items-start">
                    <span className="text-red-400 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-muted-foreground">{p}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-heading font-bold mb-6">
                🟢 Solutions <span className="gradient-text">Delivered</span>
              </h2>
              <div className="space-y-3">
                {solutions.map((s, i) => (
                  <div key={i} className="glass rounded-lg p-4 flex gap-3 items-start">
                    <span className="text-green-400 font-bold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-muted-foreground">{s}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-2xl font-heading font-bold mb-6 text-center">
            ⚡ Key <span className="gradient-text">Challenges</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((c, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="glass rounded-lg p-4 flex gap-3 items-start">
                <span className="text-yellow-400 font-bold text-sm mt-0.5">⚡</span>
                <p className="text-sm text-muted-foreground">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success */}
      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-2xl font-heading font-bold mb-6 text-center">
            🏆 Success <span className="gradient-text">Metrics</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {successPoints.map((s, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="glass rounded-lg p-4 flex gap-3 items-start">
                <span className="text-neon-purple font-bold text-sm mt-0.5">✓</span>
                <p className="text-sm text-muted-foreground">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 border-t border-border/20 text-center">
        <motion.div {...fadeUp}>
          <Link to="/#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:glow-purple transition-all">
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectMetaAds;

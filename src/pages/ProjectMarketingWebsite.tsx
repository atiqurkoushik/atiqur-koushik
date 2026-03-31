import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Globe, MessageCircle, Layout, Smartphone, TrendingUp, Palette, Search, Shield } from "lucide-react";
import marketingWebsitePreview from "@/assets/marketing-website-preview.png";

const techStack = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <path fillRule="evenodd" d="M12 9.75c4.97 0 9-1.46 9-3.25S16.97 3.25 12 3.25 3 4.71 3 6.5s4.03 3.25 9 3.25z" opacity="0.5" />
        <path d="M12 21c-1.5 0-2.8-.4-3.6-1.1C7.6 19.2 7 18 7 16.5c0-2.5 2.2-5 5-7.5 2.8 2.5 5 5 5 7.5 0 1.5-.6 2.7-1.4 3.4-.8.7-2.1 1.1-3.6 1.1z" opacity="0.5" />
      </svg>
    ),
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.09-.21-.21-.21h-.93c-.12 0-.21.09-.21.21v8.06c0 .66-.68 1.31-1.77.76L4.43 16.1a.26.26 0 01-.13-.22V7.31c0-.09.05-.17.13-.22l7.44-4.3c.08-.05.18-.05.26 0l7.44 4.3c.08.05.13.13.13.22v8.58c0 .09-.05.17-.13.22l-7.44 4.3c-.08.04-.17.04-.26 0l-1.88-1.12c-.1-.06-.22-.08-.32-.03-.88.49-1.05.56-1.88.84-.21.07-.52.17.11.49l2.46 1.45c.24.14.5.21.78.21.27 0 .54-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z" />
      </svg>
    ),
    color: "text-green-400",
  },
];

const features = [
  {
    icon: Globe,
    title: "Static Website",
    subtitle: "High-Performance Pages",
    desc: "Lightning-fast static pages with optimized assets, SEO-friendly structure, and smooth animations for a premium user experience.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    subtitle: "Direct Client Communication",
    desc: "Floating WhatsApp button and click-to-chat integration enabling instant client communication directly from the website.",
  },
  {
    icon: Layout,
    title: "Service Showcase",
    subtitle: "8 Core Services Displayed",
    desc: "Structured service cards covering Social Media Marketing, Photography, Motion Graphics, Website Development, eCommerce, and more.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    subtitle: "Mobile-First Design",
    desc: "Pixel-perfect responsive design across all devices — desktop, tablet, and mobile — with adaptive layouts and touch-friendly interactions.",
  },
  {
    icon: Palette,
    title: "Brand-Aligned Design",
    subtitle: "Custom Visual Identity",
    desc: "Clean, modern design matching the company's brand colors and identity with professional typography and consistent visual language.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    subtitle: "Search Engine Ready",
    desc: "Built-in SEO best practices with meta tags, semantic HTML, structured data, and performance optimization for better search rankings.",
  },
];

const stats = [
  { value: "8+", label: "Service Pages", icon: Layout },
  { value: "< 2s", label: "Page Load Time", icon: TrendingUp },
  { value: "100%", label: "Mobile Responsive", icon: Smartphone },
  { value: "24/7", label: "WhatsApp Support", icon: MessageCircle },
];

const problems = [
  "No professional online presence — relying solely on social media for client acquisition",
  "Potential clients couldn't easily view all services offered by the marketing agency",
  "No direct communication channel from website — leads lost due to friction",
  "Previous site was slow, unresponsive, and not optimized for mobile devices",
  "Lack of SEO structure meant zero organic traffic from search engines",
];

const solutions = [
  "Built a fast, modern React static website with clear service sections and portfolio",
  "Created dedicated service showcase cards for all 8 core marketing services",
  "Integrated WhatsApp click-to-chat for instant lead conversion from any page",
  "Implemented mobile-first responsive design with smooth animations and fast load times",
  "Added comprehensive SEO with meta tags, semantic HTML, and structured data",
];

const challenges = [
  "Translating a creative marketing agency's energy into a clean, professional web design",
  "Balancing visual richness with page performance for fast static delivery",
  "Implementing smooth WhatsApp integration that works across all devices and browsers",
  "Designing a service grid that scales from 8 services without looking cluttered",
  "Ensuring consistent brand identity across all pages and responsive breakpoints",
];

const successPoints = [
  "Professional online presence established — 3x increase in client inquiries",
  "WhatsApp integration drives 60% of new leads directly from the website",
  "Sub-2 second page load times with optimized static assets",
  "100% mobile responsive — 45% of traffic comes from mobile devices",
  "First page Google ranking for local marketing agency keywords",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ProjectMarketingWebsite = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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

      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">Web Development Case Study</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-4">
              Marketing <span className="gradient-text">Agency Website</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Custom-built website for a marketing company with WhatsApp integration, service showcases, and responsive static pages.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30 glow-purple">
            <img src={marketingWebsitePreview} alt="Marketing Agency Website" className="w-full" />
          </motion.div>
        </div>
      </section>

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

      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-heading font-bold mb-6">🔴 Problems <span className="gradient-text">Identified</span></h2>
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
              <h2 className="text-2xl font-heading font-bold mb-6">🟢 Solutions <span className="gradient-text">Delivered</span></h2>
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

      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-2xl font-heading font-bold mb-6 text-center">⚡ Key <span className="gradient-text">Challenges</span></motion.h2>
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

      <section className="py-16 px-6 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-2xl font-heading font-bold mb-6 text-center">🏆 Success <span className="gradient-text">Metrics</span></motion.h2>
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

export default ProjectMarketingWebsite;

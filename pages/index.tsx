import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function Home() {
  const siteUrl = "https://skaira.dev";

  return (
    <>
      <Head>
        <title>Skaira</title>
        <meta name="description" content="Systems that think and coordinate, organizing themselves into teams that work while humans sleep. We're building organizations that heal themselves, where the coordination tax is eliminated and small teams can move with the force of armies." />
        <meta name="keywords" content="coordination tax, autonomous agents, autonomous systems, AI coordination, developer productivity, self healing organization, enterprise automation, distributed systems, multi agent systems, Skaira" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Skaira" />
        <meta property="og:description" content="Systems that think and coordinate, organizing themselves into teams that work while humans sleep. Building organizations that heal themselves and eliminate the coordination tax." />
        <meta property="og:image" content={`${siteUrl}/background.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Skaira" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content="Skaira" />
        <meta name="twitter:description" content="Systems that think and coordinate, organizing themselves into teams that work while humans sleep. Building organizations that heal themselves and eliminate the coordination tax." />
        <meta name="twitter:image" content={`${siteUrl}/background.png`} />
        <meta name="twitter:creator" content="@skaira_ai" />
        <meta name="twitter:site" content="@skaira_ai" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="author" content="Skaira Inc." />
        <link rel="canonical" href={siteUrl} />
      </Head>

      <div className={`${inter.className} bg-white text-black transition-colors duration-500 selection:bg-black selection:text-white`}>
        <Navigation />
        
        <main className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24">
          <HeroSection />
          <ThesisSection />
          <RecruitmentSection />
        </main>

        <Footer />
      </div>
    </>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 w-full px-6 py-8 md:px-12 md:py-10 flex justify-between items-center z-50 bg-white/90 backdrop-blur-sm">
      <div className="font-medium tracking-tight text-lg">Skaira</div>
      <div className="flex gap-6 text-sm text-gray-500">
        <a href="mailto:founders@skaira.dev" className="hover:text-black transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="max-w-[720px] mx-auto mb-24">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-8">
        The end of &quot;work about work&quot;.
      </h1>
      <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
        Skaira is the autonomous nervous system for the modern enterprise.
      </p>
    </section>
  );
}

function ThesisSection() {
  return (
    <section id="mission" className="max-w-[720px] mx-auto space-y-10 text-lg md:text-xl leading-relaxed font-light text-gray-800">
      <p>
        Every company is dying from the same disease, and most don&apos;t even know it. We call it the <span className="font-medium text-black">Coordination Tax</span>, and it works like this: you hire brilliant people to build and create, but they spend half their day in the gaps between the work, explaining context and waiting for handoffs while what actually matters gets squeezed into whatever time remains. The cruel joke is that growth makes it worse. The more people you add, the slower everything moves, until the friction of coordination becomes greater than the force of creation itself.
      </p>

      <p>
        We&apos;re building something different. Not tools that automate tasks, but systems that think and coordinate and organize themselves into teams that work while humans sleep. Systems that don&apos;t just execute commands but understand intent, that can navigate the entire topology of your organization and close the loops that normally stay open. The future isn&apos;t humans or AI competing for territory, it&apos;s both working in tandem, each doing what it does best while the other fills the gaps that used to swallow whole days.
      </p>

      <p>
        What we&apos;re really building are organizations that heal themselves. Where knowledge doesn&apos;t disappear when people leave because it lives in the system. Where inconsistencies get hunted down and fixed before they metastasize into fires. Where the heavy work, the kind that takes hours of focused attention on tasks that drain rather than energize, happens in the background while your team focuses on the problems only humans can solve. You wake up and the work is done, not because someone stayed up all night, but because something else was running in parallel, coordinating across all the surfaces where work actually lives.
      </p>

      <p>
        This is uncharted territory. Autonomous systems that organize themselves like real teams, that execute complex operations across codebases and tools without constant supervision, that bridge timezones and context gaps so completely that small teams can move with the force of armies. We&apos;re obsessed with the hardest problems in distributed systems and autonomous reasoning because we believe the coordination tax is the single biggest bottleneck in what humans can build together. Solving it doesn&apos;t just make companies better, it changes the fundamental physics of how work happens.
      </p>

      <p>
        If you&apos;re ready to build something that&apos;s never been built before, something that could redefine what small teams are capable of, we&apos;re offering you that chance.
      </p>

      <p className="text-black font-normal">
        Now is the time. Join us.
      </p>
    </section>
  );
}

function RecruitmentSection() {
  return (
    <section id="team" className="max-w-[720px] mx-auto mt-32 pt-12 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="font-medium mb-2">Skaira Inc.</h3>
          <p className="text-gray-500 text-sm max-w-xs">
            Work with us from anywhere
          </p>
        </div>
        <a 
          href="mailto:jobs@skaira.dev" 
          className="group flex items-center gap-2 text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-400 transition-all"
        >
          Join us
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg 
      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 flex justify-between items-end text-xs text-gray-400 uppercase tracking-widest">
      <div>
        &copy; 2025 Skaira
      </div>
      <div className="flex gap-4">
        <a href="mailto:founders@skaira.dev" className="hover:text-black transition-colors">
          Contact
        </a>
      </div>
    </footer>
  );
}
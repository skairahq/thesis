import Head from "next/head";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function Home() {
  const siteUrl = "https://skaira.dev";
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved preference, default to dark mode
    const saved = localStorage.getItem("darkMode");
    setIsDark(saved ? saved === "true" : true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDark.toString());
    // Update body background color
    document.body.style.backgroundColor = isDark ? '#000000' : '#ffffff';
  }, [isDark]);

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
        <meta property="og:image" content={`https://thesis-pi-three.vercel.app/background.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Skaira" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content="Skaira" />
        <meta name="twitter:description" content="Systems that think and coordinate, organizing themselves into teams that work while humans sleep. Building organizations that heal themselves and eliminate the coordination tax." />
        <meta name="twitter:image" content={`https://thesis-pi-three.vercel.app/background.png`} />
        <meta name="twitter:creator" content="@skaira_ai" />
        <meta name="twitter:site" content="@skaira_ai" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="author" content="Skaira Inc." />
        <link rel="canonical" href={siteUrl} />
      </Head>

      <div className={`${inter.className} ${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-500 ${isDark ? 'selection:bg-white selection:text-black' : 'selection:bg-black selection:text-white'}`}>
        <Navigation isDark={isDark} setIsDark={setIsDark} />
        
        <main className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24">
          <HeroSection isDark={isDark} />
          <ThesisSection isDark={isDark} />
          <RecruitmentSection isDark={isDark} />
        </main>

        <Footer isDark={isDark} />
      </div>
    </>
  );
}

function Navigation({ isDark, setIsDark }: { isDark: boolean; setIsDark: (val: boolean) => void }) {
  return (
    <nav className={`fixed top-0 w-full px-6 py-8 md:px-12 md:py-10 flex justify-between items-center z-50 ${isDark ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-sm`}>
      <div className="font-medium tracking-tight text-lg">Skaira</div>
      <div className="flex items-center gap-6 text-sm">
        <a href="mailto:founders@skaira.dev" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'} transition-colors`}>
          Contact
        </a>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'} transition-colors`}
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

function HeroSection({ isDark }: { isDark: boolean }) {
  return (
    <section className="max-w-[720px] mx-auto mb-24">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-8">
        The end of &quot;work about work&quot;.
      </h1>
      <p className={`text-xl md:text-2xl ${isDark ? 'text-gray-400' : 'text-gray-500'} leading-relaxed font-light`}>
        Skaira is the autonomous nervous system for the modern enterprise.
      </p>
    </section>
  );
}

function ThesisSection({ isDark }: { isDark: boolean }) {
  return (
    <section id="mission" className={`max-w-[720px] mx-auto space-y-10 text-lg md:text-xl leading-relaxed font-light ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
      <p>
        Every company is dying from the same disease. We call it the <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>Coordination Tax</span>: you hire brilliant people to build and create, but they spend half their day in the gaps between the work, explaining context and waiting for handoffs. The more people you add, the slower everything moves, until <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>the friction of coordination becomes greater than the force of creation itself</span>.
      </p>

      <p>
        We&apos;re building something different. Not tools that automate tasks, but <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>systems that think and coordinate</span> and organize themselves into teams that work while humans sleep. Systems that don&apos;t just execute commands but <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>understand intent</span>, that navigate the entire topology of your organization and close the loops that normally stay open.
      </p>

      <p>
        This is <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>uncharted territory</span>. Autonomous systems that organize themselves like real teams, executing complex operations without constant supervision, bridging timezones and context gaps so completely that <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>small teams can move with the force of armies</span>. We&apos;re obsessed with the hardest problems in distributed systems and autonomous reasoning because we believe the coordination tax is the single biggest bottleneck in what humans can build together.
      </p>

      <p>
        If you&apos;re ready to build something that could redefine what small teams are capable of, we&apos;re offering you that chance.
      </p>

      <p className={`${isDark ? 'text-white' : 'text-black'} font-normal`}>
        Now is the time. Join us.
      </p>
    </section>
  );
}

function RecruitmentSection({ isDark }: { isDark: boolean }) {
  return (
    <section id="team" className={`max-w-[720px] mx-auto mt-32 pt-12 border-t ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="font-medium mb-2">Skaira Inc.</h3>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm max-w-xs`}>
            Work with us from anywhere
          </p>
        </div>
        <a 
          href="mailto:jobs@skaira.dev" 
          className={`group flex items-center gap-2 ${isDark ? 'text-white border-white hover:text-gray-400 hover:border-gray-400' : 'text-black border-black hover:text-gray-600 hover:border-gray-400'} border-b pb-0.5 transition-all`}
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

function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer className={`px-6 md:px-12 py-8 flex justify-between items-end text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} uppercase tracking-widest`}>
      <div>
        &copy; 2025 Skaira
      </div>
      <div className="flex gap-4">
        <a href="mailto:founders@skaira.dev" className={`${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors`}>
          Contact
        </a>
      </div>
    </footer>
  );
}
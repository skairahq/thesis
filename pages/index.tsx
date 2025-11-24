import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${inter.className} bg-white text-black transition-colors duration-500 selection:bg-black selection:text-white`}>
      <Navigation />
      
      <main className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24">
        <HeroSection />
        <ThesisSection />
        <RecruitmentSection />
      </main>

      <Footer />
    </div>
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
        There&apos;s a hidden disease killing every modern company. We call it the <span className="font-medium text-black">Coordination Tax</span>.
      </p>

      <p>
        You hire brilliant people to build and create. Instead, they spend half their day updating tickets, explaining context, and waiting for handoffs. The work that matters, the actual creation, gets squeezed into the margins. As you grow, this tax compounds. The more people you add, the slower everything moves. Innovation suffocates under the weight of process.
      </p>

      <p>
        Skaira is our answer. We&apos;re building the <strong>Night Shift</strong>: autonomous agents that live inside your codebase and tools, working while your team sleeps.
      </p>

      <p>
        They don&apos;t just automate tasks. They coordinate. They think. They organize themselves into teams that execute complex operations without someone standing over them. While your engineers dream, Skaira is fixing bugs, updating documentation, keeping Linear and GitHub and Slack in perfect sync. When morning comes, your team wakes up to a done list, not a to-do list.
      </p>

      <p>
        The future isn&apos;t humans or AI. It&apos;s both, working in tandem. Humans focus on intent and creativity, the things only we can do. Skaira handles execution and coordination, the things that drain us.
      </p>

      <div className="border-l-2 border-gray-200 pl-6 my-16">
        <p className="italic text-gray-600">
          We&apos;re exploring uncharted territory: autonomous agents that organize themselves like real teams, executing complex operations without constant supervision. Agents that actually get work done.
        </p>
      </div>

      <p>
        This isn&apos;t about replacing people. It&apos;s about augmenting them. Making small teams feel like armies. Removing the friction that prevents great work from happening.
      </p>

      <p>
        We&apos;re building organizations that heal themselves. Where losing someone doesn&apos;t break everything because the knowledge lives in the system. Where documentation updates itself when code changes. Where deadlines at risk get flagged before they slip. Where a swarm of agents actively hunts down inconsistencies and fixes them before they become fires.
      </p>

      <p>
        When the work gets heavy (deep research, long running infrastructure tasks), Skaira spins up specialized sub-swarms. They can spend hours gathering data you need, provisioning servers, running migrations while you sleep, then cleaning up after themselves. You ask for a result. You get the result. You never touch the machinery.
      </p>

      <p>
        It becomes the universal co-worker that bridges timezones and context gaps. The one who always has the keys to everything. Who can tell you the status of any process, anywhere in your stack, instantly. Making your team feel like it&apos;s running 24/7 even when everyone is resting.
      </p>

      <p>
        We&apos;re a team in India building for the world. We&apos;re obsessed with cracking the hardest problems in distributed systems and autonomous reasoning. We believe the coordination tax is the single biggest bottleneck in human productivity. Solving it changes everything.
      </p>

      <p>
        If you&apos;re ready to do your life&apos;s work, if you want to build the future where small teams move like giants and humans focus purely on what they do best, we&apos;re offering you that chance.
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
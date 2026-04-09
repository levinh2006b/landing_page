import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  ChartColumnIncreasing,
  Clock3,
  Goal,
  Layers3,
  Medal,
  MessageSquareQuote,
  ScanSearch,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

const productHighlights = [
  {
    title: "Test-day simulation",
    description: "Sit down to a full Digital SAT flow that feels calm, focused, and real.",
    icon: Clock3,
    tone: "from-[#ffb480] to-[#ff8f67]",
  },
  {
    title: "Precision analytics",
    description: "See pacing, topic mastery, misses, and score movement without digging.",
    icon: ChartColumnIncreasing,
    tone: "from-[#d7ff79] to-[#96df52]",
  },
  {
    title: "Vocabulary builder",
    description: "Turn weak words into repeat wins with fast review loops and memory cues.",
    icon: BookOpen,
    tone: "from-[#95d7ff] to-[#5d9cff]",
  },
];

const workflow = [
  {
    title: "Take a realistic drill",
    text: "Practice in a room that mirrors the real exam instead of a clunky worksheet.",
    icon: ScanSearch,
  },
  {
    title: "Review what actually matters",
    text: "Ronan SAT surfaces weak concepts, timing leaks, and mistake patterns instantly.",
    icon: Brain,
  },
  {
    title: "Climb with visible momentum",
    text: "Dashboards, streaks, leaderboards, and milestones make progress feel tangible.",
    icon: Trophy,
  },
];

const boardItems = [
  { label: "Adaptive drills", rotate: "rotate-[-2deg]", tone: "bg-[#ffd6c9]" },
  { label: "Leaderboards", rotate: "rotate-[2deg]", tone: "bg-[#d9f0ff]" },
  { label: "Reading breakdowns", rotate: "rotate-[-2deg]", tone: "bg-[#f4efea]" },
  { label: "Math skill map", rotate: "rotate-[2deg]", tone: "bg-[#ffd6c9]" },
  { label: "Timed sections", rotate: "rotate-[-2deg]", tone: "bg-[#d9f0ff]" },
  { label: "Smart vocab review", rotate: "rotate-[2deg]", tone: "bg-[#f4efea]" },
];

const metrics = [
  { value: "1600", label: "clear ceiling to chase" },
  { value: "40+", label: "topic signals per session" },
  { value: "<10m", label: "to start a focused drill" },
];

const suiteCards = [
  {
    icon: BarChart3,
    title: "Performance dashboard",
    text: "Every session becomes visible progress with skill-by-skill movement.",
  },
  {
    icon: Goal,
    title: "Targeted recovery",
    text: "Missed concepts become focused repair drills instead of vague goals.",
  },
  {
    icon: MessageSquareQuote,
    title: "Detailed explanations",
    text: "Students see the why behind every answer, not just green and red dots.",
  },
  {
    icon: Medal,
    title: "Leaderboard energy",
    text: "Accountability and friendly competition keep momentum high.",
  },
];

const testimonials = [
  {
    quote: '"I knew what to do next every single time."',
    text: "The dashboard made my weak spots obvious instead of overwhelming.",
    label: "Student note",
  },
  {
    quote: '"The leaderboard made prep weirdly fun."',
    text: "It added just enough pressure to keep me consistent through the week.",
    label: "Momentum note",
  },
  {
    quote: '"Review felt smarter than rereading old mistakes."',
    text: "I could jump from a missed question directly into the concept that caused it.",
    label: "Review note",
  },
  {
    quote: '"It looks premium without feeling intimidating."',
    text: "That balance matters when you want students to start immediately.",
    label: "Parent note",
  },
];

export default function Home() {
  return (
    <div className="app-shell min-h-screen overflow-x-clip text-[#1f1b18]">
      <header className="sticky top-0 z-50 border-b border-[#1f1b18]/10 bg-[#f6efe3]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[1.1rem] border-2 border-[#1f1b18] bg-[#d7ff79] shadow-[4px_4px_0_#1f1b18]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#6d625c]">
                Ronan SAT
              </p>
              <p className="[font-family:var(--font-display)] text-xl leading-none">
                Score growth, but fun
              </p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#4f4742] md:flex">
            <Link href="#features">Features</Link>
            <Link href="#how-it-works">How it works</Link>
            <Link href="#results">Results</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="https://learn.ronansat.com/auth"
              className="hidden rounded-full border border-[#1f1b18]/15 px-4 py-2 text-sm font-semibold text-[#3d3733] transition hover:-translate-y-0.5 hover:bg-white/70 sm:inline-flex"
            >
              Log in
            </Link>
            <Link
              href="https://learn.ronansat.com/auth"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1f1b18] bg-[#1f1b18] px-5 py-2.5 text-sm font-semibold text-[#f8f3eb] shadow-[4px_4px_0_#ff8f67] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#ff8f67]"
            >
              Start free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="hero-blur hero-blur-left" />
          <div className="hero-blur hero-blur-right" />
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="relative z-10">
              <div className="sticker mb-8 inline-flex items-center gap-2 bg-[#fff7cf] text-[#4a4037]">
                <Medal className="h-4 w-4" />
                Designed for students who want clarity, rhythm, and real score movement
              </div>
              <h1 className="max-w-4xl [font-family:var(--font-display)] text-[clamp(4rem,12vw,8.6rem)] leading-[0.88] tracking-[-0.05em] text-[#171412]">
                The SAT homepage that studies back.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b433d] sm:text-xl">
                Ronan SAT turns prep into a bright, tactile learning system: full exam simulation,
                leaderboard energy, deep performance analysis, and vocabulary review that students
                actually want to return to.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="https://learn.ronansat.com/auth"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1f1b18] bg-[#d7ff79] px-7 py-4 text-base font-bold text-[#171412] shadow-[6px_6px_0_#1f1b18] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#1f1b18]"
                >
                  Enter the study suite
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="https://learn.ronansat.com/auth"
                  className="inline-flex items-center justify-center rounded-full border border-[#1f1b18]/15 bg-white/70 px-7 py-4 text-base font-semibold text-[#3e3834] transition hover:-translate-y-1 hover:bg-white"
                >
                  View student login
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-[#3f3834]">
                {boardItems.map((item) => (
                  <span
                    key={item.label}
                    className={`inline-flex items-center rounded-full border border-[#1f1b18]/15 px-4 py-2 ${item.rotate} ${item.tone}`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 lg:pl-8">
              <div className="floating-card rotate-[-4deg] rounded-[2rem] border-2 border-[#1f1b18] bg-[#fffaf3] p-3 shadow-[10px_10px_0_#1f1b18]">
                <div className="rounded-[1.5rem] border border-[#1f1b18]/12 bg-[#f8f1e7] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#786e68]">
                        Live dashboard preview
                      </p>
                      <p className="mt-1 [font-family:var(--font-display)] text-3xl">Saturday sprint</p>
                    </div>
                    <div className="rounded-full border border-[#1f1b18]/10 bg-white px-3 py-1 text-sm font-semibold text-[#4a433d]">
                      1530 target
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.5rem] border-2 border-[#1f1b18] bg-[#1f1b18] p-5 text-[#f8f3eb] shadow-[6px_6px_0_#ff8f67]">
                      <div className="flex items-center justify-between text-sm text-[#d6cdc3]">
                        <span>Projected score</span>
                        <span>+110 this month</span>
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div>
                          <p className="[font-family:var(--font-display)] text-7xl leading-none text-[#d7ff79]">
                            1510
                          </p>
                          <p className="mt-3 text-sm text-[#d6cdc3]">
                            From weak area clustering to exact next-step drills.
                          </p>
                        </div>
                        <div className="rounded-[1.25rem] bg-white/10 px-3 py-2 text-right text-xs font-semibold uppercase tracking-[0.24em] text-[#f7eee3]">
                          97th percentile
                        </div>
                      </div>
                      <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                        <div className="progress-stripe h-full w-[86%] rounded-full bg-[#d7ff79]" />
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[1.5rem] border border-[#1f1b18]/15 bg-white p-4 shadow-[0_18px_45px_rgba(31,27,24,0.08)]">
                        <div className="mb-3 flex items-center justify-between">
                          <p className="text-sm font-semibold text-[#4a433d]">Skill pulse</p>
                          <Target className="h-4 w-4 text-[#ff8f67]" />
                        </div>
                        <div className="space-y-3">
                          {[
                            ["Algebra", "92%", "w-[92%]", "bg-[#d7ff79]"],
                            ["Inference", "78%", "w-[78%]", "bg-[#95d7ff]"],
                            ["Advanced vocab", "68%", "w-[68%]", "bg-[#ffb480]"],
                          ].map(([label, value, width, tone]) => (
                            <div key={label}>
                              <div className="mb-1 flex items-center justify-between text-sm text-[#4d4641]">
                                <span>{label}</span>
                                <span className="font-semibold">{value}</span>
                              </div>
                              <div className="h-2 overflow-hidden rounded-full bg-[#f0e7db]">
                                <div className={`${width} ${tone} h-full rounded-full`} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-[#1f1b18]/15 bg-[#d9f0ff] p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-[#35526a]">Leaderboard lift</p>
                            <p className="mt-1 [font-family:var(--font-display)] text-4xl text-[#171412]">#12</p>
                          </div>
                          <Trophy className="h-10 w-10 text-[#35526a]" />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[#35526a]">
                          Friendly competition adds pressure in the right places without making the
                          product feel heavy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[1.35rem] border border-[#1f1b18]/15 bg-[#fff0e7] p-4">
                      <p className="text-sm font-semibold text-[#5c4d45]">Reading timing</p>
                      <p className="mt-1 [font-family:var(--font-display)] text-4xl">-12m</p>
                    </div>
                    <div className="rounded-[1.35rem] border border-[#1f1b18]/15 bg-[#eef8c4] p-4">
                      <p className="text-sm font-semibold text-[#4d5331]">Streak</p>
                      <p className="mt-1 [font-family:var(--font-display)] text-4xl">18 days</p>
                    </div>
                    <div className="rounded-[1.35rem] border border-[#1f1b18]/15 bg-white p-4">
                      <p className="text-sm font-semibold text-[#5c4d45]">Recommended next</p>
                      <p className="mt-1 text-base font-semibold">Vocabulary set 07 + Math drill</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticker absolute -left-4 top-6 hidden rotate-[-8deg] bg-[#ffcfbe] text-[#4b342a] lg:inline-flex">
                Tiny moments of delight, not clutter.
              </div>
              <div className="sticker absolute -bottom-4 right-5 hidden rotate-[7deg] bg-[#d7ff79] text-[#273113] lg:inline-flex">
                Built to feel smooth on day one.
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#1f1b18]/10 bg-[#1f1b18] py-4 text-[#f8f3eb]">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="marquee-group">
                {[
                  "full digital SAT simulations",
                  "topic-level analytics",
                  "leaderboards with momentum",
                  "review that feels guided",
                  "vocabulary loops that stick",
                ].map((item) => (
                  <span key={`${i}-${item}`} className="marquee-pill">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="section-kicker">The suite</p>
              <h2 className="mt-3 [font-family:var(--font-display)] text-5xl leading-tight sm:text-6xl">
                Serious SAT tools wrapped in a playful editorial system.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4f4742]">
                The page is built around contrast: tactile, bright, inviting surfaces up front and
                sharp, high-signal academic utility underneath.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {productHighlights.map((item, index) => (
                <article
                  key={item.title}
                  className={`feature-panel relative overflow-hidden rounded-[2rem] border-2 border-[#1f1b18] bg-[#fffaf3] p-7 shadow-[8px_8px_0_#1f1b18] transition duration-300 hover:-translate-y-2 ${
                    index === 1 ? "lg:translate-y-10" : ""
                  }`}
                >
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.tone}`} />
                  <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-[1.2rem] border-2 border-[#1f1b18] bg-white shadow-[4px_4px_0_#1f1b18]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="max-w-xs [font-family:var(--font-display)] text-4xl leading-none">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-[#514943]">{item.description}</p>
                  <div className="mt-8 rounded-[1.5rem] border border-[#1f1b18]/12 bg-[#f4ecdf] p-4 text-sm leading-6 text-[#564f49]">
                    <div className="mb-3 flex items-center gap-2 font-semibold text-[#2d2825]">
                      <Layers3 className="h-4 w-4" />
                      Why it lands
                    </div>
                    Students can move from quick daily work to full-length pressure testing without
                    ever leaving the same visual language.
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[2.2rem] border-2 border-[#1f1b18] bg-[#1f1b18] p-8 text-[#f8f3eb] shadow-[10px_10px_0_#ff8f67]">
                <p className="section-kicker text-[#f8f3eb]/70">Everything students touch</p>
                <h3 className="mt-3 max-w-xl [font-family:var(--font-display)] text-5xl leading-tight">
                  One dashboard, many routes to confidence.
                </h3>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {suiteCards.map((card) => (
                    <div key={card.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4">
                      <card.icon className="h-5 w-5 text-[#d7ff79]" />
                      <p className="mt-4 text-lg font-semibold">{card.title}</p>
                      <p className="mt-2 text-sm leading-6 text-[#d6cdc3]">{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`rounded-[1.8rem] border-2 border-[#1f1b18] p-6 shadow-[8px_8px_0_#1f1b18] ${
                      index === 0 ? "bg-[#d7ff79]" : index === 1 ? "bg-[#d9f0ff]" : "bg-[#ffcfbe]"
                    }`}
                  >
                    <p className="[font-family:var(--font-display)] text-6xl leading-none">{metric.value}</p>
                    <p className="mt-3 max-w-xs text-base font-semibold leading-7 text-[#3d3733]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border-2 border-[#1f1b18] bg-[#fffaf3] p-8 shadow-[12px_12px_0_#1f1b18] sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-kicker">How it works</p>
                <h2 className="mt-3 [font-family:var(--font-display)] text-5xl leading-tight">
                  Built to keep students moving, not second-guessing.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#4f4742]">
                  The interface is fast to read and easy to trust. Every section points toward the
                  next useful action.
                </p>
              </div>

              <div className="grid gap-5">
                {workflow.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative rounded-[1.7rem] border border-[#1f1b18]/12 bg-[#f5ede2] p-6 pl-20"
                  >
                    <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#1f1b18] bg-white font-bold shadow-[4px_4px_0_#1f1b18]">
                      {index + 1}
                    </div>
                    <step.icon className="mb-3 h-5 w-5 text-[#ff8f67]" />
                    <h3 className="text-2xl font-semibold text-[#1f1b18]">{step.title}</h3>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-[#524a44]">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="rounded-[2.2rem] border-2 border-[#1f1b18] bg-[#d9f0ff] p-8 shadow-[10px_10px_0_#1f1b18]">
              <p className="section-kicker text-[#35526a]">What makes it memorable</p>
              <h2 className="mt-3 [font-family:var(--font-display)] text-5xl leading-tight">
                It feels like a study desk turned into software.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#35526a]">
                Paper-like warmth, stickers, marker accents, and strong information hierarchy make
                the product stand apart from sterile edtech pages.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((item, index) => (
                <article
                  key={item.quote}
                  className={`rounded-[1.9rem] border-2 border-[#1f1b18] p-6 shadow-[8px_8px_0_#1f1b18] ${
                    index % 2 === 0 ? "bg-[#fffaf3]" : "bg-[#fff0e7]"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#756a64]">{item.label}</p>
                  <p className="mt-4 [font-family:var(--font-display)] text-3xl leading-tight">{item.quote}</p>
                  <p className="mt-4 text-base leading-7 text-[#4f4742]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] border-2 border-[#1f1b18] bg-[#1f1b18] px-8 py-10 text-[#f8f3eb] shadow-[12px_12px_0_#d7ff79] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="section-kicker text-[#f8f3eb]/70">Launch-ready homepage</p>
                <h2 className="mt-3 max-w-3xl [font-family:var(--font-display)] text-5xl leading-tight sm:text-6xl">
                  Turn SAT prep into a place students want to come back to tomorrow.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d9cec1]">
                  Ronan SAT combines realistic testing, intelligent analysis, and playful momentum
                  into one polished experience. The homepage now sells that story clearly.
                </p>
              </div>
              <Link
                href="https://learn.ronansat.com/auth"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#f8f3eb] bg-[#ff8f67] px-7 py-4 text-base font-bold text-[#171412] shadow-[6px_6px_0_#f8f3eb] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#f8f3eb]"
              >
                Launch free account
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[#1f1b18]/10 pt-6 text-sm text-[#5f5550] sm:flex-row sm:items-center sm:justify-between">
          <p>Ronan SAT. Modern prep with personality.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#features">Features</Link>
            <Link href="#how-it-works">How it works</Link>
            <Link href="https://learn.ronansat.com/auth">Get started</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

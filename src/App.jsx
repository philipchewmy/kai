import { ArrowRight, Award, Binary, GraduationCap, Layers, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-zinc-50">
      <header className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 md:flex-row md:items-center">
        <div className="text-xl font-semibold tracking-tight text-zinc-300 md:text-3xl">
          Philip Chew.{"\u00A0\u00A0\u00A0\u00A0"}KAI OS platform.
        </div>
        <nav className="flex flex-wrap items-center justify-start gap-x-6 gap-y-2 text-sm text-zinc-300 md:flex-nowrap md:justify-end">
          <a className="hover:text-white" href="#biography">Biography</a>
          <a className="hover:text-white" href="#paradigms">Paradigms</a>
          <a className="hover:text-white" href="#kai">KAI</a>
          <a className="hover:text-white" href="#credentials">Credentials</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6">
        <section className="py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
              >
                Architecting the Knowledge Layer.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.06 }}
                className="mt-4 max-w-2xl text-pretty text-base font-medium leading-relaxed text-zinc-200 md:text-lg"
              >
                No lock-ins. Choice. Control for your Enterprise.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 md:text-lg"
              >
                From high-energy physics computing to deterministic institutional platforms and now governed, agent-based enterprise
                intelligence, Chew designs architectures that transform complex, noisy data into auditable and scalable decision processes.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-zinc-300"
              >
                Chew’s proposition: KAI OS can be the middle layer—an enterprise knowledge layer—that prevents intelligence vendor lock-in by
                letting organisations evolve the combination of models they use over time, while grounding intelligence in how each community
                defines and lives its workflows.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-10 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#biography"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 shadow-sm transition hover:bg-zinc-200"
                >
                  Read the biography <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-transparent px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900"
                >
                  Get in touch <Mail size={16} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40"
            >
              <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-4 py-3">
                <div className="text-xs font-medium text-zinc-300">High-energy physics particle tracks</div>
                <a
                  href="/hep-particle-tracks.png"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-zinc-400 hover:text-zinc-200"
                >
                  Open full size
                </a>
              </div>
              <a href="/hep-particle-tracks.png" target="_blank" rel="noreferrer" className="block">
                <img
                  src="/hep-particle-tracks.png"
                  alt="High-energy physics particle tracks"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </a>
            </motion.div>
          </div>
        </section>

        <section id="biography" className="py-14">
          <h2 className="text-xl font-semibold">Biography</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 md:col-span-2">
              <div className="text-sm font-medium text-zinc-200">From Penang to cognitive infrastructure</div>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-400">
                <p>
                  Born in Penang, Malaysia and educated in the Malaysian public school system, Chew was awarded a Singapore Ministry of
                  Education ASEAN Scholarship and completed his A-levels at National Junior College.
                </p>
                <p>
                  He later received one of two University of Pennsylvania scholarships awarded to outstanding international students—an
                  early recognition that took him from Malaysia and Singapore to the frontiers of American physics and computation.
                </p>
                <p>
                  Based in Singapore today, Chew builds architectures that convert high-dimensional uncertainty into governed, auditable
                  workflows—so organisations can reason and act with continuity over time.
                </p>
                <div className="pt-2">
                  <div className="text-sm font-medium text-zinc-200">High-energy physics to institutional scale</div>
                  <div className="mt-3">
                    Chew’s technical formation began in high-energy physics computing, building event reconstruction pipelines and probabilistic
                    inference under tight latency and memory constraints. Later, as a founding architect of Aladdin, he helped scale
                    deterministic valuation and risk graphs where auditability and reproducibility are prerequisites for trust. Today at Keppel
                    Ltd, a global asset manager and operator based in Singapore, he leads the development of KAI (Keppel AI)—a governed platform
                    and operating system that embeds knowledge workflows across investment, research, and operations. KAI prioritises full
                    traceability: controlled data access, auditable inputs and outputs, and human escalation for high-stakes decisions.
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div id="credentials" className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
                <div className="text-sm font-medium text-zinc-200">Credentials</div>
                <div className="mt-3 space-y-3 text-sm text-zinc-400">
                  <div>
                    <div className="flex items-center gap-2 text-zinc-200">
                      <GraduationCap size={16} /> Education
                    </div>
                    <div className="mt-2 space-y-1">
                      <div>Undergraduate: Electrical Engineering (Moore School), Finance (Wharton), Physics (School of Arts & Sciences), University of Pennsylvania</div>
                      <div>Master of Science: Electrical Engineering and Computer Science, MIT</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-zinc-200">
                      <Award size={16} /> Patents
                    </div>
                    <div className="mt-2">Two U.S. patents in portfolio management and credit risk management</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
                <div className="text-sm font-medium text-zinc-200">Career arcs</div>
                <div className="mt-3 space-y-3 text-sm text-zinc-400">
                  <div>
                    <div className="text-zinc-200">BlackRock</div>
                    <div className="mt-1">Founding architect of Aladdin—the global asset management industry’s gold-standard operating platform, safeguarding $40 trillion (≈10% of the world’s net financial assets in 2025)</div>
                  </div>
                  <div>
                    <div className="text-zinc-200">Grab Financial Group</div>
                    <div className="mt-1">Grab is a leading Singapore-based superapp across Southeast Asia (8 countries) spanning ride-hailing, food/grocery delivery, and digital financial services; launched GrabInsure, GrabInvest, GrabLink; US$300M Series A</div>
                  </div>
                  <div>
                    <div className="text-zinc-200">Keppel Ltd</div>
                    <div className="mt-1">A global asset manager and operator based in Singapore; leading AI & digital transformation and building KAI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="paradigms" className="py-14">
          <h2 className="text-xl font-semibold">Three computational paradigms</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                <Binary size={16} /> Event-driven physics (1990s)
              </div>
              <div className="mt-3 text-sm leading-relaxed text-zinc-400">
                Staged filtering and reconstruction to extract sparse signal from high-noise environments under bounded resources.
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                <Layers size={16} /> Deterministic platforms (2000s–2010s)
              </div>
              <div className="mt-3 text-sm leading-relaxed text-zinc-400">
                Identical inputs produce identical outputs: valuation graphs, factor decompositions, and data lineage for auditability—foundations for institutional trust at Aladdin scale (safeguarding $40T).
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
                <ArrowRight size={16} /> Governed agents (2020s)
              </div>
              <div className="mt-3 text-sm leading-relaxed text-zinc-400">
                Policy-bounded probabilistic inference with observability: audit logs, confidence thresholds, and human escalation.
              </div>
            </div>
          </div>
        </section>

        <section id="kai" className="py-14">
          <h2 className="text-xl font-semibold">KAI: from controlled pilots to enterprise knowledge layer</h2>
          <div className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
            KAI is Keppel’s acronym for the Keppel AI platform and operating system.
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 md:col-span-2">
              <div className="text-sm font-medium text-zinc-200">The operating principle</div>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-400">
                <p>
                  At Keppel Ltd, a global asset manager and operator based in Singapore, rather than advocate a sweeping platform overhaul,
                  Chew proposed tightly scoped pilots designed to operate within existing control frameworks—each with explicit success
                  criteria, governance guardrails, and stop conditions.
                </p>
                <p>
                  The pilots demonstrated measurable productivity gains, analytical consistency, and full audit traceability while
                  maintaining strict data lineage, access controls, and human-in-the-loop escalation. This shifted the conversation from
                  hypothetical capability to observed operational impact.
                </p>
                <p>
                  In 2025, Keppel undertook the build of the KAI OS platform under Chew’s leadership. The platform, along with a first
                  generation of AI agents and applications, was rolled into production by the end of 2025. Keppel expects all 4,000 employees
                  to be live on KAI by 3Q 2026, with more agents than employees by the end of 2026.
                </p>
                <p>
                  Chew and his colleagues at Keppel believe they are on the right trajectory to solve a contemporaneous pain point for
                  enterprises seeking a meaningful way to surf the cognitive AI wave: efficient, governed intelligence—rising and harnessed
                  for people, culture, and strategy. As Chew helped BlackRock unleash Aladdin to the global asset management industry from the
                  1990s into the 2000s, Keppel is aiming to do the same with KAI—this time with broader applicability across knowledge-economy
                  enterprises.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
              <div className="text-sm font-medium text-zinc-200">What KAI enforces</div>
              <div className="mt-3 space-y-2 text-sm text-zinc-400">
                <div>Governed model selection and policy controls</div>
                <div>Full audit logs of inputs, artefacts, and outputs</div>
                <div>Access control + data lineage by design</div>
                <div>Human validation for high-stakes decisions</div>
              </div>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40">
            <div className="flex items-center justify-between gap-4 border-b border-zinc-800 px-6 py-4">
              <div className="text-sm font-medium text-zinc-200">KAI OS architecture</div>
              <a
                href="/kai-os-architecture.png"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-zinc-400 hover:text-zinc-200"
              >
                Open full size
              </a>
            </div>
            <div className="p-4 md:p-6">
              <img
                src="/kai-os-architecture.png"
                alt="KAI OS architecture diagram"
                className="h-auto w-full rounded-xl border border-zinc-800 bg-zinc-950/20"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40">
            <div className="border-b border-zinc-800 px-6 py-4">
              <div className="text-sm font-medium text-zinc-200">Governed agent mesh examples</div>
            </div>
            <div className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/20 p-3">
                <a href="/kai-agent-mesh-human-orchestrated.png" target="_blank" rel="noreferrer">
                  <img
                    src="/kai-agent-mesh-human-orchestrated.png"
                    alt="Tightly-coupled, human-in-charge and human-orchestrated governed AI agent mesh"
                    className="h-auto w-full rounded-lg"
                    loading="lazy"
                  />
                </a>
                <div className="mt-3 text-xs leading-relaxed text-zinc-400">
                  Tightly-coupled, human-in-charge-and-orchestrated.
                </div>
                <div className="mt-1 text-xs text-zinc-500">Click to open full size.</div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/20 p-3">
                <a href="/kai-agent-mesh-lead-agent-orchestrated.png" target="_blank" rel="noreferrer">
                  <img
                    src="/kai-agent-mesh-lead-agent-orchestrated.png"
                    alt="Agentic mesh orchestrated by a lead AI agent serving the needs of a human in charge"
                    className="h-auto w-full rounded-lg"
                    loading="lazy"
                  />
                </a>
                <div className="mt-3 text-xs leading-relaxed text-zinc-400">
                  Agentic mesh orchestrated by a lead AI agent who serves the needs of a human in charge.
                </div>
                <div className="mt-1 text-xs text-zinc-500">Click to open full size.</div>
              </div>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40">
            <div className="border-b border-zinc-800 px-6 py-4">
              <div className="text-sm font-medium text-zinc-200">KAI Workspace</div>
            </div>
            <div className="grid gap-4 p-4 md:grid-cols-3 md:p-6">
              <div className="space-y-4 md:col-span-2">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/20 p-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs font-medium text-zinc-300">Desktop</div>
                    <a
                      href="/kai-workspace-desktop.png"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-zinc-400 hover:text-zinc-200"
                    >
                      Open full size
                    </a>
                  </div>
                  <a href="/kai-workspace-desktop.png" target="_blank" rel="noreferrer">
                    <img
                      src="/kai-workspace-desktop.png"
                      alt="KAI Workspace desktop experience"
                      className="mt-3 h-auto w-full rounded-lg"
                      loading="lazy"
                    />
                  </a>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-950/20 p-3">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs font-medium text-zinc-300">Tablet</div>
                    <a
                      href="/kai-workspace-tablet.png"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-zinc-400 hover:text-zinc-200"
                    >
                      Open full size
                    </a>
                  </div>
                  <a href="/kai-workspace-tablet.png" target="_blank" rel="noreferrer">
                    <img
                      src="/kai-workspace-tablet.png"
                      alt="KAI Workspace tablet experience"
                      className="mt-3 h-auto w-full rounded-lg"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/20 p-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs font-medium text-zinc-300">Mobile</div>
                  <a
                    href="/kai-workspace-mobile.png"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    Open full size
                  </a>
                </div>
                <a href="/kai-workspace-mobile.png" target="_blank" rel="noreferrer">
                  <img
                    src="/kai-workspace-mobile.png"
                    alt="KAI Workspace mobile experience"
                    className="mt-3 h-auto w-full rounded-lg"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-200">
              <Layers size={16} /> Orchestration layer (technical)
            </div>
            <div className="mt-3 grid gap-2 text-sm text-zinc-400 md:grid-cols-2">
              <div>Schema-aware ingestion for structured + unstructured data</div>
              <div>Retrieval grounding with domain-constrained language models</div>
              <div>Agent-executable workflow decomposition with persistent state</div>
              <div>Auditability: intermediate reasoning artefacts + decision trace</div>
              <div>Policy enforcement: access, escalation, model selection</div>
              <div>Bounded autonomy with monitored, reversible envelopes</div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <div className="text-sm font-medium text-zinc-200">Coda</div>
            <div className="mt-3 text-sm leading-relaxed text-zinc-400">
              Deterministic platforms delivered control but left interpretation as a bottleneck. Probabilistic systems expand adaptive
              capacity but demand new forms of observability and governance. The knowledge layer is one more stratum—one more brick.
            </div>
          </div>
        </section>

        <section id="contact" className="py-14">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <div className="grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
              <a
                href="mailto:philip.chew@keppel.com"
                className="rounded-xl border border-zinc-800 bg-zinc-950/20 px-4 py-3 hover:bg-zinc-900"
              >
                <div className="text-xs font-medium text-zinc-400">Email</div>
                <div className="mt-1 text-zinc-100">philip.chew@keppel.com</div>
              </a>

              <a
                href="https://www.linkedin.com/in/philip-c-04a0081"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-800 bg-zinc-950/20 px-4 py-3 hover:bg-zinc-900"
              >
                <div className="text-xs font-medium text-zinc-400">LinkedIn</div>
                <div className="mt-1 text-zinc-100">www.linkedin.com/in/philip-c-04a0081</div>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 text-sm text-zinc-500">
          © {new Date().getFullYear()} Philip Chew
        </footer>
      </main>
    </div>
  )
}

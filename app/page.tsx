const EMAIL = "sharmatanishq0308@gmail.com";
const GITHUB = "https://github.com/Tanishq-0308";
const LINKEDIN = "https://www.linkedin.com/in/tanishq-sharmaa";

const SERVICES = [
  {
    title: "Qt/C++ desktop apps",
    text: "New features, bug fixes and UI work on Qt Widgets or QML, on Qt 5 or Qt 6.",
  },
  {
    title: "Video and camera software",
    text: "Video management software and capture apps using IP, HDMI, SDI and USB inputs, including Blackmagic DeckLink cards.",
  },
  {
    title: "Apps that control hardware",
    text: "React Native and Android apps that send commands to ESP32 devices and read responses over Bluetooth and WiFi.",
  },
  {
    title: "Web apps and APIs",
    text: "React and Next.js frontends with Express or Go backends, on PostgreSQL, MongoDB or Supabase.",
  },
];

const PROJECTS = [
  {
    title: "Medical video desktop app",
    domain: "Healthcare",
    text: "A multi-camera desktop app that handles up to 9 live HDMI, SDI, IP and USB inputs, with layouts across up to 8 monitors, selective recording and conferencing.",
    tech: ["C++", "Qt", "DeckLink", "Capture cards"],
  },
  {
    title: "Medical equipment control app",
    domain: "Healthcare",
    text: "A tablet app that controls medical equipment over Bluetooth, from movement and lighting settings to a connected camera.",
    tech: ["React Native", "ESP32", "Bluetooth", "WiFi"],
  },
  {
    title: "CCTV video management system",
    domain: "Security",
    text: "A video management system handling and recording 40 cameras at deployment, running on-site on a Windows server with NAS storage.",
    tech: ["Go", "IP cameras", "Windows Server", "NAS"],
  },
  {
    title: "Smart board whiteboard",
    domain: "Interactive displays",
    text: "A whiteboard application built for interactive smart boards.",
    tech: ["Kotlin", "Android"],
  },
];

const SKILLS = [
  "Qt / C++",
  "QML",
  "React Native",
  "React",
  "Express",
  "Go",
  "Android",
  "Kotlin",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "ESP32",
  "DeckLink",
];

function EmailButton() {
  return (
    <a
      href={`mailto:${EMAIL}?subject=Project%20enquiry`}
      className="rounded bg-foreground px-5 py-2.5 font-medium text-background hover:opacity-85"
    >
      Email me
    </a>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="py-2 underline underline-offset-4 hover:text-signal">
      {children}
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-sm font-medium tracking-wide text-muted">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 sm:py-20">
      <header>
        <p className="flex items-center gap-2 font-mono text-sm">
          <span aria-hidden className="size-2.5 rounded-full bg-signal" />
          Available for freelance
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          I build software that talks to hardware.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          I&apos;m Tanishq Sharma, a software developer in India. I work on
          Qt/C++ desktop apps, video and camera systems, and mobile apps that
          control real devices.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          <EmailButton />
          <TextLink href={GITHUB}>GitHub</TextLink>
          <TextLink href={LINKEDIN}>LinkedIn</TextLink>
        </div>
        <p className="mt-3 break-all font-mono text-sm text-muted">{EMAIL}</p>
      </header>

      <section className="mt-20">
        <SectionTitle>What I can help with</SectionTitle>
        <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.title}>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle>Selected work</SectionTitle>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">
          These projects come from my professional work, so I describe them
          without client names, code or screenshots. I&apos;m happy to walk
          through them on a call.
        </p>
        <ul className="mt-6 border-t border-line">
          {PROJECTS.map((p) => (
            <li key={p.title} className="border-b border-line py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="font-mono text-sm text-muted">{p.domain}</span>
              </div>
              <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              <p className="mt-3 font-mono text-sm">{p.tech.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <SectionTitle>Tools I use</SectionTitle>
        <ul className="mt-5 flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <li key={s} className="rounded border border-line px-3 py-1 font-mono text-sm">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <SectionTitle>Working with me</SectionTitle>
        <p className="mt-5 max-w-2xl leading-relaxed">
          I work full-time as a software developer and take freelance projects
          on evenings and weekends, about 10 to 15 hours a week (IST). I work
          remotely in English or Hindi, on fixed-price or hourly terms. Small
          and medium projects suit me best: bug fixes, single features, small
          apps and MVPs.
        </p>
      </section>

      <footer className="mt-20 border-t border-line pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Have a project in mind?</h2>
        <p className="mt-3 text-muted">Tell me what you need, and I&apos;ll reply with my questions and next steps.</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <EmailButton />
          <span className="break-all font-mono text-sm">{EMAIL}</span>
        </div>
      </footer>
    </main>
  );
}

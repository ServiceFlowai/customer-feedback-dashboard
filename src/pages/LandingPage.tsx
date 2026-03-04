import React from "react";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "Real-time Analytics",
    description:
      "Track customer feedback as it happens with up-to-the-minute dashboards and insights.",
    icon: "⚡",
  },
  {
    title: "Sentiment Analysis",
    description:
      "Automatically detect customer sentiment and prioritize responses that matter most.",
    icon: "💬",
  },
  {
    title: "Multi-channel Support",
    description:
      "Unify feedback from email, chat, social, and more in a single collaborative workspace.",
    icon: "🌐",
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:px-8 lg:px-12">
          <span className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-white/90">
            Customer Feedback Analytics
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Welcome to Customer Feedback Analytics
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            Understand your customers like never before. Transform raw feedback into actionable intelligence with a unified analytics platform built for modern teams.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-lg shadow-indigo-900/40 transition hover:translate-y-0.5 hover:bg-slate-100">
              Get Started
            </button>
            <button className="rounded-full border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10">
              View Demo
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <section aria-labelledby="features-heading">
          <div className="text-center">
            <h2 id="features-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built to help you close the feedback loop
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Powerful capabilities out of the box, designed for teams that want to move fast and stay close to their customers.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-white/5 bg-white/5 p-8 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-white/10 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-2xl">
                  <span aria-hidden="true">{feature.icon}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>&copy; {new Date().getFullYear()} Customer Feedback Analytics. All rights reserved.</span>
          <nav className="flex justify-center gap-6 text-slate-300">
            <a className="transition hover:text-white" href="#">
              Privacy
            </a>
            <a className="transition hover:text-white" href="#">
              Terms
            </a>
            <a className="transition hover:text-white" href="#">
              Support
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

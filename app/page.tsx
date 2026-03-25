export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">
            Flowtend
          </div>

          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#how-it-works" className="hover:text-white">
              How it works
            </a>

            <a
              href="https://calendly.com/flowtend/flowtend-demo"
              target="_blank"
              className="rounded-xl bg-white px-4 py-2 text-black font-medium hover:opacity-90"
            >
              Book Demo
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 pt-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            Built for appointment-based businesses
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Reduce no-shows.
            <br />
            Follow up automatically.
            <br />
            Grow with <span className="text-zinc-400">Flowtend</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Flowtend helps barbershops and service businesses send booking
            confirmations, appointment reminders, and follow-up messages without
            manual work.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://calendly.com/flowtend/flowtend-demo"
              target="_blank"
              className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-medium text-black transition hover:opacity-90"
            >
              Book a Demo
            </a>

            <a
              href="#how-it-works"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/50">Instant confirmations</p>
            <h3 className="mt-3 text-2xl font-semibold">Confirm every booking</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Send clients a confirmation as soon as they book so they know
              their appointment is locked in.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/50">Automated reminders</p>
            <h3 className="mt-3 text-2xl font-semibold">Cut down no-shows</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Automatically remind clients before their appointment so fewer
              time slots get wasted.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/50">Follow-up messages</p>
            <h3 className="mt-3 text-2xl font-semibold">Stay top of mind</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Reconnect with missed clients and keep your business looking sharp
              and professional.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="border-t border-white/10 bg-neutral-900/60"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              How it works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              A simple system that works in the background
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Flowtend is designed to make appointment follow-up effortless for
              busy businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="text-sm text-white/40">01</div>
              <h3 className="mt-4 text-2xl font-semibold">Client books</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                A customer books an appointment through your booking flow.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="text-sm text-white/40">02</div>
              <h3 className="mt-4 text-2xl font-semibold">Flowtend sends reminders</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Confirmation and reminder messages are sent automatically before
                the appointment.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="text-sm text-white/40">03</div>
              <h3 className="mt-4 text-2xl font-semibold">You save the slot</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Fewer no-shows, less manual follow-up, and a more professional
                booking experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="demo"
        className="border-t border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-900"
      >
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Ready to see it?
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            See how Flowtend can reduce no-shows for your business
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Book a demo and see how automated confirmations, reminders, and
            follow-up can make your appointment flow smoother.
          </p>

          <div className="mt-10">
            <a
              href="https://calendly.com/flowtend/flowtend-demo"
              target="_blank"
              className="inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-medium text-black transition hover:opacity-90"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
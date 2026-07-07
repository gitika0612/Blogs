import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollCue from "./components/ScrollCue";
import Reveal from "./components/Reveal";
import BouncerIllustration from "./components/BouncerIllustration";
import KeycardIllustration from "./components/KeycardIllustration";
import WristbandIllustration from "./components/WristbandIllustration";
import ValetIllustration from "./components/ValetIllustration";
import ConstraintChooser from "./components/ConstraintChooser";
import DevView from "./components/DevView";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const description =
  "Every tap you make on the web arrives as a total stranger. Here's the clever trick that keeps you logged in — told with keycards, wristbands, and a valet.";

export const metadata: Metadata = {
  title: "Sessions, JWTs, and OAuth — a story",
  description,
  openGraph: {
    title: "Sessions, JWTs, and OAuth — a story",
    description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sessions, JWTs, and OAuth — a story",
    description,
  },
};

export default function SessionsJwtOAuthPage() {
  return (
    <main className="bg-[#FAF6F0] font-sans text-[#1C1810] selection:bg-[#1E3A6D] selection:text-white">
      <ScrollProgressBar />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pt-[max(1.5rem,env(safe-area-inset-top))] text-center sm:pt-[env(safe-area-inset-top)]">
        <Reveal>
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#1E3A6D] sm:text-base">
            Authentication, told as a story
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className={`${fraunces.className} max-w-4xl text-4xl leading-[1.08] tracking-tight text-[#1C1810] sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            You log in once. The web forgets you instantly. So who keeps
            letting you back in?
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5B564C] sm:text-xl">
            Every tap you make on the web arrives as a total stranger.
            Here&apos;s the clever trick that keeps you logged in — told with
            keycards, wristbands, and a valet.
          </p>
        </Reveal>

        <div className="absolute inset-x-0 bottom-10 flex justify-center px-6">
          <ScrollCue />
        </div>
      </section>

      {/* Scene 1 */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            Meet the bouncer with no memory.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.1}>
            <BouncerIllustration />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-[#3A3630]">
                Picture a club with the world&apos;s worst bouncer. The
                moment he waves you in and turns around, he forgets your face
                completely. Head to the bar and he stops you cold &mdash;
                &apos;Who are you? Are you even a member?&apos; Every single
                time.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-lg leading-relaxed text-[#3A3630]">
                That&apos;s not a joke — it&apos;s literally how the web
                works. The language your browser and the server speak (HTTP)
                has no memory. Every click, every page load, arrives as a
                brand-new stranger. The server helps you, then instantly
                forgets you existed.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="text-lg leading-relaxed text-[#3A3630]">
                So &apos;staying logged in&apos; is really one question: how
                do you help that forgetful bouncer recognize you — without
                flashing your password at every single step?
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scene 2 */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            So people invented three ways to be remembered.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5B564C]">
            Over the years, developers came up with three clever tricks to
            help that forgetful bouncer recognise you. You&apos;ve used all
            three today without even knowing their names.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-[#1C1810]/10 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A6D]/30 hover:shadow-lg hover:shadow-[#1C1810]/5">
              <span className="text-3xl">🔑</span>
              <h3
                className={`${fraunces.className} mt-5 text-xl text-[#1C1810]`}
              >
                The Keycard (Sessions)
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5B564C]">
                The club keeps a guest list. You just carry a numbered card.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="h-full rounded-2xl border border-[#1C1810]/10 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A6D]/30 hover:shadow-lg hover:shadow-[#1C1810]/5">
              <span className="text-3xl">🎟️</span>
              <h3
                className={`${fraunces.className} mt-5 text-xl text-[#1C1810]`}
              >
                The Wristband (JWT)
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5B564C]">
                No guest list needed. Everything about you is printed on the
                band itself.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="h-full rounded-2xl border border-[#1C1810]/10 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A6D]/30 hover:shadow-lg hover:shadow-[#1C1810]/5">
              <span className="text-3xl">🅿️</span>
              <h3
                className={`${fraunces.className} mt-5 text-xl text-[#1C1810]`}
              >
                The Valet (OAuth)
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5B564C]">
                You never hand over your keys. Someone trusted vouches for
                you.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.5}>
          <p
            className={`${fraunces.className} mt-12 max-w-3xl text-xl italic leading-snug text-[#1C1810] sm:text-2xl`}
          >
            Two of them answer the same question &mdash; &apos;are you logged
            in?&apos; The third answers something sneakier. We&apos;ll get
            there. First, the keycard.
          </p>
        </Reveal>
      </section>

      {/* Scene 3 — The Keycard (Sessions) */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#1E3A6D] sm:text-base">
            Solution 1 of 3 · The Keycard
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            Let the club keep the list.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <KeycardIllustration />
            </Reveal>

            <Reveal delay={0.2}>
              <DevView
                title="The actual HTTP round-trip"
                caption={
                  <>
                    In Node you&apos;d use{" "}
                    <code className="rounded bg-[#1C1810]/8 px-1.5 py-0.5 font-mono text-[13px] text-[#1C1810]">
                      express-session
                    </code>{" "}
                    or{" "}
                    <code className="rounded bg-[#1C1810]/8 px-1.5 py-0.5 font-mono text-[13px] text-[#1C1810]">
                      iron-session
                    </code>
                    .
                  </>
                }
              >
                <div className="text-[11px] uppercase tracking-wide text-white/40">
                  Response when you log in:
                </div>
                <div className="mt-1">
                  <span className="text-[#7DD3FC]">Set-Cookie:</span>{" "}
                  <span className="text-[#86EFAC]">sid=4471</span>
                  <span className="text-white/60">
                    ; HttpOnly; Secure; SameSite=Lax
                  </span>
                </div>

                <div className="mt-4 text-[11px] uppercase tracking-wide text-white/40">
                  Every request after:
                </div>
                <div className="mt-1">
                  <span className="text-[#7DD3FC]">Cookie:</span>{" "}
                  <span className="text-[#86EFAC]">sid=4471</span>
                </div>

                <div className="mt-4 text-[11px] uppercase tracking-wide text-white/40">
                  Server side:
                </div>
                <div className="mt-1 text-white/40 italic">
                  {"// the cookie is just an ID — the real data lives server-side"}
                </div>
                <div className="mt-1">
                  <span className="text-[#7DD3FC]">const</span>
                  {" user = "}
                  <span className="text-[#7DD3FC]">await</span>
                  {" store.get(req.cookies.sid)   "}
                  <span className="text-white/40 italic">
                    {"// look it up"}
                  </span>
                </div>
              </DevView>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-[#3A3630]">
                The simplest fix? Give the bouncer a notebook. The first time
                you show your membership, he writes your name in his guest
                list and hands you a plain numbered card &mdash; say, #4471.
                The card doesn&apos;t say who you are. It&apos;s just a
                number.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-lg leading-relaxed text-[#3A3630]">
                Now every time you walk past, you flash card #4471. The
                bouncer doesn&apos;t need to recognise your face &mdash; he
                just flips to #4471 in his notebook and reads: &apos;Ah,
                that&apos;s Gitika. Member. Allowed at the bar.&apos; The
                card is a claim ticket; the real information lives in his
                notebook.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="rounded-2xl border border-[#1C1810]/10 bg-white/40 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#1C1810]">
                  What this really is:
                </p>
                <div className="mt-4 space-y-3">
                  <p className="text-base leading-relaxed text-[#3A3630]">
                    <span className="font-semibold text-[#1E3A6D]">
                      The numbered card
                    </span>{" "}
                    → a cookie in your browser (a session ID).
                  </p>
                  <p className="text-base leading-relaxed text-[#3A3630]">
                    <span className="font-semibold text-[#1E3A6D]">
                      The bouncer&apos;s notebook
                    </span>{" "}
                    → the session store on the server (memory, Redis, or a
                    database).
                  </p>
                  <p className="text-base leading-relaxed text-[#3A3630]">
                    <span className="font-semibold text-[#1E3A6D]">
                      Every visit
                    </span>{" "}
                    → the server takes your session ID and looks you up.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <div>
                <h3
                  className={`${fraunces.className} text-xl text-[#1C1810] sm:text-2xl`}
                >
                  The upside
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-[#3A3630]">
                  If you get kicked out, the bouncer just crosses #4471 off
                  the list. Next time you show the card, it means nothing
                  &mdash; you&apos;re logged out instantly. The club stays in
                  full control.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.55}>
              <div>
                <h3
                  className={`${fraunces.className} text-xl text-[#1C1810] sm:text-2xl`}
                >
                  The catch
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-[#3A3630]">
                  But the bouncer has to keep that notebook and search it on
                  every single visit. And if the club gets so popular it
                  opens a second door with a second bouncer, both need to
                  read the same notebook &mdash; or you&apos;ll be a member
                  at one door and a stranger at the other. Keeping every
                  notebook in sync is the real work of scaling sessions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.65}>
              <p
                className={`${fraunces.className} text-xl italic leading-snug text-[#1C1810] sm:text-2xl`}
              >
                Sessions = the server remembers you. Simple and secure
                &mdash; but the server carries the weight.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scene 4 — The Wristband (JWT) */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#B45309] sm:text-base">
            Solution 2 of 3 · The Wristband
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            Or — put everything on the wristband.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <WristbandIllustration />
            </Reveal>

            <Reveal delay={0.2}>
              <DevView
                title="What's actually on the wristband"
                caption="Note the payload is only base64 — readable by anyone. The signature stops tampering, not reading. Never put secrets in it."
              >
                <div className="break-all">
                  <span className="text-[#FB7185]">
                    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
                  </span>
                  <span className="text-white/30">.</span>
                  <span className="text-[#A78BFA]">
                    eyJzdWIiOiI0NDcxIiwibmFtZSI6IkdpdGlrYSIsInJvbGUiOiJtZW1iZXIiLCJleHAiOjE3MzYwMDAwMDB9
                  </span>
                  <span className="text-white/30">.</span>
                  <span className="text-[#38BDF8]">
                    dGhpcy1pcy10aGUtc2lnbmF0dXJl
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  <div>
                    <span className="font-semibold text-[#FB7185]">
                      header
                    </span>
                    {"  = "}
                    <span className="text-white/80">
                      {'{ "alg": "HS256", "typ": "JWT" }'}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#A78BFA]">
                      payload
                    </span>
                    {" = "}
                    <span className="text-white/80">
                      {
                        '{ "sub": "4471", "name": "Gitika", "role": "member", "exp": 1736000000 }'
                      }
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#38BDF8]">
                      signature
                    </span>
                    {" = "}
                    <span className="text-white/80">
                      {
                        'HMACSHA256( base64(header) + "." + base64(payload), secret )'
                      }
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-1">
                  <div>
                    <span className="text-[#7DD3FC]">const</span>
                    {" token = jwt.sign({ sub: user.id, name: "}
                    <span className="text-[#86EFAC]">&quot;Gitika&quot;</span>
                    {", role: "}
                    <span className="text-[#86EFAC]">&quot;member&quot;</span>
                    {" }, SECRET, { expiresIn: "}
                    <span className="text-[#86EFAC]">&quot;1h&quot;</span>
                    {" })"}
                  </div>
                  <div>
                    <span className="text-[#7DD3FC]">const</span>
                    {" payload = jwt.verify(token, SECRET)   "}
                    <span className="text-white/40 italic">
                      {"// throws if the seal is broken"}
                    </span>
                  </div>
                </div>
              </DevView>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-[#3A3630]">
                Here&apos;s a different idea. What if the bouncer keeps no
                notebook at all? Instead, when you check in, he snaps a
                festival wristband on you with your details printed right on
                it: &apos;Gitika · Member · expires 11pm.&apos; Then he
                presses a tamper-proof seal over it that only the club can
                make.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-lg leading-relaxed text-[#3A3630]">
                Now walk up to any bar in the venue. The staff don&apos;t
                phone head office or look anyone up &mdash; they just glance
                at your wristband, check the seal is real, and read what it
                says. The proof travels with you. The club doesn&apos;t need
                to remember a thing.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="rounded-2xl border border-[#1C1810]/10 bg-white/40 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#1C1810]">
                  What this really is:
                </p>
                <div className="mt-4 space-y-3">
                  <p className="text-base leading-relaxed text-[#3A3630]">
                    <span className="font-semibold text-[#B45309]">
                      The wristband
                    </span>{" "}
                    → a JWT, a token your browser carries on every request.
                  </p>
                  <p className="text-base leading-relaxed text-[#3A3630]">
                    <span className="font-semibold text-[#B45309]">
                      The printed details
                    </span>{" "}
                    → the token&apos;s payload (who you are, your role, when
                    it expires).
                  </p>
                  <p className="text-base leading-relaxed text-[#3A3630]">
                    <span className="font-semibold text-[#B45309]">
                      The tamper-proof seal
                    </span>{" "}
                    → a cryptographic signature only the server can create or
                    verify.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-sm leading-relaxed text-[#5B564C]">
                Important: the seal stops forgery, not reading. Anyone can
                read what&apos;s on the wristband &mdash; so it never carries
                secrets, just claims the server is willing to vouch for.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <div>
                <h3
                  className={`${fraunces.className} text-xl text-[#1C1810] sm:text-2xl`}
                >
                  The upside
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-[#3A3630]">
                  No notebook, no lookups. Open a second door, a tenth door, a
                  hundred servers &mdash; every one can verify the seal on
                  its own. This is why wristbands scale so beautifully across
                  big systems, mobile apps, and separate services.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.55}>
              <div>
                <h3
                  className={`${fraunces.className} text-xl text-[#1C1810] sm:text-2xl`}
                >
                  The catch
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-[#3A3630]">
                  But once a wristband is on your wrist, the club can&apos;t
                  easily take it back. If you&apos;re banned at 9pm, that
                  &apos;11pm&apos; wristband still looks valid until it
                  expires &mdash; every door will keep waving you through.
                  That&apos;s the price of not keeping a notebook: you trade
                  easy revoking for easy scaling. In practice, teams fight
                  this with short expiry times and a &apos;refresh&apos; step
                  that quietly issues a fresh band.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.65}>
              <p
                className={`${fraunces.className} text-xl italic leading-snug text-[#1C1810] sm:text-2xl`}
              >
                JWT = you carry the proof. Scales effortlessly &mdash; but the
                server gives up control.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scene 5 — The Valet (OAuth) */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#2F6B4F] sm:text-base">
            Solution 3 of 3 · The Valet
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            The third one isn&apos;t like the others.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <ValetIllustration />
            </Reveal>

            <Reveal delay={0.2}>
              <DevView
                title="The actual handshake"
                caption="In Next.js you'd use Auth.js (NextAuth) — never build this by hand; the redirects and token exchange are easy to get subtly wrong."
              >
                <div className="text-[11px] uppercase tracking-wide text-white/40">
                  Step 1 — your app sends the user to the authorization
                  server:
                </div>
                <div className="mt-1 break-all text-white/90">
                  https://accounts.google.com/o/oauth2/v2/auth
                </div>
                <div className="pl-6 text-white/60">
                  ?client_id=
                  <span className="text-[#86EFAC]">YOUR_CLIENT_ID</span>
                </div>
                <div className="pl-6 text-white/60">
                  &redirect_uri=
                  <span className="text-[#86EFAC]">
                    https://yourapp.com/callback
                  </span>
                </div>
                <div className="pl-6 text-white/60">
                  &response_type=<span className="text-[#86EFAC]">code</span>
                </div>
                <div className="pl-6 text-white/60">
                  &scope=
                  <span className="text-[#86EFAC]">openid email profile</span>
                </div>

                <div className="mt-4 text-[11px] uppercase tracking-wide text-white/40">
                  Step 2 — user approves, Google redirects back with a
                  short-lived code:
                </div>
                <div className="mt-1 break-all text-white/90">
                  https://yourapp.com/callback?code=4/0Ab...
                </div>

                <div className="mt-4 text-[11px] uppercase tracking-wide text-white/40">
                  Step 3 — your server (with its secret) swaps the code for a
                  token:
                </div>
                <div className="mt-1">
                  <span className="text-[#7DD3FC]">POST</span>{" "}
                  <span className="text-white/90">
                    https://oauth2.googleapis.com/token
                  </span>{" "}
                  <span className="text-white/40">→</span>{" "}
                  <span className="text-white/80">
                    {"{ access_token, id_token }"}
                  </span>
                </div>
              </DevView>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-[#3A3630]">
                Here&apos;s the twist. The keycard and the wristband both
                answer one question: &apos;are you a member?&apos; The valet
                answers something completely different: &apos;will you let
                someone else act on your behalf &mdash; without handing over
                your keys?&apos;
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-lg leading-relaxed text-[#3A3630]">
                Picture pulling up to a restaurant. You don&apos;t give the
                valet your house keys, your wallet, and your password. You
                hand over one key that only starts the car and drives it to
                the lot. He can do that one job, nothing more. You never gave
                away who you are &mdash; just permission to do a specific
                thing.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="text-lg leading-relaxed text-[#3A3630]">
                That&apos;s what happens when an app says &apos;Sign in with
                Google.&apos; You&apos;re not giving that app your Google
                password. Google &mdash; someone everyone already trusts
                &mdash; vouches for you and hands the app a limited pass:
                &apos;Yes, this is Gitika, and you may see her name and
                email. Nothing else.&apos;
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="rounded-2xl border border-[#1C1810]/10 bg-white/40 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#1C1810]">
                  What this really is:
                </p>
                <div className="mt-4 space-y-3">
                  <p className="text-base leading-relaxed text-[#3A3630]">
                    <span className="font-semibold text-[#2F6B4F]">
                      You, handing over the car
                    </span>{" "}
                    → the resource owner granting access.
                  </p>
                  <p className="text-base leading-relaxed text-[#3A3630]">
                    <span className="font-semibold text-[#2F6B4F]">
                      The app parking your car
                    </span>{" "}
                    → the client that wants limited access.
                  </p>
                  <p className="text-base leading-relaxed text-[#3A3630]">
                    <span className="font-semibold text-[#2F6B4F]">
                      The valet stand everyone trusts
                    </span>{" "}
                    → the authorization server (Google, GitHub…).
                  </p>
                  <p className="text-base leading-relaxed text-[#3A3630]">
                    <span className="font-semibold text-[#2F6B4F]">
                      The limited valet key
                    </span>{" "}
                    → a scoped access token &mdash; permission to do specific
                    things, not your password.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="text-sm leading-relaxed text-[#5B564C]">
                And &apos;Sign in with Google&apos; adds one more layer on
                top &mdash; OpenID Connect &mdash; which is the part that
                actually proves who you are. OAuth grants access; OIDC
                confirms identity.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div>
                <h3
                  className={`${fraunces.className} text-xl text-[#1C1810] sm:text-2xl`}
                >
                  Why it&apos;s brilliant
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-[#3A3630]">
                  You let apps do useful things &mdash; read your calendar,
                  post on your behalf &mdash; without ever sharing your
                  password, and you can revoke that one key anytime without
                  changing anything else.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.65}>
              <div>
                <h3
                  className={`${fraunces.className} text-xl text-[#1C1810] sm:text-2xl`}
                >
                  The catch
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-[#3A3630]">
                  More moving parts, more redirects, more places to
                  misconfigure. OAuth is powerful but famously easy to get
                  subtly wrong &mdash; which is why almost everyone uses a
                  trusted library instead of building it by hand.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.75}>
          <div className="mt-14 rounded-2xl border border-[#1C1810]/10 bg-[#1C1810]/[0.04] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#1C1810]">
              So they don&apos;t actually compete:
            </p>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[#3A3630]">
              Sessions and JWT are two ways to answer &apos;are you logged
              in?&apos; &mdash; pick one. OAuth sits on a different axis
              entirely: it&apos;s how you let other apps in. In fact, they
              stack &mdash; an OAuth flow often hands back a token that&apos;s
              a JWT, and your own app might still keep you logged in with a
              session. Real apps mix all three.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.85}>
          <p
            className={`${fraunces.className} mt-12 max-w-3xl text-xl italic leading-snug text-[#1C1810] sm:text-2xl`}
          >
            OAuth = someone trusted vouches for you. Not a login method
            &mdash; a way to share access safely.
          </p>
        </Reveal>
      </section>

      {/* Scene 6 — Pick your constraint */}
      <ConstraintChooser />

      {/* Scene 7 — Back at the club */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            Same question, three good answers.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5B564C]">
            The bouncer never got a better memory. We just got cleverer about
            working around it &mdash; a notebook, a wristband, or a trusted
            friend at the door. Same forgetful bouncer. Three good answers.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
          <Reveal delay={0.2}>
            <div
              className="h-full rounded-2xl border p-8"
              style={{ borderColor: "#1E3A6D33", backgroundColor: "#1E3A6D0D" }}
            >
              <span className="text-3xl">🔑</span>
              <h3
                className={`${fraunces.className} mt-5 text-xl text-[#1C1810]`}
              >
                Sessions
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5B564C]">
                The server remembers you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div
              className="h-full rounded-2xl border p-8"
              style={{ borderColor: "#B4530933", backgroundColor: "#B453090D" }}
            >
              <span className="text-3xl">🎟️</span>
              <h3
                className={`${fraunces.className} mt-5 text-xl text-[#1C1810]`}
              >
                JWT
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5B564C]">
                You carry the proof.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div
              className="h-full rounded-2xl border p-8"
              style={{ borderColor: "#2F6B4F33", backgroundColor: "#2F6B4F0D" }}
            >
              <span className="text-3xl">🅿️</span>
              <h3
                className={`${fraunces.className} mt-5 text-xl text-[#1C1810]`}
              >
                OAuth
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5B564C]">
                Someone trusted vouches for you.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.5}>
          <p
            className={`${fraunces.className} mt-12 max-w-3xl text-xl italic leading-snug text-[#1C1810] sm:text-2xl`}
          >
            Now you know who keeps letting you back in.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <footer className="mt-20 flex flex-col items-start gap-2 border-t border-[#1C1810]/10 pt-8 text-sm text-[#5B564C] sm:flex-row sm:items-center sm:justify-between">
            <span>Written by Gitika</span>
            <Link
              href="/"
              className="text-[#1E3A6D] transition-colors hover:text-[#1C1810]"
            >
              ← More stories
            </Link>
          </footer>
        </Reveal>
      </section>
    </main>
  );
}

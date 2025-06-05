export default function FallbackPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-4xl px-8 py-16">
        <h1 className="mb-12 text-center text-5xl font-bold">
          Project Aurora Engineering All Hands
        </h1>
        
        <div className="space-y-24">
          {/* Slide 1: Opening */}
          <section className="text-center">
            <h2 className="mb-4 text-6xl font-bold text-[#66B2FF]">From Engineers to Builders</h2>
            <p className="text-2xl text-white/80">Embracing the Age of AI</p>
            <p className="mt-4 text-xl text-white/60">June 5th, 2025</p>
          </section>

          {/* Slide 2: The Mirror */}
          <section>
            <h2 className="mb-8 text-4xl font-bold">Current AI Adoption Dashboard</h2>
            <div className="space-y-4 rounded-lg bg-black/40 p-8">
              <div>
                <p className="text-lg">Active Cursor AI Users: <span className="font-bold">23%</span></p>
                <div className="mt-2 h-4 w-full rounded bg-gray-800">
                  <div className="h-full w-[23%] rounded bg-[#66B2FF]"></div>
                </div>
              </div>
              <div>
                <p className="text-lg">AI Tool Utilization: <span className="font-bold">20%</span></p>
                <div className="mt-2 h-4 w-full rounded bg-gray-800">
                  <div className="h-full w-[20%] rounded bg-[#4ECDC4]"></div>
                </div>
              </div>
              <p className="mt-6 text-xl">We're operating at <span className="font-bold text-[#FF6B6B]">20%</span> of our potential</p>
            </div>
          </section>

          {/* Slide 3: The Poll */}
          <section>
            <h2 className="mb-8 text-4xl font-bold">What's holding you back from using AI more?</h2>
            <ul className="space-y-3 text-lg">
              <li>• Too many tools, too fast</li>
              <li>• Don't know where to start</li>
              <li>• Concerned about job security</li>
              <li>• Pride in my craft</li>
              <li>• All of the above</li>
            </ul>
            <p className="mt-8 text-xl italic">
              "I understand each position. Because what's happening right now <span className="font-bold text-[#66B2FF]">is overwhelming.</span>"
            </p>
          </section>

          {/* Slide 4: Water Metaphor */}
          <section className="text-center">
            <h2 className="mb-8 text-4xl font-bold">The Water Philosophy</h2>
            <div className="space-y-4 text-2xl">
              <p>Code is like water.</p>
              <p>It flows, it changes, it adapts.</p>
              <p>When we hold water too tightly,</p>
              <p>it escapes through our fingers.</p>
              <p>When we guide its flow,</p>
              <p>we can direct rivers.</p>
            </div>
          </section>

          {/* Slide 5: Pod Evolution */}
          <section>
            <h2 className="mb-8 text-4xl font-bold">Pod Evolution</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-gray-700 p-6">
                <h3 className="mb-4 text-2xl font-bold text-gray-500">Pod 1.0 - Traditional</h3>
                <p>Lead Engineer: Architect & Coder</p>
                <p>Engineers: Coders</p>
                <p className="mt-4 font-semibold">Output: Features</p>
              </div>
              <div className="rounded-lg border border-[#66B2FF] p-6">
                <h3 className="mb-4 text-2xl font-bold text-[#66B2FF]">Pod 2.0 - AI-Enhanced</h3>
                <p>Lead: Orchestrator & Visionary</p>
                <p>Engineers: AI Directors</p>
                <p className="mt-4 font-semibold">Output: 10x Solutions</p>
              </div>
              <div className="rounded-lg border border-[#4ECDC4] p-6">
                <h3 className="mb-4 text-2xl font-bold text-[#4ECDC4]">Pod 3.0 - Builder</h3>
                <p>Lead Builder: Systems Thinker</p>
                <p>Unified Team: No rigid roles</p>
                <p className="mt-4 font-semibold">Output: Products in days</p>
              </div>
            </div>
          </section>

          {/* Slide 6: Demo */}
          <section>
            <h2 className="mb-8 text-4xl font-bold">The Power of AI-Assisted Development</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl text-red-400">Traditional Way: ~2 hours</h3>
                <p>Manual coding, testing, documentation</p>
              </div>
              <div>
                <h3 className="mb-4 text-2xl text-green-400">AI-Powered: ~2 minutes</h3>
                <p>Complete, tested, documented code with error handling</p>
              </div>
            </div>
          </section>

          {/* Slide 7: Philosophy */}
          <section className="text-center">
            <h2 className="mb-8 text-4xl font-bold">The Vibe Coder</h2>
            <div className="space-y-3 text-xl italic">
              <p>"The Vibe Coder stays behind,</p>
              <p>that is why he's ahead.</p>
              <p>He is detached,</p>
              <p>thus at one with all.</p>
              <p>Through selfless action</p>
              <p>he is perfectly fulfilled."</p>
            </div>
            <p className="mt-8 text-lg">— Adapted from the Tao Te Ching</p>
          </section>

          {/* Slide 8: Phoenix */}
          <section>
            <h2 className="mb-8 text-center text-4xl font-bold text-[#FF6B6B]">🔥 PROJECT PHOENIX 🔥</h2>
            <h3 className="mb-6 text-center text-2xl">Your 30-Day Challenge</h3>
            <ul className="space-y-4 text-xl">
              <li>🎯 Pick one tedious task you do repeatedly</li>
              <li>🤖 Use AI to automate or accelerate it</li>
              <li>⏱️ Measure the time saved</li>
              <li>🚀 Share your learning at next month's All Hands</li>
            </ul>
            <p className="mt-8 text-center text-lg">
              Resources: AI Workflow Masterclass | #ai-pioneers Slack | Context Management Guide
            </p>
          </section>

          {/* Slide 9: Closing */}
          <section className="text-center">
            <div className="mb-12">
              <p className="text-3xl">You can be the engineer who resisted the shift...</p>
              <p className="mt-4 text-3xl font-bold">Or the builder who shaped the future.</p>
            </div>
            <div className="mb-12">
              <p className="text-2xl text-[#66B2FF]">At First Horizon, we're not just adopting AI.</p>
              <p className="text-2xl font-bold text-[#4ECDC4]">We're pioneering how banking gets built in the AI age.</p>
            </div>
            <h2 className="text-5xl font-bold">The only question is:</h2>
            <h1 className="mt-4 bg-gradient-to-r from-[#66B2FF] to-[#4ECDC4] bg-clip-text text-6xl font-bold text-transparent">
              Will you?
            </h1>
          </section>
        </div>
      </div>
    </div>
  )
}
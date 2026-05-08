export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#';
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track How Medications<br />Affect Your Symptoms
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Log symptoms and medications daily. Our analytics engine correlates symptom severity with medication timing and dosage changes — giving you and your doctor clear, actionable insights.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '📋', title: 'Symptom Logging', desc: 'Rate severity, add notes, and track patterns daily with a simple interface.' },
            { icon: '💊', title: 'Medication Timing', desc: 'Record doses, timing, and changes. See exactly when adjustments impact how you feel.' },
            { icon: '📈', title: 'Correlation Charts', desc: 'Visual timelines reveal relationships between medications and symptom trends.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited symptom & medication logs',
              'Correlation analytics & charts',
              'Exportable reports for your doctor',
              'Multi-medication tracking',
              'Email reminders & alerts',
              'Secure, private data storage',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Who is this for?',
              a: 'Chronic illness patients, caregivers, and healthcare providers who need clear data on how medications influence symptoms over time.',
            },
            {
              q: 'How does the correlation work?',
              a: 'You log symptoms and medications daily. Our analytics engine analyzes timing, dosage changes, and severity scores to surface meaningful patterns in easy-to-read charts.',
            },
            {
              q: 'Is my health data private?',
              a: 'Yes. Your data is encrypted and never shared or sold. You can export or delete your data at any time.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Symptom Tracker. All rights reserved.
      </footer>
    </main>
  );
}
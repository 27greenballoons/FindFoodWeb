import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#061512] text-emerald-100/80 selection:bg-emerald-500/30">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-24">
        
        {/* Header / Back Button */}
        <header className="flex items-center justify-between mb-12">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors font-bold"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <span className="text-xs font-mono text-emerald-900 uppercase tracking-widest">
            FindFood Legal
          </span>
        </header>

        {/* Content Card */}
        <div className="rounded-[2rem] p-8 md:p-12 border border-emerald-900/50 bg-emerald-950/20 backdrop-blur-xl shadow-2xl">
          <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-emerald-500 font-medium mb-10">Effective Date: February 10, 2026</p>
          
          <div className="space-y-10 text-emerald-100/70 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-emerald-400 mb-3">1. Information We Collect</h2>
              <p>We collect email addresses and account identifiers provided during sign-up. We also collect <strong>Precise Location data</strong> to provide restaurant recommendations.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-400 mb-3">2. How We Use Information</h2>
              <p>Data is used to provide food recommendations, calculate distances to venues, and secure your account.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-400 mb-3">3. Third-Party Service Providers</h2>
              <p className="mb-4">We share data with necessary service providers to operate the app:</p>
              <ul className="space-y-3 pl-4">
                <li className="flex gap-3">
                  <span className="text-emerald-500">•</span>
                  <span><strong>Google AdMob:</strong> For displaying advertisements.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500">•</span>
                  <span><strong>RevenueCat:</strong> For managing Pro subscriptions and payments.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500">•</span>
                  <span><strong>Supabase:</strong> For secure data storage and authentication.</span>
                </li>
              </ul>
              <p className="mt-4 italic text-sm">These third parties may collect device identifiers and usage data.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-400 mb-3">4. Data Retention</h2>
              <p>Location data is used in real-time and not stored permanently on our servers. Account data is kept as long as your account is active.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-400 mb-3">5. Account & Data Deletion</h2>
              <p>Users may delete their account and all associated data at any time via the Profile settings in-app.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-400 mb-3">6. Children’s Privacy</h2>
              <p>FindFood is not directed to children under 13. We do not knowingly collect data from children.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-400 mb-3">7. Security</h2>
              <p>We use industry-standard encryption to protect your data but no method of electronic transmission is 100% secure.</p>
            </section>

            <section className="pt-8 border-t border-emerald-900/50">
              <h2 className="text-xl font-bold text-emerald-400 mb-3">8. Contact Us</h2>
              <p>For data privacy inquiries: <a href="mailto:support@tryfindfood.com" className="text-emerald-500 hover:underline">support@tryfindfood.com</a></p>
            </section>

          </div>
        </div>

        {/* Simple Footer */}
        <footer className="mt-12 text-center text-emerald-900 text-xs font-bold uppercase tracking-widest">
          © 2026 FindFood
        </footer>
      </div>
    </div>
  );
}
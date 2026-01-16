import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="text-3xl font-bold text-white sm:text-4xl mb-4">Privacy Policy</h1>
        <p className="text-slate-400">Last updated: March 15, 2024</p>
      </div>

      <div className="space-y-12 text-slate-300 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700">
        <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-white">1. Data Collection</h2>
          </div>
          <p className="mb-4">
            At ClipCaddy, we take privacy seriously. We collect minimal data necessary to provide our services:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>Account information (email, name) for authentication.</li>
            <li>Usage analytics (anonymized) to improve our product.</li>
            <li>Device information for synchronization purposes.</li>
          </ul>
        </section>

        <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
           <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <Lock className="w-6 h-6 text-green-500" />
            </div>
            <h2 className="text-xl font-bold text-white">2. End-to-End Encryption</h2>
          </div>
          <p>
            Your clipboard history is <strong>end-to-end encrypted</strong> before it leaves your device. This means:
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <h3 className="font-semibold text-white mb-2">We cannot read your clips</h3>
              <p className="text-sm text-slate-400">ClipCaddy servers only see encrypted blobs. We do not have the decryption keys.</p>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <h3 className="font-semibold text-white mb-2">Zero Knowledge</h3>
              <p className="text-sm text-slate-400">Your data is accessible only by you, on your authorized devices.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">3. Data Usage</h2>
          <p className="mb-4">
            We use your data solely to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>Provide, maintain, and improve the Service.</li>
            <li>Process transactions and send related information.</li>
            <li>Send technical notices, updates, and support messages.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Services</h2>
          <p>
            We may use third-party providers for infrastructure (e.g., AWS, Google Cloud) and payment processing (e.g., Stripe). These partners adhere to strict security standards.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="#" className="text-primary hover:text-primary/80 transition-colors">privacy@clipcaddy.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
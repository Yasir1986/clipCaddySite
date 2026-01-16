import React from 'react';
import { FileText, AlertCircle, HelpCircle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="text-3xl font-bold text-white sm:text-4xl mb-4">Terms of Service</h1>
        <p className="text-slate-400">Last updated: March 15, 2024</p>
      </div>

      <div className="space-y-12 text-slate-300 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using ClipCaddy ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on ClipCaddy's website for personal, non-commercial transitory viewing only.
          </p>
          <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by ClipCaddy at any time.</p>
        </section>

        <section className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
           <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-500/20 rounded-lg">
              <AlertCircle className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="text-xl font-bold text-white">3. Disclaimer</h2>
          </div>
          <p>
            The materials on ClipCaddy's website are provided on an 'as is' basis. ClipCaddy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
          <p>
            In no event shall ClipCaddy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ClipCaddy's website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Subscription & Billing</h2>
          <p className="mb-4">
            Subscriptions are billed in advance on a monthly or yearly basis and are non-refundable for the current billing period. You may cancel your subscription at any time.
          </p>
        </section>

         <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Delaware, USA and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
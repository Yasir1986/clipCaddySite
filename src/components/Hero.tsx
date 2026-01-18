import React from 'react';
import { FiArrowRight, FiCopy, FiCheckCircle, FiZap } from 'react-icons/fi';

interface HeroProps {
  onLaunchDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLaunchDemo }) => {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-primary mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary"></span>
          New: AI-Powered Smart Tagging 2.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
          The Clipboard Manager <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            That Thinks For You
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          ClipCaddy boosts your productivity with unlimited history, smart tagging, and instant cloud sync across all your devices. Stop losing your copy-pastes.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onLaunchDemo}
            className="px-8 py-4 bg-primary hover:bg-indigo-600 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group"
          >
            Start for Free
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#pricing" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
            View Pricing
          </a>
        </div>

        {/* Feature Ticks */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="w-4 h-4 text-green-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="w-4 h-4 text-green-400" />
            <span>Works on Mac & Windows</span>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="w-4 h-4 text-green-400" />
            <span>Bank-level encryption</span>
          </div>
        </div>

        {/* Mock UI Preview */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/50 backdrop-blur-xl shadow-2xl p-2 md:p-4">
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/9] relative group cursor-default">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                    <FiZap className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                    <p className="text-slate-500 text-lg">Interactive Dashboard Preview</p>
                    <button 
                      onClick={onLaunchDemo}
                      className="mt-4 text-primary hover:text-indigo-400 font-medium underline underline-offset-4"
                    >
                        Click to Launch Demo
                    </button>
                 </div>
              </div>
              {/* Decorative Mock Elements to look like a busy app */}
              <div className="absolute top-0 left-0 w-64 h-full border-r border-slate-800 bg-slate-900/50 hidden md:block opacity-50 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-72 h-full border-l border-slate-800 bg-slate-900/50 hidden md:block opacity-50 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
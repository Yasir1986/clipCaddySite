import React, { useState, useEffect, useRef } from 'react';
import { FiCheck, FiStar, FiTrash2, FiHeart, FiMousePointer } from 'react-icons/fi';
import { PRO_FEATURES } from '../../data';

const Pricing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Choose Your Plan
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Start for free, upgrade for power.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          
          {/* Free Plan */}
          <div className={`relative rounded-2xl border border-slate-800 bg-slate-950/50 p-8 shadow-lg flex flex-col hover:border-slate-700 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-semibold text-white">Starter</h3>
            <div className="mt-4 flex items-baseline text-white">
              <span className="text-5xl font-extrabold tracking-tight">$0</span>
              <span className="ml-1 text-xl font-semibold text-slate-400">/forever</span>
            </div>
            <p className="mt-4 text-slate-400">Essential tools for casual users.</p>
            
            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex items-center text-slate-300">
                <div className="bg-slate-800 p-1 rounded-full mr-3">
                  <FiCheck className="h-4 w-4 text-slate-400" />
                </div>
                10 items history limit
              </li>
              <li className="flex items-center text-slate-300">
                <div className="bg-slate-800 p-1 rounded-full mr-3">
                  <FiTrash2 className="h-4 w-4 text-slate-400" />
                </div>
                Delete clips
              </li>
              <li className="flex items-center text-slate-300">
                <div className="bg-slate-800 p-1 rounded-full mr-3">
                  <FiHeart className="h-4 w-4 text-slate-400" />
                </div>
                Favorites
              </li>
              <li className="flex items-center text-slate-300">
                <div className="bg-slate-800 p-1 rounded-full mr-3">
                  <FiMousePointer className="h-4 w-4 text-slate-400" />
                </div>
                Right-click "Copy to ClipCaddy"
              </li>
            </ul>

            <button className="mt-8 block w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors">
              Get Started
            </button>
          </div>

          {/* Monthly Plan */}
          <div className={`relative rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-xl flex flex-col hover:border-slate-500 transition-all duration-700 delay-200 z-10 lg:-mt-4 lg:mb-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-semibold text-white">Monthly Pro</h3>
            <div className="mt-4 flex items-baseline text-white">
              <span className="text-5xl font-extrabold tracking-tight">$3.99</span>
              <span className="ml-1 text-xl font-semibold text-slate-400">/month</span>
            </div>
            <p className="mt-4 text-slate-400">Full power for individual pros.</p>
            
            <ul className="mt-8 space-y-4 flex-1">
              {PRO_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-center text-white">
                  <div className="bg-primary/20 p-1 rounded-full mr-3">
                    <FiCheck className="h-4 w-4 text-primary" />
                  </div>
                  {feature.text}
                </li>
              ))}
            </ul>

            <button className="mt-8 block w-full bg-primary hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-lg shadow-primary/25">
              Subscribe Monthly
            </button>
          </div>

          {/* Yearly Plan */}
          <div className={`relative rounded-2xl border border-primary/50 bg-gradient-to-b from-slate-900 to-slate-900/80 p-8 shadow-2xl shadow-primary/10 flex flex-col transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                <FiStar className="w-3 h-3 mr-1 fill-current" />
                Best Value
              </span>
            </div>

            <h3 className="text-xl font-semibold text-white">Yearly Pro</h3>
            <div className="mt-4 flex items-baseline text-white">
              <span className="text-5xl font-extrabold tracking-tight">$29.99</span>
              <span className="ml-1 text-xl font-semibold text-slate-400">/year</span>
            </div>
            <div className="mt-2 inline-block">
               <span className="px-2 py-1 rounded-md bg-green-500/20 text-green-400 text-sm font-medium">
                 Save 37%
               </span>
            </div>
            <p className="mt-4 text-slate-400">The complete suite, best price.</p>
            
            <ul className="mt-8 space-y-4 flex-1">
              {PRO_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-center text-white">
                  <div className="bg-primary p-1 rounded-full mr-3">
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                  {feature.text}
                </li>
              ))}
            </ul>

            <button className="mt-8 block w-full bg-gradient-to-r from-primary to-secondary hover:from-indigo-400 hover:to-purple-400 text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-[1.02]">
              Subscribe Yearly
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
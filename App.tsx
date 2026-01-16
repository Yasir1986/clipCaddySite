import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../clipcaddy site/src/components/Navbar';
import Hero from '../clipcaddy site/src/components/Hero';
import Pricing from '../clipcaddy site/src/components/Pricing';
import Testimonials from '../clipcaddy site/src/components/Testimonials';
import DashboardDemo from '../clipcaddy site/src/components/DashboardDemo';
import Privacy from '../clipcaddy site/src/components/Privacy';
import Terms from '../clipcaddy site/src/components/Terms';
import { Layers, Twitter, Github, Linkedin, Heart } from 'lucide-react';
import { FEATURES } from './data';

const App: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [view, setView] = useState('home');
  
  // Animation state for features
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  // Animation state for footer
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Features Observer
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFeaturesVisible(true);
          featuresObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      featuresObserver.observe(featuresRef.current);
    }

    // Footer Observer
    const footerObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFooterVisible(true);
          footerObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }

    return () => {
      featuresObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const navigateTo = (page: string) => {
    setView(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-primary/30 selection:text-white flex flex-col">
      <Navbar 
        onLaunchDemo={() => setShowDemo(true)} 
        onNavigate={navigateTo}
        currentView={view}
      />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero onLaunchDemo={() => setShowDemo(true)} />
            
            {/* Features Grid Section */}
            <section id="features" ref={featuresRef} className="py-24 bg-slate-900 border-y border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                   <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything you need to manage clips</h2>
                   <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                     Built for developers, designers, and writers who copy-paste 100 times a day.
                   </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {FEATURES.map((f, i) => (
                    <div 
                      key={i} 
                      className={`p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-primary/50 transition-all duration-700 hover:-translate-y-1 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className={`w-12 h-12 rounded-lg ${f.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                        <div className={`w-6 h-6 rounded-full ${f.color}`}></div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
                      <p className="text-slate-400">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Testimonials />

            <Pricing />
          </>
        )}

        {view === 'privacy' && <Privacy />}
        {view === 'terms' && <Terms />}
      </main>

      <footer ref={footerRef} className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className={`col-span-2 md:col-span-1 transition-all duration-700 delay-0 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl text-white">ClipCaddy</span>
              </div>
              <p className="text-slate-500 text-sm">
                The last clipboard manager you'll ever need.
              </p>
            </div>
            <div className={`transition-all duration-700 delay-100 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button className="hover:text-primary transition-colors">Download</button></li>
                <li><button className="hover:text-primary transition-colors">Changelog</button></li>
                <li><button className="hover:text-primary transition-colors">Docs</button></li>
              </ul>
            </div>
            <div className={`transition-all duration-700 delay-200 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <button onClick={() => navigateTo('privacy')} className="hover:text-primary transition-colors text-left">Privacy</button>
                </li>
                <li>
                  <button onClick={() => navigateTo('terms')} className="hover:text-primary transition-colors text-left">Terms</button>
                </li>
              </ul>
            </div>
            <div className={`transition-all duration-700 delay-300 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <h4 className="font-semibold text-white mb-4">Connect</h4>
               <div className="flex space-x-4">
                 <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                 <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                 <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
               </div>
            </div>
          </div>
          <div className={`border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 delay-500 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-slate-500 text-sm">© 2024 ClipCaddy Inc. All rights reserved.</p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by ClipCaddy Team
            </p>
          </div>
        </div>
      </footer>

      {showDemo && <DashboardDemo onClose={() => setShowDemo(false)} />}
    </div>
  );
};

export default App;
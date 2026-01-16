import React, { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScrollEvent = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      
      // Prevent division by zero
      if (maxScroll <= 0) return;

      const percentage = scrollLeft / maxScroll;
      
      if (percentage < 0.3) {
        setActiveLine(0);
      } else if (percentage < 0.7) {
        setActiveLine(1);
      } else {
        setActiveLine(2);
      }
    };

    container.addEventListener('scroll', handleScrollEvent);
    // Initial check
    handleScrollEvent();
    
    return () => container.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
        
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      let targetLeft = 0;

      if (index === 0) targetLeft = 0;
      else if (index === 1) targetLeft = maxScroll / 2;
      else targetLeft = maxScroll;

      container.scrollTo({
        left: targetLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Loved by productive people</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Join thousands of developers and designers who have supercharged their clipboard.
          </p>
        </div>

        <div className="relative group">
          {/* Left Arrow Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-12 z-20 p-3 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-slate-300 hover:text-white hover:bg-primary hover:border-primary transition-all shadow-lg active:scale-95 hidden md:flex items-center justify-center group-hover:opacity-100 opacity-70"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-12 z-20 p-3 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-slate-300 hover:text-white hover:bg-primary hover:border-primary transition-all shadow-lg active:scale-95 hidden md:flex items-center justify-center group-hover:opacity-100 opacity-70"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={i} 
                className="snap-center shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="h-full bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors relative group flex flex-col">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-800 group-hover:text-slate-700 transition-colors" />
                  <p className="text-slate-300 mb-6 relative z-10 leading-relaxed flex-grow">"{t.quote}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full border border-slate-700 object-cover" 
                    />
                    <div>
                      <h4 className="text-white font-semibold">{t.name}</h4>
                      <p className="text-slate-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Lines */}
          <div className="flex justify-center gap-3 mt-4">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeLine === i 
                    ? 'w-12 bg-primary' 
                    : 'w-6 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to section ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
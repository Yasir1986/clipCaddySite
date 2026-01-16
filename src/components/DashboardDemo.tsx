import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Plus, Copy, Image as ImageIcon, Link as LinkIcon, 
  Trash2, Star, Settings, FileText, Lock, X,
  ClipboardPaste, Zap
} from 'lucide-react';
import { Clip } from '../../types';
import { MOCK_CLIPS } from '../../data';

interface DashboardDemoProps {
  onClose: () => void;
}

const ClipSkeleton = () => (
  <div className="bg-slate-800/20 border border-slate-800 rounded-xl p-4 animate-pulse">
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-lg bg-slate-700/50 shrink-0"></div>
      <div className="flex-1 space-y-3 py-1">
        <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
        <div className="flex gap-2">
           <div className="h-3 bg-slate-700/30 rounded w-16"></div>
           <div className="h-3 bg-slate-700/30 rounded w-12"></div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardDemo: React.FC<DashboardDemoProps> = ({ onClose }) => {
  const [clips, setClips] = useState<Clip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputText, setInputText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isProMode, setIsProMode] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount and simulate fetch
  useEffect(() => {
    inputRef.current?.focus();
    
    const timer = setTimeout(() => {
      setClips(MOCK_CLIPS);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddClip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newClip: Clip = {
      id: Date.now().toString(),
      content: inputText,
      type: inputText.startsWith('http') ? 'link' : 'text',
      timestamp: new Date(),
      tags: [],
      isPinned: false
    };

    setClips([newClip, ...clips]);
    setInputText('');
  };

  const handleDelete = (id: string) => {
    setClips(clips.filter(c => c.id !== id));
  };

  const handlePin = (id: string) => {
    setClips(clips.map(c => c.id === id ? { ...c, isPinned: !c.isPinned } : c));
  };

  const filteredClips = clips.filter(c => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Favorites') return c.isPinned;
    if (selectedCategory === 'Links') return c.type === 'link';
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      {/* App Window Container */}
      <div className="w-full max-w-6xl h-[85vh] bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-300">
        
        {/* Close Button for Demo */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-slate-800 text-slate-400 hover:text-white rounded-full hover:bg-red-500/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Sidebar */}
        <div className="w-full md:w-64 bg-slate-950 border-r border-slate-800 flex-shrink-0 flex flex-col">
          <div className="p-6 flex items-center gap-2">
             <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <ClipboardPaste className="text-white w-5 h-5" />
             </div>
             <span className="font-bold text-white text-lg">ClipCaddy</span>
          </div>

          <nav className="flex-1 px-4 space-y-1">
            {['All', 'Favorites', 'Links', 'Images'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                {cat === 'All' && <ClipboardPaste className="mr-3 h-4 w-4" />}
                {cat === 'Favorites' && <Star className="mr-3 h-4 w-4" />}
                {cat === 'Links' && <LinkIcon className="mr-3 h-4 w-4" />}
                {cat === 'Images' && <ImageIcon className="mr-3 h-4 w-4" />}
                {cat}
              </button>
            ))}
          </nav>

          <div className="p-4 mt-auto border-t border-slate-800">
             <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
               <div className="flex items-center justify-between mb-2">
                 <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Plan</span>
                 <span className={`text-xs font-bold px-2 py-0.5 rounded ${isProMode ? 'bg-gradient-to-r from-primary to-secondary text-white' : 'bg-slate-700 text-slate-300'}`}>
                   {isProMode ? 'PRO' : 'FREE'}
                 </span>
               </div>
               <p className="text-xs text-slate-500 mb-3">
                 {isProMode ? 'Unlimited access unlocked.' : 'Upgrade for smart features.'}
               </p>
               <button 
                 onClick={() => setIsProMode(!isProMode)}
                 className="w-full text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white py-1.5 rounded transition-colors"
               >
                 Toggle Mode (Demo)
               </button>
             </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-slate-900 min-w-0">
          {/* Top Bar */}
          <div className="h-16 border-b border-slate-800 flex items-center px-6 gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search clips..." 
                className="w-full bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
              <Settings className="w-5 h-5" />
            </button>
          </div>

          {/* Add Clip Area */}
          <div className="p-6 pb-2">
            <form onSubmit={handleAddClip} className="relative">
              <input
                ref={inputRef}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                type="text"
                placeholder="Type here to add to clipboard (Simulate Copy)..."
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-lg"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-indigo-600 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Clips List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-3">
            {isLoading ? (
              // Skeleton Loading State
              <>
                <ClipSkeleton />
                <ClipSkeleton />
                <ClipSkeleton />
              </>
            ) : (
              // Actual Clips
              <>
                {filteredClips.map((clip) => (
                  <div key={clip.id} className="group bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl p-4 transition-all animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 p-2 rounded-lg ${clip.type === 'code' ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-700/50 text-slate-400'}`}>
                        {clip.type === 'link' ? <LinkIcon className="w-4 h-4" /> : 
                        clip.type === 'code' ? <Zap className="w-4 h-4" /> :
                        <FileText className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-slate-200 text-sm font-medium leading-relaxed break-all font-mono">
                          {clip.content}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs text-slate-500">
                            {clip.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                          {clip.tags.map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-400 border border-slate-700">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => handlePin(clip.id)}
                          className={`p-2 rounded-lg hover:bg-slate-700 transition-colors ${clip.isPinned ? 'text-yellow-400 opacity-100' : 'text-slate-400'}`}
                        >
                          <Star className={`w-4 h-4 ${clip.isPinned ? 'fill-yellow-400' : ''}`} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
                          <Copy className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(clip.id)}
                          className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredClips.length === 0 && !isLoading && (
                  <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
                      <ClipboardPaste className="w-8 h-8 text-slate-600" />
                    </div>
                    <h3 className="text-slate-300 font-medium">Clipboard is empty</h3>
                    <p className="text-slate-500 text-sm mt-1">Start copying text to see it appear here.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right Sidebar - Quick Paste & Analytics (Locked for Free) */}
        <div className="hidden lg:flex w-80 bg-slate-950 border-l border-slate-800 flex-col">
          <div className="p-4 border-b border-slate-800">
             <h3 className="text-sm font-semibold text-white flex items-center gap-2">
               <Zap className="w-4 h-4 text-yellow-400" />
               Quick Paste <span className="text-[10px] font-bold bg-gradient-to-r from-primary to-secondary px-1.5 py-0.5 rounded text-white ml-auto">PRO</span>
             </h3>
          </div>
          
          <div className="flex-1 p-4 relative">
             {/* Content */}
             <div className="space-y-3 opacity-50 blur-[2px] select-none pointer-events-none">
               <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                 <div className="text-xs text-slate-400 mb-1">Email Signature</div>
                 <div className="h-2 bg-slate-700 rounded w-3/4 mb-2"></div>
                 <div className="h-2 bg-slate-700 rounded w-1/2"></div>
               </div>
               <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                 <div className="text-xs text-slate-400 mb-1">Zoom Link</div>
                 <div className="h-2 bg-slate-700 rounded w-full"></div>
               </div>
               <button className="w-full py-2 border border-dashed border-slate-700 text-slate-500 rounded-lg text-sm flex items-center justify-center gap-2">
                 <Plus className="w-4 h-4" /> Add Template
               </button>
             </div>

             {/* Lock Overlay */}
             {!isProMode && (
               <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                 <div className="bg-slate-800 p-3 rounded-full mb-3 shadow-xl">
                   <Lock className="w-6 h-6 text-primary" />
                 </div>
                 <h4 className="text-white font-medium mb-1">Pro Feature</h4>
                 <p className="text-xs text-slate-400 mb-4">Create unlimited quick-paste templates and access analytics.</p>
                 <button 
                   onClick={() => setShowUpsell(true)}
                   className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-lg shadow-lg hover:shadow-primary/25 transition-all"
                 >
                   Unlock Pro
                 </button>
               </div>
             )}

             {isProMode && (
                <div className="absolute inset-0 p-4 bg-slate-950 z-20 animate-in fade-in duration-300">
                   <div className="space-y-3">
                    <button className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors group">
                      <div className="text-xs font-medium text-slate-400 mb-1 group-hover:text-primary">Email Signature</div>
                      <div className="text-xs text-slate-500 truncate">Best regards, John Doe...</div>
                    </button>
                    <button className="w-full text-left p-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors group">
                      <div className="text-xs font-medium text-slate-400 mb-1 group-hover:text-primary">Zoom Meeting</div>
                      <div className="text-xs text-slate-500 truncate">https://zoom.us/j/123456...</div>
                    </button>
                    <button className="w-full py-2 border border-dashed border-slate-700 hover:border-primary text-slate-500 hover:text-primary rounded-lg text-sm flex items-center justify-center gap-2 transition-colors">
                      <Plus className="w-4 h-4" /> Add Template
                    </button>
                   </div>
                </div>
             )}
          </div>
        </div>

      </div>

      {/* Upsell Modal */}
      {showUpsell && (
        <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl relative">
            <button onClick={() => setShowUpsell(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white"><X className="w-5 h-5"/></button>
            <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
              <Star className="w-8 h-8 text-primary fill-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Upgrade to Pro</h3>
            <p className="text-slate-400 mb-6 text-sm">Get access to Quick Paste templates, advanced analytics, and unlimited history.</p>
            <div className="space-y-3">
              <button 
                 onClick={() => { setIsProMode(true); setShowUpsell(false); }}
                 className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-lg hover:shadow-primary/25 transition-all"
              >
                Get Pro for $3.99/mo
              </button>
              <button onClick={() => setShowUpsell(false)} className="w-full py-3 text-slate-400 font-medium hover:text-white">
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardDemo;
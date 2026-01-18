import { Infinity, Zap, Folder, Cloud, BarChart3, Shield } from 'lucide-react';
import { Feature, Testimonial, ProFeature, Clip } from './types';
import { IconBaseProps } from 'react-icons';

export const FEATURES: Feature[] = [
  {
    title: "Smart Tagging", desc: "AI automatically categorizes your clips into Code, Links, or Text.", color: "bg-blue-500",
    icon: function (props: IconBaseProps) {
      throw new Error('Function not implemented.');
    }
  },
  {
    title: "Cloud Sync", desc: "Access your clipboard on iPhone, Mac, and Windows instantly.", color: "bg-purple-500",
    icon: function (props: IconBaseProps) {
      throw new Error('Function not implemented.');
    }
  },
  {
    title: "Secure Encryption", desc: "Your data is encrypted end-to-end. We can't read your clipboard.", color: "bg-green-500",
    icon: function (props: IconBaseProps) {
      throw new Error('Function not implemented.');
    }
  },
  {
    title: "Quick Paste", desc: "Access your frequent clips instantly with global hotkeys.", color: "bg-amber-500",
    icon: function (props: IconBaseProps) {
      throw new Error('Function not implemented.');
    }
  },
  {
    title: "Custom Templates", desc: "Create dynamic templates with variables for repetitive responses.", color: "bg-pink-500",
    icon: function (props: IconBaseProps) {
      throw new Error('Function not implemented.');
    }
  },
  {
    title: "Rich Content", desc: "Save images, formatted text, and code blocks without losing quality.", color: "bg-cyan-500",
    icon: function (props: IconBaseProps) {
      throw new Error('Function not implemented.');
    }
  }
];

export const PRO_FEATURES: ProFeature[] = [
  { icon: Infinity, text: "Unlimited clipboard history" },
  { icon: Zap, text: "Rich content support" },
  { icon: Folder, text: "Folders & tags" },
  { icon: Cloud, text: "Cross-device sync" },
  { icon: BarChart3, text: "Clipboard analytics" },
  { icon: Shield, text: "End-to-end encryption" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Dev",
    quote: "ClipCaddy completely changed my workflow. I used to lose code snippets all the time, now they are just a search away.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Marcus Rodriguez",
    role: "UI Designer",
    quote: "The smart tagging is actually smart. It knows what's a link and what's a hex code without me doing anything. Huge time saver.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Emma Wilson",
    role: "Content Writer",
    quote: "Finally, a clipboard manager that looks good and works fast. The analytics are a nice touch to see how much I actually copy-paste!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "David Park",
    role: "DevOps Engineer",
    quote: "Syncing between my Mac at work and Windows PC at home is seamless. Best $4 I spend every month for productivity.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Lisa Wong",
    role: "Product Manager",
    quote: "I manage so many links and Jira tickets. The templates feature saves me hours of typing repeated responses every week.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Alex Foster",
    role: "Indie Hacker",
    quote: "I built my entire MVP using code snippets stored in ClipCaddy. It's the essential tool I didn't know I needed.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const MOCK_CLIPS: Clip[] = [
  { id: '1', content: 'sudo apt-get update && sudo apt-get upgrade', type: 'code', timestamp: new Date(), tags: ['linux', 'terminal'], isPinned: true },
  { id: '2', content: 'https://dribbble.com/shots/15423-Dashboard-Concept', type: 'link', timestamp: new Date(Date.now() - 3600000), tags: ['design', 'inspiration'], isPinned: false },
  { id: '3', content: 'Meeting notes: Discuss Q3 roadmap, assign tasks for frontend migration.', type: 'text', timestamp: new Date(Date.now() - 7200000), tags: ['work'], isPinned: false },
  { id: '4', content: 'Color Palette: #0f172a, #334155, #6366f1', type: 'text', timestamp: new Date(Date.now() - 8600000), tags: ['design'], isPinned: true },
];
import React from 'react';
import { Box, Code2, GraduationCap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <FeatureItem 
            icon={<Box size={32} />}
            title="Learning Sandbox"
            desc="A safe, isolated environment for students to experiment with prompt engineering without risking cost overruns."
          />
          
          <FeatureItem 
            icon={<Code2 size={32} />}
            title="Native SDKs"
            desc="Python and TypeScript libraries designed specifically for the modern educational stack."
          />
          
          <FeatureItem 
            icon={<GraduationCap size={32} />}
            title="Curriculum Ready"
            desc="Pre-built templates and assignments that integrate directly into your LMS."
          />

        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="group">
    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-primary mb-3 tracking-tight">{title}</h3>
    <p className="text-secondary leading-relaxed">{desc}</p>
  </div>
);

export default Features;
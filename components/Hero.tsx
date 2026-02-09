import React from 'react';
import Button from './ui/Button';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-background">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        {/* New Badge */}
        <div className="animate-fade-in-up [animation-delay:0ms]">
          <a href="#new" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors text-xs font-medium text-primary mb-8 group cursor-pointer">
            <span className="text-accent">New</span>
            <span>v2.0 Infrastructure</span>
            <ChevronRight size={12} className="text-secondary group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter mb-6 animate-fade-in-up [animation-delay:200ms] text-primary max-w-4xl leading-[1.05]">
          Go forge <br className="hidden md:block"/> as you wish.
        </h1>
        
        {/* Subhead */}
        <p className="mt-2 max-w-xl mx-auto text-xl md:text-2xl text-secondary mb-10 animate-fade-in-up [animation-delay:400ms] font-medium leading-relaxed tracking-tight">
          Unified AI infrastructure for students and institutions. <br className="hidden md:block" /> Seamless access to Bedrock and Claude.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up [animation-delay:600ms]">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="link" size="lg" icon={<ChevronRight size={14} />}>
            View Documentation
          </Button>
        </div>

        {/* Hero Visual - Floating Interface */}
        <div className="mt-24 w-full max-w-5xl mx-auto animate-scale-in [animation-delay:800ms] opacity-0">
          <div className="relative rounded-2xl bg-white border border-gray-200 p-2 shadow-2xl shadow-gray-200/50 overflow-hidden">
             
             <div className="relative bg-[#F5F5F7] rounded-xl border border-gray-200/50 overflow-hidden">
               {/* Window Header */}
               <div className="flex items-center px-4 py-3 border-b border-gray-200 bg-white">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
                 </div>
                 <div className="ml-4 flex text-xs text-secondary font-mono bg-gray-100 px-3 py-1 rounded-md border border-gray-200">
                    api.igoforge.xyz
                 </div>
               </div>

               {/* Code Content - Keeping dark for contrast, but could be light */}
               <div className="p-8 md:p-12 font-mono text-sm md:text-base text-left overflow-x-auto bg-white">
                <div className="grid grid-cols-[auto_1fr] gap-6">
                  <div className="flex flex-col text-gray-300 select-none text-right">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
                  </div>
                  <div className="text-[#1D1D1F]">
                    <span className="text-[#D32F2F]">import</span> <span className="text-[#1D1D1F]">{`{ Forge }`}</span> <span className="text-[#D32F2F]">from</span> <span className="text-[#007600]">'@igoforge/sdk'</span>;<br/>
                    <br/>
                    <span className="text-[#86868B]">// Initialize unified gateway</span><br/>
                    <span className="text-[#D32F2F]">const</span> ai = <span className="text-[#D32F2F]">new</span> Forge();<br/>
                    <br/>
                    <span className="text-[#D32F2F]">const</span> completion = <span className="text-[#D32F2F]">await</span> ai.generate({`{`}<br/>
                    &nbsp;&nbsp;model: <span className="text-[#007600]">'claude-3-opus'</span>,<br/>
                    &nbsp;&nbsp;prompt: <span className="text-[#007600]">'Explain quantum mechanics to a 5th grader'</span><br/>
                    {`}`});
                  </div>
                </div>
               </div>
             </div>
          </div>
          {/* Subtle glow behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-100 rounded-full blur-[120px] opacity-60 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
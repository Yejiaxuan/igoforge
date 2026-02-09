import React from 'react';
import Card from './ui/Card';
import { Network, ShieldCheck, Zap } from 'lucide-react';

const Infrastructure: React.FC = () => {
  return (
    <section id="infrastructure" className="py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-primary mb-6">
            Infrastructure. <br /> <span className="text-secondary">Reimagined for learning.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-rows-[auto_auto]">
          
          {/* Large Card - Unified API */}
          <Card className="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden group min-h-[500px] flex flex-col justify-end bg-white border-none">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
            
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-full h-full bg-white">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-80 animate-pulse-slow"></div>
               {/* Abstract nodes */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-64 h-64 border border-gray-100 rounded-full flex items-center justify-center">
                   <div className="w-48 h-48 border border-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/50 rounded-full backdrop-blur-md border border-gray-100 flex items-center justify-center shadow-lg">
                        <Network className="text-accent w-12 h-12" />
                      </div>
                   </div>
                 </div>
               </div>
            </div>

            <div className="relative z-20 p-2">
              <h3 className="text-3xl font-semibold text-white mb-2 tracking-tight drop-shadow-sm">Unified Gateway</h3>
              <p className="text-lg text-white/90 max-w-md drop-shadow-sm">One API to access Claude, Bedrock, and Gemini. Switch models instantly without changing a single line of business logic.</p>
            </div>
          </Card>

          {/* Small Card - Compliance */}
          <Card className="flex flex-col justify-between min-h-[240px]">
            <div className="mb-8">
              <ShieldCheck className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-primary tracking-tight">Privacy First</h3>
            </div>
            <p className="text-secondary text-sm">GDPR & FERPA compliant. Student data is never used for model training.</p>
          </Card>

          {/* Small Card - Speed */}
          <Card className="flex flex-col justify-between min-h-[240px]">
            <div className="mb-8">
              <Zap className="w-10 h-10 text-[#FFD60A] mb-4" />
              <h3 className="text-xl font-semibold text-primary tracking-tight">Zero Latency</h3>
            </div>
            <p className="text-secondary text-sm">Optimized routing for real-time educational feedback loops.</p>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
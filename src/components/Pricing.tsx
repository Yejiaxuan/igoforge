import React from 'react';
import Button from './ui/Button';
import Card from './ui/Card';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-surface border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-primary mb-6">
            Pricing
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Choose the plan that fits your classroom or project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          
          {/* Free */}
          <PricingCard 
            title="Free"
            price="0"
            desc="For individual learners."
            features={["Flash Models", "5k requests/mo", "Community Support"]}
            cta="Start Free"
            variant="secondary"
          />

          {/* Developer - Highlighted */}
          <div className="relative transform md:-translate-y-4">
            <div className="absolute top-0 left-0 right-0 -mt-8 flex justify-center">
               <span className="text-accent text-xs font-semibold tracking-wider uppercase">Most Popular</span>
            </div>
            <Card className="bg-white border-accent/20 p-8 shadow-xl shadow-blue-900/5 ring-1 ring-accent/10">
              <div className="mb-8 border-b border-gray-100 pb-8">
                <h3 className="text-xl font-medium text-primary mb-2">Developer</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-secondary">$</span>
                  <span className="text-5xl font-semibold text-primary tracking-tight">29</span>
                  <span className="text-sm text-secondary">/mo</span>
                </div>
                <p className="text-secondary text-sm mt-4">Power users & research projects.</p>
              </div>
              <div className="space-y-4 mb-8">
                {["Pro Models (Claude/Gemini)", "100k requests/mo", "Priority Support", "3 Projects"].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={14} className="text-accent" />
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
              <Button variant="primary" fullWidth>Get Started</Button>
            </Card>
          </div>

          {/* Institution */}
          <PricingCard 
            title="Institution"
            price="Custom"
            desc="For universities."
            features={["Unlimited Seats", "Custom Limits", "SSO & Audit Logs"]}
            cta="Contact Us"
            variant="secondary"
          />

        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  variant: 'primary' | 'secondary';
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, desc, features, cta, variant }) => {
  return (
    <Card className="bg-white p-8">
      <div className="mb-8 border-b border-gray-100 pb-8">
        <h3 className="text-xl font-medium text-primary mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          {price !== 'Custom' && <span className="text-sm text-secondary">$</span>}
          <span className="text-4xl font-semibold text-primary tracking-tight">{price}</span>
          {price !== 'Custom' && <span className="text-sm text-secondary">/mo</span>}
        </div>
        <p className="text-secondary text-sm mt-4">{desc}</p>
      </div>
      <div className="space-y-4 mb-8">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <Check size={14} className="text-secondary" />
            <span className="text-sm text-secondary">{f}</span>
          </div>
        ))}
      </div>
      <Button variant={variant} fullWidth>{cta}</Button>
    </Card>
  );
};

export default Pricing;
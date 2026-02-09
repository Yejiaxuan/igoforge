import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          <div className="max-w-sm">
             <a href="#" className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-xl tracking-tight text-primary">igoforge</span>
            </a>
            <p className="text-xs text-secondary leading-relaxed">
              igoforge is the leading AI infrastructure platform for education. 
              We empower the next generation of builders with secure, unified access to world-class models.
            </p>
          </div>
          
          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-3 text-xs text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">Infrastructure</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sandbox</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3 text-xs text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-secondary">
          <p>Copyright © {new Date().getFullYear()} igoforge Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
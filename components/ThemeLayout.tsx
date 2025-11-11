
import React, { useState, ReactNode } from 'react';

interface ThemeLayoutProps {
  children: ReactNode;
}

const Modal: React.FC<{ title: string; content: ReactNode; onClose: () => void }> = ({ title, content, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in">
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
      <div className="sticky top-0 bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-6 text-gray-300 space-y-4">
        {content}
      </div>
    </div>
  </div>
);

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContent: { [key: string]: { title: string; content: ReactNode } } = {
    about: { title: "About Us", content: <p>This VAT/Sales Tax Calculator is a modern, intuitive tool designed by HSINI MOHAMED to simplify financial calculations for small businesses, freelancers, and consumers worldwide. Our mission is to provide free, accurate, and easy-to-use financial utilities.</p> },
    contact: { title: "Contact Us", content: <p>For inquiries, please reach out via email at <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a> or visit our website at <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">doodax.com</a>.</p> },
    guide: { title: "How to Use", content: <div><h3 className="font-bold text-lg text-white mb-2">Using the Calculator</h3><p>1. <strong>Enter Price:</strong> Input the monetary value you want to calculate.</p><p>2. <strong>Enter Tax Rate:</strong> Input the tax percentage (e.g., 20 for 20%).</p><p>3. <strong>Select Operation:</strong> Choose 'Add Tax' to calculate the gross price from a net price, or 'Remove Tax' to find the net price from a gross price.</p><p>4. <strong>View Results:</strong> The original price, tax amount, and final price will be displayed instantly.</p></div> },
    privacy: { title: "Privacy Policy", content: <p>We respect your privacy. This application is a client-side tool, meaning all calculations are performed directly in your browser. We do not collect, store, or transmit any personal or financial data you enter. Your information never leaves your device.</p> },
    terms: { title: "Terms of Service", content: <p>This tool is provided for informational purposes only and should not be considered financial advice. While we strive for accuracy, we are not liable for any errors in calculations or decisions made based on the results. Use at your own discretion.</p> },
    dmca: { title: "DMCA Policy", content: <p>All content, design, and code on this website are original works. If you believe your copyright has been infringed upon, please contact us at <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a> with the necessary documentation.</p> },
  };

  const navLinks = ["About", "Contact", "Guide", "Privacy Policy", "Terms of Service", "DMCA"];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-x 15s ease infinite',
        }}
      ></div>
      <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
      
      <style>{`
        @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
      
      <div className="relative z-20 flex flex-col min-h-screen">
        <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-white/10">
          <nav className="container mx-auto flex flex-wrap justify-center sm:justify-end items-center space-x-2 sm:space-x-4">
            {navLinks.map(link => (
              <button key={link} onClick={() => setActiveModal(link.split(' ')[0].toLowerCase())} className="text-sm text-gray-300 hover:text-white transition-colors py-1 px-2">
                {link}
              </button>
            ))}
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="py-6 px-4 text-center border-t border-white/10 text-sm text-gray-400">
          <div className="container mx-auto">
            <p className="mb-2">
              <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold transition-colors" style={{color: '#FFD700', textShadow: '0 0 5px rgba(255,215,0,0.5)'}}>
                Powered by HSINI MOHAMED
              </a>
            </p>
            <p>
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
              <span className="mx-2">|</span>
              <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
            </p>
          </div>
        </footer>
      </div>
      
      {activeModal && modalContent[activeModal] && (
        <Modal 
          title={modalContent[activeModal].title}
          content={modalContent[activeModal].content}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
};

export default ThemeLayout;

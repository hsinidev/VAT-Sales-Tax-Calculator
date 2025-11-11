import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import TaxCalculatorTool from './components/TaxCalculatorTool';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <div className="flex flex-col items-center space-y-12">

          {/* Calculator Section */}
          <section className="w-full">
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white text-center mb-4">
              VAT / Sales Tax Calculator
            </h1>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
              Instantly calculate gross and net prices by adding or removing tax. A fast, accurate, and beautifully simple tool for businesses and individuals.
            </p>
            <TaxCalculatorTool />
          </section>

          {/* Article Section */}
          <section className="w-full">
            <SeoArticle />
          </section>
          
        </div>
      </div>
    </ThemeLayout>
  );
};

export default App;
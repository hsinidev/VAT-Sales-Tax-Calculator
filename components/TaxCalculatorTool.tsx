
import React, { useState, useMemo, useCallback } from 'react';
import { addTax, removeTax } from '../utils/TaxMath';

type Operation = 'add' | 'remove';

interface Result {
  originalPrice: number;
  taxAmount: number;
  finalPrice: number;
}

const TaxCalculatorTool: React.FC = () => {
  const [price, setPrice] = useState('100');
  const [taxRate, setTaxRate] = useState('20');
  const [operation, setOperation] = useState<Operation>('add');
  
  const handleCalculation = useCallback(() => {
    const priceNum = parseFloat(price);
    const taxRateNum = parseFloat(taxRate);

    if (isNaN(priceNum) || isNaN(taxRateNum) || priceNum < 0 || taxRateNum < 0) {
      return null;
    }

    if (operation === 'add') {
      return addTax(priceNum, taxRateNum);
    } else {
      return removeTax(priceNum, taxRateNum);
    }
  }, [price, taxRate, operation]);

  const result = useMemo<Result | null>(handleCalculation, [handleCalculation]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl shadow-lg">
      <div className="space-y-6">
        {/* Price Input */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-400 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              className="w-full bg-gray-900/50 border border-gray-600 rounded-lg py-3 pl-7 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </div>
        </div>

        {/* Tax Rate Input */}
        <div>
          <label htmlFor="taxRate" className="block text-sm font-medium text-gray-300 mb-2">Tax Rate</label>
          <div className="relative">
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-400 sm:text-sm">%</span>
            </div>
            <input
              type="number"
              id="taxRate"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              placeholder="e.g., 20"
              className="w-full bg-gray-900/50 border border-gray-600 rounded-lg py-3 pl-4 pr-8 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            />
          </div>
        </div>
        
        {/* Operation Selector */}
        <fieldset>
          <legend className="text-sm font-medium text-gray-300 mb-2">Operation</legend>
          <div className="grid grid-cols-2 gap-3">
            {(['add', 'remove'] as Operation[]).map(op => (
              <div key={op}>
                <input
                  type="radio"
                  id={op}
                  name="operation"
                  value={op}
                  checked={operation === op}
                  onChange={() => setOperation(op)}
                  className="sr-only"
                />
                <label
                  htmlFor={op}
                  className={`cursor-pointer block w-full text-center py-3 px-2 rounded-lg border text-sm font-semibold transition-all ${
                    operation === op
                      ? 'bg-indigo-500 border-indigo-500 text-white shadow-md'
                      : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {op === 'add' ? 'Add Tax' : 'Remove Tax'}
                </label>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
             {operation === 'add' ? 'Calculate Gross Price' : 'Calculate Net Price'}
          </p>
        </fieldset>
      </div>

      {/* Results Display */}
      {result && (
        <div className="mt-8 pt-6 border-t border-white/20 animate-fade-in">
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-gray-400">Original Price</span>
              <span className="font-mono text-lg text-white">{formatCurrency(result.originalPrice)}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-gray-400">Tax Amount</span>
              <span className="font-mono text-lg text-white">{formatCurrency(result.taxAmount)}</span>
            </div>
            <div className="flex justify-between items-baseline bg-white/10 p-4 rounded-lg">
              <span className="font-bold text-lg text-white">{operation === 'add' ? 'Gross Price' : 'Net Price'}</span>
              <span className="font-orbitron font-bold text-2xl text-green-400">{formatCurrency(result.finalPrice)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxCalculatorTool;

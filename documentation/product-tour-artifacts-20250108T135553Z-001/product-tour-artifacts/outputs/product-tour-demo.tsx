import React, { useState, useEffect } from 'react';

const ProductTourDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    { title: 'Overview', content: 'Welcome to the product tour' },
    { title: 'Features', content: 'Explore key features' },
    { title: 'Navigation', content: 'Learn how to navigate' }
  ];

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{steps[currentStep].title}</h2>
          <div className="space-x-2">
            <button 
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <button 
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-md">
          {steps[currentStep].content}
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>
    </div>
  );
};

export default ProductTourDemo;

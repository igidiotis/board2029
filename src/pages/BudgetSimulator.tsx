import React from 'react'

const BudgetSimulator: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">School Board Budget Simulator</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Task</h2>
        <p className="mb-4">
          You are tasked with allocating the school board's annual budget of $100 million.
          Distribute funds across different departments while ensuring educational goals are met.
        </p>
        <p className="mb-4">
          Your decisions will impact student success, teacher satisfaction, and community support.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Academic Programs</h3>
          <p className="text-gray-600 mb-4">Current allocation: $40 million</p>
          <div className="flex items-center">
            <input 
              type="range" 
              min="30" 
              max="50" 
              defaultValue="40"
              className="w-full mr-3" 
            />
            <span className="text-lg font-medium">$40M</span>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Staff & Administration</h3>
          <p className="text-gray-600 mb-4">Current allocation: $30 million</p>
          <div className="flex items-center">
            <input 
              type="range" 
              min="20" 
              max="40" 
              defaultValue="30"
              className="w-full mr-3" 
            />
            <span className="text-lg font-medium">$30M</span>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Infrastructure</h3>
          <p className="text-gray-600 mb-4">Current allocation: $20 million</p>
          <div className="flex items-center">
            <input 
              type="range" 
              min="10" 
              max="30" 
              defaultValue="20"
              className="w-full mr-3" 
            />
            <span className="text-lg font-medium">$20M</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Remaining Budget: $10 million</h2>
        <p>
          Allocate the remaining funds to special initiatives or save for future needs.
        </p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Submit Budget Plan
        </button>
      </div>
    </div>
  )
}

export default BudgetSimulator 
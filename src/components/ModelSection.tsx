'use client';

import Image from 'next/image';

interface CarModel {
  name: string;
  image: string;
  description: string;
  specs: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
  };
}

interface ModelSectionProps {
  carModels: CarModel[];
  currentModelIndex: number;
  setCurrentModelIndex: (index: number) => void;
  hoveredModel: string | null;
  setHoveredModel: (model: string | null) => void;
}

export default function ModelSection({
  carModels,
  currentModelIndex,
  setCurrentModelIndex,
  hoveredModel,
  setHoveredModel
}: ModelSectionProps) {
  return (
    <section id="models" className="py-20 bg-white" aria-labelledby="models-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Model Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <h2 id="models-heading" className="sr-only">KAIYI Car Models</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {carModels.map((model, index) => (
              <button
                key={model.name}
                className={`text-xl sm:text-2xl md:text-3xl font-bold transition-all duration-300 ${
                  (hoveredModel === model.name || currentModelIndex === index)
                    ? 'text-[#0e62a8] underline'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onMouseEnter={() => setHoveredModel(model.name)}
                onMouseLeave={() => setHoveredModel(null)}
                onClick={() => {
                  setCurrentModelIndex(index);
                }}
                aria-pressed={currentModelIndex === index}
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Car Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg">
            {/* Car Image */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full mb-6 sm:mb-8">
              <Image
                src={hoveredModel ? carModels.find(m => m.name === hoveredModel)?.image || carModels[currentModelIndex].image : carModels[currentModelIndex].image}
                alt={(() => {
                  const currentModel = hoveredModel ? carModels.find(m => m.name === hoveredModel) : carModels[currentModelIndex];
                  return `${currentModel?.name} - ${currentModel?.description}`;
                })()}
                fill
                className="object-contain transition-all duration-500"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
              />
            </div>
            
            {/* Car Specifications */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {(hoveredModel ? carModels.find(m => m.name === hoveredModel)?.specs : carModels[currentModelIndex].specs) && Object.entries(hoveredModel ? carModels.find(m => m.name === hoveredModel)!.specs : carModels[currentModelIndex].specs).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{value.split(': ')[1] || value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase">{value.split(': ')[0] || key}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            onClick={() => {
              const newIndex = currentModelIndex === 0 ? carModels.length - 1 : currentModelIndex - 1;
              setCurrentModelIndex(newIndex);
            }}
            aria-label="Previous car model"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            onClick={() => {
              const newIndex = currentModelIndex === carModels.length - 1 ? 0 : currentModelIndex + 1;
              setCurrentModelIndex(newIndex);
            }}
            aria-label="Next car model"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

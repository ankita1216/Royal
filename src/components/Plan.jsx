import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, ZoomOut, X, Maximize2, RotateCcw } from 'lucide-react';

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [zoom, setZoom] = useState(1);
  // State for the active tab - Default is 'MASTER PLAN'
  const [activeTab, setActiveTab] = useState('MASTER PLAN');

  const colors = {
    blackish: "#765229",
    vibrantOrange: "#ffdead",
    goldenYellow: "#dfab5e",
    deepOrange: "#dfab5e",
    warmCream: "#FFF4E6",
  };

  const floorPlans = [
    { id: 1, title: 'MASTER PLAN', category: 'MASTER PLAN', img: '/plan-a.jpg' },
    { id: 2, title: '1ST FLOOR PLAN', category: 'FLOOR PLANS', img: '/plan-b.jpg' },
    { id: 3, title: 'TYPICAL FLOOR PLAN', category: 'FLOOR PLANS', img: '/plan-c.jpg' },
    { id: 4, title: 'UNIT-A FLOOR PLAN', category: 'UNIT PLANS', img: '/plan-d.jpg' },
    { id: 5, title: 'UNIT-B FLOOR PLAN', category: 'UNIT PLANS', img: '/plan-e.jpg' },
    { id: 6, title: 'UNIT-C FLOOR PLAN', category: 'UNIT PLANS', img: '/plan-f.jpg' },
    { id: 7, title: 'UNIT-D FLOOR PLAN', category: 'UNIT PLANS', img: '/plan-g.jpg' },
  ];

  // Define the tab buttons
  const tabs = ['MASTER PLAN', 'FLOOR PLANS', 'UNIT PLANS'];

  // Filter plans based on the active tab
  const filteredPlans = floorPlans.filter(plan => plan.category === activeTab);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1));
  const resetZoom = () => setZoom(1);

  const closeModal = () => {
    setSelectedPlan(null);
    setZoom(1);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: colors.warmCream, fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1]" style={{ color: colors.blackish }}>
            Our Floor <span className="italic font-light ml-3" style={{ color: colors.deepOrange }}>Plans</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-500 font-medium mx-auto text-center mt-4">
            Explore thoughtfully designed layouts.
          </p>
        </div>

        {/* Tabs System */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 border-2 ${
                activeTab === tab 
                ? 'shadow-md' 
                : 'hover:bg-white/50'
              }`}
              style={{
                backgroundColor: activeTab === tab ? colors.blackish : 'transparent',
                color: activeTab === tab ? '#fff' : colors.blackish,
                borderColor: colors.blackish,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Layout (Displays filtered plans) */}
        <motion.div 
          layout
          // Flex used to center single items (like Master Plan), Grid used for multiple items
          className={`w-full ${
            filteredPlans.length === 1 
              ? 'flex justify-center' 
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
          }`}
        >
          <AnimatePresence mode='popLayout'>
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                // Added max-width to ensure single cards don't stretch too wide
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer w-full max-w-sm"
                onClick={() => setSelectedPlan(plan)}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-50 flex items-center justify-center p-4">
                  <img 
                    src={plan.img} 
                    alt={plan.title} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full mb-2 shadow-lg">
                      <Maximize2 size={24} style={{ color: colors.blackish }} />
                    </div>
                    <span className="text-white font-bold tracking-wide uppercase text-xs">View {plan.title}</span>
                  </div>
                </div>

                <div className="p-5 flex justify-center items-center bg-white border-t border-gray-50">
                  <h3 className="font-bold text-lg text-center" style={{ color: colors.blackish }}>{plan.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-0 md:p-10"
          >
            <div className="absolute inset-0 cursor-zoom-out" onClick={closeModal}></div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full md:h-auto md:max-w-5xl bg-white md:rounded-3xl overflow-hidden flex flex-col shadow-2xl z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b md:border-none md:absolute md:top-6 md:right-6 md:z-20 md:p-0 md:bg-transparent">
                <div>
                  <h3 className="font-bold text-lg md:hidden" style={{ color: colors.blackish }}>{selectedPlan.title}</h3>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex bg-gray-100 md:bg-white/90 rounded-full p-1 shadow-md border border-gray-200 md:border-none">
                    <button onClick={(e) => { e.stopPropagation(); handleZoomOut(); }} disabled={zoom <= 1} className="p-2 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-20">
                      <ZoomOut size={20} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); handleZoomIn(); }} disabled={zoom >= 4} className="p-2 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-20">
                      <ZoomIn size={20} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); resetZoom(); }} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                      <RotateCcw size={20} />
                    </button>
                  </div>
                  <button onClick={closeModal} className="p-2 bg-gray-900 text-white md:bg-white/90 md:text-gray-900 rounded-full hover:rotate-90 transition-all shadow-md">
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Main Image Viewport */}
              <div className="flex-1 overflow-auto bg-[#fdfdfd] flex items-center justify-center p-4 md:p-12 min-h-0">
                <div className="relative transition-transform duration-300 ease-out inline-block" style={{ transform: `scale(${zoom})` }}>
                   <img 
                    src={selectedPlan.img} 
                    alt={selectedPlan.title} 
                    className="max-w-full h-auto max-h-[60vh] md:max-h-[70vh] rounded shadow-lg"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 md:p-6 bg-white border-t text-center">
                 <h3 className="text-xl md:text-2xl font-bold" style={{ color: colors.blackish }}>{selectedPlan.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Plan;
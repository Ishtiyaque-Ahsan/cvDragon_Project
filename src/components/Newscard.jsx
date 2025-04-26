import React from 'react';
import { ArrowRight } from 'lucide-react';
import { assets } from '../assets/assets_frontend/assets';

const Newscard = () => {
  return (
    <div  className='min-w-[70%] max-w-[70%]  sm:min-w-[30%] sm:max-w-[30%] h-auto min-h-50 rounded-lg flex-shrink-0 flex flex-col scroll-snap-start overflow-hidden shadow-lg border border-gray-700 relative'>
      {/* Image Section */}
      <div className="h-full">
        <img
          src={assets.newsPic2} 
          alt=""
          className="w-full h-full object-cover"

        />
      </div>

      {/* Text Content Section */}
      <div className="p-1 absolute bottom-0 left-0 w-full">
        
        <p className="text-white text-md mb-2 whitespace-normal">
        महातपस्वी की मंगल सन्निधि में आयोजित हुआ
         ज्ञानशाला दीक्षान्त समारोह
        </p>
        
      </div>
    </div>
  );
};

export default Newscard;

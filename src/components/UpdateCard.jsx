import React from 'react';
import { ArrowRight } from 'lucide-react';
import { assets } from '../assets/assets_frontend/assets';

const UpdateCard = (props) => {
  return (
    <div  className={`${props.color} min-w-[70%] max-w-[70%] sm:min-w-[35%] sm:max-w-[35%] lg:min-w-[25%] lg:max-w-[25%] h-[250px]  sm:h-[260px] md:w-[50%] rounded-lg flex-shrink-0 flex flex-col scroll-snap-start overflow-hidden shadow-lg border border-gray-700 relative`}>
      {/* Image Section */}
      <div className="bg-amber-600">
        {/* Here I have given colored background, you can replace with your actual image here also */}
        
      </div>

      {/* Text Content Section */}
      <div className="p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">कार्यसमिति बैठक</h2>
        <p className="text-sm text-white whitespace-normal ">
          17 अप्रैल 2024 रात्रि 8 बजे <br />
          सेज़ूम लिंक कार्यसमिति ग्रुप में <br />
          पोस्ट कर दिया गया है
        </p>
        <div className="flex items-center justify-between mt-7">
          <span className="text-white font-semibold">More info</span>
          <ArrowRight className="w-6 h-6 text-red-400 border cursor-pointer border-white bg-white rounded p-1" />
        </div>
      </div>
    </div>
  );
};

export default UpdateCard;

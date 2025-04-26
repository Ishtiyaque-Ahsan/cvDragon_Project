import React from 'react';
import { ArrowRight } from 'lucide-react';
import { assets } from '../assets/assets_frontend/assets';

const BirthDayCard = () => {
  return (
    <div  className=' min-w-[50%] max-w-[50%]  sm:min-w-[30%] sm:max-w-[30%] h-auto min-h-60 rounded-lg flex-shrink-0 flex flex-col scroll-snap-start overflow-hidden border border-gray-300 shadow-2xl  relative'>
      {/* Image Section */}
      <div className="h-full">
        <img
          src={assets.person} 
          alt=""
          className="w-full  h-full object-cover"
        />
      </div>

      {/* Text Content Section */}
      <div className="relative"> 
    <div className="absolute bottom-0 left-0 w-full p-2 m-auto">
        <div className="border border-white bg-white text-black rounded">
            <p className="text-md mb-2 whitespace-normal text-center text-black">
                Ishtiyaque <br />
                Software Developer
            </p>
        </div>
    </div>
</div>
    </div>
  );
};

export default BirthDayCard;

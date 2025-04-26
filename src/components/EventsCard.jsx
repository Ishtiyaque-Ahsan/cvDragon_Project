import React from 'react';
import { MapPin } from 'lucide-react';
import { assets } from '../assets/assets_frontend/assets'; 

const EventsCard = () => {
  return (
    <div className="min-w-[80%] max-w-[80%] sm:min-w-[30%] sm:max-w-[30%] h-auto rounded-lg flex-shrink-0 flex flex-col scroll-snap-start overflow-hidden shadow-lg border border-gray-200 bg-white relative">
      {/* Image Section */}
      <div className="relative rounded-2xl">
        <img
          src={assets.event_img} 
          alt=""
          className="w-full h-auto min-h-40 object-cover rounded-2xl"
        />
        {/* Date and Month card */}
        <div className="absolute top-2 right-2 bg-white rounded-md p-1 text-center">
          <p className="text-xl font-bold text-gray-800">17</p>
          <p className="text-xs text-gray-700">December</p>
          <p className="text-xs text-gray-700">2024</p>
        </div>
        
        <div className="absolute bottom-2 right-2">
          <button className="bg-red-500 text-white px-3 py-1 rounded-md font-bold text-xs hover:bg-red-600 transition-colors">
            Register Now
          </button>
        </div>
      </div>

      {/* Text Content Section */}
      <div className="p-4 bg-white">
        <h2 className="text-lg font-bold text-gray-800">Terapanth Divas</h2>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">Ahmedabad</span>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
const TopPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 md:p-8 bg-orange-200 rounded-2xl ">
      {" "}
      
      <div className="flex flex-row justify-between items-center">
        
        <button
          onClick={() => navigate("/menulist")}
          className="p-3 ml-3 bg-white cursor-pointer rounded-full border border-gray-300 shadow-sm hover:bg-gray-100 transition-colors"
        >
          <img className="w-6 h-6" src={assets.menu_icon} alt="Menu" />
        </button>

     
        <div className="flex items-center justify-center w-16 h-16 sm:w-24 ">
          <img className="rounded-full" src={assets.logo_1} alt="Logo" />
        </div>

       
        <button
          onClick={() => navigate("/profile")}
          className="p-3 mr-3 bg-white cursor-pointer rounded-full border border-gray-300 shadow-sm hover:bg-gray-100 transition-colors"
        >
          <img className="w-6 h-6" src={assets.profilePhoto} alt="Menu" />
        </button>
      </div>
      <div className="mt-13 flex flex-row items-center justify-between">
        {" "}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300">
            {" "}
            
            <img
              className="w-full h-full object-cover"
              src={assets.person}
              alt="Vikky Jain"
            />{" "}
            
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-red-600 text-lg">Vikky Jain</p>{" "}
            
            <p className="text-gray-600 text-sm">Committee Member</p>
          </div>
        </div>
        <div className="w-25 h-11 flex border-white bg-white border-1 px-3 py-1 rounded-2xl items-center ">
          {" "}
          
          <img
            className="w-5 h-5 rounded-full"
            src={assets.ashok}
            alt="Ashok"
          />
          <span className="ml-1">4000</span>
        </div>
      </div>
    </div>
  );
};

export default TopPage;

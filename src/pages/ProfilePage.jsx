import React from "react";
import {
  User,
  MapPin,
  Bell,
  Heart,
  Pencil,
  BarChart,
  Phone,
  MessageCircle,
  LifeBuoy,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const profileItems = [
    {
      title: "Profile",
      description: "Update and modify your profile",
      icon: <User className="w-4 h-4" />,
    },
    {
      title: "My Area",
      description: "Update and modify your profile",
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      title: "Notification",
      description: "Turn on or off notification",
      icon: <Bell className="w-4 h-4" />,
    },
    {
      title: "My Contribution",
      description: "Update and modify your profile",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      title: "My Notes",
      description: "Update and modify your profile",
      icon: <Pencil className="w-4 h-4" />,
    },
    {
      title: "My Scores",
      description: "Update and modify your profile",
      icon: <BarChart className="w-4 h-4" />,
    },
    {
      title: "Contact",
      description: "Update and modify your profile",
      icon: <Phone className="w-4 h-4" />,
    },
    {
      title: "Feedback",
      description: "Update and modify your profile",
      icon: <MessageCircle className="w-4 h-4" />,
    },
    {
      title: "Support",
      description: "Update and modify your profile",
      icon: <LifeBuoy className="w-4 h-4" />,
    },
    {
      title: "Settings",
      description: "Update and modify your profile",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 h-full w-full min-h-screen sm:w-140 m-auto p-4 pl-6 rounded-2xl shadow-lg flex flex-col">
        {/* Top Section (Profile Section) */}

        <div className="bg-orange-100 rounded-2xl py-4 px-4 grid grid-cols-3 items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="text-gray-700 cursor-pointer border rounded-full max-w-7 bg-white border-white"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>

          {/* Profile Picture and Name */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-23 h-23 mb-6 mt-4 rounded-full overflow-hidden border-2 border-white mx-auto">
              <img
                src={assets.person}
                alt="Vikki Jain"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 m-2">
                <Pencil className="w-3 h-3 text-blue-500" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900">Vikki Jain</h1>
              <p className="text-sm text-gray-600">Karyasamiti Sadasya</p>
            </div>
          </div>

          {/* Logout Button */}
          <div className="flex justify-end">
            <button className="text-gray-700">
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Profile Items List */}
        <div className="p-4 space-y-4">
          {profileItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-700">{item.icon}</span>
                <div>
                  <h2 className="text-base font-medium text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Log Out Button */}
        <div className="p-4">
          <button className="bg-red-500 text-white w-full py-3 rounded-full font-bold hover:bg-red-600 transition-colors">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

import React from 'react';
import {
    BookOpen,
    Users,
    TrendingUp,
    MessageCircle,
    Bookmark,
    Book,
    BarChart,
    X,
    Heart, 
    ListChecks, 
    Repeat, 
    DownloadCloud, 
    Megaphone, 
    HelpCircle, 
    Settings, 
} from 'lucide-react';

import { assets } from '../assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';

const MenuList = () => {
    const navigate = useNavigate()
    const menuItems = [
        { id: 1, title: 'My Task', icon: <BookOpen className="w-4 h-4" /> },
        { id: 2, title: 'My Community', icon: <Users className="w-4 h-4" /> },
        { id: 3, title: 'Leaderboard', icon: <TrendingUp className="w-4 h-4" /> },
        { id: 4, title: 'Chats', icon: <MessageCircle className="w-4 h-4" /> },
        { id: 5, title: 'Courses', icon: <Bookmark className="w-4 h-4" /> },
        { id: 6, title: 'Knowledge', icon: <Book className="w-4 h-4" /> },
        { id: 7, title: 'Polls', icon: <BarChart className="w-4 h-4" /> },
        { id: 8, title: 'Contributions', icon: <Heart className="w-4 h-4" /> },
        { id: 9, title: 'Quizzes', icon: <ListChecks className="w-4 h-4" /> },
        { id: 10, title: 'Updates', icon: <Repeat className="w-4 h-4" /> },
        { id: 11, title: 'Downloads', icon: <DownloadCloud className="w-4 h-4" /> },
        { id: 12, title: 'News', icon: <Megaphone className="w-4 h-4" /> },
        { id: 13, title: 'FAQs', icon: <HelpCircle className="w-4 h-4" /> },
        { id: 14, title: 'Settings', icon: <Settings className="w-4 h-4" /> },
    ];


    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 h-full w-full sm:w-140 m-auto p-4 pl-6 rounded-2xl shadow-lg flex flex-col">
           
            <div className="flex justify-end mb-4">
                <button type="button" onClick={()=>navigate('/')} className="text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                        src={assets.person}
                        alt="Profile picture"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Vikki Jain</h2>
                    <p className="text-sm text-gray-600">Karyasamiti Sadasya</p>
                </div>
            </div>

            {/* Menu Items */}
            <nav className="flex-grow">
                <ul className="space-y-4">
                    {menuItems.map((item) => (
                        <li key={item.id} className="flex items-center gap-4">
                            <span className="text-gray-700">{item.icon}</span>
                            <span className="text-base font-medium text-gray-900">{item.title}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
        </div>
    );
};

export default MenuList;

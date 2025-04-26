import React from "react";
import {
  CalendarIcon,
  Users,
  BookOpen,
  DownloadCloud,
  MoreHorizontal,
  User,
  Cake,
} from "lucide-react";
import UpdateCard from "./UpdateCard";
import Newscard from "./Newscard";
import EventsCard from "./EventsCard";
import BirthDayCard from "./BirthDayCard";

const NewsSection = () => {
  return (
    <div className=" bg-gray-200 p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          News
        </h2>
        <button className="text-white border px-2 rounded-lg py-1 cursor-pointer bg-red-500">
          View All
        </button>
      </div>
      <div
        className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
      </div>
    </div>
  );
};

const EventsSection = () => {
  return (
    <div className=" bg-gray-200 p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          Events
        </h2>
        <button className="text-white border px-2 rounded-lg py-1 cursor-pointer bg-red-500">
          View All
        </button>
      </div>
      <div
        className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
        <EventsCard />
      </div>
    </div>
  );
};

const UpdatesSection = () => {
  return (
    <div className=" bg-gray-200 p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          Updates
        </h2>
        <button className="text-white border px-2 rounded-lg py-1 cursor-pointer bg-red-500">
          View All
        </button>
      </div>
      <div
        className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <UpdateCard color="bg-red-400" />
        <UpdateCard color="bg-amber-300" />
        <UpdateCard color="bg-green-300" />
        <UpdateCard color="bg-red-400" />
        <UpdateCard color="bg-green-300" />
      </div>
    </div>
  );
};

const BirthdaysSection = () => {
  return (
    <div className=" bg-gray-200 p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          BirthDays
        </h2>
        <button className="text-white border px-2 rounded-lg py-1 cursor-pointer bg-red-500">
          View All
        </button>
      </div>
      <div
        className="flex flex-row gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <BirthDayCard />
        <BirthDayCard />
        <BirthDayCard />
        <BirthDayCard />
        <BirthDayCard />
      </div>
    </div>
  );
};

const QuickLinksSection = () => {
  const links = [
    {
      id: 1,
      title: "Pravachan",
      icon: <BookOpen className="w-9 h-10 border rounded-full p-2 " />,
      link: "#",
    },
    {
      id: 2,
      title: "Knowledge",
      icon: <BookOpen className="w-9 h-10 border rounded-full p-2 " />,
      link: "#",
    },
    {
      id: 3,
      title: "Downloads",
      icon: <DownloadCloud className="w-9 h-10 border rounded-full p-2 " />,
      link: "#",
    },
    {
      id: 4,
      title: "More",
      icon: <MoreHorizontal className="w-9 h-10 border rounded-full p-2 " />,
      link: "#",
    },
  ];
  return (
    <div className="bg-gray-200 p-4 rounded-lg border border-gray-200 shadow-gray-300 shadow-2xl">
      <h2 className="text-lg font-semibold text-black mb-4">Quick Links</h2>
      <div className="grid grid-cols-4 gap-4 bg-white rounded-2xl">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="flex flex-col items-center justify-center text-black hover:text-white hover:bg-gray-700 rounded-md p-2 "
          >
            {link.icon}
            <span className="text-xs mt-1">{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

const SectionsPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-4 md:p-8">
      <div className="grid grid-cols-1  gap-6">
        <div className="md:col-span-1">
          <div className="mb-6">
            <NewsSection />
          </div>
          <div className="mb-6">
            <EventsSection />
          </div>
          <div className="mb-6">
            <UpdatesSection />
          </div>
          <div className="mb-6">
            <BirthdaysSection />
          </div>
          <div className="border-2 border-red-600 mb-2 rounded-2xl h-13 w-full text-center bg-white">
            <p className="text-red-600 font-bold mt-3">Upcoming Birthdays</p>
          </div>
          <div>
            <QuickLinksSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionsPage;

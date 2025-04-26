import React from 'react'
import TopPage from "../components/TopPage"
import SectionsPage from "../components/SectionsPage"
import TaskPage from "../components/TaskPage"



const HomePage = () => {
  return (
    <div className="lg:w-[80%]  flex flex-col justify-center sm:m-auto bg-gray-200">
      <TopPage />
      <TaskPage />
      <SectionsPage /> 
      
      
    </div>
  )
}

export default HomePage

import React from 'react';
import { CheckCircle, AlertTriangle, Clock, ListChecks, MoreHorizontal } from 'lucide-react';

// component for a single task item
const TaskItem = ({ title, status, daysLeft }) => { 
    let statusIcon;
    let statusColor;
    let daysLeftText = '';

    switch (status) {
        case 'Completed':
            statusIcon = <CheckCircle className="w-5 h-5 text-green-500" />;
            statusColor = 'text-green-500';
            break;
        case 'Due':
            statusIcon = <AlertTriangle className="w-5 h-5 text-red-500" />;
            statusColor = 'text-red-500';
            break;
        case 'In Progress':
            statusIcon = <Clock className="w-5 h-5 text-yellow-500" />;
            statusColor = 'text-yellow-500';
            daysLeftText = `${daysLeft} Days Left`;
            break;
        case 'To Do':
            statusIcon = <ListChecks className="w-5 h-5 text-gray-500" />;
            statusColor = 'text-gray-500';
            daysLeftText = `${daysLeft} Days Left`;
            break;
        default:
            statusIcon = null;
            statusColor = 'text-gray-500';
    }

    return (
        <div className="flex items-center justify-between p-4 rounded-lg bg-white border border-white">
            <div className="flex items-center gap-4">
                <div className='border-2 border-gray-300 shadow-lg rounded p-5'>
                {statusIcon}
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold text-black">{title}</h3>
                    <p className={`text-sm ${statusColor}`}>{status}</p>
                    {daysLeft && <p className="text-xs text-gray-400">{daysLeftText}</p>}
                </div>
            </div>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </div>
    );
};

const TaskPage = () => {
    return (
        <div className="p-4 rounded-lg bg-gray-200">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <ListChecks className="w-6 h-6 bg-gray-500 rounded-sm" />
                    <p className='text-red-600'>Tasks</p>
                </h2>
                <button className="border border-white rounded-lg bg-white shadow-lg text-red-600 px-3 py-1">View All</button>
            </div>
            <div className="space-y-4">
                <TaskItem title="Sangathan Yatra" status="Completed" />
                <TaskItem title="Sangathan Yatra" status="Due" />
                <TaskItem title="Sangathan Yatra" status="In Progress" daysLeft={25} />
                <TaskItem title="Sangathan Yatra" status="To Do" daysLeft={25} />
            </div>
        </div>
    );
};

export default TaskPage;
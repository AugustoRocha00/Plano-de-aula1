import React from 'react';
import { motion } from 'framer-motion';
import { Sport } from '../types';
import { sportDetails, Sports } from '../constants';

interface SidebarProps {
  selectedSport: Sport;
  onSelectSport: (sport: Sport) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedSport, onSelectSport }) => {
  return (
    <aside className="w-20 lg:w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white flex flex-col transition-all duration-300 shadow-lg shrink-0">
      <div className="h-20 flex items-center justify-center lg:justify-start lg:pl-6 border-b border-gray-200 dark:border-gray-700">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-5.747-8.247l11.494 4.994m-11.494 0l11.494-4.994" />
            </svg>
          </div>
          <span className="hidden lg:block ml-3 text-xl font-bold">Plano de Aula</span>
      </div>
      <nav className="flex-1 px-2 lg:px-4 py-4 space-y-2">
        {Sports.map((sport) => {
          const { name, icon: Icon } = sportDetails[sport];
          const isSelected = selectedSport === sport;
          return (
            <button
              key={sport}
              onClick={() => onSelectSport(sport)}
              className={`w-full flex items-center justify-center lg:justify-start p-3 rounded-lg transition-colors duration-200 relative ${
                isSelected
                  ? 'text-white'
                  : 'hover:bg-gray-200/50 dark:hover:bg-gray-700/50 text-gray-600 dark:text-gray-300'
              }`}
            >
              {isSelected && (
                <motion.div
                    layoutId="active-sport-pill"
                    className="absolute inset-0 bg-blue-500 rounded-lg shadow-md"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative flex items-center w-full justify-center lg:justify-start">
                <Icon className={`w-6 h-6 transition-colors duration-200 ${isSelected ? 'text-white' : 'text-blue-500'}`} />
                <span className="hidden lg:block ml-4 font-semibold">{name}</span>
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
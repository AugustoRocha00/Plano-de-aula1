import React, { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import LessonPlan from './components/LessonPlan';
import { Sport } from './types';
import Header from './components/Header';

const App: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<Sport>('natacao_adulto');

  const handleSelectSport = useCallback((sport: Sport) => {
    setSelectedSport(sport);
  }, []);

  return (
    <div className="flex min-h-screen text-gray-800 dark:text-gray-200">
      <Sidebar selectedSport={selectedSport} onSelectSport={handleSelectSport} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 sm:p-8 md:p-10 overflow-y-auto">
          <LessonPlan sport={selectedSport} />
        </main>
      </div>
    </div>
  );
};

export default App;
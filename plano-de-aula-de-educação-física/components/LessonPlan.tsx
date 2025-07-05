import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sport, Lesson } from '../types';
import { lessonsData } from '../data/lessons';
import LessonDetailModal from './LessonDetailModal';

interface LessonPlanProps {
  sport: Sport;
}

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const LessonCard: React.FC<{ lesson: Lesson; index: number; onDetailsClick: (lesson: Lesson) => void }> = ({ lesson, index, onDetailsClick }) => {

    const colors = [
        'border-blue-500',
        'border-green-500',
        'border-purple-500',
        'border-red-500',
        'border-yellow-500',
        'border-pink-500',
    ];
    const borderColor = colors[index % colors.length];

    return (
        <motion.div
            layout
            variants={cardVariants}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl border-l-4 ${borderColor} flex flex-col`}
            >
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white pr-4">{lesson.title}</h3>
                    <div className="flex items-center text-sm font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {lesson.duration} min
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">
                    {lesson.description.substring(0, 120)}{lesson.description.length > 120 ? '...' : ''}
                </p>

                <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 text-sm">Objetivos Principais:</h4>
                    <ul className="space-y-1">
                        {lesson.objectives.slice(0, 2).map((objective, i) => (
                            <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                                <svg className="h-4 w-4 mr-2 mt-1 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{objective}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto pt-6">
                     <button
                        onClick={() => onDetailsClick(lesson)}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Ver Plano de Aula
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </motion.div>
    )
};

const LessonPlan: React.FC<LessonPlanProps> = ({ sport }) => {
  const lessons = useMemo(() => lessonsData[sport] || [], [sport]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
  };

  return (
    <>
        <AnimatePresence>
            {selectedLesson && <LessonDetailModal lesson={selectedLesson} onClose={() => setSelectedLesson(null)} />}
        </AnimatePresence>

        <AnimatePresence mode="wait">
            <motion.div
                key={sport}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
            >
                {lessons.map((lesson, index) => (
                    <LessonCard key={lesson.id} lesson={lesson} index={index} onDetailsClick={setSelectedLesson} />
                ))}
            </motion.div>
        </AnimatePresence>
    </>
  );
};

export default LessonPlan;
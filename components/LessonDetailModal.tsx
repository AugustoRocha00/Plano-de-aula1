import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Lesson } from '../types';

interface LessonDetailModalProps {
  lesson: Lesson;
  onClose: () => void;
}

const backdropVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants: Variants = {
  hidden: { y: "100vh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 200 } },
  exit: { y: "100vh", opacity: 0, transition: { duration: 0.3 } },
};

const LessonDetailModal: React.FC<LessonDetailModalProps> = ({ lesson, onClose }) => {

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);


  return (
    <AnimatePresence>
        <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
        >
            <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <header className="p-6 border-b border-gray-200 dark:border-gray-700 relative">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{lesson.title}</h2>
                    <p className="text-gray-500 dark:text-gray-400">{lesson.description}</p>
                     <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                <div className="p-6 overflow-y-auto flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Objetivos:</h4>
                            <ul className="space-y-1.5">
                                {lesson.objectives.map((objective, i) => (
                                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                                        <svg className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{objective}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Materiais:</h4>
                            <div className="flex flex-wrap gap-2">
                                {lesson.materials.map((material, i) => (
                                    <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-2.5 py-1 rounded-full">{material}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">Plano de Atividades</h3>
                        <div className="space-y-4">
                            {lesson.activities.map((activity, i) => (
                                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                                    <h4 className="font-bold text-blue-600 dark:text-blue-400">{i + 1}. {activity.name}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">{activity.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                    <button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
                        Fechar
                    </button>
                </footer>
            </motion.div>
        </motion.div>
    </AnimatePresence>
  );
};

export default LessonDetailModal;
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm p-4 sm:p-6 sticky top-0 z-10">
             <div className="flex flex-col">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Seu Painel de Aulas</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">"O professor medíocre conta. O bom professor explica. O professor superior demonstra. O grande professor inspira." - William Arthur Ward</p>
            </div>
        </header>
    );
};

export default Header;
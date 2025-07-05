import React from 'react';
import { Sport } from './types';

const SwimmingIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3S9 6.343 9 8s1.343 3 3 3zm0 0v5m0 0l-3-3m3 3l3-3m-3 7a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
);

const FutsalIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59V17h2v-1.41l3.03-3.03c.39-.39.39-1.02 0-1.41l-4.24-4.24c-.39-.39-1.02-.39-1.41 0L7.35 11.9c-.39.39-.39 1.02 0 1.41L11 16.59z" />
    </svg>
);

const WaterAerobicsIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.5 15.5c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5S13.59 9 10 9s-6.5 2.91-6.5 6.5zM20 5.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM10 9V2m0 7l-2.5 2.5M10 9l2.5 2.5" />
    </svg>
);


export const Sports: Sport[] = ['natacao_adulto', 'futsal', 'natacao_infantil', 'hidroginastica'];

export const sportDetails: Record<Sport, { name: string; icon: React.FC<{className: string}> }> = {
  natacao_adulto: { name: 'Natação Adulto', icon: SwimmingIcon },
  futsal: { name: 'Futsal', icon: FutsalIcon },
  natacao_infantil: { name: 'Natação Infantil', icon: SwimmingIcon },
  hidroginastica: { name: 'Hidroginástica', icon: WaterAerobicsIcon },
};

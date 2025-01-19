"use client";

import React, { useState, Suspense } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Scene3D from '@/components/scenes/Scene3D';

const LoadingScreen = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 z-50">
    <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
    <p className="text-white/80 text-lg">Chargement de l'univers...</p>
    <p className="text-white/60 text-sm mt-2">Première visite ? Le chargement peut prendre quelques secondes</p>
  </div>
);

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-screen bg-neutral-900">
      {/* Container pour la scène 3D */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900">
          <Suspense fallback={<LoadingScreen />}>
            <Scene3D onLoaded={() => setIsLoading(false)} />
          </Suspense>
        </div>
      </div>

      {isLoading && <LoadingScreen />}

      {/* Overlay avec les informations - s'affiche par-dessus la scène 3D */}
      <div className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <div className="text-white/90 font-mono text-lg">ae.dev</div>
          <div className="flex gap-6">
            <Github className="w-6 h-6 text-white/90 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 text-white/90 hover:text-white cursor-pointer transition-colors" />
            <Mail className="w-6 h-6 text-white/90 hover:text-white cursor-pointer transition-colors" />
          </div>
        </nav>

        {/* Contenu central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Alexis Estrine
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Développeur Full Stack · Créateur d'expériences web
          </p>
          <button 
            onClick={() => setShowOverlay(false)}
            className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all hover:scale-105"
          >
            Explorer mon univers
          </button>
        </div>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>

      {/* Bouton pour réafficher l'overlay - visible uniquement quand l'overlay est caché */}
      <button 
        onClick={() => setShowOverlay(true)}
        className={`absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white/90 hover:text-white transition-all ${showOverlay ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Mail className="w-6 h-6" />
      </button>

      {/* Instructions discrètes pour l'interaction 3D */}
      <div className={`absolute bottom-6 left-6 p-4 bg-black/50 backdrop-blur-sm rounded-lg text-white/70 text-sm ${showOverlay ? 'opacity-0' : 'opacity-100'}`}>
        <p>🖱️ Clic gauche : Rotation</p>
        {/* Retiré l'instruction pour le clic droit puisque le déplacement est désactivé */}
        <p>⚙️ Molette : Zoom</p>
      </div>
    </div>
  );
};

export default Hero;
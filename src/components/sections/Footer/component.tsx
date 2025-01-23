"use client";

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'

const Footer: React.FC = () => {
  const router = useRouter();

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column - Navigation */}
          <nav className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
            <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">Accueil</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">À propos</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Compétences</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projets</a>
          </nav>

          {/* Second column */}
          <div className="flex flex-col items-center gap-8">

            {/* Social Media */}
            <div className="flex flex-col items-center space-y-5">
              <h3 className="text-lg font-semibold text-foreground">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/iSayZ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/alexis-estrine/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <a href="mailto:estrine.alexis@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                estrine.alexis@gmail.com
              </a>
            </div>

          </div>

          {/* Third column */}
          <div className='flex flex-col items-center gap-8'>
            {/* Utils link */}
            <nav className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Liens utiles</h3>
              <a href="https://windows.estrine-alexis.fr/" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">Mon portfolio interactif Windows 11</a>
              <Button onClick={() => window.open("/assets/documents/CV_Alexis_ESTRINE.pdf")} variant="ghost" className='text-muted-foreground hover:text-foreground transition-colors hover:bg-transparent text-md'>
                Voir / Télécharger mon CV
              </Button>
            </nav>

            <Button onClick={() => router.push('#hero')}>
              Retour en haut
              <ArrowUp />
            </Button>
          </div>


        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {currentYear} Portfolio - Alexis Estrine. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
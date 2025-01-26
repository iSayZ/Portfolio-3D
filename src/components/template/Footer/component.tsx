"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sections } from "@/config/navigation.config";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { cvPath, footerUtilsLinks, socialLinks } from "@/config/links.config";

const Footer: React.FC = () => {
  const scrollTo = useScrollToSection();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column - Navigation */}
          <nav className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Navigation
            </h3>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {section.name}
              </button>
            ))}
          </nav>

          {/* Second column */}
          <div className="flex flex-col items-center gap-8">
            {/* Social Media */}
            <div className="flex flex-col items-center space-y-5">
              <h3 className="text-lg font-semibold text-foreground">
                Réseaux sociaux
              </h3>
              <div className="flex space-x-4">
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contact</h3>
              <a
                href={`mailto:${socialLinks.mail.url}`}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {socialLinks.mail.url}
              </a>
            </div>
          </div>

          {/* Third column */}
          <div className="flex flex-col items-center gap-8">
            {/* Utils link */}
            <nav className="flex flex-col items-center space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Liens utiles
              </h3>
              {Object.entries(footerUtilsLinks).map(([key, link]) => (
                <a
                  key={key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => window.open(cvPath)}
                variant="ghost"
                className="text-muted-foreground hover:text-foreground transition-colors hover:bg-transparent text-md font-normal"
              >
                Voir / Télécharger mon CV
              </Button>
            </nav>

            <Button onClick={() => scrollTo("#hero")}>
              Retour en haut
              <ArrowUp />
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>
            &copy; {currentYear} Portfolio - Alexis Estrine. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

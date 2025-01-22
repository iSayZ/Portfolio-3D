import { 
    SiReact, 
    SiNextdotjs, 
    SiTypescript, 
    SiTailwindcss,
    SiPrisma,
    SiMongodb,
    SiFirebase,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiJsonwebtokens,
    SiMysql,
    SiNestjs,
    SiSocketdotio
  } from 'react-icons/si';
import { Project, Technology } from './types';

export const techStack: Record<string, Technology> = {
    react: { name: 'React', icon: SiReact, color: '#61DAFB' },
    next: { name: 'Next.js', icon: SiNextdotjs, color: '#64748b', textColor: '#ffffff' },
    typescript: { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    tailwind: { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    prisma: { name: 'Prisma', icon: SiPrisma, color: '#5a67d8', textColor: '#ffffff' },
    mongodb: { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    firebase: { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    node: { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    express: { name: 'Express', icon: SiExpress, color: '#64748b', textColor: '#ffffff' },
    postgresql: { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    javascript: { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    nestjs: { name: 'Nest.js', icon: SiNestjs, color: '#E0234E' },
    jwt: { name: 'JWT', icon: SiJsonwebtokens, color: '#000000', textColor: '#ffffff' },
    mysql: { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    websocket: { name: 'WebSocket', icon: SiSocketdotio, color: '#25c2a0', textColor: '#25c2a0' },
    css: { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    html: { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  };
  
  export const projects: Project[] = [
    {
      id: 'dashboard-haute-securite',
      title: 'Dashboard de haute sécurité',
      cover: '/assets/images/projects/dashboard-haute-securite/index.png',
      desc: "Mon projet de Dashboard de haute sécurité est une plateforme adaptable, conçue pour gérer le contenu sur plusieurs sites. Entièrement développé de manière autonome, ce dashboard intègre une authentification avancée (sessions sécurisées, tokens de rafraîchissement, 2FA) et permet de créer, éditer, et organiser des articles en toute simplicité. Il est également relié à Google Analytics pour un suivi précis des visites et des statistiques, offrant une interface réactive, responsive et sécurisée pour une gestion optimale du contenu et des performances du site.",
      technologies: [
        techStack.next,
        techStack.nestjs,
        techStack.typescript,
        techStack.mongodb,
        techStack.jwt
      ],
      link: 'https://github.com/iSayZ/Dashboard-Nest.js-Next.js',
      isActive: true,
      date: "Septembre 2024"
    },
    {
      id: 'crumble',
      title: 'Crumble',
      cover: '/assets/images/projects/crumble/index.png',
      desc: "Crumble est un réseau social inspiré de Facebook, que j'ai développé seul, avec un fort accent sur l'interactivité et la réactivité. Ce projet intègre des fonctionnalités d'authentification sécurisée avec JWT, une gestion complète des profils utilisateurs, ainsi qu'un système de messagerie instantanée via WebSocket. Les utilisateurs peuvent publier du contenu, commenter, liker, et gérer leurs amis, le tout dans une interface réactive et responsive. J'ai également mis en place un panneau d'administration pour la gestion des utilisateurs et des publications.",
      technologies: [
        techStack.react,
        techStack.javascript,
        techStack.express,
        techStack.mysql,
        techStack.websocket,
        techStack.jwt
      ],
      link: 'https://github.com/iSayZ/Crumble',
      isActive: false,
      date: "Septembre 2024"
    },
    {
      id: 'spot-lille-art',
      title: 'Spot Lille Art',
      cover: '/assets/images/projects/spot-lille-art/artworks.png',
      desc: "Spot Lille Art est une plateforme participative permettant de référencer, partager et découvrir des œuvres de street art dans la Métropole Européenne de Lille. Le projet inclut la mise en place d'un CRUD et de routes d'API sécurisées, une authentification, une carte interactive, la prise et l'upload de photos, ainsi qu'un espace administrateur.",
      technologies: [
        techStack.react,
        techStack.javascript,
        techStack.express,
        techStack.mysql,
        techStack.jwt
      ],
      link: 'https://spot-lille-art.utopland.net',
      isActive: false,
      date: "Juillet 2024"
    },
    {
      id: 'mineguide',
      title: 'MineGuide',
      cover: '/assets/images/projects/mineguide/card.png',
      desc: "Site réalisé en équipe lors de l'événement 'ProtoJam' de la Wild Code School, un concours où nous avions 24 heures pour développer un site autour du thème 'Nature & Déconnexion'. Nous avons choisi de prendre le sujet à l'envers. En hommage à la période du Covid où nous nous sommes évadés à travers les jeux vidéo, nous avons choisi Minecraft ! Ce jeu emblématique nous plonge dans des environnements naturels tout en nous offrant une évasion totale de la réalité. Ce site est donc une expérience fictive où vous pouvez découvrir 4 biomes de Minecraft, où chaque membre de notre équipe propose une location de gîte. Ce projet a non seulement été un plaisir à créer, mais il a également été récompensé par le prix de la meilleure technique lors de l'événement ! 🏆 (Le site est optimisé uniquement pour les ordinateurs en raison de contraintes de temps)",
      technologies: [
        techStack.react,
        techStack.javascript,
        techStack.css
      ],
      link: 'https://mineguide.vercel.app/',
      isActive: false,
      date: "Mai 2024"
    },
    {
      id: 'feet-n-fun',
      title: 'Feet & Fun',
      cover: '/assets/images/projects/feet-n-fun/shop.png',
      desc: "Feet & Fun est un site de e-commerce (basé sur la vente de chausettes 🧦) réalisé en équipe. Nous avons créé notre propre API qui contient toutes les informations de nos 150 produits. Liste des fonctionnalités : - Panier / Liste de favoris, - Fonction de recherche (nom / description / mot clé), - Filtre (prix / tailles / couleurs), - Tri (prix coissant / décroissant / nouveautés), - Entièrement responsive",
      technologies: [
        techStack.react,
        techStack.javascript,
        techStack.css
      ],
      link: 'https://feet-n-fun.vercel.app/',
      isActive: false,
      date: "Avril 2024"
    },
    {
      id: 'portfolio-v1',
      title: 'Portfolio v1',
      cover: '/assets/images/projects/portfolio-v1/accueil.png',
      desc: "Mon portfolio professionnel (site sur lequel vous naviguez).",
      technologies: [
        techStack.react,
        techStack.javascript,
        techStack.tailwind
      ],
      link: 'https://github.com/iSayZ/Portfolio',
      isActive: false,
      date: "Mai 2024"
    },
    {
      id: 'trombinoscope',
      title: 'Trombinoscope',
      cover: '/assets/images/projects/trombinoscope/card.png',
      desc: "Trombinoscope réalisé en équipe, mettant en valeur la promotion de la Wild Code School 2024.",
      technologies: [
        techStack.javascript,
        techStack.html,
        techStack.css
      ],
      link: 'https://trombi-wcs.vercel.app/',
      isActive: false,
      date: "Mars 2024"
    }
  ];
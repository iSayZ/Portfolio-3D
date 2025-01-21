import { ChevronDown, Github, Linkedin, Mail, Redo2 } from "lucide-react";
import { OverlayProps } from "./types";

const Overlay: React.FC<OverlayProps> = ({ isOpen, onToggle }) => {
    return (
        <>
            <div className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Navigation */}
            <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
            <div className="text-white/90 font-mono text-lg">ae.dev</div>
            <div className="flex gap-6">
                <Github className="w-6 h-6 text-white/90 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-white/90 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-white/90 hover:text-white cursor-pointer transition-colors" />
            </div>
            </nav>

            {/* Central content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                Alexis Estrine
            </h1>
            <p className="text-xl text-white/80 mb-8">
                Développeur Full Stack · Créateur d'expériences web
            </p>
            <button 
                onClick={() => onToggle(false)}
                className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all hover:scale-105"
            >
                Explorer mon univers
            </button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute w-full bottom-8 flex justify-center text-white/80 animate-bounce">
            <ChevronDown className="w-8 h-8" />
            </div>
        </div>

        {/* Button to redisplay overlay - visible only when overlay is hidden */}
        <button 
            onClick={() => onToggle(true)}
            className={`absolute top-6 right-6 p-3 bg-white/50 backdrop-blur-sm rounded-full text-white/90 hover:text-white transition-all ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <Redo2 className="w-6 h-6" />
        </button>
        </>
    )
}

export default Overlay;
import { Moon, Sun, Stars } from 'lucide-react';

export const backgrounds = {
    galaxy: {
      label: 'Galaxie',
      gradients: [
        "bg-gradient-to-br from-indigo-950 via-purple-900/60 to-violet-950",
        "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/40 via-indigo-950/60 to-transparent",
        "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/30 via-transparent to-transparent"
      ],
      icon: <Stars className="size-6 md:size-8" />
    },
    day: {
      label: 'Jour',
      gradients: [
        "bg-gradient-to-br from-sky-400 via-blue-400/60 to-blue-500",
        "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-yellow-400/40 via-sky-500/60 to-transparent",
        "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent"
      ],
      icon: <Sun className="size-6 md:size-8" />
    },
    night: {
      label: 'Nuit',
      gradients: [
        "bg-gradient-to-br from-slate-900 via-blue-900/60 to-slate-950",
        "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-900/60 to-transparent",
        "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"
      ],
      icon: <Moon className="size-6 md:size-8" />
    }
  };
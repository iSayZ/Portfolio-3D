"use client";

import { useRef, useState } from 'react';
import { X, Play, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoModalProps {
 videoId: string;
 isOpen: boolean;
 onClose: () => void;
}

const VideoPlayer = ({ videoId, isOpen, onClose }: VideoModalProps) => {
 const [isLoading, setIsLoading] = useState<boolean>(true);
 const [hasError, setHasError] = useState<boolean>(false);
 const iframeRef = useRef<HTMLIFrameElement>(null);

 if (!isOpen) return null;

 const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

 const handleIframeLoad = () => {
   setIsLoading(false);
 };

 const handleError = () => {
   setHasError(true);
   setIsLoading(false);
 };

 return (
   <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
     <Button
       variant="destructive"
       onClick={onClose}
       className="absolute top-4 right-4 z-50 rounded-full size-12"
     >
       <X className="h-6 w-6" />
     </Button>

     <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden bg-black/80">
       {isLoading && (
         <div className="absolute inset-0 flex items-center justify-center bg-black/50">
           <Loader2 className="w-8 h-8 animate-spin text-primary" />
         </div>
       )}
       
       {hasError ? (
         <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
           <p className="text-slate-50">La vidéo n'a pas pu être chargée</p>
           <Button
             variant="outline"
             onClick={() => window.open(embedUrl, '_blank')}
             className="bg-slate-50/20 backdrop-blur-sm hover:bg-slate-50/30"
           >
             <Play className="mr-2 h-4 w-4" />
             Voir sur Google Drive
           </Button>
         </div>
       ) : (
         <iframe
           ref={iframeRef}
           src={embedUrl}
           width="100%"
           height="100%"
           allow="autoplay"
           allowFullScreen
           onLoad={handleIframeLoad}
           onError={handleError}
           className="border-0"
         />
       )}
     </div>
   </div>
 );
};

export default VideoPlayer;

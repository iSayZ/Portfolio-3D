"use client";

import Image from 'next/image';
import { ArrowLeft, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/components/sections/Projects/constants';
import { useRouter } from 'next/navigation';

export default function ProjectPage({ params }: { params: { id: string } }) {
 const router = useRouter();
 const project = projects.find((p) => p.id === params.id);

 if (!project) {
   return router.push('/');
 }

 return (
   <div className="min-h-screen w-full bg-background px-8 py-32">
     <Button 
       variant="ghost" 
       onClick={() => router.back()}
       className="mb-8 hover:bg-transparent"
     >
       <ArrowLeft className="mr-2" />
       Retour
     </Button>

     <div className="container mx-auto max-w-6xl">
       <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
         <div className="relative w-full h-[400px]">
           <Image
             src={project.cover || "null"}
             alt={project.title}
             fill
             className="object-cover"
             priority
           />
         </div>
         
         <CardContent className="p-8">
           <div className="flex justify-between items-start gap-4 mb-6">
             <div>
               <h1 className="text-4xl font-bold text-foreground mb-2">
                 {project.title}
               </h1>
               <p className="text-muted-foreground">{project.date}</p>
             </div>
             
             {project.link && (
               <Button
                 variant="outline"
                 onClick={() => window.open(project.link)}
                 className="hover:bg-primary hover:text-primary-foreground"
               >
                 <Github className="mr-2" />
                 Voir le projet
               </Button>
             )}
           </div>

           <div className="space-y-6">
             <div>
               <h2 className="text-2xl font-semibold mb-4">Description</h2>
               <p className="text-muted-foreground leading-relaxed">
                 {project.desc}
               </p>
             </div>

             <div>
               <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
               <div className="flex flex-wrap gap-2">
                 {project.technologies.map((tech) => (
                   <Badge 
                     key={tech.name}
                     className="bg-primary/10 text-primary hover:bg-primary/20"
                   >
                     {tech.name}
                   </Badge>
                 ))}
               </div>
             </div>
           </div>
         </CardContent>
       </Card>
     </div>
   </div>
 );
}
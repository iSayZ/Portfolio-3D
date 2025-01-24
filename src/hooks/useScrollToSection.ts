export const useScrollToSection = (offset: number = 96) => {
 const scrollTo = (id: string) => {
   const element = document.querySelector(id);
   if (element) {
     const position = element.getBoundingClientRect().top + window.scrollY - offset;
     window.scrollTo({ top: position, behavior: 'smooth' });
   }
 };

 return scrollTo;
};
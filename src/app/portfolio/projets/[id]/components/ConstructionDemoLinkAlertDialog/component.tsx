import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ConstructionDemoLinkAlertDialogProps } from "./types";

const ConstructionDemoLinkAlertDialog: React.FC<
  ConstructionDemoLinkAlertDialogProps
> = ({ open, onOpenChange, demoLink }) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Projet en cours de construction</AlertDialogTitle>
          <AlertDialogDescription>
            Ce projet est en phase de développement. Certaines fonctionnalités
            peuvent être incomplètes ou non fonctionnelles.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={() => window.open(demoLink)}>
            Voir la démo
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConstructionDemoLinkAlertDialog;

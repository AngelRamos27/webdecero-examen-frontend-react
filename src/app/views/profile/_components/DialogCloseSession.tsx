"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Button from "@/app/Components/Ui/Button";
import { DialogClose } from "@radix-ui/react-dialog";

interface LogoutDialogProps {
  onLogout: () => void;
  children: React.ReactNode;
} //interfaz de los datos, recibe un children para renderizar dentro del dialog (el botón)
    // recibe la función

const DialogCloseSession = ({ onLogout, children }: LogoutDialogProps) => {
    // componente de dialog de la biblioteca Shacdui (suelo usarla)
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cerrar sesión</DialogTitle>
        </DialogHeader>
        <p>¿Seguro de que quiere cerrar la sesión?</p>
        <DialogFooter className="flex justify-end gap-4">
          <DialogClose asChild>
            <Button text="Cancelar" colorType="bg-primary" type="button" />
          </DialogClose>
          <Button
            text="Cerrar sesión"
            colorType="bg-secondary"
            type={"button"}
            onClick={onLogout}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DialogCloseSession;
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components-v2/ui/dialog";
import { useEffect, useState } from "react";
import CreatePromptForm from "./_components/create-form";

function Modal() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);


  useEffect(() => {
    if (id === "create") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [id]);

  const handleOpenChange = (nextstate: boolean) => {
    if (!nextstate) {
      navigate("/prompt");
    } else {
      setOpen(nextstate);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Prompt erstellen</DialogTitle>
          <CreatePromptForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;

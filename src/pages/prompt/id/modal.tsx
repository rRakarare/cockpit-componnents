import { prompts } from "@/config-v2/prompt/example-data";
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components-v2/ui/dialog";
import { useEffect, useState } from "react";

function Modal() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

  const prompt = prompts.find((p) => p._id === id);

  useEffect(() => {
    if (id && prompt) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [id, prompt]);

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
          <DialogTitle>{prompt?.name}</DialogTitle>
          <DialogDescription>{prompt?.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;

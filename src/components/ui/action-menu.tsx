
import React from "react";
import { Button } from "@/components/ui/button";
import { EditIcon, DeleteIcon, CancelIcon } from "lucide-react";

interface ActionMenuProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onCancel?: () => void;
}

export function ActionMenu({ onEdit, onDelete, onCancel }: ActionMenuProps) {
  return (
    <div className="flex flex-col bg-white border rounded z-50 shadow-md min-w-[120px] p-1 absolute right-0 top-8">
      <Button variant="ghost" className="justify-start" onClick={onEdit}>
        <EditIcon className="mr-2 w-4 h-4" /> Edit
      </Button>
      <Button variant="ghost" className="justify-start" onClick={onDelete}>
        <DeleteIcon className="mr-2 w-4 h-4" /> Delete
      </Button>
      <Button variant="ghost" className="justify-start" onClick={onCancel}>
        <CancelIcon className="mr-2 w-4 h-4" /> Cancel
      </Button>
    </div>
  );
}

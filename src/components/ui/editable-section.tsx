
import { useState, ReactNode } from "react";
import { Button } from "./button";
import { Edit, Save, X } from "lucide-react";
import { toast } from "sonner";

interface EditableSectionProps {
  title?: string;
  children: ReactNode;
  onSave?: () => void;
  className?: string;
}

export function EditableSection({
  title,
  children,
  onSave,
  className,
}: EditableSectionProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    // Call the onSave callback if provided
    if (onSave) {
      onSave();
    }
    
    // Show success toast
    toast.success("Changes saved successfully");
    
    // Exit edit mode
    setIsEditing(false);
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        <div>
          {!isEditing ? (
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleEdit}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleCancel}
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button 
                variant="default" 
                size="sm"
                onClick={handleSave}
              >
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {children}
    </div>
  );
}

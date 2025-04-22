
import React from "react";
import { Button } from "@/components/ui/button";
import { PremiumButton } from "@/components/ui/premium-button";
import { ActionDialog } from "@/components/ui/action-dialog";
import { Plus, Download, ArrowUpDown } from "lucide-react";
import { toast } from "sonner";

interface ActionButtonsLayoutProps {
  onAdd?: () => void;
  onExport?: () => void;
  onImport?: () => void;
  addLabel?: string;
  showExport?: boolean;
  showImport?: boolean;
}

export function ActionButtonsLayout({
  onAdd,
  onExport,
  onImport,
  addLabel = "Add New",
  showExport = true,
  showImport = false,
}: ActionButtonsLayoutProps) {
  const [isExporting, setIsExporting] = React.useState(false);
  const [isImporting, setIsImporting] = React.useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);
  const [actionType, setActionType] = React.useState<"export" | "import" | null>(null);

  const handleExport = async () => {
    setIsExporting(true);
    setShowConfirmDialog(false);
    try {
      if (onExport) {
        await onExport();
      }
      toast.success("Export completed successfully");
    } catch (error) {
      toast.error("Export failed");
    } finally {
      setIsExporting(false);
    }
  };

  const handleImport = async () => {
    setIsImporting(true);
    setShowConfirmDialog(false);
    try {
      if (onImport) {
        await onImport();
      }
      toast.success("Import completed successfully");
    } catch (error) {
      toast.error("Import failed");
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="flex items-center gap-2 justify-end">
      {onAdd && (
        <PremiumButton 
          onClick={onAdd}
          className="bg-gradient-to-r from-primary to-blue-700 text-white"
        >
          <Plus className="h-4 w-4" />
          {addLabel}
        </PremiumButton>
      )}
      
      {showExport && (
        <Button
          variant="outline"
          className="border-gray-300 text-gray-600"
          onClick={() => {
            setActionType("export");
            setShowConfirmDialog(true);
          }}
          disabled={isExporting}
        >
          <Download className="h-4 w-4 mr-2" />
          {isExporting ? "Exporting..." : "Export"}
        </Button>
      )}

      {showImport && (
        <Button
          variant="outline"
          className="border-gray-300 text-gray-600"
          onClick={() => {
            setActionType("import");
            setShowConfirmDialog(true);
          }}
          disabled={isImporting}
        >
          <ArrowUpDown className="h-4 w-4 mr-2" />
          {isImporting ? "Importing..." : "Import"}
        </Button>
      )}

      <ActionDialog
        open={showConfirmDialog}
        onOpenChange={setShowConfirmDialog}
        title={`Confirm ${actionType === "export" ? "Export" : "Import"}`}
        description={`Are you sure you want to ${actionType === "export" ? "export" : "import"} this data?`}
        onConfirm={actionType === "export" ? handleExport : handleImport}
        confirmText={actionType === "export" ? "Export" : "Import"}
        variant="default"
      />
    </div>
  );
}

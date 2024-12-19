import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Deal } from "@/hooks/useDealManagement";
import { Download, FileSpreadsheet, PlusCircle, Search, SlidersHorizontal, Upload } from "lucide-react";
import * as XLSX from 'xlsx';
import { useToast } from "../ui/use-toast";

interface DealsToolbarProps {
  onNewDeal: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  stageFilter: string;
  onStageFilterChange: (value: string) => void;
  sortBy: keyof Deal;
  onSortByChange: (value: keyof Deal) => void;
  sortOrder: "asc" | "desc";
  onSortOrderChange: () => void;
  onImportDeals: (deals: Partial<Deal>[]) => void;
}

const DealsToolbar = ({
  onNewDeal,
  searchTerm,
  onSearchChange,
  stageFilter,
  onStageFilterChange,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
  onImportDeals,
}: DealsToolbarProps) => {
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          onImportDeals(jsonData as Partial<Deal>[]);
          toast({
            title: "Success",
            description: "Deals imported successfully",
          });
        } catch (error) {
          toast({
            title: "Error",
            description: "Failed to import deals. Please check the file format.",
            variant: "destructive",
          });
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const downloadSampleTemplate = () => {
    const sampleData = [
      {
        companyName: "Sample Company",
        contactPerson: "John Doe",
        email: "john@example.com",
        value: 50000,
        stage: "initial",
        probability: 50,
        notes: "Initial contact made",
        nextAction: "Follow up call",
        nextActionDate: "2024-03-25"
      }
    ];

    const ws = XLSX.utils.json_to_sheet(sampleData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Deals");
    XLSX.writeFile(wb, "deals_template.xlsx");
  };

  return (
    <div className="flex flex-col gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search deals..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={stageFilter} onValueChange={onStageFilterChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stages</SelectItem>
              <SelectItem value="initial">Initial Contact</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="proposal">Proposal</SelectItem>
              <SelectItem value="negotiation">Negotiation</SelectItem>
              <SelectItem value="closed">Closed Won</SelectItem>
              <SelectItem value="lost">Closed Lost</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={sortBy}
            onValueChange={(value) => onSortByChange(value as keyof Deal)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="value">Deal Value</SelectItem>
              <SelectItem value="probability">Probability</SelectItem>
              <SelectItem value="lastContact">Last Contact</SelectItem>
              <SelectItem value="nextActionDate">Next Action Date</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={onSortOrderChange}>
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            {sortOrder === "asc" ? "Ascending" : "Descending"}
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <Button onClick={onNewDeal} className="bg-primary hover:bg-primary/90">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Deal
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={downloadSampleTemplate}>
            <Download className="mr-2 h-4 w-4" />
            Download Template
          </Button>
          <div className="relative">
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Import Deals
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsToolbar;
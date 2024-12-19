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
import { PlusCircle, Search, SlidersHorizontal } from "lucide-react";

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
}: DealsToolbarProps) => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
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
      <Button onClick={onNewDeal}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add New Deal
      </Button>
    </div>
  );
};

export default DealsToolbar;
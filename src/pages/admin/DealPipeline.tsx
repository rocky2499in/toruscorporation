import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { PlusCircle, Search, SlidersHorizontal } from "lucide-react";
import NewDealDialog from "@/components/admin/NewDealDialog";

interface Deal {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  value: number;
  stage: string;
  lastContact: string;
  probability: number;
  notes: string;
  nextAction: string;
  nextActionDate: string;
}

const DealPipeline = () => {
  const { toast } = useToast();
  const [isNewDealOpen, setIsNewDealOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<keyof Deal>("value");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // In a real app, this would come from an API/database
  const [deals, setDeals] = useState<Deal[]>([
    {
      id: "1",
      companyName: "Example Corp",
      contactPerson: "John Doe",
      email: "john@example.com",
      value: 50000,
      stage: "initial",
      lastContact: "2024-01-19",
      probability: 30,
      notes: "Initial discussion about defense products",
      nextAction: "Follow-up call",
      nextActionDate: "2024-04-25",
    },
  ]);

  const handleStageChange = (dealId: string, newStage: string) => {
    setDeals((prevDeals) =>
      prevDeals.map((deal) =>
        deal.id === dealId ? { ...deal, stage: newStage } : deal
      )
    );
    toast({
      title: "Deal Updated",
      description: "Deal stage has been successfully updated.",
    });
  };

  const handleNewDeal = (deal: Omit<Deal, "id">) => {
    const newDeal = {
      ...deal,
      id: Math.random().toString(36).substr(2, 9),
    };
    setDeals((prev) => [...prev, newDeal]);
    setIsNewDealOpen(false);
    toast({
      title: "Deal Created",
      description: "New deal has been successfully added to the pipeline.",
    });
  };

  const filteredDeals = deals
    .filter((deal) => {
      const matchesSearch = deal.companyName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStage = stageFilter ? deal.stage === stageFilter : true;
      return matchesSearch && matchesStage;
    })
    .sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Deal Pipeline</h1>
        <Button onClick={() => setIsNewDealOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Deal
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search deals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Select value={stageFilter} onValueChange={setStageFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Stages</SelectItem>
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
          onValueChange={(value) => setSortBy(value as keyof Deal)}
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
        <Button
          variant="outline"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          {sortOrder === "asc" ? "Ascending" : "Descending"}
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Contact Person</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Probability</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Next Action</TableHead>
            <TableHead>Next Action Date</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDeals.map((deal) => (
            <TableRow key={deal.id}>
              <TableCell>{deal.companyName}</TableCell>
              <TableCell>
                <div>{deal.contactPerson}</div>
                <div className="text-sm text-gray-500">{deal.email}</div>
              </TableCell>
              <TableCell>${deal.value.toLocaleString()}</TableCell>
              <TableCell>{deal.probability}%</TableCell>
              <TableCell>
                <Select
                  value={deal.stage}
                  onValueChange={(value) => handleStageChange(deal.id, value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="initial">Initial Contact</SelectItem>
                    <SelectItem value="qualified">Qualified</SelectItem>
                    <SelectItem value="proposal">Proposal</SelectItem>
                    <SelectItem value="negotiation">Negotiation</SelectItem>
                    <SelectItem value="closed">Closed Won</SelectItem>
                    <SelectItem value="lost">Closed Lost</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{deal.nextAction}</TableCell>
              <TableCell>{deal.nextActionDate}</TableCell>
              <TableCell className="max-w-xs truncate">{deal.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <NewDealDialog
        isOpen={isNewDealOpen}
        onClose={() => setIsNewDealOpen(false)}
        onSubmit={handleNewDeal}
      />
    </div>
  );
};

export default DealPipeline;
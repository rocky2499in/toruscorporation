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
import { PlusCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Deal {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  value: number;
  stage: string;
  lastContact: string;
}

const DealPipeline = () => {
  const { toast } = useToast();
  const [deals, setDeals] = useState<Deal[]>([
    {
      id: "1",
      companyName: "Example Corp",
      contactPerson: "John Doe",
      email: "john@example.com",
      value: 50000,
      stage: "initial",
      lastContact: "2024-01-19",
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Deal Pipeline</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Deal
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Contact Person</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Last Contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deals.map((deal) => (
            <TableRow key={deal.id}>
              <TableCell>{deal.companyName}</TableCell>
              <TableCell>{deal.contactPerson}</TableCell>
              <TableCell>{deal.email}</TableCell>
              <TableCell>${deal.value.toLocaleString()}</TableCell>
              <TableCell>
                <Select
                  value={deal.stage}
                  onValueChange={(value) => handleStageChange(deal.id, value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select stage" />
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
              <TableCell>{deal.lastContact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DealPipeline;
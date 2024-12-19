import { Deal } from "@/hooks/useDealManagement";
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

interface DealsTableProps {
  deals: Deal[];
  onStageChange: (dealId: string, newStage: string) => void;
  sortBy: keyof Deal;
  sortOrder: "asc" | "desc";
  stageFilter: string;
  searchTerm: string;
}

const DealsTable = ({
  deals,
  onStageChange,
  sortBy,
  sortOrder,
  stageFilter,
  searchTerm,
}: DealsTableProps) => {
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
                onValueChange={(value) => onStageChange(deal.id, value)}
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
  );
};

export default DealsTable;
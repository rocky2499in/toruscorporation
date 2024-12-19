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
import { Badge } from "@/components/ui/badge";

interface DealsTableProps {
  deals: Deal[];
  onStageChange: (dealId: string, newStage: string) => void;
  sortBy: keyof Deal;
  sortOrder: "asc" | "desc";
  stageFilter: string;
  searchTerm: string;
}

const stageColors: Record<string, string> = {
  initial: "bg-blue-100 text-blue-800",
  qualified: "bg-purple-100 text-purple-800",
  proposal: "bg-yellow-100 text-yellow-800",
  negotiation: "bg-orange-100 text-orange-800",
  closed: "bg-green-100 text-green-800",
  lost: "bg-red-100 text-red-800",
};

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
      const matchesSearch = 
        deal.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStage = stageFilter === "all" || !stageFilter ? true : deal.stage === stageFilter;
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
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold">Company</TableHead>
            <TableHead className="font-semibold">Contact Person</TableHead>
            <TableHead className="font-semibold">Value</TableHead>
            <TableHead className="font-semibold">Probability</TableHead>
            <TableHead className="font-semibold">Stage</TableHead>
            <TableHead className="font-semibold">Next Action</TableHead>
            <TableHead className="font-semibold">Next Action Date</TableHead>
            <TableHead className="font-semibold">Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDeals.map((deal) => (
            <TableRow key={deal.id} className="hover:bg-gray-50">
              <TableCell className="font-medium">{deal.companyName}</TableCell>
              <TableCell>
                <div>{deal.contactPerson}</div>
                <div className="text-sm text-gray-500">{deal.email}</div>
              </TableCell>
              <TableCell className="font-medium">
                ${deal.value.toLocaleString()}
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="font-medium">
                  {deal.probability}%
                </Badge>
              </TableCell>
              <TableCell>
                <Select
                  value={deal.stage}
                  onValueChange={(value) => onStageChange(deal.id, value)}
                >
                  <SelectTrigger className={`w-[140px] ${stageColors[deal.stage]}`}>
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
              <TableCell className="max-w-xs">
                <div className="truncate" title={deal.notes}>
                  {deal.notes}
                </div>
              </TableCell>
            </TableRow>
          ))}
          {filteredDeals.length === 0 && (
            <TableRow>
              <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                No deals found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DealsTable;
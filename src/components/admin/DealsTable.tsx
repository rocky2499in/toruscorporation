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
  "Contact made": "bg-blue-100 text-blue-800",
  "Proposal Sent": "bg-purple-100 text-purple-800",
  "Hot": "bg-yellow-100 text-yellow-800",
  "Cold": "bg-orange-100 text-orange-800",
  "Dead": "bg-gray-100 text-gray-800",
  "Closed Won": "bg-green-100 text-green-800",
  "Closed Lost": "bg-red-100 text-red-800",
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
        deal.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.endUserCountry.toLowerCase().includes(searchTerm.toLowerCase());
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

  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(value);
  };

  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/80">
              <TableHead className="font-semibold text-gray-700 py-4">Company</TableHead>
              <TableHead className="font-semibold text-gray-700">Contact</TableHead>
              <TableHead className="font-semibold text-gray-700">EUC</TableHead>
              <TableHead className="font-semibold text-gray-700">Value</TableHead>
              <TableHead className="font-semibold text-gray-700">Margin</TableHead>
              <TableHead className="font-semibold text-gray-700">Profit</TableHead>
              <TableHead className="font-semibold text-gray-700">Probability</TableHead>
              <TableHead className="font-semibold text-gray-700">Stage</TableHead>
              <TableHead className="font-semibold text-gray-700">Next Action</TableHead>
              <TableHead className="font-semibold text-gray-700">Next Action Date</TableHead>
              <TableHead className="font-semibold text-gray-700">Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDeals.map((deal) => (
              <TableRow key={deal.id} className="hover:bg-gray-50/50 transition-colors">
                <TableCell className="font-medium text-gray-900">{deal.companyName}</TableCell>
                <TableCell>
                  <div className="text-gray-900">{deal.contactPerson}</div>
                  <div className="text-sm text-gray-500">{deal.email}</div>
                </TableCell>
                <TableCell className="text-gray-900">{deal.endUserCountry}</TableCell>
                <TableCell className="font-medium text-gray-900">
                  {formatCurrency(deal.value, deal.currency)}
                </TableCell>
                <TableCell className="text-gray-900">
                  {deal.marginType === 'percentage' 
                    ? `${deal.margin}%` 
                    : formatCurrency(deal.margin, deal.currency)}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {formatCurrency(deal.profit, deal.currency)}
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
                      <SelectItem value="Contact made">Contact made</SelectItem>
                      <SelectItem value="Proposal Sent">Proposal Sent</SelectItem>
                      <SelectItem value="Hot">Hot</SelectItem>
                      <SelectItem value="Cold">Cold</SelectItem>
                      <SelectItem value="Dead">Dead</SelectItem>
                      <SelectItem value="Closed Won">Closed Won</SelectItem>
                      <SelectItem value="Closed Lost">Closed Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-gray-900">{deal.nextAction}</TableCell>
                <TableCell className="text-gray-900">{deal.nextActionDate}</TableCell>
                <TableCell className="max-w-xs">
                  <div className="truncate text-gray-600" title={deal.notes}>
                    {deal.notes}
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {filteredDeals.length === 0 && (
              <TableRow>
                <TableCell colSpan={11} className="text-center py-8 text-gray-500">
                  No deals found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DealsTable;
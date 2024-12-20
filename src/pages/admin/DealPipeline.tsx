import { useState } from "react";
import { Deal, useDealManagement } from "@/hooks/useDealManagement";
import NewDealDialog from "@/components/admin/NewDealDialog";
import DealsTable from "@/components/admin/DealsTable";
import DealsToolbar from "@/components/admin/DealsToolbar";

const DealPipeline = () => {
  const { deals, addDeal, updateDealStage } = useDealManagement();
  const [isNewDealOpen, setIsNewDealOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState<keyof Deal>("value");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const handleAddDeal = (dealData: Omit<Deal, "id" | "profit">) => {
    addDeal({
      ...dealData,
      currency: dealData.currency || "USD",
      margin: dealData.margin,
      marginType: dealData.marginType,
      endUserCountry: dealData.endUserCountry,
    });
    setIsNewDealOpen(false);
  };

  const handleImportDeals = (importedDeals: Partial<Deal>[]) => {
    importedDeals.forEach((deal) => {
      if (deal.companyName && deal.contactPerson && deal.email) {
        addDeal({
          companyName: deal.companyName,
          contactPerson: deal.contactPerson,
          email: deal.email,
          value: deal.value || 0,
          currency: deal.currency || "USD",
          margin: deal.margin || 0,
          marginType: deal.marginType || "percentage",
          stage: deal.stage || "Contact made",
          probability: deal.probability || 0,
          notes: deal.notes || "",
          nextAction: deal.nextAction || "",
          nextActionDate: deal.nextActionDate || new Date().toISOString().split("T")[0],
          lastContact: new Date().toISOString().split("T")[0],
          endUserCountry: deal.endUserCountry || "",
        });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Deal Pipeline</h1>
      </div>

      <div className="space-y-6">
        <DealsToolbar
          onNewDeal={() => setIsNewDealOpen(true)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          stageFilter={stageFilter}
          onStageFilterChange={setStageFilter}
          sortBy={sortBy}
          onSortByChange={setSortBy}
          sortOrder={sortOrder}
          onSortOrderChange={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          onImportDeals={handleImportDeals}
        />

        <DealsTable
          deals={deals}
          onStageChange={updateDealStage}
          sortBy={sortBy}
          sortOrder={sortOrder}
          stageFilter={stageFilter}
          searchTerm={searchTerm}
        />
      </div>

      <NewDealDialog
        isOpen={isNewDealOpen}
        onClose={() => setIsNewDealOpen(false)}
        onSubmit={handleAddDeal}
      />
    </div>
  );
};

export default DealPipeline;
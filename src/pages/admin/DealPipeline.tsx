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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Deal Pipeline</h1>
      </div>

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
      />

      <DealsTable
        deals={deals}
        onStageChange={updateDealStage}
        sortBy={sortBy}
        sortOrder={sortOrder}
        stageFilter={stageFilter}
        searchTerm={searchTerm}
      />

      <NewDealDialog
        isOpen={isNewDealOpen}
        onClose={() => setIsNewDealOpen(false)}
        onSubmit={(deal) => {
          addDeal(deal);
          setIsNewDealOpen(false);
        }}
      />
    </div>
  );
};

export default DealPipeline;
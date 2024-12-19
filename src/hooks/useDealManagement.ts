import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export interface Deal {
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

const initialDeals = [{
  id: "sc-001",
  companyName: "European Defense Systems Ltd",
  contactPerson: "Marcus Weber",
  email: "m.weber@eds-ltd.eu",
  value: 130000,
  stage: "proposal",
  lastContact: "2024-03-15",
  probability: 75,
  notes: "Interested in 5.56mm NATO standard ammunition. Initial technical specifications reviewed and approved. Awaiting final budget approval from client's procurement department.",
  nextAction: "Follow up on procurement approval status",
  nextActionDate: "2024-03-22"
}];

export const useDealManagement = () => {
  const { toast } = useToast();
  const [deals, setDeals] = useState<Deal[]>(() => {
    const savedDeals = localStorage.getItem("deals");
    return savedDeals ? JSON.parse(savedDeals) : initialDeals;
  });

  const addDeal = (deal: Omit<Deal, "id">) => {
    const newDeal = {
      ...deal,
      id: Math.random().toString(36).substr(2, 9),
    };
    const updatedDeals = [...deals, newDeal];
    setDeals(updatedDeals);
    localStorage.setItem("deals", JSON.stringify(updatedDeals));
    toast({
      title: "Deal Created",
      description: "New deal has been successfully added to the pipeline.",
    });
  };

  const updateDealStage = (dealId: string, newStage: string) => {
    const updatedDeals = deals.map((deal) =>
      deal.id === dealId ? { ...deal, stage: newStage } : deal
    );
    setDeals(updatedDeals);
    localStorage.setItem("deals", JSON.stringify(updatedDeals));
    toast({
      title: "Deal Updated",
      description: "Deal stage has been successfully updated.",
    });
  };

  return {
    deals,
    addDeal,
    updateDealStage,
  };
};
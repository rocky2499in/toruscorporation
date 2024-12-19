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

export const useDealManagement = () => {
  const { toast } = useToast();
  const [deals, setDeals] = useState<Deal[]>(() => {
    const savedDeals = localStorage.getItem("deals");
    return savedDeals ? JSON.parse(savedDeals) : [];
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
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface NewDealDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (deal: any) => void;
}

const NewDealDialog = ({ isOpen, onClose, onSubmit }: NewDealDialogProps) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    value: "",
    currency: "USD",
    margin: "",
    marginType: "percentage",
    stage: "Contact made",
    probability: "",
    notes: "",
    nextAction: "",
    nextActionDate: "",
    endUserCountry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      value: Number(formData.value),
      margin: Number(formData.margin),
      probability: Number(formData.probability),
      lastContact: new Date().toISOString().split("T")[0],
    });
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      value: "",
      currency: "USD",
      margin: "",
      marginType: "percentage",
      stage: "Contact made",
      probability: "",
      notes: "",
      nextAction: "",
      nextActionDate: "",
      endUserCountry: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Deal</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPerson">Contact Person</Label>
              <Input
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endUserCountry">End User Country</Label>
              <Input
                id="endUserCountry"
                name="endUserCountry"
                value={formData.endUserCountry}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="value">Deal Value</Label>
              <div className="flex gap-2">
                <Input
                  id="value"
                  name="value"
                  type="number"
                  value={formData.value}
                  onChange={handleChange}
                  required
                  className="flex-1"
                />
                <Select
                  value={formData.currency}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, currency: value }))
                  }
                >
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Margin Type</Label>
              <RadioGroup
                value={formData.marginType}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, marginType: value }))
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="percentage" id="percentage" />
                  <Label htmlFor="percentage">Percentage</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="absolute" id="absolute" />
                  <Label htmlFor="absolute">Absolute</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="margin">
                Margin ({formData.marginType === "percentage" ? "%" : formData.currency})
              </Label>
              <Input
                id="margin"
                name="margin"
                type="number"
                value={formData.margin}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="probability">Probability (%)</Label>
              <Input
                id="probability"
                name="probability"
                type="number"
                min="0"
                max="100"
                value={formData.probability}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stage">Stage</Label>
              <Select
                value={formData.stage}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, stage: value }))
                }
              >
                <SelectTrigger>
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
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nextAction">Next Action</Label>
            <Input
              id="nextAction"
              name="nextAction"
              value={formData.nextAction}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nextActionDate">Next Action Date</Label>
            <Input
              id="nextActionDate"
              name="nextActionDate"
              type="date"
              value={formData.nextActionDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Deal</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewDealDialog;
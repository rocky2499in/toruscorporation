import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { toast } from "sonner";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSchedule = () => {
    if (!date) {
      toast.error("Please select a date first");
      return;
    }
    
    toast.success("Your call has been scheduled! We'll be in touch soon.");
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Schedule a Call</CardTitle>
          <CardDescription>
            Select a date and time to schedule a consultation with our team
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <div className="flex justify-end">
            <Button onClick={handleSchedule}>
              Schedule Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule;
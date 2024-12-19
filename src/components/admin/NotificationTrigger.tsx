import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { NotificationTag, TeamMember, Notification } from "@/types/admin";
import { Bell } from "lucide-react";

interface NotificationTriggerProps {
  members: TeamMember[];
  onNotificationSent: (notification: Notification) => void;
}

const NotificationTrigger = ({ members, onNotificationSent }: NotificationTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const message = formData.get("message") as string;
    const tag = formData.get("tag") as NotificationTag;

    const notification: Notification = {
      id: Date.now().toString(),
      title,
      message,
      tag,
      createdAt: new Date().toISOString(),
      createdBy: "Admin", // This should be the current user's ID
      assignedTo: members.filter(member => member.tags.includes(tag)).map(m => m.id),
      isRead: false,
    };

    onNotificationSent(notification);
    setIsOpen(false);
    toast({
      title: "Notification sent",
      description: `Notification has been sent to ${notification.assignedTo.length} team members.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Bell className="mr-2 h-4 w-4" />
          Send Notification
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send Notification</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <Input id="title" name="title" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea id="message" name="message" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="tag" className="text-sm font-medium">Tag</label>
            <Select name="tag" required>
              <SelectTrigger>
                <SelectValue placeholder="Select tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Documentation">Documentation</SelectItem>
                <SelectItem value="Accounts">Accounts</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Send Notification</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationTrigger;
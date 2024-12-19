export type UserRole = "admin" | "general";
export type NotificationTag = "Sales" | "Admin" | "Documentation" | "Accounts";

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  tags: NotificationTag[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  tag: NotificationTag;
  createdAt: string;
  createdBy: string;
  assignedTo: string[];
  isRead: boolean;
}
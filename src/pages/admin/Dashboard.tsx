import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Content Management</h2>
          <p className="text-gray-600 mb-4">
            Add and manage pages, products, and categories
          </p>
          <Button className="w-full" onClick={() => navigate("/admin/content")}>
            Manage Content
          </Button>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Deal Pipeline</h2>
          <p className="text-gray-600 mb-4">
            View and manage your sales pipeline
          </p>
          <Button className="w-full" onClick={() => navigate("/admin/deals")}>
            View Pipeline
          </Button>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <p className="text-gray-600 mb-4">
            Configure system settings and preferences
          </p>
          <Button className="w-full" onClick={() => navigate("/admin/settings")}>
            Manage Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
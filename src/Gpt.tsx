import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Chat from "./components/Chat";

function GPT() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar is closed by default

  // Toggle Sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the sidebar state
    console.log("gpt.tsx file menu icon clicked");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Layout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
      <div className="flex flex-col h-full">
        <Chat />
      </div>
    </Layout>
  );
}

export default GPT;
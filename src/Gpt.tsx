import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Chat from "./components/Chat";

function GPT() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    console.log("Sidebar toggled:", !sidebarOpen);
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

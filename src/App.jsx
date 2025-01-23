import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Content from "./pages/Content";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1">
        <Header title="หน้าหลัก" />
        <div className="p-8">
          <Content />
        </div>
      </main>
    </div>
  );
};

export default App;



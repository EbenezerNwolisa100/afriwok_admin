import PropTypes from "prop-types";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "../styles/base.css";
import { useState } from "react";
// import { ChevronRight } from "lucide-react";

const AdminLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="sticky top-0 h-screen">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        {/* <div className="fixed -z-10">
          <ChevronRight className="bg-green-700"/>
        </div> */}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className=" top-0">
        <Header isMobileMenuOpen={isMobileMenuOpen} />
        </div>

        {/* Main content area */}
        <main className="px-4 pb-5 bg-[#F9F9F9] overflow-y-auto flex-1 rounded">
          {children}
        </main>
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
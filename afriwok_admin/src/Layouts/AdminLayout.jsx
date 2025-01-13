import PropTypes from "prop-types";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "../styles/base.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10">
          <Header />
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
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex body">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="px-4 py-4 bg-[#F4F4F4] overflow-y-auto flex-1 rounded">{children}</main>
      </div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;

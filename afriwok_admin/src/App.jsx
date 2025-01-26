import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/RegistrationsAndLogin/login";
import ResetPassword from "./Pages/RegistrationsAndLogin/resetpassword";
import EnterOTP from "./Pages/RegistrationsAndLogin/enter_otp";
import NewPassword from "./Pages/RegistrationsAndLogin/newpassword";
import ResetSuccessful from "./Pages/RegistrationsAndLogin/reset_successful";
import ProfileSettings from "./Pages/profilesettings";
import Reports from "./Pages/reports";
import Transactions from "./Pages/transactions";
import Tickets from "./Pages/Tickets/tickets";
import TicketDetails from "./Pages/Tickets/ticketdetails";
import Manage_users from "./Pages/manage_users";
import Notifications from "./Pages/notifications";
import Templates from "./Pages/templates";
import Support from "./Pages/support";
import Contracts from "./Pages/Contracts/contracts";
import ContractDetails from "./Pages/Contracts/contractdetails";
import Customers from "./Pages/Customers/Customers";
import CustomerDetails from "./Pages/Customers/customerdetails";
import MarketPlace from "./Pages/MarketPlace/marketplace";
import WokProfile from "./Pages/MarketPlace/wokprofile";
import WokPost from "./Pages/MarketPlace/wokpost";
import ProtectedRoutes from "./MiddlewareAuth/ProtectedRoutes";

function App() {
  return (

    <Router>
      <Routes>
        {/* Guest Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/enter_otp" element={<EnterOTP />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/reset_successful" element={<ResetSuccessful />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <AdminLayout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/tickets" element={<Tickets />} />
                  <Route path="/ticketdetails" element={<TicketDetails />} />
                  <Route
                    path="/profilesettings"
                    element={<ProfileSettings />}
                  />
                  <Route path="/manage_users" element={<Manage_users />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/templates" element={<Templates />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/contracts" element={<Contracts />} />
                  <Route
                    path="/contractdetails"
                    element={<ContractDetails />}
                  />
                  <Route path="/customers" element={<Customers />} />
                  <Route
                    path="/customerdetails"
                    element={<CustomerDetails />}
                  />
                  <Route path="/marketplace" element={<MarketPlace />} />
                  <Route path="/wokprofile" element={<WokProfile />} />
                  <Route path="/wokpost" element={<WokPost />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
    
  );
}

export default App;

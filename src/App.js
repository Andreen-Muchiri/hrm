import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/general/Landing/landing";
import Login from "./Pages/general/auth/login";
import EmployeeHome from "./Pages/employee/home/home";
import EmployeeMoney from "./Pages/employee/money/money";
import Signup from "./Pages/general/auth/signup";
import ClientSignup from "./Pages/client/signup/signup";
import ClientApps from "./Pages/client/apps/apps";

import ClientHome from "./Pages/client/home/home";
import ClientMoney from "./Pages/client/money/money";
import ClientEmployee from "./Pages/client/employee/employee";
import ClientProfile from "./Pages/client/profile/profile";
import Messages from "./Pages/client/notifications/message";
import Notifications from "./Pages/client/notifications/notifs";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin">
          <Route path="home" />
        </Route>

        <Route path="/client">
        <Route path="dashboard" element={<ClientApps />} />

          <Route path="home" element={<ClientHome />} />
          <Route path="signup" element={<ClientSignup />} />
          <Route path="money" element={<ClientMoney />} />
          <Route path="employee" element={<ClientEmployee />} />
          <Route path="profile" element={<ClientProfile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        <Route path="/department">
          <Route path="home" />
        </Route>

        <Route path="/supervisor">
          <Route path="home" />
        </Route>

        <Route path="/employee">
          <Route path="home" element={<EmployeeHome />} />
          <Route path="money" element={<EmployeeMoney />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

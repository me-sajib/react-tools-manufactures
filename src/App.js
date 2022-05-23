import Home from "./Pages/Home/Home";
import "./App.css";
import Footer from "./Pages/Shared/Footer";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Registration from "./Pages/Login/Registration";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Users from "./Pages/Dashboard/Admin/Users";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/purchase/:id"
          element={
            <PrivateRoute>
              <Purchase />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index path="myOrder" element={<MyOrders />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="allUser" element={<Users />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

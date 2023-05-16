import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from "./pages/Admin/CreateCategory";
import Products from "./pages/Admin/Products";
import CreateProduct from "./pages/Admin/CreateProduct";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import Users from "./pages/Admin/Users";
import UpdateProduct from "./pages/Admin/UpdateProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/user" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/dashboard/user/profile" element={<Profile />} />
          <Route path="/dashboard/user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard/admin" element={<AdminRoute />}>
          <Route path="" element={<AdminDashboard />} />
          <Route
            path="/dashboard/admin/create-category"
            element={<CreateCategory />}
          />
          <Route
            path="/dashboard/admin/create-product"
            element={<CreateProduct />}
          />
          <Route path="/dashboard/admin/products" element={<Products />} />
          <Route
            path="/dashboard/admin/product/:slug"
            element={<UpdateProduct />}
          />
          <Route path="/dashboard/admin/users" element={<Users />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;

import { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="relative">
        {/* ----- Common navbar for all pages ----- */}
        <Navbar />
        {/* ----- Child routes section ----- */}
        <div className="flex flex-col gap-4 font-sans">
          <Outlet />
        </div>
      </div>

      {/* ----- Lazy load components ----- */}
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

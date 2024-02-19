import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Unauthorized from "./pages/Unauthorized";

import RouteNotFound from "./pages/RouteNotFound";
import Dashboard from "./pages/Dashboard";
import AttendanceList from "./ui/AttendanceList";
import AllUsersList from "./ui/AllUsersList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 24 * 60 * 60 * 1000,
    },
  },
});

// const AuthenticatedAdminDashboard = withAuth(AdminDashboard, ['admin']);

function PrivateRoute({ element }) {
  return localStorage.getItem("token") ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools position="bottom" buttonPosition="bottom-left" />
        <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoute element={<AppLayout />} />}>
                <Route index path="/" element={localStorage.getItem("token") ? <Navigate to="/home" /> : <Navigate to="/login" />} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="/attendance" element={<AttendanceList />} />
                <Route path="/employees" element={<AllUsersList />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<RouteNotFound />} />
            </Routes>
        </BrowserRouter>
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CreateNewUser from "./pages/CreateNewUser";
import Profile from "./pages/Profile";
// import { isAuthenticated } from "./services/authApi";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 24 * 60 * 60 * 1000,
    },
  },
});

function PrivateRoute({ element }) {
  return localStorage.getItem("token") ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools position="bottom" buttonPosition="bottom-left" />
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute element={<AppLayout />} />}>
              <Route index path="/" element={<Navigate to="home" />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/new-user" element={<CreateNewUser />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            {/* <ProtectedRoute path="/" component={<AppLayout/>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
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

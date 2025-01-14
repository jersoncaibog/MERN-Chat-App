import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { 
  Route, 
  Routes, 
  useNavigate 
} from "react-router";
import Account from "./components/modals/Account.tsx";
import Home from "./components/pages/Home.tsx";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register.tsx";
import { refreshAccessToken } from "./utils/auth.ts";

function App() {
  const navigate = useNavigate();

  // refresh acess token on page reload
  useEffect(() => {
    console.log("App.tsx started");

    const initializeAuth = async () => {
      try {
        await refreshAccessToken(); // Refresh the token
      } catch (error) {
        console.error("Failed to refresh access token:", error);
        navigate("/auth/login");
      }
    };

    initializeAuth();
  }, []);

  return (
    <Box minH={"100vh"}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="account" element={<Account />} />

        <Route path="auth">
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Box>
  );
}

export default App;

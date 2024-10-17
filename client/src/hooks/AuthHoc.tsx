import axios from "axios";
import { useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../lib/vars";

interface AuthHOCProps {
  children: ReactNode;
}

const AuthHOC = ({ children }: AuthHOCProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyToken() {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/api/v1/auth/verify`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { ok } = response.data;
      if (!ok) {
        setIsAuthenticated(false);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
    verifyToken();
  }, [navigate]);

  if (!isAuthenticated) {
    return <div>You are not authenticated. Please login.</div>;
  }

  return <>{children}</>;
};

export default AuthHOC;

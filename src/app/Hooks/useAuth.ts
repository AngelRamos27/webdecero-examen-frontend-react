"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (username: string, password: string) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("Credenciales inválidas");

      const data = await res.json();

      
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      setError(null);
      router.push("/views/profile");
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/views/profile");
    }
  }, []);

  return { login, error };
};

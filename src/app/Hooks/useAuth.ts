"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = async (username: string, password: string) => { // función para realizar el login con username y pass
    try {
      const res = await fetch("https://dummyjson.com/auth/login", { // consulta a la api
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }), //se manda el json de los datos en el body
      });

      if (!res.ok) throw new Error("Credenciales inválidas");

      const data = await res.json();

      localStorage.setItem("token", data.token); // se guarda en el localStorage el token y la data del auth del user
      localStorage.setItem("user", JSON.stringify(data));

      setError(null);
      router.push("/views/profile"); // redirige
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error al iniciar sesión");
      }
    }
  };

  useEffect(() => { // checa sí ya hay token de la auth, y redirige
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/views/profile");
    }
  }, [router]);

  return { login, error };
};

"use client";

import React, { Suspense, useEffect, useState } from "react";
import ProfileCard from "./_components/ProfileCard";
import { useRouter } from "next/navigation";
import Button from "@/app/Components/Ui/Button";
import CardSkeleton from "./_components/CardSkeleton";
import { fetchFullUserData } from "./_fetch/fetchData";

export interface UserDataProps {
  username?: string;
  email?: string;
  address: {
    city?: string;
    country?: string;
  };
  birthDate?: string;
  age?: string;
  phone?: string;
  bloodGroup?: string;
  gender?: string;
  weight?: string;
  image: string;
} //interfaz de datos reutilizable, podría separarse en otro archivo .types, pero no fue necesario de momento

const ProfilePageFetch = () => {
  //componente fetch para hacer primero la carga de datos y posteriormente renderizar
  const [user, setUser] = useState<UserDataProps | null>(null);
  const router = useRouter();

  const handleLogout = () => { //se elimina el token del local y redirige al login
    localStorage.removeItem("token");
    router.push("/views/login");
  };
  useEffect(() => { //useEffect para hacer fetch de la data del user
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) { //si no hay sesión, regresa al login y termina el proceso
      router.push("/views/login");
      return;
    }

    const parsedUser = JSON.parse(userData);
    const getUserData = async () => { //llamamos al fetch de toda la data consultando con el id
      try {
        const fullUser = await fetchFullUserData(parsedUser.id);
        setUser(fullUser);
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
        router.push("/views/login");
      }
    };

    getUserData();
  }, [router]);

  if (!user) return null;

  return ( //componentes del profile
    <div className="w-full h-screen flex flex-col justify-center items-center p-5">
      <ProfileCard {...user} />
      <div className="absolute bottom-5 right-5 w-40">
        <Button
          colorType="bg-secondary"
          text="Cerrar sesión"
          type="button"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

const ProfilePage = () => { 
  // suspense para mostrar uun componente de carga mientras se hace el fetch y no dejar vacío
  return (
    <Suspense fallback={<CardSkeleton />}> 
      <ProfilePageFetch />
    </Suspense>
  );
};

export default ProfilePage;

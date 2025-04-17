"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "./_components/ProfileCard";
import { useRouter } from "next/navigation";
import Button from "@/app/Components/Ui/Button";
import CardSkeleton from "./_components/CardSkeleton";
import { fetchFullUserData } from "./_fetch/fetchData";
import DialogCloseSession from "./_components/DialogCloseSession";
import { useAuth } from "@/app/Hooks/useAuth";

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

const ProfilePage = () => {
  const [user, setUser] = useState<UserDataProps | null>(null);
  const router = useRouter();
  const { logout } = useAuth(); //uso de nuestro hook para cerrar sesión

  useEffect(() => {
    //useEffect para hacer fetch de la data del user
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      //si no hay sesión, regresa al login y termina el proceso
      router.push("/views/login");
      return;
    }

    const parsedUser = JSON.parse(userData);
    const getUserData = async () => {
      //llamamos al fetch de toda la data consultando con el id
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

  if (!user)
    // skeleton del componente para no dejar vacío mientras renderiza los datos asincrónos
    return (
      <div className="w-full h-screen flex items-center justify-center bg-primary">
        <CardSkeleton />
      </div>
    );

  return (
    //componentes del profile
    <div className="w-full h-screen flex flex-col justify-center items-center p-5">
      <ProfileCard {...user} />
      <div className="absolute bottom-5 right-5 w-40">
        <DialogCloseSession onLogout={logout}>
          {/*  componente dialog para cerrar la sesión, recibe el button como children */}
          <Button colorType="bg-secondary" text="Cerrar sesión" type="button" />
        </DialogCloseSession>
      </div>
    </div>
  );
};
export default ProfilePage;
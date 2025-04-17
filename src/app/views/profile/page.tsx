"use client";

import React, { useEffect, useState } from "react";
import ProfileCard from "./_components/ProfileCard";
import { useRouter } from "next/navigation";
import Button from "@/app/Components/Ui/Button";

interface UserData {
  username: string;
  email: string;
  city: string;
  country: string;
  birthDate: string;
  age: string;
  phone: string;
  personalInfo1: string;
  personalInfo2: string;
  personalInfo3: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    router.push('/views/login'); 
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.push("/login");
      return;
    }

    const parsedUser = JSON.parse(userData);

    const userProfile: UserData = {
      username: parsedUser.username,
      email: parsedUser.email,
      city: parsedUser?.address?.city || "Ciudad no disponible",
      country: parsedUser?.address?.country || "País no disponible",
      birthDate: parsedUser?.birthDate || "2002-10-27",
      age: parsedUser?.age?.toString() || "22",
      phone: parsedUser.phone || "Sin teléfono",
      personalInfo1: "Info personal 1",
      personalInfo2: "Info personal 2",
      personalInfo3: "Info personal 3",
    };

    setUser(userProfile);
  }, []);

  if (!user) return null;

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-5">
      <ProfileCard {...user} />
      <div className="w-40 mt-auto self-end">
        <Button colorType="bg-secondary" text="Cerrar sesión" type="button"  onClick={handleLogout} />
      </div>
    </div>
  );
};

export default ProfilePage;

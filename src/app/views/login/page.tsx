"use client";

import { useForm } from "react-hook-form";
import Input from "@/app/Components/Ui/Input";
import Button from "@/app/Components/Ui/Button";
import { useAuth } from "@/app/Hooks/useAuth";

type FormValues = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { login, error } = useAuth();

  const onSubmit = (data: FormValues) => {
    console.log("🚀 onSubmit ejecutado");
    console.log("📝 Datos del formulario:", data);
    login(data.username, data.password);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 rounded-lg  w-96 flex flex-col gap-5"
      >
        <Input
          {...register("username", { required: "Usuario requerido" })}
          name="username"
          placeholder="Usuario"
          type="text"
        />

        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}

        <Input
          {...register("password", { required: "Contraseña requerida" })}
          name="password"
          placeholder="Contraseña"
          type="password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <Button type="submit" colorType="bg-secondary" text="AUTENTICAR" />
      </form>
    </div>
  );
};

export default LoginPage;

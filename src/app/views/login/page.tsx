"use client";

import { useForm } from "react-hook-form";
import Input from "@/app/Components/Ui/Input";
import Button from "@/app/Components/Ui/Button";
import { useAuth } from "@/app/Hooks/useAuth";

type FormValues = {
  username: string;
  password: string;
}; //tipo de dato que va a recibir el form

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>(); //llamada del react-form
  const { login, error } = useAuth(); //llamada al hook para el auth

  const onSubmit = (data: FormValues) => {
    login(data.username, data.password);
  }; //uso de la función del login de nuestro hook

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 rounded-lg  w-96 flex flex-col gap-5"
      >
        <Input //uso del input presonalizado, en conjunto de useForm
          {...register("username", { required: "Usuario requerido" })} //se indica el campo y se pone una validación (no se usó regex dado la simplesa de los datos ni otras indicaciones)
          name="username"
          placeholder="Usuario"
          type="text"
        />
        {errors.username && ( // renderiza mensaje de error
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
        {error && (
          <p className="text-red-500 text-sm text-center font-bold">{error}</p>
        )}
        {/* error en la auth */}
        <Button type="submit" colorType="bg-secondary" text="AUTENTICAR" /> {/*componente personalizado del button */}
      </form>
    </div>
  );
};

export default LoginPage;

export const fetchFullUserData = async (id: number) => { // función para hacer el fetch de la info del user
  const res = await fetch(`https://dummyjson.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Error al obtener la información del usuario");
  }

  const data = await res.json();
  return data;
};


// se separó para tener un control mayor de cada función de cada sección, como ni es un proyecto bien estructurado 
// y definido, se dejó así, pero el plan es manejar una estructura que clasifique por controllers, adapters, etc
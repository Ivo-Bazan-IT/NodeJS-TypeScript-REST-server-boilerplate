import mongoose from "mongoose";

export const dbConnection = async (): Promise<void> => {
  // 1. Validación de Configuración
  const dbUrl = process.env.MONGODB_CNN;

  if (!dbUrl) {
    // Si esto falla, la app se detiene aquí y muestra ESTE mensaje específico
    throw new Error("No se ha definido la variable de entorno MONGODB_CNN");
  }

  // 2. Intento de Conexión
  try {
    await mongoose.connect(dbUrl);
    console.log("Base de datos online");
  } catch (error) {
    // 3. Loguear el error REAL
    // Ojo: quitamos las comillas para imprimir el objeto error, no la palabra "error"
    console.log(error);

    // Lanzamos un error genérico para que el Server sepa que falló
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};

// initDBController.js

const Administrador = require('./');

async function initializeDB() {
  try {
    // Eliminar todos los administradores existentes (opcional, dependiendo de tus necesidades)
    await Administrador.deleteMany({});
    
    // Crear el usuario administrador (root) si no existe
    const rootAdmin = await Administrador.findOne({ Nombre: 'root' });
    if (!rootAdmin) {
      await Administrador.create({
        Nombre: 'root',
        AppE: 'admin',
        ApmE: 'root',
        FechaNac: new Date(),
        Correo: 'root@root.com',
        Contraseña: 'root321',
        Region: 'Optimen UTNG',
        AreaTrabajo: 'Administración',
        Rol: 'Administrador'
      });
      console.log('Usuario administrador (root) creado exitosamente.');
    } else {
      console.log('El usuario administrador (root) ya existe.');
    }
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
}

module.exports = initializeDB;

import Role from '../role/role.models.js';
import User from '../users/user.model.js';
import Pet from '../pet/pet.model.js';

export const esRoleValido = async (role = '') => {
    
    const existeRol = await Role.findOne({role});

    if(!existeRol){
        throw new Error(`El rol ${role} no existe en la base de datos`);
    }
}

export const existenteEmail = async (correo = '') => {
    const existeEmail = await User.findOne({correo});

    if (existeEmail) {
        throw new Error(`El correo ${correo} ya existe en la base de datos`);
    }
}

export const existeUserById = async (id= '') => {
    const existUser = await User.findById(id);

    if (!existUser) {
        throw new Error(`El usuario con el id ${id} no existe en la base de datos`)
    }
}

export const existePetById = async (id = '') =>{
    const existePet = await Pet.findById(id);

    if(!existePet) {
        throw new Error(`The pet with ID ${id} is not exists in the database`);
    }
}


import { Router } from 'express';
import { check } from 'express-validator';
import { login, register } from './auth.controller.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { existenteEmain, esRoleValido } from '../helpers/db-validator.js';

const router = Router();

router.post(
    '/login',
    [
        check('correo', 'Este no es un correo válido').isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        validarCampos
    ],
    login

);

router.post(
    '/registar',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'La contraseña debe ser mayor a 6 caracteres').isLength({min: 6}),
        check('correo', 'Este correo no es válido').isEmail(),
        check('correo').custom(existenteEmain),
        check('role').custom(esRoleValido),
        check('phone', 'El telefono debe tener 8 dígitos').isLength({min: 8, max: 8}),
        validarCampos
    ],
    register
);

export default router;
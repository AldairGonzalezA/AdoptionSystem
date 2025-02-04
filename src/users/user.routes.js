import { Router } from "express";
import { check} from "express-validator";
import  {getUsers, getUserById, updateUser } from "./user.controller.js";
import { existeUserById } from "../helpers/db-validator.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { uploadProfilePicture} from "../middlewares/multer-upload.js";

const router = Router();

router.get("/", getUsers)

router.get(
    "/findUser/:id",
    [
        check("id", "id is invalid").isMongoId(),
        check("id").custom(existeUserById),
        validarCampos
    ],
    getUserById
)

router.put(
    "/:id",
    uploadProfilePicture.single('profilePicture'),
    [
        check("id", "id is invalid").isMongoId(),
        check("id").custom(existeUserById),
        validarCampos
    ],
    updateUser
)

export default router;
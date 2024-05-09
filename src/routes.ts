import { Router } from 'express';
import { AuthController } from './Domains/Auth';

const router = Router();

const authController = new AuthController()

//Dominio de Autenticação
router.post("/auth", authController.handle)

export default router


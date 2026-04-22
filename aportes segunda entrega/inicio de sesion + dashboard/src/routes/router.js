// src/routes/router.js
import { Router } from "express";
import authController from "../controllers/authController.js";

const router = Router();

// Ruta para cargar la página de login (existente)
router.get('/', authController.renderLogin);

// NUEVA RUTA: Para cargar la página del dashboard
router.get('/dashboard', authController.renderDashboard);

// Ruta para procesar el inicio de sesión (API) (existente)
router.post('/api/login', authController.login);

export default router;
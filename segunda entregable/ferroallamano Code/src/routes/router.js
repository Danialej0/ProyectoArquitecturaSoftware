// src/routes/router.js
import { Router } from "express";
import authController from "../controllers/authController.js";

const router = Router();

// Ruta para cargar la página de login 
router.get('/', authController.renderLogin);

router.get('/dashboard', authController.renderDashboard);

router.post('/api/login', authController.login);

export default router;
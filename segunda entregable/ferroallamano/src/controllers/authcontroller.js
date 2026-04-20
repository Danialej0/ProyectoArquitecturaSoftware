// src/controllers/authController.js
import authService from '../services/authService.js';

class AuthController {
    // 1. Renderiza la vista de Login existente
    renderLogin(req, res) {
        res.render('index'); 
    }

    // 2. Renderiza la vista del Dashboard con los datos simulados de image_5.png
    renderDashboard(req, res) {
        // hardcode de los datos exactos que salen en la imagen
        const dashboardData = {
            resumenDiario: {
                fecha: "20 de abril 2026",     // mantenemos el dato gracioso de la imagen
                metricaPrincipal: "Métricas de desempeño comercial"
            },
            cards: [
                {
                    title: "TOTAL VENDIDO",
                    value: "$42,500.000",
                    vsAyer: "$37,775",
                    trend: "+12.5%",
                    trendClass: "positive",
                    iconClass: "fa-regular fa-money-bill-1"
                },
                {
                    title: "TRANSACCIONES",
                    value: "184",
                    vsAyer: "Operaciones completadas",
                    trend: "+4.2%",
                    trendClass: "positive",
                    iconClass: "fa-solid fa-file-invoice-dollar"
                },
                {
                    title: "PROMEDIO VENTA",
                    value: "$230.973",
                    vsAyer: "Por transacción",
                    trend: "-1.1%",
                    trendClass: "negative",
                    iconClass: "fa-solid fa-tag"
                }
            ],
            categorias: [
                { name: "Herramientas Eléctricas", percentage: 45, color: "#9c5220" },
                { name: "Tornillería", percentage: 30, color: "#f9bc1d" },
                { name: "Pinturas y Acabados", percentage: 15, color: "#1c6ea4" },
                { name: "Otros", percentage: 10, color: "#6b7280" }
            ]
        };

        // Renderiza 'dashboard.ejs' y le pasa los datos
        res.render('dashboard', { data: dashboardData });
    }

    // 3. Procesa el formulario (mismo código de antes)
    login(req, res) {
        try {
            const { email, password } = req.body;
            const result = authService.authenticate(email, password);

            if (result.success) {
                res.status(200).json(result);
            } else {
                res.status(401).json(result);
            }
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        }
    }
}

export default new AuthController();
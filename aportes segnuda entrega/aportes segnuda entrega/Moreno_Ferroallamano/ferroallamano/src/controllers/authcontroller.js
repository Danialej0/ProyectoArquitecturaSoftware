import authService from '../services/authService.js';

class AuthController {
    renderLogin(req, res) {
        res.render('index');
    }

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
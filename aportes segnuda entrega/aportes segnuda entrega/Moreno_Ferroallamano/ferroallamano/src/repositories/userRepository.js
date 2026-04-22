import User from '../models/userModel.js';

class UserRepository {
    constructor() {
        if (UserRepository.instance) {
            return UserRepository.instance;
        }
        
        // Base de datos temporal (Se borra si apagas el servidor)
        this.users = [
            new User('tu@empresa.com', '12345678')
        ];
        
        UserRepository.instance = this;
    }

    findByEmail(email) {
        // Busca en la lista en lugar de ir a Mongo
        return this.users.find(user => user.email === email);
    }
}

export default new UserRepository();
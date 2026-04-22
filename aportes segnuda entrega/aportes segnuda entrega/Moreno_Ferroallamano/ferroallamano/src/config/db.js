// src/config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Conexión a una base de datos local llamada ferroallamano_db
        await mongoose.connect('mongodb://127.0.0.1:27017/ferroallamano_db');
        console.log('📦 Conectado exitosamente a MongoDB');
    } catch (error) {
        console.error('❌ Error conectando a MongoDB:', error);
        process.exit(1); // Detiene el servidor si no hay base de datos
    }
};

export default connectDB;
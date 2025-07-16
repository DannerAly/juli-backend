-- Ejecuta para limpiar la base de datos.

-- Deshabilitar restricciones de claves foráneas temporalmente
SET session_replication_role = 'replica';

-- Eliminar tablas en el orden adecuado



DROP TABLE IF EXISTS documentos_generados CASCADE;
DROP TABLE IF EXISTS audios CASCADE;
DROP TABLE IF EXISTS plantillas CASCADE;
DROP TABLE IF EXISTS usuarios CASCADE;


-- Restaurar las restricciones de claves foráneas
SET session_replication_role = 'origin';

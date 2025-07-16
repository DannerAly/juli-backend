-- Poblar la tabla usuarios
-- Contraseña = password123 para todos los usuarios
INSERT INTO usuarios (nombre, apellido, correo, clave, suscripcion, activo)
VALUES 
('Danner', 'Aly Delgado', 'danneraly@gmail.com', '$2b$10$Be3OLWkLtOFxwoGpAzlNCez476S.ZBRH/wIkrJDih77fgABK9os5K', 'premium', true),
('Ana', 'Rojas', 'ana.rojas@gmail.com', '$2b$10$Be3OLWkLtOFxwoGpAzlNCez476S.ZBRH/wIkrJDih77fgABK9os5K', 'free', true),
('Carlos', 'Salazar', 'carlos.salazar@gmail.com', '$2b$10$Be3OLWkLtOFxwoGpAzlNCez476S.ZBRH/wIkrJDih77fgABK9os5K', 'premium', true),
('Marta', 'Fernandez', 'marta.fernandez@gmail.com', '$2b$10$Be3OLWkLtOFxwoGpAzlNCez476S.ZBRH/wIkrJDih77fgABK9os5K', 'free', true),
('Luis', 'Gómez', 'luis.gomez@gmail.com', '$2b$10$Be3OLWkLtOFxwoGpAzlNCez476S.ZBRH/wIkrJDih77fgABK9os5K', 'premium', true);

-- Poblar la tabla plantillas
-- Las plantillas son ejemplos de informes médicos con secciones comunes
INSERT INTO plantillas (nombre, descripcion, contenido_json, activo)
VALUES 
('Consulta General', 'Informe estándar para consulta ambulatoria', '{"secciones": ["motivo_consulta", "examen_fisico", "diagnostico", "tratamiento"]}'::jsonb, true),
('Urgencias', 'Informe breve para atención de emergencia', '{"secciones": ["emergencia", "intervencion", "resultado"]}'::jsonb, true),
('Pediatría', 'Formato adaptado para pacientes pediátricos', '{"secciones": ["peso", "edad", "vacunas", "diagnostico"]}'::jsonb, true),
('Control Postquirúrgico', 'Informe para seguimiento después de cirugía', '{"secciones": ["procedimiento", "estado_actual", "indicaciones"]}'::jsonb, true),
('Ginecología', 'Plantilla orientada a atención ginecológica', '{"secciones": ["ciclo_menstrual", "exploracion", "diagnostico"]}'::jsonb, true);

-- Poblar la tabla audios
-- Enlaces a audios médicos grabados por los doctores
INSERT INTO audios (usuario_id, plantilla_id, url_audio, procesado)
VALUES 
(1, 1, 'https://s3.juli.com/audio_consulta_general_001.mp3', true),
(1, 2, 'https://s3.juli.com/audio_urgencias_002.mp3', false),
(2, 3, 'https://s3.juli.com/audio_pediatria_003.mp3', true),
(3, 4, 'https://s3.juli.com/audio_postquirurgico_004.mp3', true),
(4, 5, 'https://s3.juli.com/audio_ginecologia_005.mp3', false),
(5, 1, 'https://s3.juli.com/audio_consulta_general_006.mp3', true),
(2, 2, 'https://s3.juli.com/audio_urgencias_007.mp3', true);


-- Poblar la tabla documentos_generados
-- Documentos Word generados a partir de los audios procesados
INSERT INTO documentos_generados (audio_id, url_docx)
VALUES 
(1, 'https://s3.juli.com/documentos/informe_consulta_001.docx'),
(3, 'https://s3.juli.com/documentos/informe_pediatria_003.docx'),
(4, 'https://s3.juli.com/documentos/informe_postquirurgico_004.docx'),
(6, 'https://s3.juli.com/documentos/informe_consulta_006.docx'),
(7, 'https://s3.juli.com/documentos/informe_urgencias_007.docx');

CREATE TABLE usuarios (
id_usuario SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
apellido VARCHAR(100) NOT NULL,
correo VARCHAR(255) UNIQUE NOT NULL,
clave VARCHAR(255) NOT NULL,
suscripcion VARCHAR(20) NOT NULL DEFAULT 'free', -- 'free' o 'premium'
activo BOOLEAN DEFAULT true,
ultimo_login TIMESTAMP,
fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE plantillas (
id_plantilla SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
descripcion TEXT,
contenido_json JSONB NOT NULL, -- estructura de plantilla (variables, instrucciones)
activo BOOLEAN DEFAULT true,
fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE audios (
id_audio SERIAL PRIMARY KEY,
usuario_id INTEGER REFERENCES usuarios(id_usuario),
plantilla_id INTEGER REFERENCES plantillas(id_plantilla),
url_audio VARCHAR(255) NOT NULL, -- puede ser ruta local o enlace en S3
procesado BOOLEAN DEFAULT false,
fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE documentos_generados (
id_documento SERIAL PRIMARY KEY,
audio_id INTEGER REFERENCES audios(id_audio),
url_docx VARCHAR(255) NOT NULL, -- ruta al archivo generado (.docx)
fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
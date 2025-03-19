# Proyecto Backend Marketplace

Este es un proyecto desarrollado con **NestJS**, un framework para construir aplicaciones de servidor en Node.js.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/SantiagoRojasBuitrago/MagicLogBackend
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

## Ejecución

Para iniciar el servidor en modo desarrollo:
```sh
npm run start:dev
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las configuraciones necesarias, por ejemplo:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/mi_base_de_datos
JWT_SECRET=secret_key
```

## Endpoints

Puedes probar los endpoints con **Postman** o **Swagger** en:
```
POST: http://localhost:3000/users/register
```

## Construcción

Para compilar el proyecto:
```sh
npm run build
```




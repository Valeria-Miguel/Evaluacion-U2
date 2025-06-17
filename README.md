# Landing Page con React y GitHub Pages

Este repositorio contiene una landing page  desarrollada con React. El proyecto está configurado para ser desplegado automáticamente en GitHub Pages utilizando GitHub Actions como herramienta de integración y entrega continua (CI/CD).

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu equipo:

- [Node.js](https://nodejs.org/) (versión 19)
- npm (incluido con Node.js)
- Git

---

## Instalación

Sigue los pasos a continuación para clonar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git https://github.com/Valeria-Miguel/evaluacion-u2.git
```
### 2. Navegar al directorio del proyecto
```bash
cd evaluacion-u2
```
### 3. Instalar las dependencias

npm install

### Ejecución local
Para iniciar el servidor de desarrollo, utiliza el siguiente comando:

npm start
Una vez ejecutado, abre tu navegador y accede a http://localhost:3000 para ver el sitio en funcionamiento.

 ###Estructura del Proyecto
/public: Contiene archivos estáticos como el HTML principal e imágenes.

/src: Carpeta con todo el código fuente de la aplicación React.

App.js: Componente principal de la aplicación.

App.css: Hoja de estilos principal.

/.github/workflows: Contiene los archivos de configuración del flujo de trabajo de GitHub Actions.

### se uso 
React: Biblioteca JavaScript para construir interfaces de usuario.

GitHub Pages: Plataforma de hosting estático para sitios web directamente desde repositorios de GitHub.

GitHub Actions: Herramienta de automatización para CI/CD.

Node.js y npm: Entorno y gestor de paquetes para ejecutar y administrar el proyecto.

###  Despliegue Automático
El sitio se despliega automáticamente cada vez que se realiza un git push a la rama main. GitHub Actions se encarga de ejecutar el flujo de trabajo definido en el archivo YAML, compilar el proyecto y publicarlo en GitHub Pages sin necesidad de intervención manual.


### Enlaces del Proyecto
```bash
Repositorio: https://github.com/Valeria-Miguel/evaluacion-u2
```
```bash
Sitio en Producción: https://valeria-miguel.github.io/evaluacion-u2/
```
# 🚀 Portfolio Personal - Jose Fernandez

Portfolio personal interactivo desarrollado con React y Tailwind CSS como proyecto final para la materia **Lenguajes Visuales II**.

![Portfolio Preview](https://img.shields.io/badge/React-18.0+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📋 Descripción

Aplicación web de portfolio personal que muestra proyectos, habilidades y experiencia profesional. Incluye sistema de filtrado de proyectos por tecnología, formulario de contacto funcional y diseño responsivo con tema oscuro.

## ✨ Características Principales

- ✅ **Diseño moderno con tema oscuro** y acentos en color naranja
- ✅ **Filtrado dinámico de proyectos** por tecnología utilizada
- ✅ **Modal de detalles** para cada proyecto con información completa
- ✅ **Formulario de contacto** con validación de campos
- ✅ **Integración con WhatsApp** para contacto directo
- ✅ **Diseño 100% responsivo** (móvil, tablet, desktop)
- ✅ **Animaciones suaves** y efectos hover
- ✅ **Secciones organizadas**: Proyectos, Habilidades, Experiencia

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Framework de JavaScript
- **Tailwind CSS** - Framework de estilos (vía CDN)
- **Lucide React** - Librería de iconos

### Herramientas de Desarrollo
- **Node.js** - Entorno de ejecución
- **npm** - Gestor de paquetes
- **Create React App** - Configuración inicial del proyecto

## 📁 Estructura del Proyecto

```
mi-portfolio/
├── public/
│   ├── index.html          # HTML principal con CDN de Tailwind
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── App.js              # Componente principal del portfolio
│   ├── index.js            # Punto de entrada de React
│   ├── index.css           # Estilos globales
│   └── ...
├── package.json            # Dependencias del proyecto
└── README.md              # Este archivo
```

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js versión 14 o superior
- npm (viene incluido con Node.js)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Josferz99/mi-portfolio.git
cd mi-portfolio
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

### Comandos Disponibles

```bash
npm start        # Inicia el servidor de desarrollo
npm run build    # Crea versión optimizada para producción
npm test         # Ejecuta las pruebas
npm run eject    # Expone configuración (irreversible)
```

## 🎨 Personalización

### Cambiar Datos Personales

Edita el archivo `src/App.js` y modifica el objeto `portfolioData`:

```javascript
const portfolioData = {
  personal: {
    nombre: "Tu Nombre",
    titulo: "Tu Título Profesional",
    email: "tu@email.com",
    telefono: "+595 XXX XXX XXX",
    ubicacion: "Tu Ciudad, Paraguay",
    github: "github.com/tu-usuario",
    whatsapp: "+595XXXXXXXXX",
    descripcion: "Tu descripción profesional"
  },
  // ...resto de la configuración
}
```

### Agregar Nuevos Proyectos

Añade nuevos objetos al array `proyectos` en `portfolioData`:

```javascript
{
  id: 7,
  titulo: "Nombre del Proyecto",
  descripcion: "Descripción corta",
  descripcionDetallada: "Descripción completa del proyecto...",
  tecnologias: ["React", "Node.js"],
  fecha: "2024",
  imagen: "URL_de_la_imagen",
  caracteristicas: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
}
```

### Cambiar Colores del Tema

El proyecto usa una paleta de colores con tema oscuro y acentos naranjas:

- **Fondo principal**: `bg-gray-900`, `bg-gray-800`
- **Tarjetas**: `bg-gray-800`
- **Acento primario**: `bg-orange-500`, `text-orange-400`
- **Bordes**: `border-orange-500`

Para cambiar los colores, busca y reemplaza estas clases en `App.js`.

## 📱 Funcionalidades Detalladas

### 1. Filtrado de Proyectos
- Botones dinámicos generados automáticamente según las tecnologías
- Filtrado en tiempo real al hacer clic
- Contador de proyectos filtrados

### 2. Modal de Detalles
- Se activa al hacer clic en cualquier proyecto
- Muestra descripción completa, características y tecnologías
- Se puede cerrar con la X, botón Cerrar o clic fuera del modal

### 3. Formulario de Contacto
- Validación de campos requeridos
- Validación de formato de email
- Mensaje de confirmación al enviar
- Los datos se registran en la consola del navegador

### 4. Integración con WhatsApp
- Botón que abre WhatsApp con mensaje predefinido
- Funciona en WhatsApp Web y app móvil
- Mensaje personalizado: "Hola Jose, vi tu portfolio y me gustaría contactarte"

## 📊 Cumplimiento de Requerimientos

### ✅ Funcionalidad (10/10)
- [x] Mostrar proyectos desde datos simulados (JSON)
- [x] Filtrar proyectos por tecnología
- [x] Mostrar habilidades organizadas por categoría
- [x] Mostrar experiencia laboral
- [x] Sección de contacto funcional
- [x] Modal con detalles de cada proyecto

### ✅ Calidad del Código (5/5)
- [x] Código modular y bien organizado
- [x] Uso correcto de componentes React
- [x] Nombres claros de variables y funciones
- [x] Comentarios explicativos en el código
- [x] Uso apropiado de Hooks (useState, useEffect)

### ✅ Interfaz y Diseño (5/5)
- [x] UI moderna y profesional
- [x] Diseño 100% responsivo
- [x] Uso correcto de Tailwind CSS
- [x] Colores consistentes (tema oscuro con naranja)
- [x] Animaciones y efectos visuales

### ✅ Datos Simulados (3/3)
- [x] Datos estructurados en objetos JavaScript
- [x] Validación de formularios
- [x] Manejo correcto del estado de la aplicación

## 🌐 Despliegue

### Opción 1: GitHub Pages

```bash
npm install gh-pages --save-dev
```

Agrega en `package.json`:
```json
"homepage": "https://Josferz99.github.io/mi-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Despliega con:
```bash
npm run deploy
```

### Opción 2: Vercel

1. Instala Vercel CLI: `npm install -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones en pantalla

### Opción 3: Netlify

1. Crea build: `npm run build`
2. Arrastra la carpeta `build` a [netlify.com/drop](https://app.netlify.com/drop)

## 📸 Capturas de Pantalla

### Vista Principal
- Header con información personal y enlaces
- Sección de proyectos con filtros
- Tarjetas de proyectos con hover effects

### Modal de Proyecto
- Imagen destacada
- Descripción completa
- Lista de características
- Tecnologías utilizadas

### Secciones Adicionales
- Habilidades organizadas por categoría
- Experiencia laboral con timeline
- Footer con información de copyright

## 🤝 Contribuciones

Este es un proyecto académico, pero si deseas sugerir mejoras:

1. Haz fork del repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -m 'Agrega nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📝 Licencia

Este proyecto fue desarrollado como trabajo final para la materia **Lenguajes Visuales II** - 2025

## 👨‍💻 Autor

**Jose Fernandez**

- GitHub: [@Josferz99](https://github.com/Josferz99)
- Email: jose.fernandez@email.com
- WhatsApp: [+595 992 684 548](https://wa.me/595992684548)

---

## 📚 Información Académica

- **Materia**: Lenguajes Visuales II
- **Docente**: Ing. Milciades Gonzalez Dominguez
- **Año**: 2025
- **Proyecto**: #11 - Portfolio Personal

### Requerimientos Cumplidos
✅ Mostrar proyectos, habilidades y experiencias  
✅ Sección de contacto funcional  
✅ Filtrar proyectos por tecnología usada  
✅ Interfaz responsiva y moderna  
✅ Código modular y bien documentado  


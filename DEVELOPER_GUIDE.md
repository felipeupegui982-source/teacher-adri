# Guía del Desarrollador - Plataforma Teacher Adri V2

## 1. Introducción
Este proyecto es una plataforma educativa diseñada para ayudar a estudiantes, padres y profesores en el proceso de aprendizaje de inglés y adaptación cultural a los Estados Unidos.

El stack tecnológico ha sido migrado a **HTML5 Estático**, **Tailwind CSS (CDN)** y **JavaScript (Vanilla + Lucide Icons)** para permitir su despliegue en **GitHub Pages**.

## 2. Estructura del Proyecto (Versión Estática)

`
/
├── data/               # Archivos JSON que actúan como base de datos
│   └── curriculum.json # Datos de cursos y módulos
├── js/                 # Lógica JavaScript
│   └── app.js          # Funciones principales (fetch data, iconos)
├── index.html          # Landing Page
├── login.html          # Página de Login
├── register.html       # Página de Registro
├── student.html        # Dashboard del Estudiante
├── teacher.html        # Dashboard del Profesor
├── parent.html         # Dashboard de Padres
└── DEVELOPER_GUIDE.md  # Este archivo
`

> **Nota:** Los archivos .php antiguos pueden ser eliminados o archivados, ya que no son utilizados por la versión estática.

## 3. Gestión de Datos
Los datos se cargan dinámicamente desde data/curriculum.json utilizando etch en JavaScript.

### Curriculum (data/curriculum.json)
Define la estructura de Módulos -> Cursos.
- **audience**: Define para quién es el módulo (student, 	eacher, parent).
- **Módulo**: Una categoría grande (ej. "Survival English").
- **Curso**: Una lección específica.

**Estructura JSON:**
`json
[
  {
    "id": "mod_survival",
    "title": "Survival English",
    "audience": "student",
    "courses": [
      {
        "id": "c_airport",
        "title": "At the Airport",
        "status": "active",
        "content": "Vocabulario clave...",
        "dynamic": "Roleplay..."
      }
    ]
  }
]
`

## 4. Despliegue en GitHub Pages

1.  Sube este repositorio a GitHub.
2.  Ve a **Settings** > **Pages**.
3.  En "Source", selecciona la rama main (o master) y la carpeta / (root).
4.  Guarda los cambios.
5.  GitHub te dará una URL (ej. https://usuario.github.io/repo/) donde tu sitio estará vivo.

## 5. Desarrollo Local
Para probar el sitio localmente, es recomendable usar un servidor local simple debido a las políticas de CORS que pueden bloquear la carga del archivo JSON si abres el HTML directamente.

Si tienes Python instalado:
`ash
python -m http.server
`
Luego abre http://localhost:8000.

Si usas VS Code, puedes instalar la extensión "Live Server".

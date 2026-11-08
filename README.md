Documentación Técnica y Guía de Despliegue
Mascotas y Flores Clínica Veterinaria Vintage

  URL DEL REPOSITORIO: https://genekristi.github.io/portafolio_veterinaria/
               
  URL DE GITHUB PAGES: GENEKRISTI/portafolio_veterinaria
  
   URL DE VERCEL: portafolioveterinaria.vercel.app

Proyecto: Sitio web responsivo (HTML5, CSS3, Bootstrap 5 y JavaScript)

 1. Descripción General del Proyecto
Para este proyecto diseñé y desarrollé Mascotas y Flores, una plataforma web profesional con una estética vintage de los años 60, caracterizada por una paleta de tonos morados, rosados y pasteles. El sitio está estructurado en cuatro archivos principales que organicé de la siguiente manera:
index.html: Contiene la estructura semántica de todo el sitio, incluyendo la barra de navegación fija con efecto glassmorphism, el bloque Hero de dos columnas con marco ovalado e íconos flotantes, la sección de 3 servicios estilo revista, el equipo médico, el carrusel interactivo de 10 testimonios con efectos de latido, la sección de contacto unificada, el modal de confirmación y mi footer personalizado.
style.css: Aquí definí la identidad visual de la marca mediante variables de color (purple-deep, pink-vintage, etc.), la integración de Google Fonts (Playfair Display y Quicksand), animaciones fluidas y un diseño totalmente responsivo para adaptarlo a cualquier pantalla.
script.js: Implementé la lógica de interacción para el desplazamiento suave (smooth scroll) al hacer clic en el menú y la validación estricta de los campos del formulario de contacto que activa automáticamente el modal de éxito.

README.md Ficha técnica y resumen del repositorio para el control de versiones.


 2. Vista Previa Local con Live Server (Visual Studio Code)
Antes de publicar la página en la red, realicé las pruebas locales en mi entorno de desarrollo utilizando Visual Studio Code
1. Apertura del espacio de trabajo: Abrí Visual Studio Code, seleccioné Archivo > Abrir carpeta y elegí el directorio del proyecto donde tengo almacenados `index.html`, `style.css`, `script.js` y la carpeta `assets/`.
2. Instalación de la extensión: Me aseguré de contar con la herramienta Live Server(desarrollada por Ritwick Dey) desde la sección de extensiones de VS Code.
3. Ejecución del servidor: Hice clic derecho sobre el archivo index.html y seleccioné "Open with Live Server" (o utilicé el botón "Go Live" en la barra inferior).
4. Visualización en tiempo real: El navegador abrió de forma automática la ruta local (http://127.0.0.1:5500/index.html), permitiéndome visualizar cada cambio guardado instantáneamente.


3. Subir el Proyecto a GitHub (Paso a Paso Visual)
Para respaldar mi código en la nube de forma visual y prepararlo para producción, seguí estos pasos:
1. Accedí a [github.com](https://github.com/) con mi cuenta.
2. Hice clic en el botón New para crear un repositorio nuevo.
3. Asigné el nombre mascotas-y-flores en el campo Repository name.
4. Configuré la visibilidad como Public (Público).
5. Seleccioné la opción de incluir una MIT License.
6. Hice clic en "Create repository".

7. Utilicé la opción de subida manual haciendo clic en el enlace "uploading an existing file".
8. Arrastré los archivos index.html, style.css, script.js, README.md y la carpeta assets/ (con mi fotografía de perfil genesis_caba.jpg) al panel de GitHub.
9. Confirmé los cambios haciendo clic en el botón verde **"Commit changes"**.


<img width="671" height="377" alt="image" src="https://github.com/user-attachments/assets/6f598c4b-725b-426c-b3e5-ec8adbf57461" />



<img width="586" height="329" alt="image" src="https://github.com/user-attachments/assets/9b8e7adf-e57d-4790-9864-e58818a05d9f" />


4. Desplegar la Página en Vercel
Para poner a web en línea de forma gratuita:
1. Entré a [vercel.com](https://vercel.com/) y accedí utilizando mis credenciales de GitHub.
2. En mi panel de control (Dashboard), hice clic en"Add New
y elegí "Project".
3. Busqué el repositorio mascotas-y-flores Y seleccioné "Import".
4. Dejé los parámetros de configuración por defecto (reconociendo automáticamente el proyecto como Other) y presioné "Deploy".
5. Al finalizar el proceso de compilación, obtuve mi enlace público oficial (ejemplo: `[https://mascotas-y-flores.vercel.app](https://mascotas-y-flores.vercel.app)`) listo para compartir.
<img width="886" height="498" alt="image" src="https://github.com/user-attachments/assets/ead01bf1-33d4-4dbc-bb01-1076ebc5b406" />


<img width="802" height="451" alt="image" src="https://github.com/user-attachments/assets/c7378293-bb4f-4978-9eb6-7eacfe7287c3" />



<img width="414" height="281" alt="image" src="https://github.com/user-attachments/assets/26f67221-ba38-40b0-9830-14a0281ca25b" />










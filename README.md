# FitZone – Transforma tu cuerpo

Propuesta técnica para vacante de Front-End Developer: Landing page del gimnasio FitZone desarrollada con **Astro**. Migración desde plantilla React, optimizada para velocidad, accesibilidad y experiencia mobile-first.

---

## 🛠️ Tecnologías usadas

- **Astro**
- **Tailwind CSS** 
- **HTML**
- **JavaScript** (para interacciones como carrusel y preload)
- **Metaetiquetas personalizadas** (SEO básico + redes sociales)
- **Formspree Form** con envío de datos real y **notificaciones toast**

---

## ⚙️ Justificación

- Usé **Astro** por su rendimiento, carga rápida y capacidad nativa de optimizar imágenes.
- Migré manualmente una plantilla hecha en React, adaptando todos los componentes a Astro (.astro) y eliminando lógica innecesaria de JavaScript. Esto me permitió simplificar la estructura, mejorar la organización del HTML y asegurar una base más limpia y ligera.
- Opté por **Tailwind CSS** para aplicar estilos de forma rápida y precisa, siguiendo una estrategia mobile-first desde el inicio.
- Las imágenes se gestionan con `astro:assets` y carga `lazy`, lo que mejora el tiempo de carga y el rendimiento general del sitio.
- El carrusel fue implementado sin librerías externas, usando solo HTML, CSS y JavaScript nativo, y es compatible con dispositivos móviles (táctil).
- El **formulario de contacto** está completamente funcional, conectado a mi correo personal y ofrece retroalimentación inmediata al usuario mediante notificaciones (toast).

---

## 📈 Qué mejoraría con más tiempo

- Añadir validación más robusta en el formulario
- Mejorar accesibilidad (atributos ARIA, navegación con teclado)
- Más animaciones sutiles
- Botón Scroll to Top
- Call to Action Directo a WhatsApp para agendar una clase. 

---

## 🚀 Próxima fase propuesta

- Desarrollo de otras secciones como las diferentes membresías conectada a pasarela de pagos, tienda de productos de gimnasio como mancuernas, etc.
- Light/Dark Mode
- Optimización SEO avanzada (schema.org, sitemap.xml, robots.txt)
- Una integración con una api de Booking para sus clases especiales en el gym con lugares.
- Multilenguaje con i18n
- Analytics con Google.

---

## 🔗 Enlaces

- **Landing Page**: [https://fitzone-nataliariom.netlify.app](https://fitzone-nataliariom.netlify.app) 
- **Repositorio**: [GitHub – nataliariom/fitzone](https://github.com/nataliariom/fitzone) 

---

## 👩‍💻 Desarrollado por

**Natalia Río**  
nataliaxrio@gmail.com
[https://portfolio-nataliario.netlify.app/](https://portfolio-nataliario.netlify.app/) 

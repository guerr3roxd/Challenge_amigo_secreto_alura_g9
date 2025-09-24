# 🎯 Amigo Secreto

<h1 align="center">
  <img alt="Amigo Secreto Logo" title="#AmigoSecreto" src="./assets/amigo-secreto.png" width="200px" />
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-EN%20DESARROLLO-green">
</p>

<h4 align="center"> 
    🚧 Amigo Secreto 🎁 Finalizado 🚧
</h4>

## 💻 Descripción del Proyecto

Una aplicación web interactiva desarrollada para facilitar la organización de juegos de "Amigo Secreto". Este proyecto permite a los usuarios agregar nombres de participantes de manera dinámica y realizar sorteos aleatorios para determinar quién será el amigo secreto de cada persona.

La aplicación fue desarrollada como parte del programa educativo de **Alura Latam**, enfocándose en el fortalecimiento de habilidades en lógica de programación con JavaScript y manipulación del DOM.

---

## ⚡ Funcionalidades

- `Agregar participantes`: Los usuarios pueden ingresar nombres en un campo de texto y añadirlos a la lista de participantes
- `Validación de entrada`: El sistema verifica que no se ingresen campos vacíos
- `Lista dinámica`: Visualización en tiempo real de todos los participantes agregados
- `Sorteo aleatorio`: Selección aleatoria de un participante de la lista
- `Interfaz responsiva`: Diseño adaptado para diferentes dispositivos
- `Limpieza automática`: Los campos se limpian automáticamente después de cada acción

---

## 🎮 Demostración

![Demostración del proyecto](./assets/demo-amigo-secreto.gif)

*Ejemplo de uso: agregando participantes y realizando el sorteo*

---

## 📁 Acceso al Proyecto

Puedes acceder al código fuente del proyecto clonando este repositorio:

```bash
git clone https://github.com/tu-usuario/amigo-secreto.git
```

O [descarga el archivo ZIP](https://github.com/tu-usuario/amigo-secreto/archive/refs/heads/main.zip) directamente.

---

## 🛠️ Cómo Abrir y Ejecutar el Proyecto

1. **Descarga o clona** el repositorio en tu máquina local
2. **Navega** hasta la carpeta del proyecto
3. **Abre** el archivo `index.html` en tu navegador web preferido
4. **¡Listo!** Ya puedes comenzar a usar la aplicación

**No se requiere instalación adicional** - el proyecto funciona directamente en el navegador.

---

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura y semántica
- **CSS3** - Estilización y diseño responsivo
- **JavaScript (ES6+)** - Lógica de programación y manipulación del DOM
- **Google Fonts** - Tipografías personalizadas (Inter y Merriweather)

---

## 📋 Estructura del Proyecto

```
amigo-secreto/
│
├── index.html          # Estructura principal de la aplicación
├── style.css           # Estilos y diseño responsive
├── app.js              # Lógica de JavaScript
├── assets/             # Recursos multimedia
│   └── amigo-secreto.png
└── README.md           # Documentación del proyecto
```

---

## 🎯 Características Técnicas

### Funciones Principales

**`agregarAmigo()`**
- Captura el valor del campo de entrada
- Valida que no esté vacío
- Añade el nombre al array de amigos
- Actualiza la visualización de la lista
- Limpia el campo de entrada

**`sortearAmigo()`**
- Verifica que existan participantes en la lista
- Genera un índice aleatorio usando `Math.random()` y `Math.floor()`
- Selecciona y muestra el resultado del sorteo

### Validaciones Implementadas

- ✅ Verificación de campos vacíos
- ✅ Validación de lista vacía antes del sorteo
- ✅ Mensajes de error informativos

---

## 🤝 Contribuyendo

Las contribuciones son siempre bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crea una nueva branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 👨‍💻 Autores

| [<img src="https://avatars.githubusercontent.com/u/37356058?v=4" width=115><br><sub>Tu Nombre</sub>](https://github.com/tu-usuario) |
| :---: |

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Vea el archivo [LICENSE](LICENSE) para más detalhes.

---

## 🎓 Agradecimientos

- **[Alura Latam](https://www.aluracursos.com/)** - Por proporcionar el contenido educativo y la estructura del desafío
- **Comunidad de desarrolladores** - Por el apoio continuo y compartir conocimientos

---

<p align="center">
  Desarrollado con ❤️ durante el programa de formación en <strong>Lógica de Programación con JavaScript</strong> de Alura Latam
</p>

<p align="center">
  <a href="https://www.aluracursos.com/">
    <img alt="Alura Latam" src="https://img.shields.io/badge/Alura-Latam-blue">
  </a>
</p>

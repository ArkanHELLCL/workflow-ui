# WorkFlow UI

Refactor de la interfaz grafica del sistema de flujos.

### 2024
### **Junio**
**03/06**

1. Eliminación de re-renders en el formulario
2. Mejoras en estabilidad del sito
3. Mejoras en el rendimiento de la carga de los requerimientos
4. incorporación de paquete para formatear números
5. Mejoras visuales
6. Mejoras en el rendimiento general del sitio
7. Mejora en el rendimiento de los filtros de los requerimientos

**04/06**

1. Creación de nuevos tipos de input para reflejar diferentes números y montos
2. incorporación de modificación de la url para representar el punto en donde esta trabajando el usuario
3. Detección de modificación de un campo del formulario
4. Modificación de los estilos de los nuevos componentes para que estén acorde a la línea del sistema
5. Mejora en el diseño del menu árbol

### **Mayo**
**Version 1.1.0**

**Primera versión de la UI con funcionalidad del Formulario**

**13/05**

1. Refacor menu tree
2. incorporación de reach-hook-form
3. Enlazar tipos de campos al nuevo hook de formulario
4. Agregar validación de campos al submitir el formulario
5. incorporación de diseños visuales para los errores del formulario
6. Persistencia de datos del formulario en cache
7. Refactor json de entrada formulario
8. Refactor json de entrada menu árbol
9. Refactor json de entrada meses (por cambio en el input select)

**14/05**

1. incorporación de json de entrada de proveedores
2. Creación de campo lista externa(proveedores) en el formulario
3. actualización de versiones de varios paquetes
4. corrección de funcionamiento por cambios de versiones
5. Refactor acordeones de requerimientos
6. Mejoras en velocidad de respuesta (eliminación de render duplicados)
7. eliminación de paquetes no utilizados

**20/05**

1. Refactor menús contextuales de selección de flujos y de orden
2. Refactor de menús barra de herramientas(header)
3. Mejoras en diseño de barra de herramientas
4. Mejoras en diseño de menu árbol
5. Refacor menús contextuales de adjuntos
6. Mejoras en el diseño del listado de requerimientos
7. corrección de datos estadísticos del footer
8. Refactor menu contextual del buscador

**27/05**

1. Refactor menu perfil de usuario
2. Mejoras de rendimiento
3. Mejoras visuales
4. utilización de iconos desde nuevo paquete @ui/material
5. incorporación de ventana de confirmación al submitir formulario
6. incorporación de mensajes popup de acciones realizadas con los botones del formulario


**28/05**

1. eliminación del clickaway handmade por componente @ui/material
2. Corrección en la función buscar en todas las bandejas
3. incorporación de paquete de input tipo select con suggestion y carga dinámica
4. Enlazar select con el hook del form
5. Detección de modificación del formulario

### **2023**
**Versión 1.0.10**

**Mejoras y actualizaciones:**

- Optimazacion de lectura de requerimientos
- Creacion de vista de datos de usuario
- Creacion de cuadro de busqueda y su menu de filtros
- Creacion de filtro por busqueda de cadena en input search
- Persistencia de datos, localstorage para dark theme

**Pendientes:**

- Diseñar mock para la carga de los campos del formulario
- Renderizar el formulario y mejorar usabilidad respecto a la versión anterior
- Rediseñar botonera
- Utilizar JWT para manejo de sesiones


**Versión 1.0.0**

Mejoras y actualizaciones:

- Migración de jQuery a [React](https://react.dev/)
- Utilización de [Tailwindcss](https://tailwindcss.com/)
- Rediseño del 100% de la interfáz para mejor uso y entendimiento, asi como también para mostrar más y mejor información
- Simplicidad de menús, agrupando conceptos y mejorando los filtros
- SPA

Pendientes:

- Filtro por Requerimiento
- Filtro por pendientes
- Diseñar mock para la carga de los campos del formulario
- Renderizar el formulario y mejorar usabilidad respecto a la versión anterior
- Rediseñar botonera
- Utilizar JWT para manejo de sesiones

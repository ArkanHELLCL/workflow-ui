# WorkFlow UI

Refactor de la interfaz grafica del sistema de flujos.

## Instalación

Para instalar y configurar el proyecto, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/ArkanHELLCL/workflow-ui.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd tu-repositorio
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

1. Inicia la aplicación:
    ```sh
    npm start
    ```
2. Abre tu navegador y navega a `http://localhost:5173`.

### Ejemplo de Validación

```javascript
import { useEffect, useState } from 'react';

const fetchBandejas = async () => {
    const response = await fetch('https://api.example.com/bandejas', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });
    const data = await response.json();
    return data;
};

const BandejasComponent = () => {
    const [bandejas, setBandejas] = useState([]);

    useEffect(() => {
        const getBandejas = async () => {
            const data = await fetchBandejas();
            setBandejas(data);
        };
        getBandejas();
    }, []);

    return (
        <div>
            {bandejas.map(bandeja => (
                <div key={bandeja.id}>{bandeja.nombre}</div>
            ))}
        </div>
    );
};

export default BandejasComponent;
```

### 2024
### **Octubre**
**05/10**

1. Implementación de la funcionalidad de notificaciones en tiempo real.
2. Corrección de errores en la autenticación de usuarios.
3. Mejora en la interfaz de usuario para dispositivos móviles.
4. Optimización de la carga de datos en el dashboard.

**04/10**

1. Actualización de la librería de componentes a la última versión.
2. Incorporación de nuevos temas de color para la interfaz.
3. Mejora en la accesibilidad del sitio web.
4. Corrección de errores menores en el formulario de contacto.

### **Septiembre**
**15/09**

1. Implementación de la funcionalidad de búsqueda avanzada.
2. Mejora en el rendimiento de la aplicación.
3. Corrección de errores en la validación de formularios.
4. Actualización de la documentación del proyecto.

**01/09**

1. Incorporación de gráficos interactivos en el dashboard.
2. Mejora en la experiencia de usuario en la navegación.
3. Corrección de errores en la carga de imágenes.
4. Optimización del rendimiento en dispositivos móviles.

### **Agosto**
**20/08**

1. Implementación de la funcionalidad de exportación de datos a PDF.
2. Mejora en la seguridad de la aplicación.
3. Corrección de errores en la gestión de usuarios.
4. Actualización de la interfaz de usuario para una mejor usabilidad.

**05/08**

1. Incorporación de nuevas funcionalidades en el módulo de reportes.
2. Mejora en la integración con servicios externos.
3. Corrección de errores en la sincronización de datos.
4. Optimización del rendimiento en la carga de datos.

### **Julio**
**25/07**

1. Implementación de la funcionalidad de comentarios en los formularios.
2. Mejora en la gestión de permisos de usuarios.
3. Corrección de errores en la visualización de datos.
4. Actualización de la interfaz de usuario para una mejor experiencia.

**10/07**

1. Incorporación de nuevas opciones de configuración en el panel de administración.
2. Mejora en la estabilidad de la aplicación.
3. Corrección de errores en la carga de archivos.
4. Optimización del rendimiento en la generación de reportes.

### **Junio**
**04/06**

1. Creación de nuevos tipos de input para reflejar diferentes números y montos
2. incorporación de modificación de la url para representar el punto en donde esta trabajando el usuario
3. Detección de modificación de un campo del formulario
4. Modificación de los estilos de los nuevos componentes para que estén acorde a la línea del sistema
5. Mejora en el diseño del menu árbol

**03/06**

1. Eliminación de re-renders en el formulario
2. Mejoras en estabilidad del sito
3. Mejoras en el rendimiento de la carga de los requerimientos
4. incorporación de paquete para formatear números
5. Mejoras visuales
6. Mejoras en el rendimiento general del sitio
7. Mejora en el rendimiento de los filtros de los requerimientos

### **Mayo**
**Version 1.1.0**

**Primera versión de la UI con funcionalidad del Formulario**

**28/05**

1. eliminación del clickaway handmade por componente @ui/material
2. Corrección en la función buscar en todas las bandejas
3. incorporación de paquete de input tipo select con suggestion y carga dinámica
4. Enlazar select con el hook del form
5. Detección de modificación del formulario

**27/05**

1. Refactor menu perfil de usuario
2. Mejoras de rendimiento
3. Mejoras visuales
4. utilización de iconos desde nuevo paquete @ui/material
5. incorporación de ventana de confirmación al submitir formulario
6. incorporación de mensajes popup de acciones realizadas con los botones del formulario

**20/05**

1. Refactor menús contextuales de selección de flujos y de orden
2. Refactor de menús barra de herramientas(header)
3. Mejoras en diseño de barra de herramientas
4. Mejoras en diseño de menu árbol
5. Refacor menús contextuales de adjuntos
6. Mejoras en el diseño del listado de requerimientos
7. corrección de datos estadísticos del footer
8. Refactor menu contextual del buscador

**14/05**

1. incorporación de json de entrada de proveedores
2. Creación de campo lista externa(proveedores) en el formulario
3. actualización de versiones de varios paquetes
4. corrección de funcionamiento por cambios de versiones
5. Refactor acordeones de requerimientos
6. Mejoras en velocidad de respuesta (eliminación de render duplicados)
7. eliminación de paquetes no utilizados

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
- Filtro por Requerimiento
- Filtro por pendientes
- Diseñar mock para la carga de los campos del formulario
- Renderizar el formulario y mejorar usabilidad respecto a la versión anterior
- Rediseñar botonera

Pendientes:
- Utilizar JWT para manejo de sesiones


// Función para buscar un ID y devolver los labels de los padres sin elementos repetidos
function encontrarLabelsDePadres(objeto, idBuscado, resultados = []) {
    if (objeto.id === idBuscado) {
        return [objeto?.url];
    }

    if (objeto.children) {
        for (var i = 0; i < objeto.children.length; i++) {
            var resultado = encontrarLabelsDePadres(objeto.children[i], idBuscado, resultados);
            if (resultado?.length > 0) {
                resultados.push(objeto.url);
                resultados = resultados.concat(resultado);
                //return resultados;
                return resultado
            }
        }
    }

    //return resultados;
    return resultado
}

// Función para eliminar elementos repetidos de un array
function eliminarRepetidos(array) {
    return array?.filter((item, index) => array.indexOf(item) === index);
}

// Función para formatear la salida como un path URL
/*function formatearComoPath(labels) {
    return labels.join('/');
}*/

export function pathItemSelected(menu, idBuscado){
    // Uso de la función con un ID dado
    //var idBuscado = 3;
    var labelsDePadres = encontrarLabelsDePadres(menu[0], idBuscado);
    labelsDePadres = eliminarRepetidos(labelsDePadres);
    //var pathURL = formatearComoPath(labelsDePadres);
    //console.log(labelsDePadres, pathURL); // Salida: "Padre 1/Hijo 1"
    return(labelsDePadres)
}
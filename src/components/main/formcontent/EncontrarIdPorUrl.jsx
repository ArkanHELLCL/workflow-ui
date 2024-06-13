function encontrarIdPorUrl(url, objeto) {
    // Verificar si el objeto tiene el atributo "id" y si coincide con el ID buscado
    if (objeto.url === url) {
        return {"description": objeto.description, "id": objeto.id};
    }
    
    // Verificar si el objeto tiene hijos
    if (objeto.children) {
        // Iterar sobre los hijos
        for (let hijo of objeto.children) {
            // Llamar recursivamente a la función para cada hijo
            let result = encontrarIdPorUrl(url, hijo);
            // Si se encuentra la descripción, retornarla
            if (result) {
                return result
            }
        }
    }
    
    // Si no se encuentra el ID, retornar null
    return null;
}    
//

export default function EncontrarIdPorUrl(url, objeto){    
    return encontrarIdPorUrl(url, objeto)
}
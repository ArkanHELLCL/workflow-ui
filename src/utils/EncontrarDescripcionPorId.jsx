function encontrarDescripcionPorId(id, objeto) {        
    // Verificar si el objeto tiene el atributo "id" y si coincide con el ID buscado
    if (objeto?.id === id) {
        return {"description": objeto?.description, "url": objeto.url};
    }
    
    // Verificar si el objeto tiene hijos
    if (objeto?.children) {
        // Iterar sobre los hijos
        for (let hijo of objeto.children) {
            // Llamar recursivamente a la función para cada hijo
            let result = encontrarDescripcionPorId(id, hijo);
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

export default function EncontrarDescripcionPorId(id, objJson){   
    if(!objJson || objJson===undefined) return null 
    if(id.length===1) return {"description": objJson?.description, "url": objJson.url};
    return encontrarDescripcionPorId(id, objJson)
}
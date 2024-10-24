export default function getobjItems(obj, flujo) {
    const result = [];
    
    function findItems(items) {
        items.forEach(item => {
        if (item.url) {
            result.push(item);
        }
        if (item.children) {
            findItems(item.children);
        }
        });
    }
    const bandejas = obj.flujos.filter(item => item.id===flujo.toString())[0].bandejas
    const reportes = obj.flujos.filter(item => item.id===flujo.toString())[0].reportes
    findItems(bandejas);
    findItems(reportes);
    findItems(obj.mantenedores);
    findItems(obj.mensajes);
    
    return result;
}

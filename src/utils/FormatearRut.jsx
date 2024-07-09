export default function FormatearRut(rutSinFormato) {
    const caracteresValidos = rutSinFormato.replace(/[^0-9kK]+/g, '');
    const rutInvertido = caracteresValidos.slice(0,11).split('').reverse().join('');
    const lenRut = rutInvertido.length
    let rutFormateado
    if(lenRut<7) return rutSinFormato
    if(lenRut===7) {
        rutFormateado = rutInvertido.replace(/^([kK\d])(\d{3})(\d{1,3})/,'$1-$2.$3');
    }
    if(lenRut>7 && lenRut<11) {
        rutFormateado = rutInvertido.replace(/^([kK\d])(\d{3})(\d{3})(\d{1,3})/,'$1-$2.$3.$4');
    }
    if(lenRut>=11) {
        rutFormateado = rutInvertido.replace(/^([kK\d])(\d{3})(\d{3})(\d{3})(\d{1,3})/,'$1-$2.$3.$4.$5');
    }    
    return rutFormateado?.split('').reverse().join('')
}
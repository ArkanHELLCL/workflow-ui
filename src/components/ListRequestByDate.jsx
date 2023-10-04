/* eslint-disable no-unused-vars */
export function ListRequestByDate(hoy, dias, maxAccordions){    
    let requerimientoAccordion = []
    let title=''
    let anterior    
    let diasDesde = 0
    let diasHasta = 0    
    //Creamos los accordions para los requerimientos
    for (let index = 1; index <= maxAccordions; index++) {
        if(index===1){
            title='Hoy'
            diasDesde = 0
            diasHasta = 0
        }
        if(index===2){
            title='Ayer'
            diasDesde = 1
            diasHasta = 1
        }
        if(index>2 && index<6){
            anterior = new Date(hoy); 
            anterior.setDate(anterior.getDate() - (index-1));
            title = dias[anterior.getDay()]
            diasDesde = index - 1
            diasHasta = index - 1
        }
        if(index===6){
            anterior = new Date(hoy);            
            title = 'Semana pasada'
            diasDesde = 5
            diasHasta = 12
        }
        if(index===7){            
            title = 'Hace dos semanas'
            diasDesde = 13
            diasHasta = 19
        }
        if(index===8){            
            title = 'Hace tres semanas'
            diasDesde = 20
            diasHasta = 26
        }
        if(index===9){            
            title = 'Hace un mes'
            diasDesde = 27
            diasHasta = 56
        }
        if(index===10){            
            title = 'Más de dos meses'
            diasDesde = 57
            diasHasta = 86
        }
        if(index===11){            
            title = 'Más antiguos'
            diasDesde = 87
            diasHasta = -1
        }
        requerimientoAccordion.push({id:index, title: title, desde: diasDesde, hasta: diasHasta, open: true})
    }    
    return requerimientoAccordion
}
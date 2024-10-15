export function Constants(){
    const meses = [null,'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
    const dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado']
    const diasAbrev = ['dom','lun','mar','mié','jue','vie','sáb']
    const mesesAbrev = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']
    const maxAccByDate = 11
    const maxAccByNumber = 5
    const maxAccByStep = 5
    const maxAccSearch = 7
    const host = 'http://localhost:3100'
    const fecthParams = {
        method: 'GET', 
        headers: {Accept: 'application/json','Content-Type': 'application/json'},
        credentials: 'include'
    }
    const dateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false        
    };

    return {meses, dias, diasAbrev, mesesAbrev, maxAccByDate, maxAccByNumber, maxAccByStep, maxAccSearch, host, fecthParams, dateOptions}
}
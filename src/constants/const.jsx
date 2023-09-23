export function Constants(){
    const meses = [null,'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
    const dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado']
    const diasAbrev = ['dom','lun','mar','mié','jue','vie','sáb']
    const mesesAbrev = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']
    const maxAccByDate = 11
    const maxAccByNumber = 5

    return {meses, dias, diasAbrev, mesesAbrev, maxAccByDate, maxAccByNumber}
}
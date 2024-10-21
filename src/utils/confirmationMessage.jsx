export default function ConfirmationMessage(id) {
    let mensaje = 'Sin mensaje'

    if(id === 'btn_crear'){
        mensaje = '¿Estas seguro de querer crear un nuevo registro?'
      }
      if(id === 'btn_modificar'){
        mensaje = '¿Estas seguro de querer modificar el registro?'
      }
      if(id === 'btn_eliminar'){
        mensaje = '¿Estas seguro de querer eliminar el registro?'
      }
      if(id === 'btn_tomar'){
        mensaje = '¿Estas seguro de querer tomar este requerimiento?'
      }
      if(id === 'btn_liberar'){
        mensaje = '¿Estas seguro de querer liberar este requerimiento?'
      }
      if(id === 'btn_enviar'){
        mensaje = '¿Estas seguro de querer enviar al siguiente paso este requerimiento?'
      }
      if(id === 'btn_enviardes'){
        mensaje = '¿Estas seguro de querer enviar al Destinatario agregado en este formulario?'
      }
      if(id === 'btn_devolver'){
        mensaje = '¿Estas seguro de querer devolver este requerimiento?'
      }
      if(id === 'btn_conforme'){
        mensaje = '¿Estas seguro de querer dejar conforme este requerimiento?'
      }
      if(id === 'btn_disconforme'){
        mensaje = '¿Estas seguro de querer dejar disconforme este requerimiento?'      
      }
      if(id === 'btn_finalizar'){
        mensaje = '¿Estas seguro de querer finalizar este requerimiento?'
      }
      if(id === 'btn_rechazar'){
        mensaje = '¿Estas seguro de querer rechazar este requerimiento?'
      }
      if(id === 'btn_abrir'){
        mensaje = '¿Estas seguro de querer abrir este requerimiento?'
      }                  
      if(id === 'btn_bloquear'){
        mensaje = '¿Estas seguro de querer bloquear el registro?'
      }
      if(id === 'btn_habilitar'){
        mensaje = 'Estas seguro de querer habilitar el registro?'
      }
      if(id === 'btn_generar'){
        mensaje = 'Estas seguro de querer generar el informe?'
      }
      if(id === 'btn_descargar'){
        mensaje = 'Estas seguro de querer descargar el informe?'
      } 
      if(id === 'btn_responder'){
        mensaje = 'Estas seguro de querer responder este mensaje al destinatario?'
      } 
      if(id === 'btn_reenviar'){
        mensaje = 'Estas seguro de querer reenviar este mensaje a otro destinatario?'
      } 

      return mensaje
}
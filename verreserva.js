var msg = require('./datos');

async function buscarreserva(id){
    const reservacion= msg.reserva.find((reservas)=>reservas.id==id); 
    
    if(!reservacion){
        const error= new Error();
        error.message=`La reserva con id ${id} no pudo ser encontrado.`;
        throw error;
    }
    return reservacion;

  }
  

  async function buscarLocal(id){
      const locals=msg.salas.find((locales)=>locales.id===id);
      if(!locals){
          const error= new Error();
          error.message=`El local con id ${id} no pudo ser encontrado.`;
          throw error;
      }
      return locals;
  }

  async function buscarusuario(id){
    const users=msg.usuario.find((usuarios)=>usuarios.id===id);
    if(!users){
        const error= new Error();
        error.message=`El usuario con id ${id} no pudo ser encontrado.`;
        throw error;
    }
    delete users.contraseña
    return users;
}

  async function main (){
    try{
const reserva =await buscarreserva(1);
const salon= await buscarLocal(reserva.sala);
const users= await buscarusuario(reserva.usuario);
reserva.sala=salon;
reserva.usuario=users;


    console.log(reserva)
    }catch(error){
console.log(error.message)
    }

}

  main();
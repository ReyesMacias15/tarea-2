var msg = require('./datos');

async function buscarPlatoPorId(id){
    const platos= plato.find((platos)=>platos.id==id); 
    
    if(!platos){
        const error= new Error();
        error.message=`El plato con id ${id} no pudo ser encontrado.`;
        throw error;
    }
    return platos;

  }
  

  async function buscarRestaurante(id){
      const restaurants=restaurantes.find((restaurante)=>restaurante.id===id);
      if(!restaurants){
          const error= new Error();
          error.message=`El plato con id ${restaurants} no pudo ser encontrado.`;
          throw error;
      }
      return restaurants;
  }

  async function main (){
    try{
const plato =await buscarPlatoPorId(2);
const restaurantes= await buscarRestaurante(plato.idrestaurante);
plato.restaurante=restaurantes;
delete plato.restaurantes;
    console.log(plato)
    }catch(error){
console.log(error.message)
    }

}

  main();
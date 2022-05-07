//arreglo de los usuarios registrado en la aplicacion 

const usuario = [{
    id:1,
    nombre: 'Reyes Macias Jose Javier',
    celular: '0961553152',
    correo: 'jjrm1351828189@gmail.com',
    contraseña: 'javierrm0215',
    empresa: 0,
},

{
    id:2,
    nombre: 'Carvajal Marcillo Yandry Joel',
    celular: '0984512536',
    correo: 'yandryjoel1234@gmail.com',
    contraseña: 'yandry2020',
    empresa: 1,
},

]

//arreglo de los locales registrado y que imparten sus servicios en la aplicacion 
const locales = [{
    id:1,
    nombre: 'Sala de Eventos Yanira',
    telefono: '053745123',
    correo: 'eventosYanira@gmail.com',
    direccion: '27V3+69C, Manta',
},

{
    id:2,
    nombre: 'Sala De Eventos Glamour',
    telefono: '053745123',
    correo: 'eventosGlamour@gmail.com',
    direccion: 'Vía Interbarrial, Manta',
}

   

]


//arreglo de los salas que prestan los locales  en la aplicacion 
const salas = [{
    id:1,
    nombre: 'Sala para Matrimonio',
    tipo:'Matrimonial',
	precio: 110,
	Número_de_invitados: 100,
	descripcion:'Una boda o casamiento es una ceremonia religiosa o civil, mediante la cual se celebra el comienzo del matrimonio.',
	empresa:1
},
    {
        id:1,
        nombre: 'Sala para Quinceañeras',
        tipo:'Matrimonial',
        precio: 150,
        Número_de_invitados: 80,
        descripcion:'Se alquila sala que puedan realizar la quinceañera de su casa.',
        empresa: 2
    
    },

]


//arreglo con las reservas  de los usuarios

const reserva = [{
    id:1,
	usuario:1,
	sala:1
},
    {
        id:2,
	usuario:2,
	sala:2
    },

]


module.exports =usuario ;
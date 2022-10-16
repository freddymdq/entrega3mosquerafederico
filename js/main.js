const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

// Expresiones regulares
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // hasta 40 caracteres y no incluye simbolos
	pasajeros: /^.{1,2}$/, // 2 DIGITOS
    noches: /^.{1,2}$/, // 2 Digitos
	dni: /^\d{7,8}$/, // 7 a 8 numeros.
    mes: /^[a-zA-ZÀ-ÿ\s]{4,10}$/, // Letras y espacios, pueden llevar acentos.
    clase: /^[a-zA-ZÀ-ÿ\s]{8,9}$/, // Puede tener 8 o 9 caracteres
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// objetos

const items = {
    nombre : false,
    pasajeros : false,
    noches : false,
    dni : false,
    telefono : false,
    clase : false,
    mes : false
}

const validarForm = (evento) => {
    switch (evento.target.name){
        case "nombre":
           valida(expresiones.nombre, evento.target, 'nombre')
           /*  if(expresiones.nombre.test(e.target.value)){ // esto me va a devolver verdadero o falso si la expresion esta cumplida
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto'); 
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle') // quitamos la cruz
                document.querySelector('#grupo__nombre i').classList.add('fa-check-circle') // agregamos el tilde
                document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo')
            }else{
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto'); // si es incorrecto eliminamos el correcto
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__nombre i').classList.add('fa-times-circle'); // cambiamos el color del icono de error
                document.querySelector('#grupo__nombre i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo')
            } */
        break;

        case "dni":
            valida(expresiones.dni, evento.target, 'dni')
        break;

        case "telefono":
            valida(expresiones.telefono, evento.target, 'telefono')
        break;

        case "pasajeros":
            valida(expresiones.pasajeros, evento.target, 'pasajeros')
        break;

        case "noches":
            valida(expresiones.noches, evento.target, 'noches')
        break;

        case "mes":
            valida(expresiones.mes, evento.target, 'mes')
        break;

        case "clase":
            valida(expresiones.clase, evento.target, 'clase')
        break;

    }

}

const valida = (expresion, input, camp) => {
    if(expresion.test(input.value)){ ``
        document.getElementById(`grupo__${camp}`).classList.remove('formulario__grupo-incorrecto'); 
        document.getElementById(`grupo__${camp}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${camp} i`).classList.remove('fa-times-circle') 
        document.querySelector(`#grupo__${camp} i`).classList.add('fa-check-circle') 
        document.querySelector(`#grupo__${camp} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        items[camp]=true;
    }else{
        document.getElementById(`grupo__${camp}`).classList.add('formulario__grupo-incorrecto'); 
        document.getElementById(`grupo__${camp}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${camp} i`).classList.add('fa-times-circle'); 
        document.querySelector(`#grupo__${camp} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${camp} .formulario__input-error`).classList.add('formulario__input-error-activo')
        items[camp]=false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm) // cuando levanto la tecla me ejecuta esta funcion
    input.addEventListener('blur', validarForm) 
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const  terminos = document.getElementById('terminos');
    if(items.nombre && items.dni  && items.telefono && items.mes && items.pasajeros && items.noches && items.clase && terminos.checked ){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(()=>{// booramoos toodoss  mensaajess de exito
            document.getElementById('formulario__mensaje-exito').classList.remove
            ('formulario__mensaje-exito-activo')
        }, 3000);
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{ // borraamos icconos dde exito
            icono.classList.remove('formulario__grupo-correcto')

        })

    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
        setTimeout(()=>{// booramoos toodoss  mensaajess de exito
            document.getElementById('formulario__mensaje').classList.remove
            ('formulario__mensaje-activo')
        }, 3000);
    }
    
});


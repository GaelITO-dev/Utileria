export function validarCorreo(correo){
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}

export function soloLetras(texto) {
    if (!texto) return false;
    const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return expresion.test(texto.trim());
}

export function validarLongitud(numero, maxLongitud){
    return numero.toString().length <= maxLongitud;
}
export function calcularEdad(fechaNacimiento){
    const nacimiento = new Date(fechaNacimiento);
    const hoy= new Date();
    let edad= hoy.getFullYear() - nacimiento.getFullYear(); 
    const mes= hoy.getMonth() - nacimiento.getMonth();
    if(mes<0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())){
        edad--;
    }
    return edad;
}

export function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >=18;
}

export function validarPassword(password){
    const expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#\-+=])[A-Za-z\d@$!%*?&._#\-+=]{8,}$/;
    return expresion.test(password);   
}

export function validarTelefono(telefono){
    const expresion = /^\d{10}$/;
    return expresion.test(telefono);
}

export function esPasswordInsegura(password){
    const repetidos = /(.)\1{3,}/;
    const secuenciasNum = /0123|1234|2345|3456|4567|5678|6789/;
    return repetidos.test(password) || secuenciasNum.test(password);
}
# Utileria JS ('utileria.js)
## Alumno
Martinez Cruz Gael

## Docente
Martinez Nieto Adelina

## Problema que resuelve
Con la creacion de esta libreria se hagiliza la posible creacion de un login, es libreria permite
validar correos, contraseñas, numeros de telefonos de una manera concreta sin añadir frameworks para que
sea algo totalmente JavaScript, se adapta a las reglas de negocio que pide un login general.

## Instalacion
Para poder utilizar esta libreria en un proyecto de login, se descarga el archivo 'utileria.js' 
y se almacena donde mejor convenga, en los archivos 'index.js' y 'login.js' se muestra como importar esta libreria a
otro archivo js de esta manera

``` javascript
import {
    validarCorreo,
    soloLetras,
    validarTelefono,
    calcularEdad,
    mayorDeEdad,
    validarPassword
} from "./utileria.js";
```
se importan las validaciones que se vayan a usar, y se puede importar de esta manera a un html.
ejemplo:

```html
<script src="js/index.js"></script>

```

## Uso con ejemplos de codigo
1. Validar un correo electronico
   
```javascript
export function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}
```

validarCorreo(correo){} valida que el correo tenga el formato text@text.dominio

<img width="563" height="133" alt="image" src="https://github.com/user-attachments/assets/f3f80722-878c-429b-ac33-f2f376c93ee3" />

<img width="560" height="143" alt="image" src="https://github.com/user-attachments/assets/4144ce35-9aee-4664-a5fb-33200a9d65c2" />

2. Validar solo letras

```javascript
export function soloLetras(texto) {
    if (!texto) return false;
    const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return expresion.test(texto.trim());
}
```
soloLetras(texto){} valida solo se puedan ingresar letras, sirve para el campo de nombres

<img width="563" height="135" alt="image" src="https://github.com/user-attachments/assets/83442e84-eedc-474e-bd17-87de8a51dd27" />

<img width="560" height="144" alt="image" src="https://github.com/user-attachments/assets/66e1801d-329f-43c4-9ff8-c8baa914312f" />

3. Validar Longitud

```javascript
export function validarLongitud(numero, maxLongitud){
    return numero.toString().length <= maxLongitud;
}
```
validarLongitud(numero, maxLongitud){}, sirve para establecer un limite de caracteres numericos que puede
tener un campo de telefono por ejemplo

4. Calcular Edad

```javascript
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
```
 calcularEdad(fechaNacimiento){}, calcula la edad en años cumplidos a partir de una fecha
 <img width="564" height="105" alt="image" src="https://github.com/user-attachments/assets/93ab356f-6226-468b-9ccd-e59110a17b9c" />

<img width="498" height="150" alt="image" src="https://github.com/user-attachments/assets/0ea6b5a4-a655-4949-ba17-3a9cda372681" />

5. Calcular mayoria de edad

```javascript
export function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >=18;
}
```
esMayorDeEdad(fechaNacimiento){}, tiene una funcion similar a calcularEdad(fechaNacimiento){}, pero
esta devuelve un boolean de el hecho, considero que sirve para reglas de negocio para acelerar el filtro
de edad

6. Validar Contraseña

```javascript
  export function validarPassword(password){
    const expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#\-+=])[A-Za-z\d@$!%*?&._#\-+=]{8,}$/;
    return expresion.test(password);   
  }
```

validarPassword(password){}, valida que una contraseña cumpla con requisitos. Una mayuscula, una miniscula,
un numero, un caracter especial y una longitud minima de 8 caracteres

7. Validar Telefono
   
```javascript
  export function validarTelefono(telefono){
    const expresion = /^\d{10}$/;
    return expresion.test(telefono);
}
```

validarTelefono(telefono){}, este metodo tiene un minimo establecido para el numero de telefono, como esta el codigo actualmente solo acepta numeros de minimo 10 numeros 

<img width="558" height="127" alt="image" src="https://github.com/user-attachments/assets/c78424b3-c885-4c47-a77b-2a9f715203bc" />

<img width="561" height="137" alt="image" src="https://github.com/user-attachments/assets/a72ce919-494a-4ec6-b28a-4b60a78ce515" />

8. Contraseña Insegura
   
```javascript
  export function esPasswordInsegura(password){
    const repetidos = /(.)\1{3,}/;
    const secuenciasNum = /0123|1234|2345|3456|4567|5678|6789/;
    return repetidos.test(password) || secuenciasNum.test(password);
}
```

esPasswordInsegura(password){}, este metodo verifica que una contraseña no tenga 4 o mas caracteres repetidos seguidamente y evita numeros ascendentes de 4 digitos




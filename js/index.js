import {
    validarCorreo,
    soloLetras,
    validarTelefono,
    calcularEdad,
    esMayorDeEdad,
    esPasswordInsegura
} from "./utileria.js";

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnvalidar");
    if (!btn) return;

    const campos = [
        { id: "nombre", validar: (valor) => Boolean(valor) && soloLetras(valor) },
        { id: "email", validar: (valor) => Boolean(valor) && validarCorreo(valor) },
        { id: "telefono", validar: (valor) => Boolean(valor) && validarTelefono(valor) },
        { id: "birthday", validar: (valor) => Boolean(valor) && !Number.isNaN(new Date(valor).getTime()) },
        { id: "password", validar: (valor) => Boolean(valor) && !esPasswordInsegura(valor) }
    ];

    const actualizarEstadoCampo = (id, esValido) => {
        const input = document.getElementById(id);
        const estado = document.getElementById(`${id}Estado`);

        if (!input || !estado) return;

        input.classList.toggle("valid", esValido);
        input.classList.toggle("invalid", !esValido);
        estado.textContent = esValido ? "Válido" : "No válido";
        estado.classList.toggle("valid", esValido);
        estado.classList.toggle("invalid", !esValido);
    };

    const validarCampos = () => {
        const resultados = {};
        const errores = [];

        campos.forEach(({ id, validar }) => {
            const valor = document.getElementById(id)?.value.trim() || "";
            const esValido = validar(valor);
            resultados[id] = esValido;
            actualizarEstadoCampo(id, esValido);

            if (!esValido) {
                errores.push(id);
            }
        });

        return { resultados, errores };
    };

    btn.addEventListener("click", () => {
        const { errores, resultados } = validarCampos();

        if (errores.length > 0) {
            return;
        }

        const fecha = document.getElementById("birthday")?.value || "";
        const edad = calcularEdad(fecha);
        let mensaje = "Edad: " + edad + " años.";
        if (esMayorDeEdad(fecha)) {
            mensaje += "\nEs mayor de edad.";
        } else {
            mensaje += "\nEs menor de edad.";
        }

        const modal = document.getElementById("modal");
        const mensajeEdad = document.getElementById("mensajeEdad");
        if (mensajeEdad) mensajeEdad.textContent = mensaje;
        if (modal) modal.style.display = "block";
    });

    const modal = document.getElementById("modal");
    const cerrar = document.getElementById("cerrar");

    if (cerrar) {
        cerrar.onclick = () => {
            if (modal) modal.style.display = "none";
        };
    }

    window.onclick = (e) => {
        if (modal && e.target == modal) {
            modal.style.display = "none";
        }
    };
});

import {
    validarCorreo,
    validarPassword
} from "./utileria.js";

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnlogin") || document.getElementById("btnLogin");

    if (!btn) return;

    const campos = [
        { id: "email", validar: (valor) => Boolean(valor) && validarCorreo(valor) },
        { id: "password", validar: (valor) => Boolean(valor) && validarPassword(valor) }
    ];

    const actualizarEstadoCampo = (id, esValido) => {
        const input = document.getElementById(id);
        const estado = document.getElementById(`${id}Estado`);

        if (!input) return;

        input.classList.toggle("valid", esValido);
        input.classList.toggle("invalid", !esValido);

        if (estado) {
            estado.textContent = esValido ? "Válido" : "No válido";
            estado.classList.toggle("valid", esValido);
            estado.classList.toggle("invalid", !esValido);
        }
    };

    const validarCampos = () => {
        const errores = [];

        campos.forEach(({ id, validar }) => {
            const valor = document.getElementById(id)?.value.trim() || "";
            const esValido = validar(valor);
            actualizarEstadoCampo(id, esValido);

            if (!esValido) {
                errores.push(id);
            }
        });

        return errores;
    };

    btn.addEventListener("click", () => {
        const errores = validarCampos();

        if (errores.length > 0) {
            alert("Por favor, corrige los campos inválidos.");
            return;
        }

        alert("Inicio de sesión correcto.");
    });
});
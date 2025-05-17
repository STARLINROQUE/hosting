function validarCedula() {
    let cedula = document.getElementById("cedula").value;
    let resultado = document.getElementById("resultado");

    cedula = cedula.replace(/-/g, "").trim();

    if (!/^\d{11}$/.test(cedula)) {
        resultado.style.color = "red";
        resultado.textContent = "CÉDULA INCORRECTA (Debe contener 11 dígitos numéricos)";
        return;
    }

    let suma = 0;
    let multiplicador = [1, 2];
    for (let i = 0; i < 10; i++) {
        let digito = parseInt(cedula[i]) * multiplicador[i % 2];

        if (digito > 9) digito = Math.floor(digito / 10) + (digito % 10);

        suma += digito;
    }

    let digitoVerificador = (10 - (suma % 10)) % 10;

    if (digitoVerificador === parseInt(cedula[10])) {
        resultado.style.color = "green";
        resultado.textContent = "CÉDULA CORRECTA ";
    } else {
        resultado.style.color = "red";
        resultado.textContent = "CÉDULA INCORRECTA ";
    }
}


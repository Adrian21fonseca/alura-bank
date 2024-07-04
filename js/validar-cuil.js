export default function esUnCuil(campo) {
    const cuil = campo.value.replace(/[-\/]/g, "");
    tieneNumerosRepetido(cuil);

    if(tieneNumerosRepetido(cuil)){
        console.log("valores Repetidos");
    }else{
        if(validarPrimerosDijistos(cuil) && validarDijitoVerificador(cuil)){
            console.log("cuil valido")
        }else{
            console.log("cuil no existe");
        }
    }
}

function tieneNumerosRepetido(cuil) {
    const numerosRepetido = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];

    return numerosRepetido.includes(cuil);
}

    function validarPrimerosDijistos(cuil) {
    let primerosDijitos = cuil.substr(0, 2);
    let dijitosValidos = ["20", "23", "24", "27", "30", "33", "24"];

    return dijitosValidos.includes(primerosDijitos);
}

    function validarDijitoVerificador(cuil) {
    let acumulado = 0;
    const factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

    for (let i = 0; i < 10; i++) {
        acumulado += parseInt(cuil[i], 10) * factores[i];
    }

    let validadorTeorico = 11 - (acumulado % 11);

    if ((validadorTeorico = 11)) {
        validadorTeorico = 0;
    } else if ((validadorTeorico = 10)) {
        validadorTeorico = 9;
    }

    const digitoVerificador = parseInt(cuil[10], 10);

    return digitoVerificador === validadorTeorico;
}

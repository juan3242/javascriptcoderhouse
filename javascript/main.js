//simulador de gastos mensuales 
let gastos = ["agua", "gas", "luz", "alimentos"];
let gastosX = [];
function calcularGastosMensuales(){
    gastos = ["agua", "gas", "luz", "alimentos"];
    gastosX = [];
    document.getElementById("sectionIntermedia").innerHTML =  `${gastos}. Estos son los gastos del mes
    <button id="sigue">siguiente</button>`;
    document.getElementById("sigue").addEventListener("click", sigue);
    function sigue(){
        document.getElementById("sectionIntermedia").innerHTML = ` ${gastos} . Quieres eliminar o agregar cosas q gastaste este mes 
        <button id="editarGastos">si</button>           <button id="calcularGastos">no</button>`;
        document.getElementById("editarGastos").addEventListener("click", editarGastos);
        document.getElementById("calcularGastos").addEventListener("click", calcularGastos);
        function editarGastos(){
            document.getElementById("sectionIntermedia").innerHTML = `que quieres hacer
            <button id="agregarGastos">agregar gastos</button>        <button id="eliminarGastos">eliminar gastos</button>`;
            document.getElementById("agregarGastos").addEventListener("click", agregarGastos);
            document.getElementById("eliminarGastos").addEventListener("click", eliminarGastos);
            function eliminarGastos(){
                document.getElementById("sectionIntermedia").innerHTML = `${gastos}. Elija por donde quiere empezar a eliminar, 
                escribiendo un numero del 0 en adelante, los gastos se enumeran de izquierda a derecha
                <form><input id="noDondeEmpezaraEliminarGastosInput" placeholder="numero"></form>
                <button id="noDondeEmpezaraEliminarGastosbutton">enter</button>`;
                let noDeGastosTotales = 0;
                gastos.forEach(function(){ noDeGastosTotales ++;});
                document.getElementById("noDondeEmpezaraEliminarGastosbutton").addEventListener("click", noDondeEmpezaraEliminarGastos);
                function noDondeEmpezaraEliminarGastos(){
                    let noDondeEmpezaraEliminarGastosa = document.getElementById("noDondeEmpezaraEliminarGastosInput").value;
                    if(parseFloat(noDondeEmpezaraEliminarGastosa) > noDeGastosTotales){
                        eliminarGastos();
                    };
                    document.getElementById("sectionIntermedia").innerHTML = `${gastos}. Cantidad de numeros va a eliminar
                    <form><input id="cantidadDeNumerosEliminarInput" placeholder="numero"></form>
                    <button id="cantidadDeNumerosEliminarbutton">enter</button>`;
                    document.getElementById("cantidadDeNumerosEliminarbutton").addEventListener("click", cantidadDeNumerosEliminar);
                    function cantidadDeNumerosEliminar(){
                        let cantidadDeNumerosEliminaraa = document.getElementById("cantidadDeNumerosEliminarInput").value;
                        gastos.splice(parseInt(noDondeEmpezaraEliminarGastosa), parseInt(cantidadDeNumerosEliminaraa));
                        document.getElementById("sectionIntermedia").innerHTML = `gastos actualizados, ${gastos}
                        <button id="editarGastos">seguir editando gastos</button>           <button id="calcularGastos">calcular gastos</button>`;
                        document.getElementById("editarGastos").addEventListener("click", editarGastos);
                        document.getElementById("calcularGastos").addEventListener("click", calcularGastos);
                    };
                };
            };       
            function agregarGastos(){
                document.getElementById("sectionIntermedia").innerHTML = `que vas a agregar
                <form><input id="agregarInput" placeholder="numero"></form>
                <button id="agregarButton">enter</button>`;
                document.getElementById("agregarButton").addEventListener("click", agregarGasto);
                function agregarGasto(){
                    let agregarGastoo = document.getElementById("agregarInput").value;
                    gastos.push(agregarGastoo);
                    document.getElementById("sectionIntermedia").innerHTML = `gastos actualizados, ${gastos}
                    <button id="editarGastos">seguir editando gastos</button>           <button id="calcularGastos">calcular gastos</button>`;
                    document.getElementById("editarGastos").addEventListener("click", editarGastos);
                    document.getElementById("calcularGastos").addEventListener("click", calcularGastos);
                };
            };
        };
        function calcularGastos(){
            let noDelGasto = 0;
            gastosX = [];
            let totalEnGastosX;
            let totalEnGastos = 0;
            document.getElementById("sectionIntermedia").innerHTML = `${gastos}
            <button id="contandoCadaGastobutton">sigue</button>`; 
            document.getElementById("contandoCadaGastobutton").addEventListener("click", contandoCadaGasto);
            function contandoCadaGasto(){
                document.getElementById("sectionIntermedia").innerHTML = `total en gastos en ${gastos[noDelGasto]}, ${gastosX}
                <input id="totalEnGastosXInput" placeholder="coloque el gasto"> <button id="contandoCadaGastoNoDosbutton">sigue</button>`;
                document.getElementById("contandoCadaGastoNoDosbutton").addEventListener("click", contandoCadaGastoNoDos);
                if(!gastos[noDelGasto]){
                    totalEnGastosFuncion();
                };
                function contandoCadaGastoNoDos(){
                    totalEnGastosX = document.getElementById("totalEnGastosXInput").value;
                    gastosX.push(totalEnGastosX);
                    noDelGasto++;
                    contandoCadaGasto();
                }
            };
            function totalEnGastosFuncion(){
                totalEnGastos = 0;
                gastosX.forEach (
                    function(item){
                       totalEnGastos += parseFloat(item);
                    }
                );
                totalEnGastosFuncionNoDos();
                function totalEnGastosFuncionNoDos(){
                    let textoDeValorDeGastosssNo2 = "";
                    gastosX.forEach(function(laburada){ textoDeValorDeGastosssNo2 += laburada.toString() + "<br>"});
                    let textoDeGastosNo2 = "";
                    gastos.forEach(function(item){ textoDeGastosNo2 += item + "<br>"});
                    document.getElementById("nombreDeLosGastos").innerHTML = textoDeGastosNo2;
                    const grupoDeValorGastado = document.getElementsByClassName("valorDeCadaGasto");
                    grupoDeValorGastado[0].innerHTML = textoDeValorDeGastosssNo2;
                    document.getElementById("gastoTotal").innerHTML = "gasto total :" + totalEnGastos;
                    document.getElementById("sectionIntermedia").innerHTML = ``;
                };
            };
        };
    };
};
function modoOscuro(){
    sessionStorage.setItem("backgroundColor", "black")
    document.getElementById("bodyIndex").style.backgroundColor = sessionStorage.getItem("backgroundColor");
    sessionStorage.setItem("color", "white")
    document.getElementById("bodyIndex").style.color = sessionStorage.getItem("color");
};
function modoClaro(){
    localStorage.setItem("backgroundColor", "white")
    document.getElementById("bodyIndex").style.backgroundColor = localStorage.getItem("backgroundColor");
    localStorage.setItem("color", "black")
    document.getElementById("bodyIndex").style.color = localStorage.getItem("color");
};
let datosx = '{ "buttonCentral":"Empiesa o haz uno nuevo" }';
const objetoDatosx = JSON.parse(datosx);
document.getElementById("buttonReset").innerHTML = objetoDatosx.buttonCentral;
document.getElementById("buttonReset").addEventListener("click", calcularGastosMensuales);
const textoButtonDarkAndWhite = {            //desestructuracion + spread
    white : "white mode",
    dark : "dark mode"
};
const {white, dark} = textoButtonDarkAndWhite;
document.getElementById("buttonDarkMode").innerHTML = dark;
document.getElementById("buttonWhiteMode").innerHTML = white;
document.getElementById("buttonDarkMode").addEventListener("click", modoOscuro);
document.getElementById("buttonWhiteMode").addEventListener("click", modoClaro);


/*
document.write("numeros del 1 al 100" + "<br>")
let numero = 1;
while(numero <= 100){
    document.write(numero + ", ");
    numero++;
}
for (let numeroNo2 = 101; numeroNo2 <= 150; numeroNo2++){
    if(numeroNo2 <=149){
        document.write(numeroNo2 + ", ")
    }
    else if (numeroNo2 = 150){
        document.write(numeroNo2 + ".")
    }
};
*/
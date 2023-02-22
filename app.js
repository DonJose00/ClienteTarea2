//Obtenemos el id de zonadibujo
var divDibujo = document.getElementById('zonadibujo');
//Creamos una tabla en la zona de dibujo
var crearTabla = document.createElement("table");
divDibujo.appendChild(crearTabla);

for (let i = 0; i < 30; i++) {
    //Creamos los tr
    var crearTr = document.createElement("tr");
    crearTabla.appendChild(crearTr);
        for (let j = 0; j < 30; j++) {
            //Creamos los td
            var crearTd = document.createElement("td");
            crearTr.appendChild(crearTd);
        }
    }
    
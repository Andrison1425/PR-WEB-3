let btnAgregar = document.querySelector(".agregar");
let contRows = document.querySelector("table");
let datos = document.querySelectorAll("input");
window.onload = () =>{
    fetch("http://www.raydelto.org/agenda.php")
    .then(json=>json.json())
    .then(resp=>{
        for (let index = resp.length -1; index > resp.length-30; index--) {
            const ele = resp[index];
            contRows.innerHTML = contRows.innerHTML+`
                <tr>
                    <td>${ele.nombre}</td>
                    <td>${ele.apellido}</td>
                    <td>${ele.telefono}</td>
                </tr>
            `;
        }
    });
}

btnAgregar.onclick=()=>{
    fetch("http://www.raydelto.org/agenda.php",{
        body:JSON.stringify({
            nombre : datos[0].value,
            apellido : datos[1].value,
            telefono : datos[2].value
        }),
        method:"POST"
    });

    contRows.innerHTML = contRows.innerHTML+`
        <tr>
            <td>${datos[0].value}</td>
            <td>${datos[1].value}</td>
            <td>${datos[2].value}</td>
        </tr>
    `;
}

let tabla=[
    {Id:"1002092778",Nombre:"Jorge",Apellido:"Velasquez",Celular:"3002497019",Direccion:"Cra7b#73-20"},
    {Id:"3763209",Nombre:"Jorge",Apellido:"Sierra",Celular:"3008384309",Direccion:"Cra7b#73-20"}	
]

function Cargar(){
	let elemento = document.getElementById("Usuarios")
	tablallena=""
	for (let i = 0; i < tabla.length; i++) {
		tablallena+= `<tr><td>${tabla[i].Id}</td><td>${tabla[i].Nombre}</td><td>${tabla[i].Apellido}</td><td>${tabla[i].Celular}</td><td>${tabla[i].Direccion}</td><tr>`
	}
	elemento.innerHTML=tablallena
}

function registrar(){
	let Id= document.getElementById("Id").value
	let Nombre= document.getElementById("Nombre").value
	let Apellido= document.getElementById("Apellido").value
	let Celular= document.getElementById("Celular").value
	let Direccion= document.getElementById("Direccion").value
	let elemento= document.getElementById("Usuarios")



    if(Id=='' || Id ===undefined){
       alert ("El campo es obligatorio")
           return; 
}
   
else{
		elemento.innerHTML+=`<tr><td>${Id}</td><td>${Nombre}</td><td>${Apellido}</td><td>${Celular}</td><td>${Direccion}</td></tr>`

	//agregar a la tabla
	let usertabla={Id,Nombre,Apellido,Celular,Direccion}
	tabla.push(usertabla)
		
}
}
	
function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     return false;        
}

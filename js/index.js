
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
  
const pokemones = [];

const cargarTabla = ()=>{
  //1.obtener referencia a la tabla
  let tbody = document.querySelector("#tabla-tbody")
  //eliminar todos los elementos que tenga el tbody 
  tbody.innerHTML ="";
  //2.recorrer la lista de Pokemons
  for (let i=0; i<pokemones.length; ++i){
    let p = pokemones[i];

    //3.por cada pokemon generar una fila (tr)
    let tr = document.createElement("tr");
    //4.porcada atributo (nombre,tipo,descripcion,and so on), voy a generar celdas(td)
    let tdNro = document.createElement("td");
    tdNro.innerText = (i+1);
    let tdNombre = document.createElement("td");
    tdNombre.innerText = p.nombre;
    let tdTipo = document.createElement("td");

    
    let icono = document.createElement("i");
    //<i class="fas fa-fire"></i>
    if(p.tipo == "fuego"){
    
      // agregar clases a un elemento 
      icono.classList.add("fas","fa-fire","text-danger","fa-3x");

      //<i class="fas fa-leaf"></i>
    }else if (p.tipo == "planta"){
      icono.classList.add("fas","fa-leaf","text-success","fa-3x");
    
      //<i class="fas fa-bolt"></i>  
    }else if (p.tipo == "electrico"){
      icono.classList.add("fas","fa-bolt","text-warning","fa-3x");
    
      //<i class="fas fa-tint"></i>
    }else if (p.tipo == "agua"){
      icono.classList.add("fas","fa-tint","text-primary","fa-3x");
    
      //<i class="fas fa-adjust"></i> 
    }else{
      icono.classList.add("fas","fa-adjust","text-info","fa-3x");
    }
    tdTipo.appendChild(icono);
    

   
    let tdDesc = document.createElement("td");
    tdDesc.innerHTML=p.descripcion;
    let tdAcciones = document.createElement("td");

    //5.agregar las celdas al tr 
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo)
    tr.appendChild(tdDesc);
    tr.appendChild(tdAcciones);
    //6. agregar el tr a la tabla
    tbody.appendChild(tr);
  }

};
document.querySelector("#registrar-btn").addEventListener("click",()=>{
    //value es para oibtener el valor unput de texto
    let nombre = document.querySelector("#nombre-txt").value;
    //esto lo saque de la pagina del tinymce, es para obtener lo escrito
    let descripcion = tinymce.get("descripcion-txt").getContent();
    //checed indica si el radiobutton estaseleccionado
    let legendario = document.querySelector("#legendario-si").checked;
    //el tipo se obtiene igual que los input
    let tipo = document.querySelector("#tipo-select").value;
    // como crear un objetos
    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    //como guardar en una lista de elementos
    pokemones.push(pokemon);//append
    cargarTabla();
    //titulo,texto, tipo : success,info,dange,warning
    swal.fire("exito!","Pokemon registrado","success");

 

});
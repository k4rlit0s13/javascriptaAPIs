//let num=5;
//num -=2
//console.log(num);


//let num="Carlos"
//console.log();


    // let num=6;
    // if (num==5) console.log("El numero es igual a 5");
    // else if(num=6) console.log("El numero es igual a 6");
    // else console.log("no hay condicion");

    // let response=confirm("usted tiene la mayoria de edad?");
    // console.log(response);

    // let response=Number(prompt("ingrese el numero", "numero"));
    // console.log(response+2);

    // let response=Number(prompt("ingrese el numero", "numero"));
    // alert(response+2);

    // let response=["a", "b", "c", "d", "e"]
    // console.table(response);



//TABULACION/TABULATE:

    // let response=[
    //     {nonmbre:"Carlos", apellido:"Gomez"},
    //     {nonmbre:"juan", apellido:"martinez"},
    //     {nonmbre:"ernesto", apellido:"perez"}
    // ];
    // console.table(response);

    // let response=[
    //     {nonmbre:"Carlos", apellido:"Gomez"},
    //     {nonmbre:"juan", apellido:"martinez"},
    //     {nonmbre:"ernesto", apellido:"perez"}
    // ];
    // response[1].apellido="pepito"
    // console.table(response);




// ESTRUCTURAS REPETIDAS:

    // let res = ["a", "b", "c", "d"]

    // for (let index = 0; index < res.length; index++) {
    //     console.log(res[index]);
    // }



// FUNCIONES

    // let res=saludar("como te llamas");
    //     alert(res);

    // function saludar(nombre) {
    //     return `Hola ${nombre}`
    // }



    // let saludar=function(nombre="comoestas"){
    //     return `hola ${nombre}`
    // }
    // let res=saludar();
    // console.log(res)

//CALLBACK

    // const nombre=function() {
    //     return"miguel"
    // }
    // const saludar=function(callback) {
    //     return`hola ${callback()}`
    // }
    // let res=saludar(nombre)
    // console.log(res);



    // let lista=["a", "b", "c", "d", "e", "f", "g"];
    // lista.forEach(function(value, indice, copy) {
    //     console.log(value);
    // })


    
    // let lista=["a", "b", "c", "d", "e", "f", "g"];
    // const getAllArray=function(value, indice, copy) {
    //     console.log(value);
    // }
    // lista.forEach(getAllArray);


//FUNCION AUTOEJECUTADA

    // (function() {
    //     console.log("Hola")
    // })()


    
    // (function(nombre) {
    //     console.log(`Hola ${nombre}`);
    // })("Miguel")


//CLAUSULAS

    // const saludar=(function() {
    //     let num=0;
    //     return function() {
    //         num++;
    //         return num
    //     }
    // })()
    // console.log(saludar());
    // console.log(saludar());


//FUNCIONES DE FLECHA, ARROW FUNCTIONS

    
// const saludar=nombre=>{
    //     return `hola ${nombre}`
    // }

    
    // const saludar=nombre=>`hola ${nombre}`
    // let res=saludar("miguel");
    // console.log(res);


    // let obj={
    //     nombre:"calos",
    //     saludar:function () {
    //         console.log(this);
    //     }
    // }
    // console.log(obj.saludar());


// MIRAR MDM MOZILLA











// COMO TRAER DATOS, this y demas, DECLARACION DE VARIABLES(OBJETO)


    // const miObjeto = {
    
    // nombre: "Ejemplo Objeto",
    // version: 1.0,
    // descripcion: "Un objeto de ejemplo con una función",

    // // funcion anonima
    //  mostrarInformacion (p1, p2) {
    //  console.log("Nombre: " + this.nombre);
    //  console.log("Versión: " + this.version);
    //  console.log("Descripción: " + this.descripcion);
    //  console.log("Parámetro 1: " + p1);
    //  console.log("Parámetro 2: " + p2);

    //  }
    //  };


// Llamada a la función dentro del objeto
    // miObjeto.mostrarInformacion("Valor 1", "Valor 2");

//COMO VOLVER UN OBJETO A FORMATO JSON
    // let respuesta = JSON.stringify(miObjeto)
    // console.log(respuesta);






//REPLACER

// //Filtrando y protegiendo datos sensibles al serializar un Objeto JSON
//     const persona = {
//         nombre: "Alice",
//         edad: 28,
//         casado: true,
//         secretos: {
//         contraseña: "miContraseñaSecreta",
//         hobby: "programación"
//         }
//     };
// Definir una función replacer para filtrar y transforma
//     function filtroReplacer(key, value) {
//         return (key === "nombre") ? "ALICE" : value && (key === "hobby") ? "Meter vicio 😈" : value;
//     }

//    Resultado: '{"nombre":"Alice","edad":28,"casado":true,
//     console.log(JSON.stringify(persona, filtroReplacer, 4));

   






//DESCOMPONER, DESTRUCTURAR, DTO


// //1 NIVEL
//     let array= ["a" ,"b" ,"c" ,"d" ,"e" ,"f"]
//     let[,,,data4]=array;
//     console.log(data4);

// //2 NIVELES
//     let array= ["a" ,"b", ["MIGUEL" ,"JUAN" ],"e" ,"f"]
//     let[,,[Nombre1]=nombres,data4]=array;
//     console.log(Nombre1);

//3 NIVELES
    // let array= ["a" ,"b", ["MIGUEL",["Escamilla","gonzales"]],"e" ,"f"]
    // let[,,[,[,apellido2]=apellidos]=nombres,data4]=array;
    // console.log(apellido2);


//ejemplo propio
    // let miObjeto=[
    //     "Juan Pérez","López",
    //     "Ana","González",
    //     "Pedro","Sánchez"
    // ]
       
    // let [,data2]=miObjeto;
    // console.log(data2);





    // let miObjeto=[
    //     "Juan Pérez","López",["miguel",["Escamilla","Gonzales"]]
    //     ,"Ana","González",
    //     "Pedro","Sánchez"
    // ];
       
    // let getName=(dato1,dato2,[nombre,apellidos])=>{
    //     console.log(apellidos);
    // }
    // getName(...miObjeto)
   









// // Función flecha con desestructuración de parámetros
// const calcularExpresion = ({ a, b, c }) => (a * b) + c;

// // Ejemplo de ejecución
// const objeto = { a: 2, b: 3, c: 4 };
// const resultado = calcularExpresion(objeto);

// // Mostrar el resultado
// console.log(`El valor total calculado de la expresión ${resultado}`);



// const persona = {
//     nombre: "alice",
//     edad: 28,
//     casado: true,
//     secretos: {
//     contraseña: "miContraseñaSecreta",
//     hobby: "programación"
//     }
//    };
//    // Definir una función replacer para filtrar y transforma
//    function filtroReplacer(key, value) {
//     return (key === "contraseña") ? "********" : value && (key === "nombre") ? value.toUpperCase() : value;
//    }
//    console.log(JSON.stringify(persona, filtroReplacer, 4));







//ARRAYS

//PUSH MEZCLA

    // const frutas=["Manzana", "Banana", "Naranaja"];
    // const frutas2=["Manzana2", "Banana2", "Naranaja2"];
    // // frutas.push("Mandarina")
    // // let longitud=frutas.push("Mandarina")
    // // let longitud=frutas.push(...frutas2)
    // let longitud=frutas.push({fruta:"Mandarina"})
    // console.log(longitud);
    // console.log(frutas);

//POP ELIMINA
    // const frutas=["Manzana", "Banana", "Naranaja"];
    // let datoeliminado=frutas.pop()
    // console.log(datoeliminado);
    // console.log(frutas);


//SPLICE, MODIFICAR, ELIMINAR, ACTUALIZAR
    // const frutas=["Manzana", "Banana", "Naranaja"];
    // frutas.splice(0,0,"Mandarina") //posicion 1(0,1,2.3) y el 0 es otra posicion 0 agrega el resto reemplaza la posicion
    // console.log(frutas);

//TOTSTRING , CONVIERTE UN ARRAT EN UNA CADENA DE TEXTO(PARA QUE IMPRIMA BONITO EN TEXTO)
    // const frutas=["Manzana", "Banana", "Naranaja"];
    // let res=frutas.toString()
    // console.log(res);









//METODOS DE BUSQUEDA 



//INDEXOF , BUSCA LA PRIMERA APARICION DE UN ELEMENTO ESPECIFICO EN UN ARRAY(muestra el numero de la posicion, 0,1,2,3,4)
    // const frutas=["Manzana", "Banana", "Naranaja"];
    // let res=frutas.indexOf("Naranja")
    // console.log(res);

//SI HAY UN ARRAY DENTRO DE OTRO
    // const frutas=["Manzana", ["Banana"], "Naranaja"];
    // let res=frutas[1].indexOf("Banana")
    // console.log(res);


//FIND BUSCA, EL PRIMER ELEMENTO DE UN ARRAY QUE CUMPLE CON UNA CONDICION ESPECIFICA
    // const frutas=["Manzana", "Banana", "Naranaja", "Manzana", "Pera"];
    // frutas.find((val,index)=>{
    //     if(val=="Manzana") frutas.splice(index,1);
    // });
    // console.log(frutas);






//TIPOS DE OBJETO


//SET
    // let miSet= new Set();
    // miSet.add(1);
    // miSet.add(2);
    // console.log(miSet);


//DELETE
    



//ASINCRONIA 


// //EL CALLBACK (OJO NO DEPENDER DE ESTE EN LA ASINCRONIA, MEJOR USAR PROMESAS A LARGO PLAZO)

// const realizarOperacion=(num1,num2,operacionCallback)=>{
//     console.log(`operacion: ${num1} y ${num2}`);
//     //llama callback pasandole los 2 numeros como argumentos
//         operacionCallback(num1,num2);
// }

// //calback que suma 2 num    
//     const sumar=(a,b)=>{
//         console.log(`Suma: ${a+b}`);
//     }

// //calback que multiplica 2 num
//     const multiplicar=(a,b)=>{
//         console.log(`Multiplicacion: ${a*b}`);
//     }

//     realizarOperacion(5,3,sumar)
//     realizarOperacion(5,3,multiplicar)






// ALGO SINCRONO: 
    //que implica coincidir con el tiempo


    //EJ: IMCREMENTO DE UNA VARIABLE

        // let x=1
        // x++;
        // console.log(x);







// ALGO ASINCRONO: 
    //falta de necesidad de respetas el orden de las sentencias durante su ejecución en el tiempo, osea, las sentencias pueden aparecer de una forma en codigo y ejecutarse de otra forma.

    // //EJ: RETARDO DE EJECUCION DE 2 SEGUNDOS
        // setTimeout(function() {
        //     console.log('pasaron 2 segundos');
        // },2000);

    // //MI EJEMPLO
        // setTimeout(timeout=()=>{
        //     console.log('pasaron 2 segundos');
        // },2000);

    // //EJEMPLO SOLO CON ARROW
        // setTimeout(()=>{
        //     console.log('pasaron 2 segundos');
        // },2000);






//LENGUAJE NO BLOQUEANTE


//funcion simulacion de una tarea que tomara un tiempo

    // const tareaNoBloqueante=(callback)=>{
    //     console.log('iniciando tarea no bloqueante...');
        
    //     //simulacmos un retardo de 2 segundos para la tarea
    //     setTimeout(paratiempo=()=>{
    //         console.log('Tarea no Bloqueante completada.');
    //         callback(); //llamamos la funcion de retorno cuando la tarea esta completada
    //     },2000);
        
    // }

    // console.log('Inicio del programa');

    // //llamamos a la funcion no bloqueante
    // tareaNoBloqueante(paratiempo=()=>{
    //     console.log('continuando con el resto de tareas despues de la tarea no bloqueante');
    // });

    // console.log('Fin del programa.');




//JAVASCRIPT ES UN LENGUAJE BLOQUEANTE O NO BLOQUEANTE
    //Puede ser ambas dependiendo del caso 

    //EJ TAREAS ASINCRONAS:
    //  -fetch a una URL para obtener un archivo.json
    //  -play de un mp3 mediante new audio()
    //  -tarea programada con setTimeout()
    //  -comunicacion a la API de sintetizador de voz
    //  -comunicacion a la API de un sensor del smartphone
    
    

//COMO GESTIONAR LA ASINCRONIA? 

// -CALLBACKS (LLAMAR UNA FUNCION)
// -PROMESAS
// -ASYNC/AWAIT







//PROMESA


//  estructura BASICA DE PROMESA:

// // const myPromise=new Promise((resolve,reject)=>{
// //     //aqui se realiza la operacion asincrona
// //     //si es exitosa se llama a resolve(valor)
// //     //si ocurre error, se llama a reject(error)
// // });

// // myPromise
// // .then(resultado=>{
// //     //manejar el resultado si la promesa se cumple
// // })
// // .catch(error=>{
// //     //manejar el error si la promesa es rechazada
// // })










//EJERCICIO simulacion de una funcion que procesa un pago
    //     const procesarPago=(total)=>{
    //         return new Promise((resolve,reject)=>{
    //             setTimeout(()=>{
    //                 const exito=Math.random()<0.8; //simulamos que el 80% de las veces el pago es exitoso
                    
    //             if (exito) {
    //                 resolve("Pago Exitoso")
    //             }else{
    //                 reject(new Error('Error en el pago'));
    //             }
    //             },1500); //simulamos un retraso de 1.5 seg para el proceso del pago
    //         });
    //     }

    // //EJEMPLO DE USO DE LA FUNCION DE PROCESAMIENTO DE PAGOS
    // const totalAPagar=100; //monto a pagar

    // procesarPago(totalAPagar)
    // .then(resultado=>{
    //     console.log(resultado);  //se ejecutara en caso de pago exitoso
    // })

    // .catch(error=>{
    //     console.error(error.message);  //se ejecuta en caso de fallo del pago
    // });




//EJEMPLO PROMESA DEL PROFE MIGUE

//CLASICO
    // let callback=function(resolve,reject) {
    //     setTimeout(()=>{
    //         let num=Math.random()*100;
    //         if (num>=50) {
    //             resolve(`ok: ${num}`);
    //         }else{
    //             reject(`Error: ${num}`);
    //         }
    //     },1000);
    // }
    // let myPromise=new Promise(callback);

    // myPromise
    // .then(res=>{
    //     console.log(res);
    // }).catch(res=>{
    //     console.error(res);
    // });


//ACTUALIZADO SEGUN LA ACTUALIZACION DE JAVA
    
    // let callback=async()=>{
    //     let num=Match.random()*100
    //     return(num>50) ? {status:200,data:num}:{status:204,data:num};
    // }

    // let res=await callback();
    // if(res.status==200){
    //     console.log(res.data);
    // }else{
    //     console.error(res.data);
    // }


// //EJERCICIO DE REQUEST APIS CON JAVA Y FETCH
//     let peticion=await fetch('https://jsonplaceholder.typicode.com/photos');
//     let data=await peticion.json();
//     console.log(data);


//EJERCICIO DE REQUEST APIS CON JAVA Y FETCH
    // let peticion=await fetch('https://jsonplaceholder.typicode.com/photos');
    // let data=await peticion.json();

    // //FUNCION QUE SOLO SAQUE LOS PARES
    //     let solopares=[];

    //     for (let i = 0; i < data.length; i++) {
    //         if (data[i].id%2===0) {
    //             solopares.push(data[i]);
    //         }
    //     };
    //     console.table(solopares);




    //FUNCION QUE SUBA UN DATO

    //     fetch('https://jsonplaceholder.typicode.com/posts/1',{
    //     method:'PUT',
    //     body: JSON.stringify({
    //         id:1,
    //         title:'foo',
    //         body:'bar',
    //         userId:1,
    //     }),
    //     headers:{
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response)=>response.json())
    //     .then((json)=>console.log(json));





import { addAlbum, getAllAlbums } from "./module/albums.js";

console.table(await addAlbum({userId:1,title:"ajksfj"}));
// console.table(await addAlbum({userId:10,title:"ajksfj"}));
// console.table(await getAllAlbums(userId,title));


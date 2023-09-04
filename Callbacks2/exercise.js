function repeatHello (callback/* ,n*/)  {
   /*  let id = */ setInterval (callback,1000);
    /* setTimeout (()=> clearInterval (id),1000*n) */
};
 repeatHello (()=> console.log("Hello"));

 // Las arrow functions son preferibles por varios motivos
 // pero aqui es porque tiene una sintaxis más concisa 
 // que otros tipos de funciones
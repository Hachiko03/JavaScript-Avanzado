function repeatHello (callback,n) {
    let id = setInterval (callback,1000);
    setTimeout (()=> clearInterval (id),1000*n);
}

repeatHello (()=> console.log("Hello"),5);
function printAsyncName (callback, name) {
setTimeout (callback, 1000);
setTimeout (name,2000);
}

printAsyncName (() => console.log("Hello"), () => console.log ("Julio"))
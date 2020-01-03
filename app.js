const sayHelloWorld = () => {
    console.log('Hello world');
};

(() => {
    console.log('APP loaded');
    sayHelloWorld();
});
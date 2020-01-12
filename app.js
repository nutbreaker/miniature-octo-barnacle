import { version } from './package.json';

const sayHelloWorld = () => {
    console.log('Hello world');
};

((v) => {
    console.log(`APP loaded version: ${v}`);
    sayHelloWorld();
})(version);
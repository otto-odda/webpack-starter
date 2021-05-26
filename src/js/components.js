import '../css/components.css';
//import webpackLogo from '../assets/img/webpack-logo.png';

export const helloTo = ( name ) => {

    // H1
    console.log('CREANDO UNA ETIQUETA H1.');
    const h1 = document.createElement('h1');
    h1.innerText = `¡Hola, ${ name }!`;
    document.body.append( h1 );

    // IMG
    // console.log( webpackLogo );
    // const img = document.createElement('img');
    // img.src = webpackLogo;
    // document.body.append( img );
}
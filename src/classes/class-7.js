function typeChecker( val ) {
    if( typeof val === 'number' ) {
        return true;
    } else {
        return;
    }
}

function add( x, y, z ) {
    if( typeChecker(x) && typeChecker(y) && typeChecker(z) ) {
        return x + y + z;
    } 
    return false;
}


const one =  add(100, 200, 'one');

console.log(one)
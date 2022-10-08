import databse from '../json/8-database.json';
import { enum_divider, helper } from '../utils';

const isDivider = function ( prop ) {
    let result = {
        isStart : false,
        isEnd   : false,
    };
    if( helper.isString( prop ) && ( prop.startsWith( enum_divider.start ) || prop.startsWith( enum_divider.end ) ) ) {
        const isStart   = prop.startsWith( enum_divider.start );
        const id        = helper.findID( prop, isStart );
        const reverse   = helper.reverseDivider( prop, isStart );
        const type      = isStart ? 'isStart' : 'isEnd';
        
        if( Reflect.has( databse, reverse ) && !Reflect.has( databse, id ) ) {
            result[type] = true;
        }else {
            console.warn('Something is wrong with ', prop)
        }
    }
    return  result;
}

const queue = [];
const data = {}


for( let property in databse ) {
    const { isStart, isEnd } =  isDivider( property );
    let canUse      = true;

    if( isStart ) {
       const id = helper.findID( property );
       queue.push( id );
       canUse = false;
    }

    if( isEnd ) {
        const id = helper.findID( property, false );
        const ind = queue.indexOf( id );
        queue.splice( ind, 1 );
        canUse = false;
    }

    let endpoint = data;
    for( let scope of queue ) {
        if( !Reflect.has( endpoint, scope ) ) {
            endpoint[scope] = {};
        }
        endpoint = endpoint[scope];
    }

    if( canUse ) {
        endpoint[property] = databse[property];
    }
    
}

console.log(data)


// const d = new Date();
// let year = d.getFullYear();

// const student = {
//     name: 'Sani',
//     bid: 1990,
//     email: 'test@gmail.com',
//     location: 'Bangladesh',
//     get age(){
//         return year - this.bid
//     },
//     set brithday( newYear ) {
//         if( newYear >= year ) {
//             console.error('Wrong brithday');
//         } else {
//             this.bid = newYear
//         }
//     }
// }

// student.brithday = 2025
// console.log(student.age)
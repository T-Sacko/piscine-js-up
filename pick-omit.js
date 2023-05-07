function pick(obj, keys) {
    const result={}

    if (typeof keys === 'string') {
        keys=[keys]
    }

    keys.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key]
        }
    });

    return result
}

function omit(obj, keys) {
    const result={}

    if(typeof keys === 'string') {
        keys = [keys]
    }

    for (let key in obj){
        !keys.includes(key) && obj.hasOwnProperty(key) ? result[key] = obj[key] : null
    }

    return result;

}
const f = ['ff','yhh','cuu']
const t = ['ff','yhh','cuu']
console.log(t.concat(f))



// function pick(obj, keys) {
//     const picked = {};
//     for (let key in obj) {
//         let regexp = new RegExp(`^${key}$`);
//         if (typeof keys === "string") {
//             if (keys.match(regexp)) {
//                 picked[key] = obj[key];
//             }
//         } else {
//             if (keys.includes(key)) {
//                 picked[key] = obj[key];
//             }
//         }
//     }
//     return picked;
// }

// function omit(obj, keys) {
//     const omitted = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key) === false) continue;
//         let regexp = new RegExp(`^${key}$`);
//         if (typeof keys === "string") {
//             if (!keys.match(regexp)) {
//                 omitted[key] = obj[key];
//             }
//         } else {
//             if (!keys.includes(key)) {
//                 omitted[key] = obj[key];
//             }
//         }
//     }
//     return omitted;
// }

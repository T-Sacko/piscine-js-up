escapeStr = "`\\/.'\"";
arr = [4,'2'];
obj = {str:'y', num:7, bool:true, undef:undefined}
nested = {arr:[4,undefined,'2'], obj:{str:'h', num:1,bool:true}}
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);
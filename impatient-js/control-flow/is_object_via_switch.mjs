export function isObject(x) {
  switch(typeof x){
    case 'object':
    case 'function':
        return x !== null;
    default :
        return false;
  }
}

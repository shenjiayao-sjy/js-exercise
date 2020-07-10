// Function is exported so that the test can import it
export function isObject(x) {
  // Use the following patterns (instead of `true`):
  if(typeof x === 'object')
    return true;
  else 
    return false;
}

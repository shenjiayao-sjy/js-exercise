export function isSafeInteger(n) {
    return (Math.trunc(n) === n 
      && typeof n === 'number' 
      && n >= Number.MIN_SAFE_INTEGER
      && n <= Number.MAX_SAFE_INTEGER);
  }
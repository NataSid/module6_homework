const arr = [1, 5, 7, 6, 4, 0];

function getSum (result, item) {
    if (item === null || Number.isNaN(item)) return result;
  
    if (Number(item) === 0) {
      
        result['zero'] += 1;
        return result;
    }
  
    if (Number(item) % 2 === 0) {
        result['even'] += 1;
    }
          
    if (Number(item) % 2 !== 0) {
      
      result['noteven'] +=1;
      
    } else {
        result['odd'] += 1;
    }
  
    return result;
}

console.log(arr.reduce(getSum, {'zero': 0, 'odd': 0, 'even': 0 , 'noteven':0}))

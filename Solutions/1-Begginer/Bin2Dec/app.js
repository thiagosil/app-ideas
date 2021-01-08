export function bin2Dec(number){
  if (number.length > 8){
    return 'Invalid Length';
  }

  if(number.match(/^[0-1]+$/) === null){
    return 'Only 0 or 1 is accepted';
  }

  let numbers = Array.from(number).reverse();

  let total = 0;
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === '1'){
      total += Math.pow(2, i);
    }
  }
  return total;
}

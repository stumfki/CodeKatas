function squareSum(numbers){

    const result = numbers.map(numb => numb * numb);
    let result1 = 0;
    for(let i = 0; i < result.length; i++) {
   
      result1 += result[i] 
   
    
    }
   return result1;
   }
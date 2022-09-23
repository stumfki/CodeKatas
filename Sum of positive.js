function positiveSum(arr) {
    let positive = 0;
    if(arr.length > 0) {
      for(let i = 0; i < arr.length; i++) { 
        if(arr[i] > 0 ) { 
      positive += arr[i];
        }
      } 
      return positive;
     } else {
       return 0;
     }
  }
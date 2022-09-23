function getDivisorsCnt(n){
    let count = 1;
    if(n === 1) {
      return 1;
    }
      for(let i = 0; i < n; i++) {
        if(((n % i) === 0)) {
          console.log(i);
          count++;
        }
      }
      return count;
  }
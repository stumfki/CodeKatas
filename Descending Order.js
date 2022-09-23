function descendingOrder(n){
    let pos = String(n);
    console.log(pos)
    console.log(typeof pos)
    let hes = [];
    if(n === 0) {
      return 0;
    }
    console.log(pos.length);
    for(let i = 0; i < pos.length; i++) {
      hes.push(pos[i]);
  
    } 
      console.log(hes);
    hes.sort((a, b) => b - a).join('');
    console.log(hes);
    let test = hes.join('');
    
  
  console.log(test);
    return parseInt(test, 10);
  
  }
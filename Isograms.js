function isIsogram(str){
    let hec = str.toUpperCase();
    let match = 0;
    for(let i = 0; i < hec.length; i++) {
      for(let k = i + 1; k < hec.length; k++) {
        if(hec[k] === hec[i]) {
          match++;
          
        }
  
  
      }
    }
  
    if(match === 0) {
      return true;
    } else {
      return false;
    }
    
  
  
  
  }
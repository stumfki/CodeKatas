function solution(str, ending){
    let check = str.slice(-(ending.length));
    console.log(check)
    if(ending === "") {
      return true;
    }
    if(check === ending) {
      return true;
    } else {
      return false;
    }
  
   
  }
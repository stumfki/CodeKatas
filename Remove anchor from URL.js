function removeUrlAnchor(url){
    let result = [];
    for(let i = 0; i < url.length; i++) {
      if(url[i] === '#') {
        return result.join('');
      } else {
        result.push(url[i])
      }
    }
    return result.join('');
  }
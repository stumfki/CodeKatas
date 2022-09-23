function filter_list(l) {
    let news = [];
    for(let i = 0; i < l.length; i++) {
      if(Number.isInteger(l[i])) {
        news.push(l[i])
      }
  
    }
    return news;
  }
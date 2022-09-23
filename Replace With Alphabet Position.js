function alphabetPosition(text) {
    let hec = text.toLowerCase();
     console.log(hec)
     let news = [];
     for(let i = 0; i < hec.length; i++) {
        if(hec[i] === 'a') {
         news.push('1');
        } else if(hec[i] === 'b') {
         news.push('2');
        } else if(hec[i] === 'c') {
         news.push('3');
        }else if(hec[i] === 'd') {
         news.push('4');
        }else if(hec[i] === 'e') {
         news.push('5');
        }else if(hec[i] === 'f') {
         news.push('6');
        }else if(hec[i] === 'g') {
         news.push('7');
        }else if(hec[i] === 'h') {
         news.push('8');
        }else if(hec[i] === 'i') {
         news.push('9');
        }else if(hec[i] === 'j') {
         news.push('10');
        }else if(hec[i] === 'k') {
         news.push('11');
        }else if(hec[i] === 'l') {
         news.push('12');
        }else if(hec[i] === 'm') {
         news.push('13');
        }else if(hec[i] === 'n') {
         news.push('14');
        }else if(hec[i] === 'o') {
         news.push('15');
        }else if(hec[i] === 'p') {
         news.push('16');
        }else if(hec[i] === 'q') {
         news.push('17');
        }else if(hec[i] === 'r') {
         news.push('18');
        }else if(hec[i] === 's') {
         news.push('19');
        }else if(hec[i] === 't') {
         news.push('20');
        }else if(hec[i] === 'u') {
         news.push('21');
        }else if(hec[i] === 'v') {
         news.push('22');
        }else if(hec[i] === 'w') {
         news.push('23');
        }else if(hec[i] === 'x') {
         news.push('24');
        }else if(hec[i] === 'y') {
         news.push('25');
        }else if(hec[i] === 'z') {
         news.push('26');
        }
     }
    
   
   
     return news.join(" ");
   }
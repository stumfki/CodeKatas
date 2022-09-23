function getMiddle(s)
{
   if(s.length % 2 === 0) {

    let i = s.length / 2;
    return s[i - 1] + s[i];
  } else {
    let k = Math.floor(s.length / 2);
    return s[k];
  }
}
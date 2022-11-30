function simpleArraySum(ar) {
    let n = 0;
    for (let i = 0; i < ar.length; i++) {
      if(typeof ar[i] == `number`) n += ar[i];
    }
    return n;
  }
  console.log(simpleArraySum([25,5,7,9,10]))
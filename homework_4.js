const Numbers = (start, and) => {
    let num1 = start;
  
    let timerId = setInterval(function() {
      console.log(start);
      if (start === and) {
        clearInterval(timerId);
      }
      start = start + 1;
    }, 1000);
  }
  
  Numbers(5, 15);
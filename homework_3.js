  const callback = arg => {
    console.log(arg);
  }
  
  const sum = (num1, num2, summanub) => {
    
    const rezult = num1 + num2;
    
    summanub(rezult);
  }
   
  sum(5,7,callback )
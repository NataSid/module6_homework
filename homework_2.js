const donNum = ("Данные неверны")

function getNum(num){
  for (let i = 2, max = Math.sqrt(num); i <= max ; i++ ){
    if (num % i === 0) {
    return false;
  }
    if (num > 1000){
      return donNum;
    }
}
return num > 1 ;
}


console.log(getNum(5));
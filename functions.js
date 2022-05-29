/*function minusSeven(num) {

return num - 3;
}
console.log(minusSeven(20));*/

// functionality of a  queue

function van(num){
  if(num<5){
    return "tiny";

  }
  else if (num<10) {
    return "small";

  }else if (num<15) {
    return "med";
  }else if (num<20) {
    return "large";

  }else {
    return "huge";
  }
}

console.log(van(25));

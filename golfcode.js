var arr = ['scor','scor1', 'scor2', 'scor3', 'scor4']

function golfscore (par, strokes){
  if(strokes == 1){
    return arr[0];
  }
  else if (strokes <= par-2) {
    return arr[1];

  }else if (strokes == par-1) {
    return arr[2];
  }
  else if (strokes == par) {
    return arr[3];
  }
  else if (strokes == par+1) {
    return arr[4];
  }else {
    return "nothing matches";
  }
}

console.log(golfscore(5,10));

module.exports = function check(str, bracketsConfig) {
  // your solution
  const arr = str.split('');
  let brackDif = [];
  let brackSame = [];
  for (let i = 0; i < bracketsConfig.length; i++){
    if (bracketsConfig[i][0] !== bracketsConfig[i][1]){
      brackDif.push(bracketsConfig[i]);
    }
    else {
      brackSame.push(bracketsConfig[i]);
    }
  }

  let arrOp = [arr[0]];
  arrMain: for (let i = 1; i < arr.length; i++){
    for (let j = 0; j < brackDif.length; j++){
      if (arr[i] == brackDif[j][1]){
        if (arrOp[arrOp.length - 1] == brackDif[j][0]){
          arrOp.pop();
          continue arrMain;
        }
        else {
          return false;
        }
      }
    }
    for (let j = 0; j < brackSame.length; j++){
      if (arr[i] == brackSame[j][1]){
        if (arrOp[arrOp.length - 1] == arr[i]){
          arrOp.pop();
        }
        else {
          arrOp.push(arr[i]);
        }
        continue arrMain;
      }
    }
    for (let j = 0; j < brackDif.length; j++){
      if (arr[i] == brackDif[j][0]){
        arrOp.push(arr[i]);
        continue arrMain;
      }
    }
  }

  if (arrOp.length === 0) return true 
  else return false;
}

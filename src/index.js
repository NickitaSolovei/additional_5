module.exports = function check(str, bracketsConfig) {
  // your solution
  // создали массив из элементов str;
  var arr1 = str.split('');

  var brackDif = [];
  var brackSame = [];
  for (var i = 0; i < bracketsConfig.length; i++){
    if (bracketsConfig[i][0] !== bracketsConfig[i][1]){
      brackDif.push(bracketsConfig[i]);
    }
    else {
      brackSame.push(bracketsConfig[i]);
    }
  }

  var arrOp = [arr1[0]];
  arrMain: for (var i = 1; i < arr1.length; i++){
    for (var j = 0; j < brackDif.length; j++){
      if (arr1[i] == brackDif[j][1]){
        if (arrOp[arrOp.length - 1] == brackDif[j][0]){
          arrOp.pop();
          // тут переход на след i
          continue arrMain;

        }
        else {
          return false;
        }
      }
    }

    for (var j = 0; j < brackSame.length; j++){
      if (arr1[i] == brackSame[j][1]){
        if (arrOp[arrOp.length - 1] == arr1[i]){
          arrOp.pop();
          continue arrMain;
        }
        else {
          arrOp.push(arr1[i]);
          continue arrMain;
        }
      }
    }

    for (var j = 0; j < brackDif.length; j++){
      if (arr1[i] == brackDif[j][0]){
        arrOp.push(arr1[i]);
        continue arrMain;
      }
    }
  }

  if (arrOp.length > 0){
    return false;
  }
  else return true;
}

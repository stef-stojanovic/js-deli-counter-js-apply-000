a = 1
function takeANumber(katzDeliLine) {
  return a = a + 1 
}  


function nowServing(katzDeliLine) {
  if(katzDeliLine>[0]) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
var line=[];
if(katzDeliLine.length > 0) {
  for(var i=0;i<katzDeliLine.length;i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:" + line;
}
    else {
      return "The line is currently empty."
    }
}
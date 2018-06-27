var katzDeli = [];

<<<<<<< HEAD
function takeANumber(line, name) {
  line.push(name)       
  var posInLine = line.length     
  return `Welcome, ${name}. You are number ${posInLine} in line.`
}

function nowServing(line) {
  if(line.length === 0) {
   return "There is nobody waiting to be served!"
  }
  else {
    var personAtFront = line[0]
    line.shift()
    return `Currently serving ${personAtFront}.`
    }
}

function currentLine(line) {
  var numsAndNames = [];
  if(line.length === 0) {
    return "The line is currently empty."
  }
  else {
    for(let i = 0; i<line.length; i++) {
      var currPos = i+1;
      var person = line[i]
      numsAndNames.push(` ${currPos}. ${person}`)
    }
    var list = numsAndNames.toString()
    return `The line is currently:${list}`
    }
}


=======
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)       //add name to queue
  var posInLine = katzDeliLine.length     //what there number in queue will be once added
  return `Welcome, ${name}. You are number ${posInLine} in line.`
}

function nowServing() {
  if(katzDeliLine == []) {
    ""
  }
}
>>>>>>> 2df4a765ed2b64a440a691dbd34538306f10f554

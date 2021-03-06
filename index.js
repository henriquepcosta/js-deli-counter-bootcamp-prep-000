function takeANumber(line, client) {
  line.push(client);
  return `Welcome, ${client}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  var oldLine = [...line];
  line.shift();
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${oldLine[0]}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var current = [];
    for (var i = 0; i < line.length; i++) {
      current.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:${current}`;
  }
}

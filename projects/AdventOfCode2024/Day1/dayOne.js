const outputSource = document.getElementById('output')
document.getElementById('file').onchange = function() {
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function() {
    // Entire file
    const text = this.result;
    outputSource.innerText = text

    // By lines
    var lines = text.split('\n');
    let a = [];
    let b = [];
    for (var line = 0; line < lines.length; line++) {
      let c = lines[line].split(' ');
      console.log(lines[line]);
      a.push(c[0]);
      b.push(c[1]);
    }
    console.log(a);
    console.log(b);
  };
  reader.readAsText(file);
};
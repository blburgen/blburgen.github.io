const $output = document.getElementById('output')
document.getElementById('file').onchange = function() {
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function() {
    // Entire file
    const text = this.result;
    $output.innerText = text

    // By lines
    var lines = text.split('\n');
    for (var line = 0; line < lines.length; line++) {
      console.log(lines[line]);
    }
  };
  reader.readAsText(file);
};
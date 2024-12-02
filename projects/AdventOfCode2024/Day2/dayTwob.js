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
    let answer = 0;
    let answerTwo = 0;
    for (var line = 0; line < lines.length; line++) {
      // creates "c" array which is a line from the uploaded text
      a = [];
      let c = lines[line].trim().split(' ');
      // creates "a" array that is "c" array without blanks
      for (let d = 0; d < c.length; d++){
        if (c[d] != "") {
          a.push(c[d]);
        };
      };
      // inital conditions for testing 
      let test = true;
      let dampener = 1;
      let correction = 0;
      // tests the line if is going down in numbers
      if (((a[0] - a[a.length - 1]) < 0 && (a[0] - a[1]) < 0) || ((a[1] - a[a.length - 2]) < 0 && (a[1] - a[2]) < 0)){
        for (let e = 1; e < a.length; e++){
          if(a[e-1-correction] - a[e] < 0){
            if(Math.abs(a[e-1-correction] - a[e]) > 0.5 &&  Math.abs(a[e-1-correction] - a[e]) < 3.5){
              correction = 0;
              test = true;
            } else {
              if (e == 2 && correction == 1){
                correction = 0;
                if (a[e-1] - a[e] < 0){
                  if(Math.abs(a[e-1] - a[e]) > 0.5 &&  Math.abs(a[e-1] - a[e]) < 3.5){
                    test = true;
                  } else {
                    test = false;
                    break;
                  };
                } else {
                  test = false;
                  break;
                };
              } else {
                if(dampener == 1){
                  test = true;
                  dampener = 0;
                  correction = 1;
                } else {
                  test = false;
                  break;
                };
              };
            };
            test = true;
          } else {
            if (e == 2 && correction == 1){
              correction = 0;
              if(a[e-1] - a[e] < 0){
                if(Math.abs(a[e-1] - a[e]) > 0.5 &&  Math.abs(a[e-1] - a[e]) < 3.5){
                  test = true;
                } else {
                    test = false;
                    break;
                };
              } else {
                test = false;
                break;
              };
                test = true;
            } else {
              if(dampener == 1){
                test = true;
                dampener = 0;
                correction = 1;
              } else {
                test = false;
                break;
              };
            };
          };
          test = true;
        }
      } else if (((a[0] - a[a.length - 1]) > 0 && (a[0] - a[1]) > 0) || ((a[1] - a[a.length - 2]) > 0 && (a[1] - a[2]) > 0)){
        for (let e = 1; e < a.length; e++){
          if(a[e-1-correction] - a[e] > 0){
            if(Math.abs(a[e-1-correction] - a[e]) > 0.5 &&  Math.abs(a[e-1-correction] - a[e]) < 3.5){
              correction = 0;
              test = true;
            } else {
              if (e == 2 && correction == 1){
                correction = 0;
                if(a[e-1] - a[e] > 0){
                  if(Math.abs(a[e-1] - a[e]) > 0.5 &&  Math.abs(a[e-1] - a[e]) < 3.5){
                    test = true;
                  } else {
                    test = false;
                    break;
                  }
                } else {
                  test = false;
                  break;
                };
              } else {
                if(dampener == 1){
                  test = true;
                  dampener = 0;
                  correction = 1;
                } else {
                  test = false;
                  break;
                };
              };
            };
          } else {
            if (e == 2 && correction == 1) {
              if(a[e-1] - a[e] > 0){
                correction = 0;
                if(Math.abs(a[e-1] - a[e]) > 0.5 &&  Math.abs(a[e-1] - a[e]) < 3.5){
                  test = true;
                } else {
                  test = false;
                  break;
                };
              } else {
                test = false;
                break;
              };
            } else {
              if(dampener == 1){
                test = true;
                dampener = 0;
                correction = 1;
              } else {
                test = false;
                break;
              }
            };
          };
          test = true;
        };
      } else {
        test = false;
      };
      b.push(test);
      if (test == true) {
        answer += 1;
        b.push("#" + answer + " ");
        b.push(a + "\n");
      };
      if (test == false){
        answerTwo += 1;
        b.push("#" + answerTwo + " ");
        b.push(a + "\n");
      };
    };
    
    outputSource.innerText = ("Number of Safe reports?\nSafe:\n" + answer + "\nBad:\n " + answerTwo +
      "\n\nAnswer List:\n" + b /*+
      "\n\nYour provided lists\n" + text*/);
  };
  reader.readAsText(file);
};
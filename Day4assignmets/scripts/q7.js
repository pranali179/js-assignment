document.getElementById("btn").onclick = function () {
    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);
  
    for (j = start; j <= end; j++) {
      if (j == 1) {
        continue;
      }
      flag = 1;
      for (i = 2; i <= j / 2; ++i) {
        if (j % i == 0) {
          flag = 0;
          break;
        }
      }
      if (flag == 1) {
        console.log(j);
      }
    }
  };
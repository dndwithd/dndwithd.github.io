
function savedata() {
    var a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(JSON.stringify(pop)));
    a.setAttribute('download', 'population.json');
    a.setAttribute("style", "display: none;");
    document.body.appendChild(a); 
    a.click()
    a.remove()
};

function loaddata() {
    var files = document.getElementById('selectFiles').files;
  console.log(files);
  if (files.length <= 0) {
    return false;
  }

  var fr = new FileReader();

  fr.onload = function(e) { 
  console.log(e);
    pop = JSON.parse(e.target.result).slice();
    //var formatted = JSON.stringify(result, null, 2);
    //document.getElementById('result').value = formatted;
    //document.getElementById("ts").innerHTML += "<br>e.target.result:" + e.target.result;
  }

  fr.readAsText(files.item(0));
    pop = JSON.parse(fr.result).slice();
    //document.getElementById("ts").innerHTML += "<br>pop.length:" + pop.length;
    display(pop)
};



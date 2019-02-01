
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
	//console.log(files);
	if (files.length <= 0) {
		return false;
	}

	var fr = new FileReader();

	fr.onload = function(e) { 
		//console.log('onload '+e.target.result);
		pop = JSON.parse(e.target.result).slice();
		//console.log('onload '+pop);
		display(pop);
	}

	//console.log(files);
	fr.readAsText(files.item(0));
	//console.log('readAsText '+JSON.stringify(fr));
    //pop = JSON.parse(fr.result).slice();
    //display(pop);
};

function generate() {
	var indx = 0, popsize, poplen=0, fullpop=[];
	popsize = document.getElementById('popsize');
	poplen = popsize.value;
	//console.log("fullpop " + fullpop.length);
	for (indx=0; indx<poplen; indx++) {
		fullpop.push({});
	};
	//console.log("fullpop " + fullpop.length);
	pop = gen(skel, fullpop);
    display(pop);
};

function source() {
	var txt='';
	txt += '<form>';
	// population name
	//txt += 'Name: <input type="text" id="name"></input><br>';
	//txt += 'Source: <input type="text" id="source"></input>';
	// load
	txt += '<br>File: <input type="file" id="selectFiles" value="Import" />';
	txt += ' <input type="button" onclick="loaddata()" value="Load"></input>';
	// save
	txt += ' <input type="button" onclick="savedata()" value="Save"></input>';
	// gen
	txt += '<br>Size: <input type="number" id="popsize" value="100"></input>';
	txt += '<input type="button" onclick="generate()" value="Generate"></input>';
	txt += '</form>';
	// display interface
	//txt = '';
	srcp = document.getElementById('src');
	srcp.innerHTML = txt;
};

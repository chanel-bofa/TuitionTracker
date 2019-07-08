var selected = 0; 
var curRole; 
var thing = "asfsasdf";
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.onload = function(){
	curRole = getParameterByName('curRole'); 
	document.body.classList.remove("fade-out");
	if(curRole == "false"){
		document.getElementById("exploreBtn").style.display = "block";
	}
	else{
		document.getElementById("exploreBtn").style.display = "none";
	}
}

function role(button_number){
	switch(button_number){
		case 1: 
			document.getElementById("dText").innerHTML = des_resp_dict['SQA Tester'][0]; 
			document.getElementById("rText").innerHTML = des_resp_dict['SQA Tester'][1];	
			break; 
		case 2: 
			document.getElementById("dText").innerHTML = des_resp_dict['SQA Lead'][0]; 
			document.getElementById("rText").innerHTML = des_resp_dict['SQA Lead'][1];	
			break; 
		case 3: 
			document.getElementById("dText").innerHTML = des_resp_dict['SQA Senior Lead'][0]; 
			document.getElementById("rText").innerHTML = des_resp_dict['SQA Senior Lead'][1];	
			break; 
		case 4: 
			document.getElementById("dText").innerHTML = des_resp_dict['SQA Manager'][0]; 
			document.getElementById("rText").innerHTML = des_resp_dict['SQA Manager'][0];
			break; 
		case 5: 
			document.getElementById("dText").innerHTML = des_resp_dict['SQA Senior Manager'][0]; 
			document.getElementById("rText").innerHTML = des_resp_dict['SQA Manager'][0];	
			break; 
		default: 
			alert("Something is terribly wrong");
			break; 
	}
	selected = button_number; 
}
		
function select(){
	if(selected == 0){
		alert("Please select a role");
	}
	else{
		var id = 20 + selected; 
		if(curRole == "false"){
				window.location = '../index.html?role=' + id;
			}
		else{
			var windowstring = "path.html"+ "?curRole=" +curRole +"&newRole=" + id;
			window.location = windowstring;
		}
	}
	return false; 
	
}

function explore(){
	if(selected == 0){
		alert("Please select a role");
	}
	else{
		var id = 20 + selected;
		window.location = 'explore.html?role=' + id; 
	}
	return false; 
	
}
var role; 

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
	document.body.classList.remove("fade-out");
	role = getParameterByName('role');
	//alert("role is " + role + "..");
	if(role){
		//alert("role exists");
		document.getElementById("title").innerHTML = "Find a role you're interested in: "; 
		//windowstring += "?newRole=" + role; 
	}
	else{
		document.getElementById("title").innerHTML = "Select your current role"; 
	}
}

function nextWindow(windowstring){
	if(role){ //selecting currentRole
		window.location.href = windowstring + "?curRole=" + role; 
	}
	else{
		window.location.href = windowstring+'?curRole=false';
	}
}

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
	var role = getParameterByName('role');
	var des = document.getElementById("des");
	var res = document.getElementById("res");
	if(role){
		var paths = explore_dict[role]; 
		var row1 = document.getElementById("row1");
		var i;
		var row1_content = ""; 
		for(i = 0; i < paths[0].length; i++){
			row1_content += "<button class= \"btn btn-primary btn-arrow-right\" onclick=\"clicked(\'" + paths[0][i] + "\')\">" + paths[0][i] + "</button>";
		}
		row1.innerHTML = row1_content; 

		var row2 = document.getElementById("row2");
		var row2_content = ""; 
		for(i = 0; i < paths[1].length; i++){
			row2_content += "<button class= \"btn btn-primary btn-arrow-right\" onclick=\"clicked(\'" + paths[1][i] + "\')\">" + paths[1][i] + "</button>"
		}
		row2.innerHTML = row2_content;

		var row3 = document.getElementById("row3");
		var row3_content = ""; 
		for(i = 0; i < paths[2].length; i++){
			row3_content += "<button class= \"btn btn-primary btn-arrow-right\" onclick=\"clicked(\'" + paths[2][i] + "\')\">" + paths[2][i] + "</button>"
		}
		row3.innerHTML = row3_content
	}
	else{
		alert('oh no');
	}
}
function clicked(arg){ 
	des.innerHTML = des_resp_dict[arg][0];
	res.innerHTML = des_resp_dict[arg][1];
}
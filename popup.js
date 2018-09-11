
//TuitionTracker API key: AIzaSyABcrN8GxdlyIopo1bF2oFSdo0ynKBiyBY
/*
References: 
Stopwatch: https://jsfiddle.net/Daniel_Hug/pvk6p/
*/
$(function(){
	var mykey = '<AIzaSyABcrN8GxdlyIopo1bF2oFSdo0ynKBiyBY>'; 
	var calendarid = '<5se0j78hco4a3r2tuu9hcv6228@group.calendar.google.com>'; 
	var hasClass = true; //change later
	seconds = 0; 
	minutes = 0; 
	hours = 0; 
	wastednuggets = 0; 
	chrome.storage.sync.get(['minutecost', 'pastseconds', 'pastminutes', 'pasthours', 'pastnuggets', 'calendarID'], function(info){
		$('#perminute').text(info.minutecost); 
		seconds = pastseconds; 
		minutes = pastminutes; 
		hours = pasthours; 
		wastednuggets = pastnuggets; 
		calendarid == calendarID; 
	})
	
	if(!hasClass){
		$('#class').text("You do not have class right now");
		$('#class').css('color', 'black');
		$('#text').css('visibility', 'hidden'); 
	}

	if(hasClass){
		$('#class').text("You have class right now.");
		$('#class').css('color', 'red');
		$('#text').css('visibility', 'visible'); 
		$('#nuggets').text(wastednuggets); 
		t = setTimeout(add, 1000); 
	}
	//function that updates the nuggets and stopwatch
	function add(){
		seconds++;
	    if (seconds >= 60) {
		        seconds = 0;
		        minutes++;
		        if (minutes >= 60) {
		            minutes = 0;
		            hours++;
	        	}
	    	}
		}
		$('#total').text = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
		(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
		(seconds > 9 ? seconds : "0" + seconds);
		t = setTimeout(add, 1000); 


}); 

$(function(){
	//get tuition from storage
	chrome.storage.sync.get('tuition', function(info){
		$('#tuition').val(info.tuition); 
	})

	$('#save').click(function(){ //if the tuition is changed
			var newTuition = $('#tuition').val(); 
			if(tuition){
				chrome.storage.sync.set({'tuition': newTuition}, function(){
				}); 	
			}
			var newCalendarID = $('#calendar').val(); 
			if(calendar){
				chrome.storage.sync.set({'calendarID': newCalendarID}, function(){
				}); 	
			}
			close(); 
		});

	$('#resetTime').click(function(){ //if resetTotal was clicked
		chrome.notifications.clear('resetNotif');
		chrome.storage.sync.set({'total': 0}, function(){
		var notifOptions = {
						type: 'basic', 
						iconUrl: 'icon48.png', 
						title: 'Total reset!', 
						priority: 1,
						message: "Total reset to 0!"
					};

					chrome.notifications.create('resetNotif', notifOptions);
		}); 
	});
});
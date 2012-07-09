var onColour  = "#ffffff";
var offColour = "#333333";

function resetDisplay() {
	$("#hourone").css("color", offColour);
	$("#hourtwo").css("color", offColour);
	$("#hourthree").css("color", offColour);
	$("#hourfour").css("color", offColour);
	$("#hourfive").css("color", offColour);
	$("#hoursix").css("color", offColour);;
	$("#hourseven").css("color", offColour);
	$("#houreight").css("color", offColour);
	$("#hournine").css("color", offColour);
	$("#hourten").css("color", offColour);
	$("#houreleven").css("color", offColour);
	$("#hourtwelve").css("color", offColour);
	$("#it").css("color", offColour);
	$("#is").css("color", offColour);
	$("#oclock").css("color", offColour);
	$("#to").css("color", offColour);
	$("#past").css("color", offColour);	
	$("#minute5").css("color", offColour);
	$("#minute10").css("color", offColour);
	$("#a").css("color", offColour);
	$("#minute15").css("color", offColour);
	$("#minute20").css("color", offColour);
	$("#minute30").css("color", offColour);
}

function updateHours(hours) {
	switch (hours) { 
		case 1:
			$("#hourone").css("color", onColour);
			break;
		case 2:
			$("#hourtwo").css("color", onColour);
			break;
		case 3: 
			$("#hourthree").css("color", onColour);
			break;
		case 4:
			$("#hourfour").css("color", onColour);
			break;
		case 5:
			$("#hourfive").css("color", onColour);
			break;
		case 6: 
			$("#hoursix").css("color", onColour);;
			break;
		case 7:
			$("#hourseven").css("color", onColour);
			break;
		case 8:
			$("#houreight").css("color", onColour);
			break;
		case 9: 
			$("#hournine").css("color", onColour);
			break;
		case 10:
			$("#hourten").css("color", onColour);
			break;
		case 11:
			$("#houreleven").css("color", onColour);
			break;
		case 12:
			$("#hourtwelve").css("color", onColour);
			break;
	}
}

function update() {
	resetDisplay();
	
	var currentTime = new Date()
	var hours       = currentTime.getHours();
	var minutes     = currentTime.getMinutes();

	$("#it").css("color", onColour);
	$("#is").css("color", onColour);

    var nearestFiveMinutes = Math.floor(minutes/5);
	var minutesToTheHour = false; 

	if (nearestFiveMinutes == 0) {
		$("#oclock").css("color", onColour);
	}
	else if (nearestFiveMinutes > 6) {
        	nearestFiveMinutes =  12 - nearestFiveMinutes ;

		$("#to").css("color", onColour);

                minutesToTheHour = true; 
	}
	else {
		$("#past").css("color", onColour);	
	}

	switch (nearestFiveMinutes) { 
		case 0:
			// nothing to show
			break;
		case 1: // 5
			$("#minute5").css("color", onColour);
			break;
		case 2: // 10
			$("#minute10").css("color", onColour);
			break;
		case 3: // 15
			$("#a").css("color", onColour);
			$("#minute15").css("color", onColour);
			break;
		case 4: //20 
			$("#minute20").css("color", onColour);
			break;
		case 5: // 25
			$("#minute20").css("color", onColour);
			$("#minute5").css("color", onColour);
			break;
		case 6: // 30
			$("#minute30").css("color", onColour);
			break;
	}

	if (minutesToTheHour) {
	   hours += 1;
	}		

	if (hours == 0) {
		hours = 12;
	}
	else if (hours > 12) {
		hours = hours - 12;
	}

	updateHours(hours);
}

$(document).ready(function(){
	update();
	$(document).everyTime(1000, function(i) {update();});
});

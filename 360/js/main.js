var image_set = [];
for(i=1;i<=100;i++) {
	i = i + "";
	if(i.length === 1) {
		var out_index = "0" + i;
	}
	else if(i.length === 3) {
		var out_index = "00";
	}
	else {
		var out_index = i + "";
	}
	var name = "42026JUNE11_apiqehome_01_turntable429_" + out_index + ".jpg";
	image_set.push(name);
}

$(document).ready(function() {
	$('#360').reel({
		frames: 100
		,rows: 10
		,footage: 10
		//,indicator: 10
		,speed: .2
		,path: "images/sequence/"
		,images: image_set
	});
});
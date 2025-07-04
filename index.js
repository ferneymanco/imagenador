$(document).ready(function(){
	var vel;
	var paths = [];
    function config(){
    }
    function sleep(ms){
        return new Promise(resolve=> setTimeout(resolve,ms));
    }
    function clear(){
        $('#first_img').html('');
        $('#second_img').html('');
    }
	function start(){
        
		paths = [
			['1a.png','1b.png'],
			['2a.png','2b.png'],
			['3a.png','3b.png'],
			['4a.png','4b.png'],
			['5a.png','5b.png'],
			['6a.png','6b.png'],
			['7a.png','7b.png'],
			['8a.png','8b.png'],
		];
	}

    config();

	start();

    async function print(){
        clear();
        var img = Math.floor( Math.random() * ( Object.keys( paths ).length-1 ) );
        $('#first_img').html('<img src="assets/math/'+paths[img][0]+'"/>');
        await sleep(vel/2);
        $('#first_img').html('');
        $('#second_img').html('<img src="assets/math/'+paths[img][1]+'"/>');
        await sleep(vel/2);
        $('#second_img').html('');
        paths.splice(img,1);
        if(paths.length<1) {
			start();
            //return;
		}
    }

	vel = prompt("Please enter your velocity:", "6")*1000;
    //print();
    var intervalID = setInterval(print,vel)

});
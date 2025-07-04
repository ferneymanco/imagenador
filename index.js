var paths = [];
var second = false;
document.addEventListener('DOMContentLoaded',function(){
	var vel;
    function config(){
        const mathCount = 8;
        return {'_length':mathCount};
    }
    function sleep(ms){
        return new Promise(resolve=> setTimeout(resolve,ms));
    }
    function clear(){
        first_img.innerHTML = '';
        second_img.innerHTML = '';
    }
	function start(){
		for (let i = 1; i < config()._length+1; i++) {
            paths.push([i+'a.png',i+'b.png']);
        }
	}

    config();

	start();

    async function print(){
        clear();
        var img = Math.floor( Math.random() * ( Object.keys( paths ).length-1 ) );
        first_img.innerHTML = '<img src="assets/math/'+paths[img][0]+'"/>';
        await sleep(vel/2);
        first_img.innerHTML = '';
        second_img.innerHTML = '<img src="assets/math/'+paths[img][1]+'"/>';
        await sleep(vel/2);
        second_img.innerHTML ='';
        paths.splice(img,1);
        if(paths.length<1) {
			start();
		}
        print();
    }

	//vel = prompt("Please enter your velocity:", "6")*1000;
    let first_img = document.getElementById('first_img')
    let second_img = document.getElementById('second_img')
    //print();
    function nexter(){
        clear();
        if (!second){
            var img = Math.floor( Math.random() * ( Object.keys( paths ).length-1 ) );
            var img = Math.floor( Math.random() * ( Object.keys( paths ).length-1 ) );
            first_img.innerHTML = '<img src="assets/math/'+paths[img][0]+'"/>';
            second = true;
        }

        if(second){
            var img = Math.floor( Math.random() * ( Object.keys( paths ).length-1 ) );
            first_img.innerHTML = '<img src="assets/math/'+paths[img][1]+'"/>';
            second = false;
        }
        paths.splice(img,1);
        if(paths.length<1) {
			start();
		}
    }

    document.getElementById('next').addEventListener('click', nexter);

});


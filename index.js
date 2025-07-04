var second = false;
var indexes = [];
var index = 0;

function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

document.addEventListener('DOMContentLoaded',function(){
	var vel;
    function config(){
        const mathCount = 8;
        let numbers = [];
        for (let i = 1; i < mathCount+1; i++) {
            numbers.push(i);
        }
        shuffleArray(numbers);
        return {
            'numbers': numbers,
        };
    }

    function sleep(ms){
        return new Promise(resolve=> setTimeout(resolve,ms));
    }

    function clear(){
        first_img.innerHTML = '';
        second_img.innerHTML = '';
    }
    
	function start(){
		indexes = config().numbers;
    }

    let first_img = document.getElementById('first_img')
    let second_img = document.getElementById('second_img')

    function nexter(){

        clear();

        if(index === 0){
            index = indexes.pop();
        }
        
        if (second === false){
            first_img.innerHTML = '<img src="assets/math/'+index+'a.png" style="height=250px; width: auto;"/>';
            second = true;
            return;
        }

        if(second){
            second_img.innerHTML = '<img src="assets/math/'+index+'b.png" style="height=250px; width: auto;"/>';
            second = false;
            index = 0;
            if(indexes.length<1) {
                start();
            }
        }
        
    }

    document.getElementById('cursor').addEventListener('click', nexter);
    
    start();
});


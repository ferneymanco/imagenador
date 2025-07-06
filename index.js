var second = false;
var indexes = [];
var index = 0;
var category_name = 'math';
var subcategory_name = 'differential_calculus';
var base_path = `assets/${category_name}/${subcategory_name}/`;
var max_items = 30;

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
        let numbers = [];
        for (let i = 1; i < max_items+1; i++) {
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
        second = false;
        index = 0;
        first_img.innerHTML = 'Touch to start';
    }

    let first_img = document.getElementById('first_img')
    let second_img = document.getElementById('second_img')

    function nexter(){

        clear();
        
        
        if (second === false){
            index = indexes.pop();
            first_img.innerHTML = `<img src="${base_path+index}a.png" style="height=250px; width: auto;"/>`;
            second = true;
            return;
        }

        if(second){
            second_img.innerHTML = `<img src="${base_path+index}b.png" style="height=250px; width: auto;"/>`;
            second = false;
            if(indexes.length<1) {
                start();
            }
        }
        
    }

    setTimeout(
        function(){    
            document.getElementById('cursor').addEventListener('click', nexter);
        },
        500
    );
    

    function setting(){
        clear();
        const  categories = [
            ['math', [['differential_calculus',30], ['integral_calculus',20]]],
            ['biology', [['general_chemistry',38], ['organic_chemistry',18]]]
        ];
        let setter = document.getElementById('setter_popup');
        setter.style.display = 'block';
        categories.forEach((category, index) => {
            let catDiv = document.createElement('div');
            catDiv.innerHTML = `<h3 class="category-title">${category[0]}</h3>`;
            category[1].forEach(subcat => {
                let subButton = document.createElement('button');
                subButton.innerText = subcat[0];
                subButton.className = 'subcategory-button';
                subButton.onclick = function() {
                    category_name = category[0];
                    subcategory_name = subcat[0];
                    base_path = `assets/${category_name}/${subcategory_name}/`;
                    setter.style.display = 'none';
                    max_items = subcat[1];
                    start();
                };
                catDiv.appendChild(subButton);
            });
            setter.appendChild(catDiv);
        });
    }

    document.getElementById('setter').addEventListener('click', setting);
    start();
});




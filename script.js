let disply = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';
buttonsArray.forEach(btn => {
    btn.addEventListener('click',(e) => { 
        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            disply.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            disply.value = string;
        }else if(e.target.innerHTML == '='){
            string = eval(string);
            disply.value = string;
        }else{
            string += e.target.innerHTML;
        disply.value = string;
        }
    });
});
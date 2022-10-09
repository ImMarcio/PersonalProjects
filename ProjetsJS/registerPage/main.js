var btn = document.getElementById('btn-div');
var container = document.querySelector('.register-box');

btn.addEventListener('click',function(){
    if(container.style.dysplay === 'none'){
        container.style.display = 'block';
    
    }
    else
    {
        container.style.display = 'block';
    }
});


var submit = document.getElementById('submit');

submit.addEventListener('click',function(){
    if(container.style.display === 'block'){
        container.style.display = 'none'
    }
});



console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHtml = 'New value';

//move the image
var img = document.getElementById('mandi');
var marginLeft= 0;
    function moveRight () {
    marginLeft = marginLeft+1;
    ing.style.marginLeft = marginLeft + 'px';
    }
    ing.onclick = function () {
    var interval = setInterval (moveRight, 50);
    };
    
//counter code
var button = document.getElementById('counter');
var counter = 0;

button.click = function(){
    
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.InnerHTML = conter.toString();
};

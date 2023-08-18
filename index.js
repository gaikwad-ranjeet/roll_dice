var dice = {
    side: 6,
    roll: function()  {
        var randomNumber = Math.floor(Math.random()* this.side) + 1;
        return randomNumber;
    }
}

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

var button = document.getElementById('button');
button.onclick = function(){
    var result = dice.roll();
    printNumber(result);
};

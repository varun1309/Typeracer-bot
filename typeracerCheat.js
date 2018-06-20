// Autofill Next Word

count = 0;

function printNext() {
  word = ansArr[count];
  inputs[0].value = word;
  inputs[0].click();
  count++;
}


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        printNext();
    }
}


//Update the below class name as the class names are dynamic
var printed = '.zGoooWyQ';
ans = "";
for(i=0; i<$(printed).children.length; i++){
    ans = ans + $(printed).children[i].innerHTML;
}
ansArr = ans.split(' ');

inputs = document.getElementsByTagName('input');
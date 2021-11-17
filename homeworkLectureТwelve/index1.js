var numbers = [2,4,5,6,8,10,-120,120,65,48,98,56,-1,48];
var maxValue = numbers[0];
for (var i=1; i < numbers.length; i++){
    if (numbers[i] > maxValue){
        maxValue = numbers[i]
    }
}
console.log(maxValue);
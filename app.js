var myArray =[[1,2],[3,4]]

for(let i =0;i < myArray.length;i++){
for(let j =0;j < myArray[i].length;j++){
    console.log([i],[j]);
}}

function myFunc(val, val2){
    if (val > val2) {
        return val;
    }
    if (val < val2)
    return val2;

}
console.log(myFunc(30, 3))

function anotherFunc(val, str){
    if (val==str){
        return "they are the same!"
    }
    if (val > str){
        return "thats a big val"
    }
    else{
        return "thats a big str"
    }
}
console.log(anotherFunc(88,"poop"))
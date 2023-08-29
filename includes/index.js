var arr1 = ['a','b','c','d','e'];
// /*console.log(arr1[3])
// console.log(arr1.length)*/

var g = prompt('type a letter'); 
var h = prompt('another one')   

if (arr1.includes(g) && arr1.includes(h)) {
   
document.getElementById('x').textContent='we have ' + g + ' and ' + h + ' in the array';
}else{
    document.getElementById('x').textContent=`one of them is not in the array`
}
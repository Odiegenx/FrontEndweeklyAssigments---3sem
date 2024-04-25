
/// 1.1
let names = ["Lars","Peter","Jan","Bo"];

const shortName = x => {
    return x.length <= 3;
}
const addSurName = x => {
    return x + " Doe";
}

console.log('-----1.1.2 and 1.1.3-----');

console.log(myFilter(names,shortName));
console.log(myMap(names,addSurName));

console.log('--------------------------');


function myFilter(array,callback){
    return array.filter(callback);
}
function myMap(array,callback){
    return array.map(callback);
}

// 1.2
console.log('----1.2----');

Array.prototype.myFilter = function(callback){
    return this.filter(callback);    
}

Array.prototype.myMap = function(callback){
    return this.map(callback);    
}
const filterednameArr = names.myFilter(shortName); 
console.log(filterednameArr);

const mapednameArr = names.myMap(addSurName); 
console.log(mapednameArr);

function myFilter2(callback){
    return callback;
}
function myMap2(callback){
    return callback;
}
console.log('-------------------');
// 1.3
//document.addEventListener( "DOMContentLoaded",function() {

const elements = document.getElementsByTagName('div');
for(let prop of elements){
    prop.style.backgroundColor = 'rgb(222,120,0)';
}
//});

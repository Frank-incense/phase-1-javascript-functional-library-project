function myEach(collection, callback) {
    let arr;
    if (typeof collection === "object"){
        arr = Object.values(collection)
    }
    for (let i = 0; i<arr.length; i++){
        callback(arr[i])
    }
    return collection
}

function myMap(collection, callback){
    let arr;
    if (typeof collection === "object"){
        arr = Object.values(collection)
    }
    for (let i = 0; i<arr.length; i++){
        arr[i] = callback(arr[i])
    }
    return arr
}
// myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });

function myReduce(collection, callback, acc){
    let arr;
    if (typeof collection === "object"){
        arr = Object.values(collection);
    }
    
    for (let i = 0; i<arr.length; i++){
        if(!acc){
            acc = arr[i];
            i++;
        }
        acc = callback(acc ,arr[i])
    }
    return acc
}

function myFind(collection, predicate){
    let arr;
    if (typeof collection === "object"){
        arr = Object.values(collection);
    }
    for (let i = 0; i<arr.length; i++){
        if (predicate(arr[i])){
            return arr[i]
        }
    }
}

function myFilter(collection, predicate){
    let arr;
    const resp = []
    if (typeof collection === "object"){
        arr = Object.values(collection);
    }
    for (let i = 0; i<arr.length; i++){
        if (predicate(arr[i])){
            resp.push(arr[i])
        }
    }
    return resp
}
function mySize(collection){
    let arr;
    if (typeof collection === "object"){
        arr = Object.values(collection);
    }
    return arr.length
    
}
function myFirst(arr, n){
    let arrCopy = [];
    if (!n){
        return arr[0]
    }
    for (let i = 0; i < n; i++){
        arrCopy.push(arr[i])
    }
   
    return arrCopy
}

function myLast(arr, n){
    let arrCopy = [];
    if (!n){
        return arr[arr.length-1]
    }
    for (let i = arr.length - n; i < arr.length ; i++){
        arrCopy.push(arr[i])
    }
    return arrCopy
}

function myKeys(object){
    let arr = [];
    for (let key in object){
        arr.push(key)
    }
    return arr
}

function myValues(object){
    let arr = [];
    for (let  val in object){
        arr.push(object[val])
    }
    return arr
}

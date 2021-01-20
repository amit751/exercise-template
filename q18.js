function index(arr, value){
for(let i=0 ; i< arr.length; i++){
    if(arr[i]===value){
        return i;
    }
    
}
return "no such value";

}

arr1=[0,9,8,77];
console.log(index(arr1,11));
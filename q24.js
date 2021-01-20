function remove(arr){
    const arrOut= ['null', '0', 'false', 'undefined','NaN', '"' ]
    const arrN = [];
    for( let i =0 ; i<arr.length ; i++){
        check =arr[i];
        if(!arrOut.includes(arr[i])){
            arrN.push(arr[i]);
        }
        
    }
    return arrN;
}








let test1 =[ 34, 1 , 0 , -11 , 'null', '0', 'false', 'undefined','NaN', '""""' , '"', '$$^"""66' ];
console.log(remove(test1));

// else if(typeof(arr[i])!==String  &&  check.split("'")!== 0){
//     arrN.push(arr[i]);
// }else{

// }

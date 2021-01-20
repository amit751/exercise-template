
let test1 =[ 34, 1 , 0 , -11 ];
let test2=[ 0 , 1 , -11];
console.log(test1);
console.log(test2);
console.log(union(test1 ,test2));




function union(arr1, arr2){
    let unit =[];
    for(let i =0 ; i<arr1.length ; i++){
        if(!arr2.includes(arr1[i])){
            unit.push(arr1[i]);
        }
            

    }
    unit= unit.concat(arr2);
    return unit;
}   
    
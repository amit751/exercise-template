function props(arr,prop){
    const arrN =[];
    for(let i=0 ; i<arr.length ; i++){
        arrN.push(arr[i][prop]);
    }
    return arrN
    
}

let test1 =[ { "legs": 34 , ori: 56 } , { "legs":35 , ori: 56 } , {"legs":36 , ori: 56 }];
console.log(props(test1,"legs"));

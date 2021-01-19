function evenThen (num){
    let stNum;
    const arr =[];
    while(num !== 0){
        let digit = num%10;
        arr.unshift(digit);
        num = (num-digit)/10;
    }
    console.log(arr);

    for( let i=0 ; i<(arr.length-1) ; i++ ){
        if(arr[i]%2 === 0 && arr[i+1]%2 === 0 ){
            stNum += arr[i] + "-" ; 
        }else{
            stNum+= arr[i]; 
        }
    }
    console.log(stNum);
}

evenThen(122334234);
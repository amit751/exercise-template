


function leapt(arr){
const years=[];
for(let i=0 ; i<arr.length ; i++ ){
    if(!(arr[i]%4)){
        if(arr[i]%100){
            years.push(arr[i]);  
        }else if( !(arr[i]%400)){
            years.push(arr[i]) 

        }
    }
}
return years;
}



const test=[2016, 2020, 2024, 2100, 2200,2000, 2400];
console.log(leapt(test));





// arr[i]%100 ? years.push(arr[i]) : !(arr[i]%400) ? years.push(arr[i]): ;  
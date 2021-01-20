
// function maximum(arr){
//     let max=0;
//     for( let i=0 ; i< arr.length ; i++){
//         if(max<arr[i]){
//             max= arr[i];
//         }
//     }
//     return max
// }



let finalArr=[];
let place=0;
function sort(arr){
    for (let i=0 ; i<arr.length ; i++){
        for(let j = 0 ; j<arr.length-1 ; j++){
            if(arr[0]<arr[j+1]){
                place++;
            }
        }
        finalArr[place]=arr[0];
        arr.push(arr.shift());
        place=0;
    }
    console.log(finalArr);
}    


const test =[34,55,0,-11,100];
sort(test);
 


// function sort(arr){
//     const arrFinal = [];
//     let arrN = arr;
//     for( let i=0 ; i< arrN.length ; i++){
//         let curentMax = maximum(arrN);
//         let bigI = arrN.indexOf(curentMax);
//         arrFinal.push(curentMax);
//         arrN[bigI]=undefined;
 
//     }
    
//     return arrFinal;
// }






// const x =undefined;
// const y = 10;
// console.log(x>y?x:y);






// if(arr[i]=== curentMax ){
//     arrFinal.push(curentMax);
//     let bigI = arr.indexOf(curentMax);
//     delete arr[bigI]

//    } 


// function sort(arr){
//     const arrFinal = [];
    
//     for( let i=0 ; i< arr.length ; i++){
//         arr[i]>arr[i+1]:
//     }
    
//     return arrFinal;
// }
// const arrFinal = [];
    // for( let i=0 ; i< arr.length ; i++){
    //     let max= maximum(arr);
    //     arrFinal.push(max);
    //     let bigI = arr.indexOf(max);
    //     arr[bigI]=undefined;
    //     console.log(max);
    //     console.log(arr);
    //     console.log(arrFinal);

    // }
    // console.log(arrFinal);
// function maximum(arr){
//     let max=0;
//     for( let i=0 ; i< arr.length ; i++){
//         if(max<arr[i]){
//             max= arr[i];
//         }
//     }
//     return max
// }
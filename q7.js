




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
 



// function findDuplicate(arr){
//     let arrN = arr;
//     for(let i =0 ; i<arrN.length ; i++){
//         let store = arrN.pop();
//         if(arrN.includes(store)){
//             console.log(store);
//         }
//     }
// }

let test =[ 34, 55 , 0 , -11 , 1 , 4 , 55 , 0 , 1 , 1];

console.log(test);
findDuplicate(test);


function findDuplicate(arr){
    let arrN = arr;
    let store =0;
    const history =[];
    for(let i =0 ; i<arrN.length ; i++){
        store = arrN.pop();
        if(arrN.includes(store)){
           
            if(!history.includes(store)){
                history.push(store);
            }

           


            
        }
    }
    console.log(history);
}
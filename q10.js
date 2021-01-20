
function print(arrE){

    for(let e=0 ;e<arrE.length ; e++ ){
        console.log("row "+ e);
        for( let i=0 ;i<arrE[e].length ; i++){
            console.log(arrE[e][i]);
        }
    }
}



const test =[[34,55,0,-11,100] , [34,55,0,100], [34,0,-11,100]];
print(test);
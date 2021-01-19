

function getelementFrom ( input , n){
    let out;
    
    const inputArr = JSON.parse(input);
    n = Number(n);
    for( let i=0 ; i<n ; i++){
       
        out = JSON.stringify(inputArr[i]);
        console.log(out);
    }


}

const arrTest = "[ 1, 2 ,3 ,4 ,5 ,6 ,7, 8, 9, 10]";  //test
getelementFrom ( arrTest , 5)



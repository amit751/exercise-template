


function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    
    
    // let inputItem = JSON.parse(input);
    const arr = [];
    arr.push(input);
    out="element "+ index(arr, input)+" : "+arr[0];  
    output.innerText = out;
}



function index(arr, value){
    for(let i=0 ; i< arr.length; i++){
        if(arr[i]===value){
            return i;
        }
        
    }
    return "no such value";
}
    console.log(out);
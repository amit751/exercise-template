function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    
    const inputChek= JSON.parse(input);
    
    if(Array.isArray(inputChek)){
        out= "true";
    }else{
        out = "fulse";
    }








    output.innerText = out;
}
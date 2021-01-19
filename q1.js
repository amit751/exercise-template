function run() {
    const n = document.getElementById("n3").value;
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    // let out;
    
    const inputArr = JSON.parse(input);
    let temp= [];
    for( let i=0 ; i<n ; i++){
        temp.push(inputArr[i]);
       
        // out = JSON.stringify(inputArr[i]);
        // console.log(out);
    }
    out=temp;

    output.innerText = out;
}
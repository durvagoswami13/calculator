function takeinput(newvalue){
    document.getElementById("display").value += newvalue;

}
function clearinput(){
 document.getElementById("display").value =" ";
}
function calculateResult(){
 let result = document.getElementById("display").value;
 document.getElementById("display").value = eval(result)
}
function deleteLast(){
 let result = document.getElementById('display').value;
 document.getElementById('display').value = result.slice(0,-1);
}
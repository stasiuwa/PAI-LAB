function summary(){
    var l1=document.getElementById('l1');
    l1=l1.value;
    l1=parseInt(l1); // pobranie wartości

    var l2=parseInt(document.getElementById('l2').value); //analogicznie tylko jedna linijka
    var s=document.getElementById('suma');
    s.value=l1+l2;
}
function credit(){
    const
        loan = parseInt(document.getElementById("loan").value),
        rate = parseInt(document.getElementById("rate").value) * 0.01,
        months = parseInt(document.getElementById("months").value),
        mon_rate = rate/12;
    let check = true;
    if (isNaN(loan) || loan < 0){
        alert("Niepoprawne dane w kwocie pożyczki");
        check = false;
    }
    if (isNaN(rate) || rate < 0){
        alert("Niepoprawne dane w oprocentowaniu");
        check = false;
    }
    if (isNaN(months) || months < 0){
        alert("Niepoprawne dane w ilości rat");
        check = false;
    }
    if (check === false) return false;

    document.getElementById("result").value=( (loan * mon_rate) / (1 - (1 / (1 + mon_rate) ** months)) ).toFixed(2);
}
function clear_numbs(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("calc_result").value = "";
}
let operation
function chooseOperation(op){
    operation = op;
    calc();
}
function calc(){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)){
        alert("Niepoprawne liczby");
        return false;
    }
    let result;
    switch (operation){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            alert("Nie wybrano działania!");
            return false;
    }
    document.getElementById("calc_result").value = result;
}
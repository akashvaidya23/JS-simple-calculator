const btn = document.querySelectorAll('.btn');
const listBtns = Array.from(btn);
let text = "";
const input = document.querySelector('.calculation');
let inputValue;
let operators = ["+","-","/","*","%"];
const focusInput = () => {
  input.focus();
}

listBtns.map((btn) => {
  btn.addEventListener("click", function(e) {
    let num = e.target.innerText;
    inputValue = input.value;
    if (num == "=") {
      let result = eval(text);
      input.value = result;
    } 
    else if (num == "C") {
      input.value = "";
      text = "";
    }
    else if(num == "+" || num == "-" || num == "*" || num == "/") {
      if(input.value == "") {
        console.log("gotcha");
        input.focus();
        return false;
      } else if(operators.includes(inputValue.split("").at(-1))) {
        console.log("False Operator");
        let length = inputValue.length;
        input.setSelectionRange(0, length);
        return false;
      } else {
        text += num;
        input.value = text;
      }
    } 
    else {
      text += num;
      input.value = text;
    }
  });
});

input.addEventListener("keyup",function(e){
  const text = e.target.value;
  if(e.keyCode == 13){ 
    const result = eval(text);
    console.log(result);
    input.value = result;
  }
});
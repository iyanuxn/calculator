const screen = document.querySelector(".display-text")
const button = document.querySelectorAll(".keys")
const operator = document.querySelectorAll(".operator")
const point = document.querySelector(".point")
const del = document.querySelector(".del")
const equal = document.querySelector(".equal")
const reset = document.querySelector(".reset")
const toggle = document.querySelector(".toggle-circle")
const css = document.getElementById("theme")
var val = ''
var num = []
var operators = []

toggle.addEventListener("click",function(){
    console.log(css.getAttribute("href"))
    if(css.getAttribute("href") == "style.css"){
        css.href = "style2.css"
    }
    else if(css.getAttribute("href") == "style2.css"){
        css.href = "style3.css"
    }
    else if(css.getAttribute("href") == "style3.css"){
        css.href = "style.css"
    }
})
//function(btn){}
button.forEach(btn => {
    btn.addEventListener("click",function(){
    ans = ''
    operators = []
    const btnval = this.value;
    if(val.charAt(val.length -1) == "0" && val.charAt(val.length -2) == ""){
        val = val.slice(0, -1)
    }
    if(val.charAt(val.length -1) == "0" && val.charAt(val.length -2) == "+"){
        val = val.slice(0, -1)
    }
    if(val.charAt(val.length -1) == "0" && val.charAt(val.length -2) == "-"){
        val = val.slice(0, -1)
    }
    if(val.charAt(val.length -1) == "0" && val.charAt(val.length -2) == "x"){
        val = val.slice(0, -1)
    }
    if(val.charAt(val.length -1) == "0" && val.charAt(val.length -2) == "/"){
        val = val.slice(0, -1)
    }
    num.push(btnval);
    val = val + btnval   
    screen.textContent = val;
    });
});

point.addEventListener("click",function(){
ans = ''
const btnval = this.value; 
if(num.includes(btnval)){
    btnval = ''
}
else{val = val + btnval
}
num.push(btnval);
screen.textContent = val;
});


operator.forEach(btn => {
    btn.addEventListener("click",function(){
    num = []
    const btnval = this.value;
    if(ans != ''){
        val = ans
    }
    if (val == '' && btnval == '/'){
        btnval = ''
    }
    if (val == '' && btnval == 'x'){
        btnval = ''
    }
    if(operators.includes('+')){
        btnval = ''
    }
    if(operators.includes('-')){
        btnval = ''
    }
    if(operators.includes('x')){
        btnval = ''
    }
    if(operators.includes('/')){
        btnval = ''
    }
    else{val = val + btnval
    }
    operators.push(btnval);
    screen.textContent = val;
    });
});

del.addEventListener("click",function(){
    val = val.slice(0, -1)
    screen.textContent = val
})

equal.addEventListener("click",function(){
    val = val.replace("x","*")
    ans = eval(val)
    valstr = (val).toString()
    if(valstr.length >= 12){
        document.querySelector(".display").style.flexDirection = "row";
    }
    ans = ans.toLocaleString("en-US")
    if(ans.length >= 20){
        document.querySelector(".display").style.flexDirection = "row";
    }
    else{document.querySelector(".display").style.flexDirection = "row-reverse";}
    screen.textContent = ans
    val = ''
})

reset.addEventListener("click",function(){
    ans = ''
    val = ''
    screen.textContent = val
})
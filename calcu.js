function display(num){
    // answer.value+=num
    answer.value=answer.value+num
}
function allclear(){
    answer.value=""
}
function evaluateexp(){
    exp= answer.value
    res=eval(exp)
    answer.value=res
    
}
function remove(){
    cuur_exp=answer.value
    answer.value=cuur_exp.slice(0,-1)
}
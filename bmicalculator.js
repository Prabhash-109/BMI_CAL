let result=document.querySelector("#result");
let calculate=document.querySelector("#button1");
let reset=document.querySelector("#button2");
const calculateBMI=()=>{
    let height=parseFloat(document.querySelector("#height").value)
    let weight=parseFloat(document.querySelector("#weight").value)
    if(height>0 && weight>0){
        let bmi=weight/((height/100)*(height/100))
        result.innerHTML="BMI :"+bmi.toFixed(2);
        
    }
    else{
        result.innerHTML="Please enter valid height and weight";
    }
}
calculate.addEventListener("click",()=>{
    calculateBMI();
})
reset.addEventListener("click",()=>{
    height.value="";
    weight.value="";
    result.innerHTML="";
})
const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const showMessage = document.querySelector("#show-message")

function dobIsLucky(){
   const dob = dateOfBirth.value ; 
   const sum = calculateSum(dob);
   if (sum &&luckyNumber.value ){
   if (sum%luckyNumber.value === 0){
    showMessage.innerText = "Your birthday is lucky ✌️ ";
   }
  else {showMessage.innerText ="Your birthday is not lucky  ☹️"}
}
else{showMessage.innerText = "* Please Enter the both fields"}}

function calculateSum(dob){
   dob = dob.replaceAll("-","");
   let sum = 0;
   for(let i=0 ; i<dob.length ; i++){
    sum = sum + Number(dob.charAt(i));
   }
   return sum; 
}





checkButton.addEventListener("click" , dobIsLucky)
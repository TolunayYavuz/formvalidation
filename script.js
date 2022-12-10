const form = document.getElementById('form');
const username = document.getElementById('username');
const mail = document.getElementById('Mail');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function alert(input,mesage){
    
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = mesage;

    div.className = 'invalid-feedback';
}

function suscess(input){
    input.className = 'form-control is-valid'

}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



  function checkRequired(input){

    if(input.value ===''){
      alert(input,"Gerekli Alan")

    }else{
      suscess(input);
    }

  }

  function checklength(input,min,max){

    if(input.value.length<min){
      alert(input, '${input.id} en az ${min} karekter olmalıdır')
    }else if(input.value.length>max){
      alert(input, '${input.id} en az ${max} karekter olmalıdır')
    }else{
      suscess(input);
    }


  }


   function checkPassword(input1,input2){
    if(input1.value !==input2.value){
      alert(input1,"Paralolar Eşleşmiyor");
    } 
   }



form.addEventListener('submit',function(e){
    e.preventDefault();



    
    checkRequired(username);
    checkRequired(mail);
    checkRequired(password)
    checkRequired(repassword);
    checklength(username,7,15);
    checkPassword(password,repassword);
  

});
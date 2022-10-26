let globalIsSubmit=false;
function validate(isSubmit = false){
    let fullName=document.getElementById('full-name').value;
    let validGender=document.getElementById('valid-gender').value;
    let checks=document.getElementsByClassName('form-check-input');
    let hobby1=document.getElementById('swimming-checkbox').checked
    let hobby2=document.getElementById('reading-novels-checkbox').checked
    let hobby3=document.getElementById('dancing-checkbox').checked
    let hobby4=document.getElementById('singing-checkbox').checked
    let error=false;
    let valid=false;
    let str='';
      
    if(isSubmit){
        globalIsSubmit=true;
    }
  if(globalIsSubmit){
    if(fullName.length>=5 && fullName.includes(' ')){
        document.getElementById('full-name-valid').style.display='block';
        document.getElementById('full-name-invalid').style.display='none';
    }else{
        document.getElementById('full-name-invalid').style.display='block';
        document.getElementById('full-name-valid').style.display='none';
        error=true;
    }


    if(validGender != 'None'){
        document.getElementById('gender-valid').style.display='block';
        document.getElementById('gender-invalid').style.display='none';
    }else{
        document.getElementById('gender-invalid').style.display='block';
        document.getElementById('gender-valid').style.display='none';
        error=true;
    }

    if(document.getElementById('swimming-checkbox').checked){
           valid=true;
    }
    else if(document.getElementById('reading-novels-checkbox').checked){
        valid=true;
    }
    else if(document.getElementById('dancing-checkbox').checked){
          valid=true;
    }
    else if(document.getElementById('singing-checkbox').checked){
           valid=true;
    }
    if(valid){
        document.getElementById('hobbies-valid').style.display='block';
        document.getElementById('hobbies-invalid').style.display='none';
    }else{
        document.getElementById('hobbies-invalid').style.display='block';
        document.getElementById('hobbies-valid').style.display='none';
        error=true;
    }

    /*for( i=0;i<4;i++){
        if(checks[i].checked === true){
            str += checks[i]+'';
        }
    } */

    let finalAlertMessage = `Hobbies of ${fullName} (${validGender}) are `
    if (hobby1) {
        finalAlertMessage = finalAlertMessage + 'Swimming and ';
    }
    if (hobby2) {
        finalAlertMessage = finalAlertMessage + 'Reading Novels and ';
    }
    if (hobby3) {
        finalAlertMessage = finalAlertMessage + 'Dancing and  ';
    }
    if (hobby4) {
        finalAlertMessage = finalAlertMessage+ 'Singing ';
    }


    if(!error && isSubmit){
           alert(finalAlertMessage)
          document.getElementById('resistraionnn').reset();
          let validFeedbacks=document.getElementsByClassName('valid-feedback');
          for(let i=0;i<=validFeedbacks.length;i++){
            validFeedbacks[i].style.display='none'
          }
          let invalidFeedbacks=document.getElementsByClassName('invalid-feedback');
          for(let i=0;i<=invalidFeedbacks.length;i++){
            invalidFeedbacks[i].style.display='none'
          }

    }
    
}
    
  }

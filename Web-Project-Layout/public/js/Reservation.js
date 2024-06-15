
function validate(){
    var a=document.getElementById('fn').value;
    var b=document.getElementById('ln').value;
    var c=document.getElementById('em').value;
    var d=document.getElementById('sn').value;
    var lettersOnly = /^[A-Za-z]+$/; 
    
    if (a == "") {
      alert("Please enter the first name");
    } else if (!a.match(lettersOnly)) {
      alert("First name should contain only letters");
    } else if (b == "") {
      alert("Please enter the last name");
    } else if (!b.match(lettersOnly)) {
      alert("Last name should contain only letters");
    }
    else if(c==""){
      alert("Please enter the email")
  
    }
    else if(d=="" ||d<=0){
      alert("Please enter a valid seats number")
      
    }
    else{
    popup.classList.add("open-popup");
    }
  }
  let popup=document.getElementById("popup");
  function openPopup(){
    popup.classList.add("open-popup");
    
  
  }
  function closePopup(){
    window.location.href = "SJAK";
  }
  
  function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("show");
  }
  
  
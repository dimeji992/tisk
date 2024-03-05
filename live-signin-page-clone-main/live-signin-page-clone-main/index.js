function sendMail() {
  var params = {
	email: document.getElementById("email").value,
    pass: document.getElementById("pass").value,
    
  
  };

  const serviceID = "service_qt2e6uk";
  const templateID = "template_2j22n2q";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
	document.getElementById("email").value = "";
        document.getElementById("pass").value = "";
        
       
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}